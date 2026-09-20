#!/bin/bash

# Classification mapping based on visual analysis
declare -A classification=(
  # Jamdani - intricate woven patterns, geometric motifs, silk blend
  ["IMG-20260918-WA0001"]="jamdani"
  ["IMG-20260918-WA0005"]="jamdani"
  ["IMG-20260918-WA0007"]="jamdani"
  ["IMG-20260918-WA0011"]="jamdani"
  ["IMG-20260918-WA0012"]="jamdani"
  ["IMG-20260918-WA0016"]="jamdani"
  ["IMG-20260918-WA0017"]="jamdani"
  ["IMG-20260918-WA0021"]="jamdani"
  ["IMG-20260918-WA0023"]="jamdani"
  ["IMG-20260918-WA0024"]="jamdani"
  ["IMG-20260918-WA0036"]="jamdani"
  ["IMG-20260918-WA0039"]="jamdani"
  ["IMG-20260918-WA0041"]="jamdani"
  ["IMG-20260918-WA0042"]="jamdani"

  # Katha - hand-stitched, quilted patterns
  ["IMG-20260918-WA0004"]="katha"
  ["IMG-20260918-WA0006"]="katha"
  ["IMG-20260918-WA0008"]="katha"
  ["IMG-20260918-WA0009"]="katha"
  ["IMG-20260918-WA0013"]="katha"
  ["IMG-20260918-WA0014"]="katha"
  ["IMG-20260918-WA0015"]="katha"
  ["IMG-20260918-WA0022"]="katha"
  ["IMG-20260918-WA0037"]="katha"
  ["IMG-20260918-WA0040"]="katha"
  ["IMG-20260918-WA0043"]="katha"
  ["IMG-20260918-WA0049"]="katha"
  ["IMG-20260918-WA0050"]="katha"
  ["IMG-20260918-WA0051"]="katha"

  # Modal & Silk - flowing, artistic prints, luxe feel
  ["IMG-20260918-WA0002"]="modal-silk"
  ["IMG-20260918-WA0010"]="modal-silk"
  ["IMG-20260918-WA0018"]="modal-silk"
  ["IMG-20260918-WA0019"]="modal-silk"
  ["IMG-20260918-WA0020"]="modal-silk"
  ["IMG-20260918-WA0025"]="modal-silk"
  ["IMG-20260918-WA0026"]="modal-silk"
  ["IMG-20260918-WA0038"]="modal-silk"
  ["IMG-20260918-WA0044"]="modal-silk"
  ["IMG-20260918-WA0045"]="modal-silk"
  ["IMG-20260918-WA0052"]="modal-silk"
  ["IMG-20260918-WA0053"]="modal-silk"

  # Cotton & Linen - breathable, casual, lightweight
  ["IMG-20260918-WA0003"]="cotton-linen"
  ["IMG-20260918-WA0027"]="cotton-linen"
  ["IMG-20260918-WA0028"]="cotton-linen"
  ["IMG-20260918-WA0029"]="cotton-linen"
  ["IMG-20260918-WA0030"]="cotton-linen"
  ["IMG-20260918-WA0031"]="cotton-linen"
  ["IMG-20260918-WA0032"]="cotton-linen"
  ["IMG-20260918-WA0033"]="cotton-linen"
  ["IMG-20260918-WA0034"]="cotton-linen"
  ["IMG-20260918-WA0035"]="cotton-linen"
  ["IMG-20260918-WA0046"]="cotton-linen"
  ["IMG-20260918-WA0047"]="cotton-linen"
  ["IMG-20260918-WA0048"]="cotton-linen"
  ["IMG-20260918-WA0054"]="cotton-linen"
  ["IMG-20260918-WA0055"]="cotton-linen"
  ["IMG-20260918-WA0056"]="cotton-linen"
  ["IMG-20260918-WA0057"]="cotton-linen"
  ["IMG-20260918-WA0058"]="cotton-linen"
  ["IMG-20260918-WA0059"]="cotton-linen"
  ["IMG-20260918-WA0060"]="cotton-linen"
  ["IMG-20260918-WA0061"]="cotton-linen"
  ["IMG-20260918-WA0062"]="cotton-linen"
)

# Move files to their respective folders
for file in IMG-20260918-WA*.jpg; do
  base="${file%.jpg}"
  category="${classification[$base]}"
  if [ -n "$category" ]; then
    mv "$file" "$category/"
    echo "Moved $file to $category/"
  fi
done

echo "Classification complete!"
