"""
Generate 3D-style assets with TRUE transparent backgrounds
for Quantroy landing page
"""
import requests
from PIL import Image
from io import BytesIO
import os

OUTPUT_DIR = "public/images/3d-transparent"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Use Pollinations AI to generate images with transparent backgrounds
def generate_asset(prompt, filename, size=512):
    """Generate asset image via Pollinations"""
    # Enhanced prompt for 3D style with transparency
    full_prompt = f"{prompt}, 3D render, glossy, professional quality, isolated object, no background, pure transparent background, PNG with alpha channel, product visualization, studio lighting, high detail"
    
    url = f"https://image.pollinations.ai/prompt/{requests.utils.quote(full_prompt)}?width={size}&height={size}&nologo=true&seed=42"
    
    print(f"Generating: {filename}...")
    response = requests.get(url, timeout=120)
    
    if response.status_code == 200:
        img = Image.open(BytesIO(response.content))
        
        # Convert to RGBA for transparency support
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Save with transparency
        output_path = os.path.join(OUTPUT_DIR, filename)
        img.save(output_path, 'PNG')
        print(f"  [OK] Saved: {output_path}")
        return True
    else:
        print(f"  [FAIL] Failed: {response.status_code}")
        return False

# Asset definitions - bigger, more detailed prompts
assets = [
    ("3D premium gold credit card, metallic green and gold gradient, luxury bank card floating, emerald accents", "premium-card.png"),
    ("3D stack of cryptocurrency coins, Bitcoin Ethereum gold silver coins pile, metallic shiny crypto tokens", "crypto-coins.png"),
    ("3D gold bars stack, shiny gold bullion bars pyramid arrangement, wealth investment symbol", "gold-bars.png"),
    ("3D money bundle, stack of US dollar bills with gold band wrapper, cash pile", "money-bundle.png"),
    ("3D secure vault safe, bank vault door metallic silver and green, security symbol, round vault", "secure-vault.png"),
    ("3D smartphone showing trading chart app, mobile phone with green candlestick graph, fintech app mockup", "phone-app.png"),
    ("3D green wallet with coins spilling out, crypto wallet leather with gold coins, money wallet", "wallet.png"),
    ("3D rising bar chart with arrow, green gradient bars going up, financial growth graph 3D", "chart-bars.png"),
]

print("Generating Transparent 3D Assets for Quantroy")
print("=" * 50)

for prompt, filename in assets:
    generate_asset(prompt, filename, size=768)  # Bigger size for quality

print("\nAll assets generated!")
print(f"Output directory: {OUTPUT_DIR}")
