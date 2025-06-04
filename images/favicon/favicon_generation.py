import os
from PIL import Image

# Path to the symbol-only logo
logo_path = '/home/ubuntu/ai_search_business_plan/logo_symbol_only.png'
output_dir = '/home/ubuntu/ai_search_business_plan/favicon'

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Open the logo image
logo = Image.open(logo_path)

# Generate favicon in different sizes
sizes = [16, 32, 48, 64, 128, 256]
favicon_images = []

for size in sizes:
    # Resize the image with high quality
    resized_img = logo.resize((size, size), Image.LANCZOS)
    
    # Save individual PNG files
    png_path = os.path.join(output_dir, f'favicon-{size}x{size}.png')
    resized_img.save(png_path)
    print(f"Saved {png_path}")
    
    # Add to list for ICO file
    favicon_images.append(resized_img)

# Save as ICO file (supports multiple sizes)
ico_path = os.path.join(output_dir, 'favicon.ico')
favicon_images[0].save(
    ico_path, 
    format='ICO', 
    sizes=[(size, size) for size in sizes],
    quality=100
)
print(f"Saved {ico_path}")

# Create a 180x180 version for Apple Touch Icon
apple_size = 180
apple_touch_icon = logo.resize((apple_size, apple_size), Image.LANCZOS)
apple_touch_path = os.path.join(output_dir, 'apple-touch-icon.png')
apple_touch_icon.save(apple_touch_path)
print(f"Saved {apple_touch_path}")

# Create a 192x192 version for Android
android_size = 192
android_icon = logo.resize((android_size, android_size), Image.LANCZOS)
android_path = os.path.join(output_dir, 'android-chrome-192x192.png')
android_icon.save(android_path)
print(f"Saved {android_path}")

print("Favicon generation complete!")
