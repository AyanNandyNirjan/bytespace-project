from PIL import Image, ImageDraw

src = Image.open('C:/Users/nirjo/.gemini/antigravity/brain/dce8b0bb-4bd4-46fa-bbae-57258b7de772/.user_uploaded/media_1790712126533.png').convert('RGBA')

avatars = [
    ('avatar_sarah_circle.png', 129, 252),
    ('avatar_james_circle.png', 424, 252),
    ('avatar_alex_circle.png', 719, 252)
]

r = 28
size = 2 * r # 56x56

for filename, cx, cy in avatars:
    crop = src.crop((cx - r, cy - r, cx + r, cy + r))
    
    # Create smooth anti-aliased circular mask at 4x resolution
    scale = 4
    mask = Image.new('L', (size * scale, size * scale), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size * scale - 1, size * scale - 1), fill=255)
    mask = mask.resize((size, size), Image.Resampling.LANCZOS)
    
    # Apply circular mask
    crop.putalpha(mask)
    
    # Save to public/assets
    out_path = f'public/assets/{filename}'
    crop.save(out_path, 'PNG')
    
    # Also save @2x supersampled version (112x112)
    crop_2x = crop.resize((112, 112), Image.Resampling.LANCZOS)
    name_2x = filename.replace('.png', '@2x.png')
    crop_2x.save(f'public/assets/{name_2x}', 'PNG')
    
    # Overwrite legacy files
    legacy_name = filename.replace('_circle.png', '.png').replace('avatar_', 'avatar-')
    crop.save(f'public/assets/{legacy_name}', 'PNG')
    bg = Image.new('RGB', (size, size), (255, 255, 255))
    bg.paste(crop, (0, 0), crop)
    legacy_jpg = legacy_name.replace('.png', '.jpg')
    bg.save(f'public/assets/{legacy_jpg}', 'JPEG', quality=95)
    
    print(f'Saved {filename} and {name_2x}')

print('All circular avatars generated and saved.')
