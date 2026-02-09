import google.generativeai as genai
from pathlib import Path
import base64
import os
import requests
import json

# Configure API
API_KEY = "AIzaSyB0wazwHRWqkm8jo3lsIn9N89P33TvMkdc"

# Output folder
OUTPUT_DIR = Path("public/images/3d-assets")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Image prompts for 3D silver metallic assets
assets = [
    {
        "name": "credit-card",
        "prompt": "3D render of a premium metallic silver credit card floating at an angle, with holographic chip, embossed numbers, sleek modern design, dark green and emerald accent colors, studio lighting, dark background, ultra realistic, 8k quality"
    },
    {
        "name": "money-stack",
        "prompt": "3D render of a stack of silver metallic dollar bills with money band wrapper, floating with slight tilt, luxury premium feel, dark green accents, studio lighting, dark background, ultra realistic chrome finish, 8k quality"
    },
    {
        "name": "gold-coins",
        "prompt": "3D render of stacked silver and gold cryptocurrency coins Bitcoin Ethereum style, metallic chrome finish, floating arrangement, dark green emerald glow accents, studio lighting, dark background, ultra realistic, 8k quality"
    },
    {
        "name": "wallet",
        "prompt": "3D render of a futuristic silver metallic digital wallet device with holographic display showing crypto charts, premium luxury design, dark green LED accents, floating at angle, studio lighting, dark background, 8k quality"
    },
    {
        "name": "chart-bars",
        "prompt": "3D render of silver metallic rising bar chart graph with green glowing tips showing growth, premium chrome finish, floating perspective view, emerald accent lighting, dark background, ultra realistic, 8k quality"
    },
    {
        "name": "safe-vault",
        "prompt": "3D render of a premium silver metallic bank vault safe door slightly open with green glow inside, chrome finish, luxury security aesthetic, floating at angle, studio lighting, dark background, 8k quality"
    }
]

def generate_image_gemini(prompt, filename):
    """Generate image using Gemini 2.0 Flash image generation"""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key={API_KEY}"
    
    headers = {
        "Content-Type": "application/json"
    }
    
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
        response = requests.post(url, headers=headers, json=data, timeout=120)
        response.raise_for_status()
        result = response.json()
        
        # Extract image from response
        if "candidates" in result:
            for candidate in result["candidates"]:
                if "content" in candidate and "parts" in candidate["content"]:
                    for part in candidate["content"]["parts"]:
                        if "inlineData" in part:
                            image_data = base64.b64decode(part["inlineData"]["data"])
                            filepath = OUTPUT_DIR / f"{filename}.png"
                            with open(filepath, "wb") as f:
                                f.write(image_data)
                            print(f"[OK] Generated: {filepath}")
                            return True
        
        print(f"[WARN] No image in response for {filename}")
        return False
        
    except Exception as e:
        print(f"[ERROR] Error generating {filename}: {e}")
        return False

def main():
    print("Generating 3D Silver Assets for Quantroy...")
    print("=" * 50)
    
    success_count = 0
    for asset in assets:
        print(f"\nGenerating: {asset['name']}...")
        if generate_image_gemini(asset['prompt'], asset['name']):
            success_count += 1
    
    print("\n" + "=" * 50)
    print(f"Generated {success_count}/{len(assets)} assets")
    print(f"Output folder: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
