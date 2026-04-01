<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/eec34990-a79f-4ff6-a061-c1835a75c72a

## Project Structure

```text
.
|- docs/
|  |- README.md
|  |- USER MANUAL.pdf
|- index.html
|- metadata.json
|- mobile-fix.css
|- package.json
|- tsconfig.json
|- vite.config.ts
|- .gitignore
```

- `docs/` is now the canonical documentation folder.
- `USER MANUAL.pdf` is temporarily still in root due to an active file lock on Windows.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
