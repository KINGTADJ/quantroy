"""
Generate UNIQUE 3D assets for each page
"""
from rembg import remove
from PIL import Image
import requests
from io import BytesIO
import os
import time

OUTPUT_DIR = "public/images/page-assets"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def generate_and_remove_bg(prompt, filename, size=768):
    """Generate image via Pollinations and remove background"""
    full_prompt = f"{prompt}, 3D render, glossy metallic finish, professional quality, isolated object, studio lighting, high detail, emerald green and gold color scheme"
    
    url = f"https://image.pollinations.ai/prompt/{requests.utils.quote(full_prompt)}?width={size}&height={size}&nologo=true"
    
    print(f"Generating: {filename}...")
    try:
        response = requests.get(url, timeout=120)
        if response.status_code == 200:
            # Remove background
            output_data = remove(response.content)
            
            output_path = os.path.join(OUTPUT_DIR, filename)
            with open(output_path, 'wb') as f:
                f.write(output_data)
            print(f"  [OK] Saved: {output_path}")
            return True
    except Exception as e:
        print(f"  [FAIL] {e}")
    return False

# UNIQUE assets for each page
assets = [
    # About Page
    ("3D globe earth planet with glowing network connections, cyber globe, digital world", "about-globe.png"),
    ("3D handshake business partnership, two hands shaking, deal agreement symbol", "about-handshake.png"),
    ("3D trophy cup award golden, achievement success prize", "about-trophy.png"),
    
    # Strategies Page  
    ("3D candlestick trading chart green bars going up, stock market graph 3D", "strategies-chart.png"),
    ("3D golden bull statue, stock market bull symbol, finance bull", "strategies-bull.png"),
    ("3D target with arrow bullseye, precision goal symbol", "strategies-target.png"),
    
    # Affiliates Page
    ("3D gift box with ribbon bow, present package emerald green gold", "affiliates-gift.png"),
    ("3D megaphone loudspeaker announcement, marketing promotion horn", "affiliates-megaphone.png"),
    ("3D percentage sign % golden, discount rate symbol 3D", "affiliates-percent.png"),
    
    # Login/Register Pages
    ("3D padlock security lock golden, cyber security protection", "auth-lock.png"),
    ("3D golden key ornate, access key unlock symbol", "auth-key.png"),
    ("3D shield with checkmark verified, security shield badge", "auth-shield.png"),
    
    # Legal Pages (Privacy/Terms)
    ("3D document paper with seal, legal contract certificate", "legal-document.png"),
    ("3D scales of justice balance, law fairness symbol golden", "legal-scales.png"),
]

print("Generating UNIQUE 3D Assets for Each Page")
print("=" * 50)

for prompt, filename in assets:
    generate_and_remove_bg(prompt, filename)
    time.sleep(2)  # Rate limiting

print("\nAll assets generated!")
print(f"Output: {OUTPUT_DIR}")
