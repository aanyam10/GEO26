from __future__ import annotations

import base64
import os
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components


ROOT = Path(__file__).parent


def to_data_uri(path: Path) -> str:
    suffix = path.suffix.lower()
    mime_types = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".svg": "image/svg+xml",
        ".webp": "image/webp",
    }
    mime_type = mime_types.get(suffix, "application/octet-stream")
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime_type};base64,{encoded}"


def inline_assets(content: str) -> str:
    assets_dir = ROOT / "assets"
    for asset_path in sorted(assets_dir.iterdir()):
        if asset_path.is_file():
            content = content.replace(
                f"assets/{asset_path.name}",
                to_data_uri(asset_path),
            )
    return content


def build_html() -> str:
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    css = (ROOT / "styles.css").read_text(encoding="utf-8")
    app_js = (ROOT / "app.js").read_text(encoding="utf-8")
    default_config_js = (ROOT / "config.js").read_text(encoding="utf-8")

    html = inline_assets(html)
    app_js = inline_assets(app_js)

    streamlit_key = st.secrets.get("GOOGLE_MAPS_KEY", "").strip()
    env_key = os.environ.get("GOOGLE_MAPS_KEY", "").strip()
    maps_key = streamlit_key or env_key
    config_js = (
        f'window.GEO26_DEFAULT_MAPS_KEY = "{maps_key}";'
        if maps_key
        else default_config_js
    )

    html = html.replace(
        '<link rel="stylesheet" href="styles.css?v=gm-demo-11" />',
        f"<style>{css}</style>",
    )
    html = html.replace(
        '<script src="config.js?v=gm-demo-1"></script>',
        f"<script>{config_js.replace('</script>', '<\\/script>')}</script>",
    )
    html = html.replace(
        '<script src="app.js?v=gm-demo-12"></script>',
        f"<script>{app_js.replace('</script>', '<\\/script>')}</script>",
    )

    return html


st.set_page_config(page_title="Geo 26", layout="wide")

st.markdown(
    """
    <style>
      .block-container {
        padding-top: 0.45rem;
        padding-bottom: 0.5rem;
        max-width: 1400px;
      }
      [data-testid="stHeader"] {
        background: transparent;
      }
      h1 {
        margin-bottom: 0.1rem;
      }
      [data-testid="stCaptionContainer"] {
        margin-bottom: 0.45rem;
      }
    </style>
    """,
    unsafe_allow_html=True,
)

st.title("Geo 26")
st.caption("Interactive Streamlit prototype of the immigration journey map.")

components.html(build_html(), height=1560, scrolling=True)
