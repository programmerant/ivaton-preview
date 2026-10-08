# IVATON review preview

Static review copy of the IVATON website. Croatian, English and German pages,
logo, selected photographs and existing styles are included.

The contact form is disabled and sends no messages. Java and mail configuration
are not included. This public preview requests no search indexing, but anyone
with its URL can view it.

## Publish using GitHub Pages

1. Sign in at https://github.com/new and create a **public** repository named
   `ivaton-preview`. Leave initialization options unchecked.
2. Extract the downloaded ZIP. On the new repository page choose **uploading an
   existing file**. Drag all the CONTENTS of the extracted `ivaton-preview`
   folder (including css, images, js and the four HTML files) into the upload
   area. Do not upload the ZIP or the enclosing folder. Commit the files.
3. Open **Settings > Pages**. Under **Build and deployment**, choose
   **Deploy from a branch**, then branch **main** and folder **/ (root)**.
   Click **Save**. If your default branch has another name, select that branch.
4. Wait for the Pages deployment to finish. The Pages settings show your link.
   For account `programmerant` and repository `ivaton-preview`, it is:
   https://programmerant.github.io/ivaton-preview/
5. Check all three flags, gallery photos and phone/mobile layout before sharing.

Keep your existing `ivaton-demo` repository and local Java project unchanged.

## Language behavior

The home page uses a supported ?lang= value, then a saved choice, then the first
supported browser language, falling back to English. Flag selections are saved
when browser storage is available. Direct hr.html/en.html/de.html links open
that language. Without JavaScript the home page remains usable in English;
all three flag links still work.

## Validation

Local checks cover translation substitution, local assets, section links,
disabled forms and browser-language selection. Live GitHub publication and
visual browser review must be completed after uploading.
