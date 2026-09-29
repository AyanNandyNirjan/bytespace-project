from PIL import Image
import os

crops_dir = 'scratch/ref_crops'
os.makedirs(crops_dir, exist_ok=True)

refs = {
    'home': r'C:/Users/nirjo/.gemini/antigravity/brain/dce8b0bb-4bd4-46fa-bbae-57258b7de772/.user_uploaded/media_1790694992278.png',
    'login': r'C:/Users/nirjo/.gemini/antigravity/brain/dce8b0bb-4bd4-46fa-bbae-57258b7de772/.user_uploaded/media_1790695001209.png',
    'register': r'C:/Users/nirjo/.gemini/antigravity/brain/dce8b0bb-4bd4-46fa-bbae-57258b7de772/.user_uploaded/media_1790695001250.png',
    'search': r'C:/Users/nirjo/.gemini/antigravity/brain/dce8b0bb-4bd4-46fa-bbae-57258b7de772/.user_uploaded/media_1790695001596.png',
    'creator': r'C:/Users/nirjo/.gemini/antigravity/brain/dce8b0bb-4bd4-46fa-bbae-57258b7de772/.user_uploaded/media_1790695009683.png',
}

# 1. Login inspection
im_login = Image.open(refs['login'])
print(f'Login size: {im_login.size}')
# Crop left artwork and right card
w, h = im_login.size
im_login.crop((0, 0, int(w*0.55), h)).save(os.path.join(crops_dir, 'login_left.png'))
im_login.crop((int(w*0.48), 0, w, h)).save(os.path.join(crops_dir, 'login_right.png'))

# 2. Register inspection
im_reg = Image.open(refs['register'])
print(f'Register size: {im_reg.size}')
im_reg.crop((0, 0, int(w*0.55), h)).save(os.path.join(crops_dir, 'register_left.png'))
im_reg.crop((int(w*0.48), 0, w, h)).save(os.path.join(crops_dir, 'register_right.png'))

# 3. Creator inspection
im_creator = Image.open(refs['creator'])
print(f'Creator size: {im_creator.size}')
cw, ch = im_creator.size
im_creator.crop((0, 0, cw, int(ch*0.35))).save(os.path.join(crops_dir, 'creator_hero.png'))
im_creator.crop((0, int(ch*0.32), cw, int(ch*0.75))).save(os.path.join(crops_dir, 'creator_grid.png'))
im_creator.crop((0, int(ch*0.75), cw, ch)).save(os.path.join(crops_dir, 'creator_footer.png'))

# 4. Search inspection
im_search = Image.open(refs['search'])
print(f'Search size: {im_search.size}')
sw, sh = im_search.size
im_search.crop((0, 0, sw, int(sh*0.2))).save(os.path.join(crops_dir, 'search_header.png'))
im_search.crop((0, int(sh*0.18), sw, int(sh*0.45))).save(os.path.join(crops_dir, 'search_cards_top.png'))
im_search.crop((0, int(sh*0.75), sw, sh)).save(os.path.join(crops_dir, 'search_pagination_footer.png'))

# 5. Home inspection
im_home = Image.open(refs['home'])
print(f'Home size: {im_home.size}')
hw, hh = im_home.size
for i in range(8):
    y0 = int(hh * (i / 8))
    y1 = int(hh * ((i + 1) / 8))
    im_home.crop((0, y0, hw, y1)).save(os.path.join(crops_dir, f'home_part_{i}.png'))

print('All reference crops created successfully.')
