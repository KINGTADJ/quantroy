import requests
import base64
from pathlib import Path
from PIL import Image
import io

API_KEY = "AIzaSyB0wazwHRWqkm8jo3lsIn9N89P33TvMkdc"
OUTPUT_DIR = Path("public/images/3d-assets-v2")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Prompts specifically requesting transparent/isolated backgrounds
assets = [
    {
        "name": "crypto-coins",
        "prompt": "3D render of stacked golden and silver cryptocurrency coins with Q logo embossed, floating at dynamic 45 degree angle, realistic metallic reflections, isolated on pure transparent background, no background, product shot, studio lighting, PNG cutout style, ultra high quality 8k"
    },
    {
        "name": "premium-card", 
        "prompt": "3D render of premium emerald green metal credit card with Quantroy logo and gold chip, floating at tilted angle, brushed metal finish, isolated on pure transparent background, no background, product photography, studio lighting, PNG cutout, 8k quality"
    },
    {
        "name": "money-bundle",
        "prompt": "3D render of stack of hundred dollar bills with emerald green money band, floating at angle, realistic textures, isolated on pure transparent background, no background, product shot, studio lighting, PNG cutout style, 8k"
    },
    {
        "name": "gold-bars",
        "prompt": "3D render of stacked gold investment bars with Quantroy logo stamped, floating at dynamic angle, polished gold material, isolated on pure transparent background, no background, product photography, studio lighting, PNG cutout, 8k"
    },
    {
        "name": "phone-app",
        "prompt": "3D render of modern smartphone floating at angle showing investment app with green charts, dark interface, isolated on pure transparent background, no background, product shot, studio lighting, PNG cutout style, 8k"
    },
    {
        "name": "secure-vault",
        "prompt": "3D render of miniature premium safe vault with Q logo, partially open with golden glow inside, dark metallic finish, isolated on pure transparent background, no background, product photography, PNG cutout, 8k"
    }
]

def generate_image(prompt, filename):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key={API_KEY}"
    
    data = {
        "contents": [{
            "parts": [{
                "text": prompt
            }]
        }],
        "generationConfig": {
            "responseModalities": ["TEXT", "IMAGE"]
        }
    }
    
    try:
        response = requests.post(url, json=data, timeout=120)
        response.raise_for_status()
        result = response.json()
        
        if "candidates" in result:
            for candidate in result["candidates"]:
                if "content" in candidate and "parts" in candidate["content"]:
                    for part in candidate["content"]["parts"]:
                        if "inlineData" in part:
                            image_data = base64.b64decode(part["inlineData"]["data"])
                            filepath = OUTPUT_DIR / f"{filename}.png"
                            with open(filepath, "wb") as f:
                                f.write(image_data)
                            print(f"[OK] {filename}.png")
                            return True
        
        print(f"[WARN] No image for {filename}")
        return False
        
    except Exception as e:
        print(f"[ERROR] {filename}: {e}")
        return False

def main():
    print("Generating assets with TRANSPARENT backgrounds...")
    print("=" * 50)
    
    success = 0
    for asset in assets:
        print(f"Generating: {asset['name']}...")
        if generate_image(asset['prompt'], asset['name']):
            success += 1
    
    print("=" * 50)
    print(f"Done: {success}/{len(assets)}")

if __name__ == "__main__":
    main()
