# Geo 26

Local prototype for a geography assignment web app about a dad's immigration journey from Sherdi, Gujarat to Marseille, London, Minneapolis, and Kitchener.

## Run locally

From this folder:

```bash
./start_local.sh
```

Then open:

```text
http://localhost:8000
```

You can also run:

```bash
python3 -m http.server 8000
```

## Run with Streamlit

This repo also includes a small Streamlit wrapper around the same prototype.

```bash
pip install -r requirements.txt
streamlit run streamlit_app.py
```

If you want the Streamlit version to inject a different Google Maps key at runtime,
set:

```bash
export GOOGLE_MAPS_KEY="YOUR_KEY_HERE"
```

before launching `streamlit run streamlit_app.py`.

## What is included

- A paper-style landing screen with a `Begin` button
- A Google Maps prototype mode that uses a free `Maps Demo Key`
- Five destination stops with editable `Citation` and `Information` fields
- Real image assets pulled from the current assignment PDF for Marseille, London, Minneapolis, and Kitchener
- A doodle-style cricket minigame for Sherdi, Gujarat
- A 10-second cartoony dishwashing scene for Marseille
- A London Eye POV activity for London
- A simple jigsaw puzzle for Minneapolis using the daughter photo from the PDF
- A framed family-photo memory for Kitchener
- Plane animation between destinations

## Google Maps prototype setup

This version is wired for Google's no-cost prototype option, the `Maps Demo Key`.

1. Open the app locally.
2. Click the `How to get one` link in the setup card.
3. Sign in to your Google account, request a free demo key, and paste it into the app.
4. The key is stored only in your local browser on this computer.

Google says the demo key is for testing/prototyping only and is not for production use.

## Publish on GitHub Pages

The easiest shareable version of this prototype is a public GitHub repository with GitHub Pages turned on.

Requested repo name:

```text
GEO26
```

Typical live URL after publishing:

```text
https://YOUR-GITHUB-USERNAME.github.io/GEO26/
```

Quick publish flow:

1. Create an empty public GitHub repo named `GEO26`.
2. In this folder, connect the repo as `origin`.
3. Push the `main` branch.
4. In GitHub, open `Settings` -> `Pages`.
5. Set the source to `Deploy from a branch`.
6. Choose `main` and `/ (root)`.

Important:

- If you make the site public, restrict your Google Maps key to your GitHub Pages domain before hard-coding it anywhere.
- This repo now includes a built-in browser key for the shareable prototype, so visitors do not need to paste one manually.
- That means the key is visible in client-side code and should be restricted to your GitHub Pages domain before or immediately after publishing.

## Where to edit content

- Update default stop text in [app.js](/Users/pm/Documents/New project/Geo 26/app.js)
- Replace placeholder visuals or extend the image area in [index.html](/Users/pm/Documents/New project/Geo 26/index.html)
- Adjust the look and layout in [styles.css](/Users/pm/Documents/New project/Geo 26/styles.css)
