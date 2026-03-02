---
name: transcribe
description: Fetch and save YouTube video transcripts as markdown files. Use this skill whenever the user wants a transcript, wants to transcribe a video, wants to extract text from a YouTube video, or shares a YouTube link and asks what the video is about. Triggers include phrases like "transcribe this video", "get the transcript", "what does this video say", "pull the transcript", "save this video as text", or any request involving extracting text content from a YouTube URL -- even if the user doesn't explicitly say "transcribe."
---

# Transcribe

You are helping a user fetch transcripts from YouTube videos using the `yt-transcribe` CLI tool installed in this project. Your job is to run the tool, confirm the output, and optionally summarize or answer questions about the transcript content.

## Before you start

The `yt-transcribe` CLI tool must be available. It is installed in the project's virtual environment at `.venv/bin/yt-transcribe`. If the venv does not exist or the tool is not installed, run:

```bash
/path/to/project/.venv/bin/pip install -e /path/to/project
```

Transcripts are saved to the `transcripts/` directory by default.

## How it works

### Step 1: Extract the URL

Identify the YouTube URL from the user's message. The tool accepts these formats:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- URLs with extra query parameters (timestamps, playlist refs, etc.)

If the user provides multiple URLs, pass them all in a single command.

### Step 2: Run the tool

Run the `yt-transcribe` command using the project's virtual environment. Always quote URLs to prevent shell glob expansion of the `?` character.

```bash
/path/to/project/.venv/bin/yt-transcribe 'URL' -o /path/to/project/transcripts
```

For multiple URLs:

```bash
/path/to/project/.venv/bin/yt-transcribe 'URL1' 'URL2' 'URL3' -o /path/to/project/transcripts
```

Use `--no-timestamps` if the user asks for clean text without timestamps.

If the tool reports an error (private video, no transcript available), relay the error clearly to the user.

### Step 3: Confirm and follow up

After the tool runs successfully:

1. Tell the user the file was saved and where.
2. Read the transcript file.
3. Based on what the user asked for, do one of the following:
   - **If they just wanted the transcript:** Confirm it was saved and show the first few lines as a preview.
   - **If they asked what the video is about:** Read the full transcript and provide a concise summary of the key points.
   - **If they asked a specific question about the video:** Read the transcript and answer their question.
   - **If they want to use the content for something (blog post, tutorial, notes):** Read the transcript and help them transform it.

## Output location

All transcripts go to the `transcripts/` directory in the project root. Files are named using a sanitized version of the video title (e.g., `how-to-build-a-rag-pipeline.md`).

Each file contains:
- YAML front matter with title, channel, date, URL, and language
- The transcript body with `[HH:MM:SS]` timestamps (unless `--no-timestamps` was used)

## Important behaviors

- **Always quote URLs** in the bash command to prevent shell interpretation of `?` and `&` characters.
- **Use absolute paths** for both the tool binary and the output directory to avoid working directory issues.
- **Read the transcript after saving** if the user wants a summary or has questions -- do not make them ask separately.
- **Do not ask unnecessary questions.** If the user gives you a YouTube URL and says "transcribe this," just run the tool. Do not ask for confirmation.
- **Handle errors clearly.** If the video is private, deleted, or has no transcript, tell the user plainly. Suggest alternatives if applicable (e.g., "This video has no captions available. You could try a different video or wait for the creator to add subtitles.").
- **Multiple URLs are fine.** If the user pastes several links, process them all in one command.
