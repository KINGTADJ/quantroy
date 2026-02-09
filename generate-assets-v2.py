import requests
import base64
from pathlib import Path
import json

API_KEY = "AIzaSyB0wazwHRWqkm8jo3lsIn9N89P33TvMkdc"
OUTPUT_DIR = Path("public/images/3d-assets-v2")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Professional product mockup style prompts (like the reference images)
assets = [
    {
        "name": "crypto-coins",
        "prompt": "Professional 3D product render of stacked golden and silver cryptocurrency coins with Quantroy Q logo embossed, floating at a dynamic 45 degree angle, realistic metallic material with reflections, soft dark green to black gradient background, studio lighting with soft shadows, product photography style, ultra high quality 8k render"
    },
    {
        "name": "premium-card", 
        "prompt": "Professional 3D product render of a premium black and emerald green metal credit card with Quantroy logo and chip, floating at a dynamic tilted angle, realistic brushed metal finish with gold accents, soft dark green gradient background fading to black, studio lighting, product photography style, ultra high quality 8k render"
    },
    {
        "name": "money-bundle",
        "prompt": "Professional 3D product render of a stack of hundred dollar bills with emerald green Quantroy branded money band wrapper, floating at dynamic angle, realistic paper and rubber band textures, soft dark gradient background from emerald green to black, studio lighting with soft shadows, product photography style, 8k quality"
    },
    {
        "name": "gold-bars",
        "prompt": "Professional 3D product render of stacked gold investment bars with Quantroy Q logo stamped on them, floating at dynamic angle, realistic polished gold material with reflections, soft dark green to black gradient background, studio lighting, product photography style, ultra high quality 8k render"
    },
    {
        "name": "phone-app",
        "prompt": "Professional 3D product render of a modern smartphone floating at dynamic angle showing Quantroy investment app with green charts going up, dark interface with emerald accents, realistic glass and metal phone materials, soft dark gradient background, studio lighting with reflections, product photography style, 8k render"
    },
    {
        "name": "secure-vault",
        "prompt": "Professional 3D product render of a miniature premium safe vault box with Quantroy Q logo, partially open showing golden glow inside, dark metallic finish with emerald green accents, floating at dynamic angle, soft dark gradient background, studio lighting, product photography style, 8k quality"
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
    print("Generating Quantroy 3D Assets v2...")
    print("=" * 40)
    
    success = 0
    for asset in assets:
        print(f"Generating: {asset['name']}...")
        if generate_image(asset['prompt'], asset['name']):
            success += 1
    
    print("=" * 40)
    print(f"Done: {success}/{len(assets)}")

if __name__ == "__main__":
    main()
