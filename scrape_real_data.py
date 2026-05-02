import json
import os
import urllib.request
from bs4 import BeautifulSoup
import time

target_dir = r"C:\Users\Genti\Desktop\ecovent"
master_json_path = os.path.join(target_dir, "source_of_truth.json")

def scrape_real_data(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read()
        soup = BeautifulSoup(html, 'html.parser')
        
        description = ""
        desc_tab = soup.find('div', id='tab-description')
        if desc_tab:
            # Extract text, removing massive blank spaces
            for p in desc_tab.find_all(['p', 'li', 'h2', 'h3', 'strong']):
                text = p.get_text(strip=True)
                if text and text.lower() not in description.lower():
                    description += f"- {text}\n"

        tech_info = ""
        tech_tab = soup.find('div', id='tab-technical_information') or soup.find('div', id='tab-additional_information')
        if tech_tab:
            for tr in tech_tab.find_all('tr'):
                cols = tr.find_all(['th', 'td'])
                if len(cols) == 2:
                    key = cols[0].get_text(strip=True)
                    val = cols[1].get_text(strip=True)
                    tech_info += f"- **{key}:** {val}\n"
            
            if not tech_info: # Try paragraphs if no table
                for p in tech_tab.find_all(['p', 'li']):
                    text = p.get_text(strip=True)
                    if text:
                        tech_info += f"- {text}\n"

        return description, tech_info
    except Exception as e:
        print(f"Error scraping {url}: {e}")
        return "", ""

def main():
    if not os.path.exists(master_json_path):
        print("Source of truth not found!")
        return

    with open(master_json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    updated_count = 0
    for item in data:
        url = item.get("original_link", "")
        if not url or url == "Manual Upload":
            continue
            
        print(f"Scraping real data for: {item['name']}...")
        real_desc, real_tech = scrape_real_data(url)
        
        if real_desc or real_tech:
            md_content = f"# {item['name']}\n\n**Brand:** {item.get('brand', 'Unknown')}\n**Category:** {item.get('ui_service_tab', 'Unknown')}\n**Original Link:** {url}\n\n"
            
            if real_desc:
                md_content += f"## Real Features & Description\n{real_desc}\n"
            else:
                md_content += "## Overview\n*No description provided on manufacturer website.*\n\n"
                
            if real_tech:
                md_content += f"## Technical Specifications\n{real_tech}\n"
                
            md_content += f"\n## Gallery\n![{item['name']}](image.{item['local_image_path'].split('.')[-1]})\n"

            content_path = os.path.join(target_dir, item["content_file"])
            if os.path.exists(os.path.dirname(content_path)):
                with open(content_path, 'w', encoding='utf-8') as md_file:
                    md_file.write(md_content)
                updated_count += 1
        
        time.sleep(0.2) # Polite scraping delay

    print(f"Successfully scraped and overwrote {updated_count} products with REAL DATA.")

if __name__ == "__main__":
    main()
