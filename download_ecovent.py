import json
import os
import urllib.request
import re

# Combined Data scraped
products = [
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3  R F       ЕHVX- E3V/E6V/E9W +ERGA-EV(H)",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/09/product-pic-PIC-48-300x342.jpg",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-r-f-%d0%b5hvx-e3v-e6v-e9w-erga-evh/"
  },
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3  R W       ЕBBH- D6V/E9W+ERLA11-16DV3/W1",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/product-pic-PIC-59-300x342.jpg",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-r-w-%d0%b5bbh-d6v-e9werla11-16dv3-w1/"
  },
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3 H  MT W      ETBH- 12E6V/E9W+EPRA08-12EV3/W1",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/product-pic-PIC-58-300x342.jpg",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-h-mt-w-etbh-12e6v-e9wepra08-12ev3-w1/"
  },
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3 H HT F ETVX – E6V/E9W+EPRA14 -18DV3/W1",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/09/product-pic-PIC-52-1-300x342.jpg",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-h-ht-f-etvx-e6v-e9wepra14-18dv3-w1/"
  },
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3 H HT F ЕTVH-E6V/E9W + EPRA14 -18DV3/W1",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/09/62product-pic-62-300x342.jpg",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-h-ht-f-%d0%b5tvh-e6v-e9w-epra14-18dv3-w1/"
  },
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3 H HT W ETBH- E6V/E9W + EPRA14-18DV3/W1",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/61-61-300x342.jpg",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-h-ht-w-etbh-e6v-e9w-epra14-18dv3-w1/"
  },
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3 H HT W ETBX – E6V/E9W + EPRA14-18DV3/W1",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/09/product-pic-PIC-55-300x342.jpg",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-h-ht-w-etbx-e6v-e9w-epra14-18dv3-w1/"
  },
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3 H MT F ETVX12E6V/E9W+EPRA08-12EV3/W1",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/09/62product-pic-62-300x342.jpg",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-h-mt-f-etvx12e6v-e9wepra08-12ev3-w1/"
  },
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3 H MT F ЕTVH12E6V/E9W + EPRA08 -12EV3/W1",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/09/product-pic-PIC-53-300x342.jpg",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-h-mt-f-%d0%b5tvh12e6v-e9w-epra08-12ev3-w1/"
  },
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3 H MT W ETBX – 12E6V/E9W+EPRA08-12EV3/W1",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/09/product-pic-PIC-55-300x342.jpg",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-h-mt-w-etbx-12e6v-e9wepra08-12ev3-w1/"
  },
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3 M – EBLA09-16D3V3",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-196-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-m-ebla09-16d3v3/"
  },
  {
    "category": "Heat Pump",
    "name": "DAIKIN ALTHERMA 3 R F ЕBVH- E6V/E9W + ERLA11-16DV3/W1",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/09/product-pic-PIC-50-300x342.jpg",
    "link": "https://ecovent.com.mk/product/daikin-altherma-3-r-f-%d0%b5bvh-e6v-e9w-erla11-16dv3-w1/"
  },
  {
    "category": "Air Conditioning",
    "name": "COMFORA -FTXP-N9",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/WEB-COVER-PHOTO-PRODUCTS-10-300x349.jpg",
    "link": "https://ecovent.com.mk/product/comfora-ftxp-m/"
  },
  {
    "category": "Air Conditioning",
    "name": "EMURA NEW – FTXJ-AW | FTXJ-AS | FTXJ-AB",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/WEB-COVER-PHOTO-PRODUCTS-07-300x349.jpg",
    "link": "https://ecovent.com.mk/product/emura-new-ftxj-aw-ftxj-as-ftxj-ab-bb-copy/"
  },
  {
    "category": "Air Conditioning",
    "name": "PERFERA – FTXM-A-R",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/WEB-COVER-PHOTO-PRODUCTS-15-300x349.jpg",
    "link": "https://ecovent.com.mk/product/perfera-ftxtm-m/"
  },
  {
    "category": "Air Conditioning",
    "name": "PERFERA – FVXM-A9",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/WEB-COVER-PHOTO-PRODUCTS-11-300x349.jpg",
    "link": "https://ecovent.com.mk/product/perfera-fvxm-a/"
  },
  {
    "category": "Air Conditioning",
    "name": "Sensira -FTXF-E-D",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/WEB-COVER-PHOTO-PRODUCTS-06-300x349.jpg",
    "link": "https://ecovent.com.mk/product/sensira-ftxf-a/"
  },
  {
    "category": "Air Conditioning",
    "name": "SENSIRA – FTXC-D",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/WEB-COVER-PHOTO-PRODUCTS-14-300x349.jpg",
    "link": "https://ecovent.com.mk/product/sensira-ftxc-c/"
  },
  {
    "category": "Air Conditioning",
    "name": "STYLISH – FTXA-CW | FTXA-CS | FTXA-CB",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-31@300x-100.jpg",
    "link": "https://ecovent.com.mk/product/stylish-ftxa-aw-ftxa-as-ftxa-ab-ftxa-bb/"
  },
  {
    "category": "Air Conditioning",
    "name": "URURU SARARA – FTXZ-N",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/WEB-COVER-PHOTO-PRODUCTS-01-300x349.jpg",
    "link": "https://ecovent.com.mk/product/ururu-sarara-ftxz-n-3/"
  },
  {
    "category": "Multisplit",
    "name": "DAIKIN MULTISPLIT 2MXM-A9",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-45-1-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-multisplit-2mxm-m/"
  },
  {
    "category": "Multisplit",
    "name": "DAIKIN MULTISPLIT 2MXM-M9",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-45-1-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-multisplit-2mxm-m9/"
  },
  {
    "category": "Multisplit",
    "name": "DAIKIN MULTISPLIT 3MXM-A9",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-45-1-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-multisplit-3mxm-n/"
  },
  {
    "category": "Multisplit",
    "name": "DAIKIN MULTISPLIT 4MXM-A9",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-45-1-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-multisplit-4mxm-n/"
  },
  {
    "category": "Multisplit",
    "name": "DAIKIN MULTISPLIT 5MXM-A9",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-45-1-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-multisplit-5mxm-n/"
  },
  {
    "category": "Air Purifier",
    "name": "AIR PURIFIER AND HUMIDIFIER – MCK55W",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/product-pic-16.jpg",
    "link": "https://ecovent.com.mk/product/air-purifier-and-humidifier-mck55w/"
  },
  {
    "category": "Air Purifier",
    "name": "Streamer  technology AIR PURIFIER MC30Y",
    "image": "https://ecovent.com.mk/wp-content/uploads/2023/01/product-pic-17-300x342.jpg",
    "link": "https://ecovent.com.mk/product/streamer-technology-air-purifier-mc30y/"
  },
  {
    "category": "Air Purifier",
    "name": "Ururu streamer  technology AIR PURIFIER MCK70YB",
    "image": "https://ecovent.com.mk/wp-content/uploads/2023/01/THUMBNAIL-300x342.jpg",
    "link": "https://ecovent.com.mk/product/ururu-streamer-technology-air-purifier-mck70yb/"
  },
  {
    "category": "Air Purifier",
    "name": "АIR PURIFIER- MC55W",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/product-pic-17.jpg",
    "link": "https://ecovent.com.mk/product/purifier-mc55w/"
  },
  {
    "category": "Control",
    "name": "MADOKA – BRC1H519W | BRC1H519S |  BRC1H519B",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/product-pic-38-300x342.jpg",
    "link": "https://ecovent.com.mk/product/madoka-brc1h519w-brc1h519s-brc1h519b/"
  },
  {
    "category": "Control",
    "name": "ONECTA  APP",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/WEB-COVER-PHOTO-PRODUCTS-21-300x349.jpg",
    "link": "https://ecovent.com.mk/product/onecta-app/"
  },
  {
    "category": "Fan Coil",
    "name": "DAIKIN ALTHERMA HPC – FWXV-AT V3",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-97-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-altherma-hpc-fwxv-at-v3/"
  },
  {
    "category": "Fan Coil",
    "name": "DAIKIN FANCOILER FWV-DAF",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-96-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-fancoiler-fwv-daf/"
  },
  {
    "category": "Sky Air",
    "name": "DAIKIN SKY AIR FBA-A(9)",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-210-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-sky-air-fba-a9/"
  },
  {
    "category": "Sky Air",
    "name": "DAIKIN SKY AIR FCAG-A",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-206@300x-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-sky-air-fcag-a/"
  },
  {
    "category": "Sky Air",
    "name": "DAIKIN SKY AIR FDXM-F9",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-212-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-sky-air-fdxm-f9/"
  },
  {
    "category": "Sky Air",
    "name": "DAIKIN SKY AIR FFA-A",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-207@300x-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-sky-air-ffa-a/"
  },
  {
    "category": "Sky Air",
    "name": "DAIKIN SKY AIR FHA-A",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-211-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-sky-air-fha-a/"
  },
  {
    "category": "Sky Air",
    "name": "DAIKIN SKY AIR FNA-A",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-209-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-sky-air-fna-a/"
  },
  {
    "category": "Solar PV",
    "name": "SOLAR PV PANELS",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-197-1-300x349.png",
    "link": "https://ecovent.com.mk/product/solar-pv-panels/"
  },
  {
    "category": "VRV",
    "name": "DAIKIN VRV IV – RXYQ-T9",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-196-1-300x349.png",
    "link": "https://ecovent.com.mk/product/daikin-vrv-iv-rxyq-t9/"
  },
  {
    "category": "Ventilation",
    "name": "BVN B5PAM 500",
    "image": "https://ecovent.com.mk/wp-content/uploads/2022/08/Asset-198-1-300x349.png",
    "link": "https://ecovent.com.mk/product/bvn-b5pam-500/"
  },
  {
    "category": "Chiller",
    "name": "CHILLERS",
    "image": "https://ecovent.com.mk/wp-content/uploads/woocommerce-placeholder.png",
    "link": "https://ecovent.com.mk/product/chillers/"
  }
]

target_dir = r"C:\Users\Genti\Desktop\ecovent"

def sanitize_filename(name):
    # Remove invalid characters for Windows filenames
    name = re.sub(r'[\\/*?:"<>|]', "", name)
    return name.strip()

def main():
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    structured_data = []

    for item in products:
        category = item["category"]
        name = item["name"]
        image_url = item["image"]
        link = item["link"]

        # Create category folder
        category_dir = os.path.join(target_dir, sanitize_filename(category))
        if not os.path.exists(category_dir):
            os.makedirs(category_dir)

        # Create product specific folder
        product_folder_name = sanitize_filename(name)
        product_dir = os.path.join(category_dir, product_folder_name)
        if not os.path.exists(product_dir):
            os.makedirs(product_dir)

        # Download image if it doesn't already exist locally
        ext = image_url.split('.')[-1]
        if '?' in ext:
            ext = ext.split('?')[0]
        if len(ext) > 4: # handle woocommerce placeholder png edgecase
            ext = 'png'
            
        image_filename = f"image.{ext}"
        image_path = os.path.join(product_dir, image_filename)
        
        if not os.path.exists(image_path) and image_url:
            try:
                req = urllib.request.Request(image_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req) as response, open(image_path, 'wb') as out_file:
                    out_file.write(response.read())
                print(f"Downloaded image for: {name}")
            except Exception as e:
                print(f"Failed to download image for {name}: {e}")
                image_path = ""
        else:
            print(f"Image already exists for: {name}")

        # Create a markdown file for the content
        md_content = f"# {name}\n\n**Category:** {category}\n**Original Link:** {link}\n\n![{name}]({image_filename})\n"
        md_path = os.path.join(product_dir, "content.md")
        with open(md_path, 'w', encoding='utf-8') as md_file:
            md_file.write(md_content)

        # Append to our structured data
        structured_data.append({
            "category": category,
            "name": name,
            "local_image_path": os.path.join(category, product_folder_name, image_filename).replace("\\", "/"),
            "content_file": os.path.join(category, product_folder_name, "content.md").replace("\\", "/"),
            "original_link": link
        })

    # Save the master source of truth json
    master_json_path = os.path.join(target_dir, "source_of_truth.json")
    with open(master_json_path, 'w', encoding='utf-8') as json_file:
        json.dump(structured_data, json_file, indent=2, ensure_ascii=False)
    
    print("All done! Master JSON updated.")

if __name__ == "__main__":
    main()
