# App Store Release Plan

## Overview

Strategy for releasing the Thai Learning App on the Apple App Store (iOS) and Google Play Store (Android), including initial setup, submission, and ongoing maintenance. The app is currently a React + TypeScript + Vite web app and needs to be wrapped in a native shell for distribution.

---

## 1. Native Wrapper: Options Analysis

The app needs to run as a native app on iOS and Android. Three approaches are viable:

### Option A: Capacitor (Ionic)

**How it works:** Wraps the existing React web app in a native WebView. The web code runs as-is. Native functionality (camera, push notifications, in-app purchases) is accessed through Capacitor plugins.

| Pros | Cons |
|------|------|
| Minimal code changes to existing React app | Performance limited by WebView (fine for this app's use case) |
| Single codebase for web + iOS + Android | UI doesn't use native platform components (but Tailwind already looks good) |
| Large plugin ecosystem (Firebase, RevenueCat, etc.) | Some plugins may lag behind native SDK updates |
| Fast time-to-market | App size slightly larger than pure native |
| Web app can still be deployed standalone | Apple reviewers sometimes scrutinize WebView-based apps |

**Best for:** Apps that are content-heavy and interaction-light (exactly what a learning app is).

### Option B: React Native (Rewrite)

**How it works:** Rewrite all UI components using React Native primitives (`<View>`, `<Text>`, `<TouchableOpacity>` instead of HTML/CSS). Business logic (lesson data, SRS engine) can be reused.

| Pros | Cons |
|------|------|
| Truly native UI components | Requires rewriting all 20+ components |
| Better performance for complex animations | Tailwind CSS not directly usable (need NativeWind or StyleSheet) |
| Strong community and ecosystem | Two codebases to maintain (web + native) or abandon web |
| Preferred by some App Store reviewers | Longer time-to-market (weeks to months of rewrite) |

**Best for:** Apps requiring complex native interactions, animations, or platform-specific UX.

### Option C: Progressive Web App (PWA)

**How it works:** Add a web manifest and service worker. Users "install" from the browser. No app store listing.

| Pros | Cons |
|------|------|
| No app store fees or review process | No App Store / Play Store discoverability |
| No native wrapper needed | iOS severely limits PWA capabilities (no push notifications, limited storage) |
| Instant updates (no store review delay) | Users must know to "Add to Home Screen" |
| Works on all platforms | Cannot use in-app purchases (needed for payment model) |

**Best for:** Tools and utilities where app store presence is not needed. Not viable here because IAP is required and store presence is desired.

### Recommendation

**Capacitor is the best fit.** The app is content-focused (text, cards, quizzes), does not require complex native animations, and already has a working React + Tailwind UI. Capacitor preserves all existing code while adding native distribution. The learning app use case (read content, tap buttons, see results) runs perfectly in a WebView.

If App Store reviewers reject the app for being "a website in a wrapper" (rare but possible), the mitigation is to add native-feeling features: haptic feedback on correct answers, native splash screen, proper status bar handling, and push notifications for SRS review reminders. These are all available as Capacitor plugins.

---

## 2. Developer Account Setup

### Apple Developer Program

- **Cost:** $99/year (USD)
- **Enrollment:** https://developer.apple.com/programs/enroll/
- **Requirements:** Apple ID, legal name/entity, D-U-N-S number (if enrolling as organization)
- **Timeline:** Individual accounts are typically approved within 48 hours. Organization accounts can take 1-2 weeks due to D-U-N-S verification.
- **Note:** Enrollment as an individual is simpler and sufficient for a solo app. Organization enrollment is needed only if you want to publish under a company name.

### Google Play Developer Account

- **Cost:** $25 one-time registration fee
- **Enrollment:** https://play.google.com/console/signup
- **Requirements:** Google account, payment method for the fee
- **Timeline:** Account is active within a few hours of payment.
- **Note:** New individual developer accounts on Google Play are subject to testing requirements -- you must run a closed test with 20+ testers for 14+ days before you can request production access. Plan for this lead time.

---

## 3. Capacitor Setup

### Initial Setup Steps

1. Install Capacitor in the existing project:
   ```bash
   npm install @capacitor/core @capacitor/cli
   npx cap init "Thai Learning App" com.example.thailearning
   ```
   (Replace `com.example.thailearning` with your actual bundle ID.)

2. Add iOS and Android platforms:
   ```bash
   npm install @capacitor/ios @capacitor/android
   npx cap add ios
   npx cap add android
   ```

3. Build the web app and sync to native projects:
   ```bash
   npm run build
   npx cap sync
   ```

4. Open native projects in their IDEs:
   ```bash
   npx cap open ios      # Opens Xcode
   npx cap open android  # Opens Android Studio
   ```

### Required Capacitor Plugins

| Plugin | Purpose |
|--------|---------|
| `@capacitor/splash-screen` | Native splash screen on launch |
| `@capacitor/status-bar` | Control status bar appearance |
| `@capacitor/keyboard` | Handle keyboard behavior in WebView |
| `@capacitor/haptics` | Haptic feedback on interactions |
| `@capacitor/push-notifications` | SRS review reminders (future) |
| `@capacitor-firebase/authentication` | Native social sign-in |
| `@revenuecat/purchases-capacitor` | In-app purchases |

### Platform-Specific Configuration

**iOS (in `ios/App/App/Info.plist` and Xcode):**
- Set deployment target to iOS 15.0+ (covers 95%+ of active devices)
- Configure URL schemes for Google/Apple Sign-In
- Add `NSFaceIDUsageDescription` if using biometric auth
- Set `UIRequiresFullScreen = YES` (not designed for iPad split view, unless you add support)

**Android (in `android/app/build.gradle` and AndroidManifest.xml):**
- Set `minSdkVersion 24` (Android 7.0+, covers 95%+ of active devices)
- Set `targetSdkVersion 34` (required by Google Play for new apps)
- Configure intent filters for sign-in callbacks
- Enable `usesCleartextTraffic = false` (HTTPS only)

---

## 4. App Store Assets

Both stores require specific assets before submission. Prepare these in advance.

### App Icon

- **iOS:** 1024x1024 px PNG (no alpha/transparency). Xcode generates all smaller sizes from this.
- **Android:** 512x512 px PNG. Adaptive icon with foreground (108x108 dp safe zone) and background layers.
- **Design considerations:** Should be recognizable at small sizes. Suggest a simple design featuring Thai script (e.g., the letter ก) with the app's color palette.

### Screenshots

| Store | Sizes Required |
|-------|---------------|
| Apple (iPhone) | 6.7" (1290x2796), 6.5" (1284x2778), 5.5" (1242x2208) |
| Apple (iPad, if supported) | 12.9" (2048x2732) |
| Google Play | Min 2 screenshots, 16:9 or 9:16, min 320px, max 3840px |

- **Recommended: 5-8 screenshots** per store showing: home screen with lessons, a lesson in progress, an exercise/quiz, the SRS review screen, and the paywall.
- Screenshots can include device frames and marketing text overlays.
- Tools: Fastlane `snapshot` for automated screenshots, or manual capture from simulators.

### Store Listing Text

**App Name:** TBD (to be decided -- keep under 30 characters for both stores)

**Subtitle (iOS) / Short Description (Android):** Max 30 / 80 characters.
Example: "Learn to read Thai script step by step"

**Description:** Max 4000 characters. Should cover:
- What the app teaches (Thai reading, from zero to conversational)
- How it teaches (30 structured lessons, spaced repetition)
- Free vs. premium content
- No prior knowledge required

**Keywords (iOS):** Max 100 characters, comma-separated.
Example: "Thai,learn Thai,Thai alphabet,Thai script,Thai language,read Thai,Thai lessons"

**Category:**
- Primary: Education
- Secondary: Reference

**Content Rating:**
- Both stores require a content rating questionnaire. This app has no violence, no user-generated content, no mature themes. Expected rating: 4+ (iOS) / Everyone (Android).

### Privacy Policy

Both stores require a privacy policy URL. The policy must cover:
- What data is collected (email, display name, lesson progress)
- How data is stored (Firebase/Firestore)
- Third-party services (Firebase, RevenueCat, Google/Apple sign-in)
- Data retention and deletion (users can request account deletion -- required by both stores)
- No data sold to third parties

Host the privacy policy as a static page (e.g., GitHub Pages, or a `/privacy` route in the app).

### Account Deletion Requirement

Both Apple and Google now require that apps offering account creation must also allow account deletion from within the app. Implementation:
- Add "Delete Account" option in the profile/settings screen.
- Deletes Firestore user data + Firebase Auth account.
- Cancels any active subscriptions (not applicable here since it's a one-time purchase, but good practice).
- Show a confirmation dialog with clear warnings about data loss.

---

## 5. iOS Submission Process

### Pre-Submission Checklist

- [ ] Apple Developer account active
- [ ] Bundle ID registered in Apple Developer portal
- [ ] App Store Connect listing created with all metadata
- [ ] Signing certificates and provisioning profiles configured (or use automatic signing in Xcode)
- [ ] App icon and screenshots uploaded
- [ ] Privacy policy URL set
- [ ] In-app purchase product created and submitted for review in App Store Connect
- [ ] TestFlight build uploaded and tested

### Build and Upload

```bash
npm run build && npx cap sync
# Open Xcode
npx cap open ios
# In Xcode: Product -> Archive -> Distribute App -> App Store Connect
```

Or use Fastlane for automated builds:
```bash
cd ios/App && fastlane release
```

### TestFlight Testing

Before submitting for review:
1. Upload a build to App Store Connect.
2. Add internal testers (up to 25 from the development team, no review needed).
3. Add external testers (up to 10,000, requires brief Apple review of the first build).
4. Collect feedback, fix issues, upload new builds as needed.
5. Use the final stable TestFlight build for the App Store submission.

### App Store Review

- **Review time:** Typically 24-48 hours, occasionally longer.
- **Common rejection reasons for WebView apps:**
  - "Minimum functionality" -- app seems like a wrapped website. Mitigation: native splash screen, haptic feedback, proper navigation (no browser chrome), offline support.
  - "In-app purchase issues" -- purchase flow not working or "Restore Purchases" missing. Mitigation: thorough testing, restore button visible in UI.
  - "Incomplete metadata" -- missing screenshots, wrong category, unclear description. Mitigation: complete all fields before submission.
  - "Privacy concerns" -- missing privacy policy or data collection not declared. Mitigation: accurate App Store privacy labels + privacy policy.
- **If rejected:** Apple provides specific reasons. Fix the issues and resubmit. Rejections do not penalize your account.

### App Store Privacy Labels

In App Store Connect, declare:
- **Data linked to you:** Email address, user ID, purchase history
- **Data used for tracking:** None
- **Data used for app functionality:** Email, user ID, purchase history

---

## 6. Google Play Submission Process

### Pre-Submission Checklist

- [ ] Google Play Developer account active
- [ ] App listing created in Google Play Console with all metadata
- [ ] App signing key generated (use Google Play App Signing -- recommended)
- [ ] Screenshots and feature graphic (1024x500) uploaded
- [ ] Privacy policy URL set
- [ ] In-app product created in Google Play Console
- [ ] Closed testing track completed (20+ testers, 14+ days for new accounts)

### Build and Upload

```bash
npm run build && npx cap sync
# Open Android Studio
npx cap open android
# Build -> Generate Signed Bundle (AAB format, required by Google Play)
```

Upload the `.aab` file to Google Play Console.

### Testing Tracks

Google Play has three testing tracks before production:

1. **Internal testing** (up to 100 testers, no review needed, instant availability)
2. **Closed testing** (invite-only, requires review, 14-day requirement for new accounts)
3. **Open testing** (public opt-in, requires review)

**New account requirement:** Google Play now requires new individual developer accounts to:
- Run a closed test with at least 20 opt-in testers
- Maintain the test for at least 14 consecutive days
- Only then can you request production access

Plan for this 2+ week lead time.

### Google Play Review

- **Review time:** Typically a few hours to 3 days.
- **Common issues:**
  - "App does not meet quality standards" -- WebView performance, crashes, ANRs. Mitigation: test on low-end Android devices, optimize WebView settings.
  - "Payment policy violation" -- using non-Google payment for digital goods. Mitigation: RevenueCat handles Google Play Billing compliance.
  - "Data safety section incomplete" -- must declare all data collection. Mitigation: fill out data safety form accurately.

### Data Safety Section

In Google Play Console, declare:
- **Data collected:** Email address, user IDs, purchase history
- **Data shared:** None
- **Data security:** Encrypted in transit (HTTPS), can be deleted on request
- **Is data required?** No (app works without sign-in for free content)

---

## 7. Ongoing Maintenance

### Update Strategy

- **Web code updates:** Change the React code, run `npm run build && npx cap sync`, build new native binaries, submit to stores.
- **Native code updates (rare):** Only needed when updating Capacitor plugins or platform SDK requirements.
- **Review times:** Plan 1-3 days for each update to clear review on both platforms.
- **Versioning:** Use semantic versioning (e.g., 1.0.0, 1.1.0, 1.2.0). Both stores require version + build number to increase with each submission.

### Monitoring

| What | Tool |
|------|------|
| Crash reporting | Firebase Crashlytics (free, integrates with Capacitor) |
| Analytics | Firebase Analytics (free) -- track lesson completion rates, paywall conversion, drop-off points |
| Revenue | RevenueCat dashboard -- purchases, refunds, revenue per platform |
| Store reviews | App Store Connect + Google Play Console -- respond to reviews promptly |
| Performance | Firebase Performance Monitoring -- WebView load times, API latency |

### App Store Optimization (ASO)

ASO is the process of improving an app's visibility in store search results.

**Ongoing ASO tasks:**

1. **Keyword optimization:** Monitor search rankings for target keywords ("learn Thai", "Thai alphabet", "Thai language app"). Update keywords/description quarterly based on what's converting.
2. **Screenshot updates:** Refresh screenshots when the UI changes or when A/B testing indicates better-performing variants. Google Play supports A/B testing store listings natively.
3. **Review management:** Respond to all negative reviews (shows active development). Politely ask satisfied users to leave reviews (in-app prompt after completing a milestone, e.g., finishing R10).
4. **Localization:** Localize the store listing (title, description, screenshots) into Thai, German, Japanese, Korean, and Chinese -- these are markets with high interest in Thai language learning. The app content itself remains English-to-Thai.
5. **Feature graphic / promotional art:** Keep updated. Google Play's feature graphic (1024x500) appears prominently in search results.

### Rating Prompts

Use a smart review prompt strategy:
- Prompt only after a positive moment (e.g., completing a lesson, achieving a streak).
- Never prompt during a lesson or after a wrong answer.
- Use the native `StoreKit.requestReview()` (iOS) and `ReviewManager` (Android) APIs via Capacitor plugin.
- Respect the platform limits (iOS shows the prompt max 3 times per year).

### Compliance and Policy Updates

- **Annual Apple Developer renewal:** $99/year. Set a calendar reminder.
- **SDK updates:** Apple and Google periodically require apps to target newer SDK versions. Check annually and update Capacitor + native project settings.
- **Privacy regulation changes:** Monitor for GDPR, CCPA, or new privacy laws that may require changes to the privacy policy or data handling.
- **App Store guideline changes:** Both Apple and Google update their guidelines. Subscribe to developer newsletters and review changelogs for changes that affect WebView-based or education apps.

---

## 8. Timeline Estimate

This is a rough ordering, not a time estimate. Actual duration depends on development capacity.

### Phase 1: Setup
1. Register Apple Developer and Google Play Developer accounts.
2. Install Capacitor, add iOS and Android platforms.
3. Configure build tooling (Xcode signing, Android signing key).
4. Verify the app runs correctly in native shells on both platforms.

### Phase 2: Store Assets
5. Design app icon.
6. Capture screenshots on required device sizes.
7. Write store listing copy (name, description, keywords).
8. Draft and host privacy policy.

### Phase 3: Testing
9. Upload builds to TestFlight (iOS) and internal testing (Android).
10. Start Google Play closed testing with 20+ testers (14-day requirement).
11. Fix any platform-specific issues found during testing.
12. Integrate Firebase Crashlytics for crash reporting.

### Phase 4: Submission
13. Submit iOS app for App Store review.
14. Request Google Play production access after closed testing period.
15. Submit Android app for Google Play review.
16. Address any reviewer feedback and resubmit if needed.

### Phase 5: Post-Launch
17. Monitor crash reports and store reviews.
18. Implement ASO improvements based on initial search data.
19. Plan first content update (timed 2-4 weeks after launch to boost ranking).

---

## 9. Open Questions

- **App name and branding:** What should the app be called in the stores? This affects the bundle ID, which is hard to change later.
- **Individual vs. organization enrollment:** Should the Apple Developer account be personal or under a company/entity name?
- **iPad support:** Should the app be optimized for iPad, or iPhone-only? (Capacitor apps can run on iPad in compatibility mode without extra work, but dedicated iPad layout would need design work.)
- **Target markets:** Should the app be available worldwide, or limited to specific countries initially?
- **Localized store listings:** Which languages should the store listing be translated into for launch?
- **Marketing website:** Should there be a landing page / marketing site for the app beyond the store listings?
