import json
import os
import urllib.request
from bs4 import BeautifulSoup
import time
import re

target_dir = r"C:\Users\Genti\Desktop\ecovent"
master_json_path = os.path.join(target_dir, "source_of_truth.json")

def get_high_res_image(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read()
        soup = BeautifulSoup(html, 'html.parser')
        
        gallery = soup.find(class_='woocommerce-product-gallery')
        if gallery:
            # Grab the very first image in the gallery (the main product image)
            img = gallery.find('img')
            if img and img.get('src'):
                src = img.get('src')
                # Strip out WP thumbnail sizes (e.g. -100x100, -300x342, -600x683) to force the original high-res URL
                clean_src = re.sub(r'-\d+x\d+(?=\.[a-zA-Z]+$)', '', src)
                return clean_src
    except Exception as e:
        print(f"Error parsing HTML for {url}: {e}")
    return None

def main():
    if not os.path.exists(master_json_path):
        print("Source of truth not found!")
        return

    with open(master_json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    updated = 0
    for item in data:
        url = item.get("original_link", "")
        if not url or url == "Manual Upload":
            continue
            
        local_path = os.path.join(target_dir, item["local_image_path"])
        if not os.path.exists(local_path):
            continue
            
        print(f"Fetching high-res for: {item['name'][:40]}...")
        high_res_url = get_high_res_image(url)
        
        if high_res_url:
            print(f"-> Target URL: {high_res_url}")
            try:
                req = urllib.request.Request(high_res_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req) as response:
                    img_data = response.read()
                
                # Overwrite if we successfully pulled data (even if it's the same size, it's safer to ensure we have the source)
                if len(img_data) > 5000: 
                    with open(local_path, 'wb') as out_file:
                        out_file.write(img_data)
                    print(f"-> Success! Downloaded high-res ({len(img_data)//1024} KB)")
                    updated += 1
                else:
                    print(f"-> Image found but it was suspiciously small ({len(img_data)//1024} KB). Skipped.")
            except Exception as e:
                print(f"-> Failed to download {high_res_url}: {e}")
        else:
            print("-> Could not find high-res URL on page.")
        
        time.sleep(0.2)

    print(f"\nFinished! Upgraded {updated} images to full resolution.")

if __name__ == "__main__":
    main()
