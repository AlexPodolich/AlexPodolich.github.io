"""One-off: cut the person out of gym_photo.jpg and save a transparent PNG
for the hobbies carousel centerpiece."""
import sys
from rembg import remove, new_session
from PIL import Image

src = "website/images/gym_photo.jpg"
dst = "website/images/hobby/main-img.png"

session = new_session("u2net_human_seg")  # model tuned for people
with Image.open(src) as im:
    out = remove(im, session=session, post_process_mask=True)

# Trim fully-transparent margins so the figure fills the frame
bbox = out.getbbox()
if bbox:
    out = out.crop(bbox)

out.save(dst)
print(f"Saved {dst}  size={out.size}")
