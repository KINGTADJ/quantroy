"""
Remove backgrounds from existing 3D assets
"""
from rembg import remove
from PIL import Image
import os

INPUT_DIR = "public/images/3d-assets-v2"
OUTPUT_DIR = "public/images/3d-transparent"

os.makedirs(OUTPUT_DIR, exist_ok=True)

# Process all PNG images in the input directory
for filename in os.listdir(INPUT_DIR):
    if filename.endswith('.png'):
        input_path = os.path.join(INPUT_DIR, filename)
        output_path = os.path.join(OUTPUT_DIR, filename)
        
        print(f"Processing: {filename}...")
        
        # Open the image
        with open(input_path, 'rb') as f:
            input_data = f.read()
        
        # Remove background
        output_data = remove(input_data)
        
        # Save result
        with open(output_path, 'wb') as f:
            f.write(output_data)
        
        print(f"  Saved: {output_path}")

print("\nDone! All assets processed.")
print(f"Output directory: {OUTPUT_DIR}")
