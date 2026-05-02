import json
import os

target_dir = r"C:\Users\Genti\Desktop\ecovent"
master_json_path = os.path.join(target_dir, "source_of_truth.json")

def generate_content(item):
    name = item["name"].lower()
    cat = item["ui_service_tab"]
    brand = item["brand"]
    
    desc = ""
    features = []
    specs = []

    # Logic for Heat Pumps
    if cat == "Heat Pumps":
        if "altherma" in name:
            desc = f"The {item['name']} is a premium air-to-water heat pump engineered for extreme energy efficiency. Designed to provide reliable heating, cooling, and domestic hot water, it offers seamless integration with underfloor heating systems and low-temperature radiators."
            features = ["High seasonal efficiency (A+++)", "Functions reliably even in severe winter conditions", "Smart grid and solar integration ready", "Whisper-quiet outdoor unit"]
            specs = ["Type: Air-to-Water", "Refrigerant: R-32", "Inverter Technology: Yes"]
        elif "therma v" in name:
            desc = f"The {item['name']} is an all-in-one heating solution that combines high performance with aesthetic appeal. Operating efficiently at low ambient temperatures, it is perfect for both new builds and renovation projects."
            features = ["Monobloc design for easy installation", "R290 environmentally friendly refrigerant", "Advanced smart control compatibility", "Consistent capacity without backup heaters"]
            specs = ["Type: Monobloc Air-to-Water", "Refrigerant: R290", "Inverter: LG Dual Inverter"]
        else:
            desc = f"An advanced thermal solution from {brand}, the {item['name']} delivers consistent, energy-saving climate control for modern homes."
            features = ["Energy-efficient thermal transfer", "Low operational noise", "Durable build quality"]

    # Logic for Air Conditioners
    elif cat == "Inverter Air Conditioners":
        if "emura" in name or "stylish" in name or "artcool" in name or "solstice" in name:
            desc = f"The {item['name']} represents the intersection of luxury design and advanced climate engineering. Its ultra-slim profile and premium finish make it a statement piece, while its AI-driven inverter technology ensures optimal thermal comfort."
            features = ["Award-winning premium design", "Intelligent thermal sensors", "Ultra-quiet operation", "Built-in air purification filtering"]
            specs = ["Energy Class: Up to A+++", "Wi-Fi Control: Integrated", "Filter: High-Density Plasma"]
        elif "perfera" in name or "comfora" in name or "sensira" in name:
            desc = f"Designed for absolute comfort, the {item['name']} offers rapid cooling and heating with minimal energy draw. It provides excellent air distribution and smart connectivity for everyday residential use."
            features = ["Flash Streamer air purification", "3D air flow for even temperature", "Energy-saving standby mode", "Voice control compatible"]
            specs = ["Energy Class: A++", "Refrigerant: R-32", "Operation Noise: Down to 19dBA"]
        elif "purifier" in name:
            desc = f"The {item['name']} guarantees pristine indoor air quality. Utilizing advanced streamer and filtration technology, it captures and neutralizes allergens, bacteria, and odors, creating a healthier environment."
            features = ["Advanced HEPA filtration", "Active odor neutralization", "Humidification capabilities (on select models)", "Quiet sleep mode"]
            specs = ["Coverage: Up to 40m²", "Sensor: Dust & Odor", "Maintenance: Long-life filters"]
        else:
            desc = f"The {item['name']} is a robust, reliable inverter air conditioner built to maintain perfect indoor climates through the harshest summers and winters."
            features = ["Fast cooling/heating", "Eco-friendly refrigerant", "Smart diagnosis"]

    # Logic for Commercial
    elif cat == "Commercial Heating & Cooling":
        if "vrv" in name:
            desc = f"The {item['name']} is a flagship commercial VRV (Variable Refrigerant Volume) system. Engineered for large-scale buildings, it offers unmatched zone control, allowing independent temperature management across vast floor plans."
            features = ["Continuous heating during defrost", "Variable Refrigerant Temperature (VRT)", "Massive piping length flexibility", "Seamless BMS integration"]
            specs = ["Application: Commercial/Industrial", "System: VRV/VRF", "Scalability: High"]
        elif "sky air" in name or "fancoil" in name:
            desc = f"Perfect for retail spaces, restaurants, and offices, the {item['name']} provides discreet, powerful climate control. It integrates seamlessly into ceiling grids for a clean architectural look."
            features = ["360-degree air discharge", "Individual louvre control", "Self-cleaning panel options", "Fresh air intake capability"]
            specs = ["Mount: Ceiling Cassette/Ducted", "Application: Light Commercial", "Pump: Built-in drain pump"]
        else:
            desc = f"Heavy-duty commercial infrastructure. The {item['name']} is built to sustain demanding thermal loads with absolute reliability."
            features = ["Industrial-grade durability", "High-capacity output", "Advanced system diagnostics"]

    # Default fallback
    else:
        desc = f"The {item['name']} offers high-end performance and reliability, backed by {brand}'s engineering standards."
        features = ["Premium build quality", "High efficiency", "Long-term reliability"]

    # Build the Markdown string
    md = f"""# {item['name']}

**Brand:** {brand}
**Category:** {item['ui_service_tab']}

## Overview
{desc}

## Key Features
"""
    for f in features:
        md += f"- {f}\n"

    if specs:
        md += "\n## Technical Specifications\n"
        for s in specs:
            md += f"- **{s.split(':')[0]}:**{s.split(':')[1]}\n"

    md += f"\n## Gallery\n![{item['name']}](image.{item['local_image_path'].split('.')[-1]})\n"
    
    return md

def main():
    if not os.path.exists(master_json_path):
        print("Source of truth not found!")
        return

    with open(master_json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    updated_count = 0
    for item in data:
        md_content = generate_content(item)
        content_path = os.path.join(target_dir, item["content_file"])
        
        # Write to the file
        if os.path.exists(os.path.dirname(content_path)):
            with open(content_path, 'w', encoding='utf-8') as md_file:
                md_file.write(md_content)
            updated_count += 1
            
    print(f"Successfully generated rich content for {updated_count} products.")

if __name__ == "__main__":
    main()
