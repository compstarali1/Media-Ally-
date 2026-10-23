# Ally Player

A dark, frosted-glass photo and video viewer. Files stay on your device and are only read when you open them.

## Features
- Open a folder (desktop) or add files (phone and desktop)
- All / Images / Videos tabs with counts
- Video thumbnails in the grid and as the poster when a video is selected
- Play/pause, ⏮ / ⏭ previous and next, −10 / +10 skip, seek bar, 1× speed cycle
- Next video plays automatically when one finishes
- In fullscreen, controls fade out while playing and return on movement or tap
- Rotate (⟲ ⟳ and Rotate), Fit 16:9 / Stretch, fullscreen
- Keyboard: Space play · ← → navigate · M mute · E expand · F fullscreen · R rotate · S stretch

## Publish on GitHub Pages
1. Create a new repo (e.g. `Playo` or `ally-player`) and upload every file in this folder, keeping the folder structure.
2. Go to **Settings → Pages**, set Source to **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
3. Your app will be live at `https://<your-username>.github.io/<repo-name>/`.

## Build the Android APK
1. Open **https://www.pwabuilder.com**, paste your GitHub Pages URL, and click **Start**.
2. Check that the Manifest and Service Worker sections pass.
3. Click **Package for stores → Android**, keep the defaults, and set the package ID (for example `com.ally.player`).
4. Download the ZIP. It contains an `.apk` you can install directly and an `.aab` for Google Play.

## Notes
- "Open folder" works on desktop browsers. On Android, use "Add files".
- Replace `icons/icon-192.png` and `icons/icon-512.png` with your own artwork at the same sizes to change the app icon.

## Build the APK automatically with GitHub Actions
1. In your repo go to **Settings → Secrets and variables → Actions → New repository secret** and add:
   - `KEYSTORE_PASSWORD`: any password you choose (keep it safe).
   - `KEYSTORE_BASE64` (optional, recommended): your signing key, so future builds can update the installed app. Create it once on your computer with:
     `keytool -genkeypair -v -keystore android.keystore -alias android -keyalg RSA -keysize 2048 -validity 10000`
     then encode it with `base64 -w0 android.keystore` (Mac: `base64 -i android.keystore`) and paste the output as the secret.
2. Go to the **Actions** tab, choose **Build Android APK**, and click **Run workflow**.
3. When it finishes (about 5–10 minutes), open the run and download the `ally-player-android` artifact. It contains the `.apk` to install and the `.aab` for Google Play.
