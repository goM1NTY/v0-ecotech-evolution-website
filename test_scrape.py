import urllib.request
from bs4 import BeautifulSoup
import re

url = "https://ecovent.com.mk/product/daikin-altherma-3-r-f-%d0%b5hvx-e3v-e6v-e9w-erga-evh/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read()
soup = BeautifulSoup(html, 'html.parser')

print("--- ALL IMAGES IN GALLERY ---")
# Look for common woocommerce gallery classes
gallery = soup.find(class_='woocommerce-product-gallery')
if gallery:
    # WooCommerce usually uses data-src or data-large_image for full size
    for img in gallery.find_all('img'):
        print(f"src: {img.get('src')}")
        print(f"data-src: {img.get('data-src')}")
        print(f"data-large_image: {img.get('data-large_image')}")
else:
    # If not using standard woo classes, just grab all images
    for img in soup.find_all('img'):
        src = img.get('src', '')
        if 'wp-content/uploads' in src:
            print(f"Found img: {src}")
