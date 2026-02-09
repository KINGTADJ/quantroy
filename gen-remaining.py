"""Quick generate remaining assets"""
from rembg import remove
import requests
import os
import sys

OUTPUT_DIR = "public/images/page-assets"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def gen(prompt, filename):
    url = f"https://image.pollinations.ai/prompt/{requests.utils.quote(prompt + ', 3D render glossy metallic emerald green gold')}"
    print(f"Gen: {filename}", flush=True)
    try:
        r = requests.get(url, timeout=90)
        if r.status_code == 200:
            out = remove(r.content)
            with open(f"{OUTPUT_DIR}/{filename}", 'wb') as f:
                f.write(out)
            print(f"  OK", flush=True)
    except Exception as e:
        print(f"  FAIL: {e}", flush=True)

# Essential remaining
assets = [
    ("3D globe earth digital network", "about-globe.png"),
    ("3D target bullseye arrow", "strategies-target.png"),
    ("3D gift box present emerald", "affiliates-gift.png"),
    ("3D megaphone announcement", "affiliates-megaphone.png"),
    ("3D padlock security gold", "auth-lock.png"),
    ("3D golden key ornate", "auth-key.png"),
    ("3D shield checkmark verified", "auth-shield.png"),
    ("3D document legal seal", "legal-document.png"),
    ("3D scales justice balance gold", "legal-scales.png"),
]

for p, f in assets:
    if not os.path.exists(f"{OUTPUT_DIR}/{f}"):
        gen(p, f)
    else:
        print(f"Skip {f} exists", flush=True)

print("Done!")
