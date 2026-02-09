from rembg import remove
from PIL import Image
from pathlib import Path
import io

INPUT_DIR = Path("public/images/3d-assets-v2")
OUTPUT_DIR = Path("public/images/3d-assets-v2")

files = [
    "crypto-coins.png",
    "premium-card.png", 
    "money-bundle.png",
    "gold-bars.png",
    "phone-app.png",
    "secure-vault.png"
]

print("Removing backgrounds from all assets...")
print("=" * 50)

for filename in files:
    input_path = INPUT_DIR / filename
    output_path = OUTPUT_DIR / filename
    
    if not input_path.exists():
        print(f"[SKIP] {filename} not found")
        continue
    
    try:
        # Load image
        with open(input_path, "rb") as f:
            input_data = f.read()
        
        # Remove background
        output_data = remove(input_data)
        
        # Save with transparency
        with open(output_path, "wb") as f:
            f.write(output_data)
        
        print(f"[OK] {filename}")
    except Exception as e:
        print(f"[ERROR] {filename}: {e}")

print("=" * 50)
print("Done! All backgrounds removed.")
