import json
import os
import shutil

target_dir = r"C:\Users\Genti\Desktop\ecovent"

# Manually added products mapping based on user filenames and vision analysis
new_products = [
    {
        "category": "Heat Pump",
        "brand": "LG",
        "name": "LG Therma V Monobloc",
        "file": "lg heat pump.jpeg"
    },
    {
        "category": "Air Conditioning",
        "brand": "LG",
        "name": "LG Artcool Mirror",
        "file": "lg2.jpeg"
    },
    {
        "category": "Air Conditioning",
        "brand": "LG",
        "name": "LG Standard Dual Inverter",
        "file": "lg.jpeg"
    },
    {
        "category": "Air Conditioning",
        "brand": "Midea",
        "name": "Midea Solstice (White & Black Series)",
        "file": "midea solstice.jpeg"
    },
    {
        "category": "Air Conditioning",
        "brand": "Midea",
        "name": "Midea Solstice Variant 2",
        "file": "midea solstice2.jpeg"
    },
    {
        "category": "Air Conditioning",
        "brand": "Midea",
        "name": "Midea Solstice Variant 3",
        "file": "midea solstice3.jpeg"
    },
    {
        "category": "Air Conditioning",
        "brand": "Midea",
        "name": "Midea Forest",
        "file": "midea forest.jpeg"
    },
    {
        "category": "Air Conditioning",
        "brand": "Midea",
        "name": "Midea Forest Silver",
        "file": "midea forest silver.jpeg"
    },
    {
        "category": "Air Conditioning",
        "brand": "Midea",
        "name": "Midea Console Unit",
        "file": "midea console.jpeg"
    }
]

def sanitize_filename(name):
    import re
    name = re.sub(r'[\\/*?:"<>|]', "", name)
    return name.strip()

def main():
    master_json_path = os.path.join(target_dir, "source_of_truth.json")
    
    # Load existing
    if os.path.exists(master_json_path):
        with open(master_json_path, 'r', encoding='utf-8') as f:
            structured_data = json.load(f)
    else:
        structured_data = []

    for item in new_products:
        category = item["category"]
        name = item["name"]
        filename = item["file"]
        brand = item["brand"]
        
        source_img_path = os.path.join(target_dir, filename)
        
        if not os.path.exists(source_img_path):
            print(f"Skipping {filename}, not found in root.")
            continue

        # Create category folder
        category_dir = os.path.join(target_dir, sanitize_filename(category))
        os.makedirs(category_dir, exist_ok=True)

        # Create product specific folder
        product_folder_name = sanitize_filename(name)
        product_dir = os.path.join(category_dir, product_folder_name)
        os.makedirs(product_dir, exist_ok=True)

        # Move/Rename image
        ext = filename.split('.')[-1]
        image_filename = f"image.{ext}"
        dest_img_path = os.path.join(product_dir, image_filename)
        
        shutil.move(source_img_path, dest_img_path)
        print(f"Moved {filename} -> {dest_img_path}")

        # Create markdown file
        md_content = f"# {name}\n\n**Category:** {category}\n**Brand:** {brand}\n\n![{name}]({image_filename})\n\n*Note: Replace this text with exact capacities, energy class, and pricing.*\n"
        md_path = os.path.join(product_dir, "content.md")
        with open(md_path, 'w', encoding='utf-8') as md_file:
            md_file.write(md_content)

        # Append to structured data
        structured_data.append({
            "category": category,
            "brand": brand,
            "name": name,
            "local_image_path": os.path.join(category, product_folder_name, image_filename).replace("\\", "/"),
            "content_file": os.path.join(category, product_folder_name, "content.md").replace("\\", "/"),
            "original_link": "Manual Upload"
        })

    # Save the master source of truth json
    with open(master_json_path, 'w', encoding='utf-8') as json_file:
        json.dump(structured_data, json_file, indent=2, ensure_ascii=False)
    
    print("All done! Manual LG and Midea products structured and added to JSON.")

if __name__ == "__main__":
    main()