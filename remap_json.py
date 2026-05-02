import json
import os

target_dir = r"C:\Users\Genti\Desktop\ecovent"
master_json_path = os.path.join(target_dir, "source_of_truth.json")

def remap_category(old_cat):
    if old_cat in ["Air Conditioning", "Multisplit", "Air Purifier"]:
        return "Inverter Air Conditioners"
    elif old_cat in ["Heat Pump"]:
        return "Heat Pumps"
    elif old_cat in ["VRV", "Sky Air", "Fan Coil", "Chiller", "Ventilation", "Control"]:
        return "Commercial Heating & Cooling"
    elif old_cat == "Solar PV":
        return "Solar PV"
    return old_cat

def main():
    if not os.path.exists(master_json_path):
        print("Source of truth not found!")
        return

    with open(master_json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    for item in data:
        # Set Daikin as brand for scraped ones if missing
        if "brand" not in item:
            item["brand"] = "Daikin"
        elif not item["brand"]:
            item["brand"] = "Daikin"

        # Special case for the manual ones we just did to ensure they map correctly
        # Midea Console might be Commercial, but let's keep all Midea/LG ACs in Inverter Air Conditioners for now
        
        # Remap the master category
        item["ui_service_tab"] = remap_category(item["category"])

    with open(master_json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        
    print("Successfully remapped UI service tabs and brands.")

if __name__ == "__main__":
    main()
