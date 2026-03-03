# Authentication & Payments Plan

## Overview

Add user authentication and a payment wall to the Thai Learning App. Users get lessons R01-R10 (10 chapters) for free. The remaining 20 chapters (R11-R30) require a one-time $2 purchase. Authentication is required to persist progress across devices and to gate premium content.

---

## 1. Authentication

### Provider: Firebase Authentication

Firebase Auth handles user identity, session management, and token refresh. It integrates natively with Firestore (for syncing user progress) and works well with Capacitor for mobile builds.

### Supported Sign-In Methods

| Method | Notes |
|--------|-------|
| Google Sign-In | Primary social login. Uses Firebase's Google provider. |
| Apple Sign-In | Required by Apple App Store if any social login is offered. Uses Firebase's Apple provider. |
| Email / Password | Fallback for users without Google/Apple accounts. Requires email verification flow. |

### Auth Flow

1. **First launch:** User sees the lesson list. They can browse and complete R01-R10 without signing in.
2. **Sign-in prompt triggers:** When the user (a) taps a premium lesson (R11-R30), (b) explicitly taps "Sign In" in the header/settings, or (c) wants to sync progress across devices.
3. **Sign-in screen:** Shows three options -- Google, Apple, Email/Password. Clean, minimal UI.
4. **Email/Password sub-flow:** Sign-up form (email + password + confirm password) with email verification. Sign-in form (email + password) with "Forgot password" link.
5. **Post-auth:** Firebase returns a user UID. App checks Firestore for existing progress and merges/migrates localStorage data.

### User Data Model (Firestore)

```
users/{uid}/
  profile: {
    displayName: string
    email: string
    createdAt: timestamp
    provider: 'google' | 'apple' | 'email'
  }
  progress: {
    // mirrors current localStorage v2 state structure
    completedLessons: string[]
    srsState: { ... }
    currentLesson: string
  }
  purchases: {
    premiumUnlocked: boolean
    purchaseDate: timestamp | null
    transactionId: string | null
    platform: 'ios' | 'android' | 'web' | null
  }
```

### localStorage Migration Strategy

The app currently persists all state in localStorage (v2 format). When a user signs in for the first time:

1. Read existing localStorage progress.
2. Check Firestore for any existing progress under this UID.
3. If Firestore is empty: upload localStorage data to Firestore.
4. If Firestore has data: merge, keeping the more advanced progress (higher lesson count, more SRS entries).
5. After merge, Firestore becomes the source of truth. localStorage acts as an offline cache that syncs on reconnect.

### Offline Support

- Firebase Auth persists sessions locally. Users remain signed in across app restarts.
- Firestore offline persistence is enabled by default on mobile. Progress updates queue locally and sync when connectivity returns.
- Free lessons (R01-R10) always work offline, signed in or not.
- Premium lessons work offline if the user has already purchased and the purchase status is cached locally.

---

## 2. Payments

### Model: One-Time Purchase, $2

- Lessons R01-R10: free for all users (no sign-in required).
- Lessons R11-R30: require sign-in + purchase.
- Single non-consumable in-app purchase: "Unlock All Lessons" for $2 (or local currency equivalent).
- Once purchased, access is permanent and tied to the user's account.

### Provider: RevenueCat

RevenueCat wraps Apple StoreKit and Google Play Billing into a unified API. It handles:

- Receipt validation (server-side, no custom backend needed)
- Cross-platform purchase restoration (buy on iOS, restore on Android)
- Entitlement management ("premium" entitlement = lessons R11-R30)
- Analytics (conversion rates, revenue, churn for future subscription plans)

### RevenueCat Setup

1. **Create RevenueCat project** at app.revenuecat.com.
2. **Connect store credentials:** Apple App Store Connect API key + Google Play service account JSON.
3. **Define product:** One non-consumable product with identifier `thai_premium_unlock`.
4. **Define entitlement:** `premium` entitlement granted by `thai_premium_unlock`.
5. **Define offering:** Single offering containing the one product.

### Purchase Flow

1. User taps a premium lesson (R11+) or taps "Unlock All Lessons" button.
2. If not signed in: redirect to sign-in first, then return to purchase flow.
3. App calls RevenueCat SDK to present the native purchase dialog (Apple/Google).
4. User confirms purchase via Face ID / fingerprint / password.
5. RevenueCat validates the receipt and grants the `premium` entitlement.
6. App updates Firestore `purchases.premiumUnlocked = true`.
7. User is redirected to the lesson they originally tapped.

### Purchase Restoration

- "Restore Purchases" button in settings/profile screen.
- Calls RevenueCat's restore method, which checks Apple/Google receipts.
- If a valid purchase is found, re-grants the `premium` entitlement.
- Required by Apple App Store review guidelines.

### Paywall UI

The paywall appears when a non-premium user taps a locked lesson. It should include:

- A clear value proposition: "Unlock 20 more lessons covering tones, sentences, and real-world dialogues."
- The price: "$2 -- one-time purchase, forever."
- Skill previews from the locked lessons (reuse the skill preview system from the content improvement plan).
- Two buttons: "Unlock All Lessons" (primary CTA) and "Restore Purchase" (secondary link).
- A dismissal option to go back to the free content.

### Web Payments (Future Consideration)

If the app is also served as a web app (not through app stores), Apple/Google IAP does not apply. For web:

- Stripe Checkout could handle one-time $2 payments.
- RevenueCat has a web SDK (RevenueCat Billing) that can unify web + mobile entitlements.
- This is out of scope for the initial release but worth noting for future planning.

---

## 3. Technical Architecture

### New Dependencies

| Package | Purpose |
|---------|---------|
| `firebase` | Firebase JS SDK (Auth + Firestore) |
| `@capacitor-firebase/authentication` | Native Google/Apple sign-in on mobile |
| `@revenuecat/purchases-capacitor` | RevenueCat Capacitor plugin for IAP |

### New Source Files

```
src/
  auth/
    firebaseConfig.ts        -- Firebase project config + initialization
    authService.ts           -- Sign in, sign out, onAuthStateChanged listener
    AuthContext.tsx           -- React context providing current user state
    SignInScreen.tsx          -- Sign-in UI with Google/Apple/Email buttons
    ProtectedRoute.tsx       -- Route wrapper that redirects to sign-in if needed
  payments/
    revenueCatConfig.ts      -- RevenueCat SDK initialization
    purchaseService.ts       -- Check entitlements, trigger purchase, restore
    PaywallScreen.tsx         -- Paywall UI shown for locked lessons
    PurchaseContext.tsx       -- React context providing premium status
  engine/
    syncService.ts           -- Bidirectional sync between localStorage and Firestore
```

### Modified Source Files

| File | Change |
|------|--------|
| `src/App.tsx` | Wrap app in `AuthProvider` and `PurchaseProvider`. Add sign-in route. |
| `src/engine/lessonManager.ts` | Check premium entitlement before allowing access to R11-R30. |
| `src/engine/storage.ts` | Add Firestore read/write alongside localStorage. |
| `src/components/lesson/RichLessonScreen.tsx` | Redirect to paywall if lesson is locked. |
| `src/components/home/HomeScreen.tsx` | Show lock icon on premium lessons. Add sign-in button in header. |

### Auth State Machine

```
ANONYMOUS
  |-- user taps "Sign In" or premium lesson --> SIGNING_IN

SIGNING_IN
  |-- auth succeeds --> AUTHENTICATED
  |-- auth fails --> ANONYMOUS (show error)

AUTHENTICATED
  |-- user taps "Sign Out" --> ANONYMOUS
  |-- token expires --> auto-refresh (Firebase handles this)
```

### Premium State Machine

```
FREE_USER (default)
  |-- user completes purchase --> PREMIUM_USER
  |-- user restores purchase --> PREMIUM_USER

PREMIUM_USER
  |-- purchase verified by RevenueCat --> access R01-R30
```

---

## 4. Security Considerations

- **Never trust the client for purchase validation.** RevenueCat handles server-side receipt validation. The app checks entitlements via RevenueCat SDK, not by reading a local flag.
- **Firestore security rules:** Users can only read/write their own document (`users/{uid}`). Purchase status should be writable only by RevenueCat webhooks (via Cloud Function) or validated client writes.
- **API keys:** Firebase config is public (by design -- security comes from Firestore rules). RevenueCat public API key is safe to embed. Never embed server-side RevenueCat secret key.
- **Email enumeration:** Firebase Auth's email/password flow should not reveal whether an email is already registered (configure in Firebase console).

---

## 5. Implementation Priority

### Phase 1: Firebase Setup + Email/Password Auth
1. Create Firebase project, enable Auth + Firestore.
2. Add `firebase` package, create config and auth service.
3. Build sign-in/sign-up screens (email/password only first).
4. Add `AuthContext` and wire into App.
5. Implement Firestore progress sync.

### Phase 2: Social Login
6. Enable Google Sign-In in Firebase console + add Capacitor plugin.
7. Enable Apple Sign-In in Firebase console + configure Apple Developer account.
8. Update sign-in screen with social buttons.
9. Test on iOS and Android (Capacitor builds).

### Phase 3: Payments
10. Create RevenueCat account, configure products in App Store Connect and Google Play Console.
11. Add RevenueCat Capacitor plugin, initialize SDK.
12. Build paywall UI.
13. Implement purchase flow and entitlement checking.
14. Add "Restore Purchases" in settings.
15. Lock R11-R30 behind premium check.

### Phase 4: Polish
16. Handle edge cases: sign-in during lesson, offline purchase attempts, account deletion.
17. Add profile/settings screen (display name, sign-out, restore purchases).
18. Test full flow end-to-end on both platforms.
19. Submit for App Store review (see separate release plan).

---

## 6. Cost Estimates

| Service | Free Tier | Expected Cost |
|---------|-----------|---------------|
| Firebase Auth | 10K monthly active users free | $0 for a long time |
| Firestore | 1GB storage, 50K reads/day free | $0 for a long time |
| RevenueCat | Free up to $2.5K monthly tracked revenue | $0 until significant scale |
| Apple Developer | -- | $99/year |
| Google Play Developer | -- | $25 one-time |
| Apple commission | -- | 15% of IAP revenue (Small Business Program) |
| Google commission | -- | 15% of first $1M/year |

At $2 per purchase with 15% commission, net revenue per sale is $1.70.

---

## 7. Open Questions

- Should anonymous users' free-tier progress be preserved if they never sign in and reinstall the app? (Currently localStorage is lost on reinstall/clear data.)
- Should there be a free trial of premium content (e.g., R11 is free as a teaser)?
- Do we want a referral or promo code system for discounted/free premium access?
- Should the web version have its own payment flow (Stripe), or is the web version always free / app-store-only for premium?
