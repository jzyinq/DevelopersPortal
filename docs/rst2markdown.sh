#!/usr/bin/env bash

FILES=*.rst
for f in $FILES
do
  filename="${f%.*}"
  echo "Converting $f to $filename.md"
  `pandoc $f -f rst -t html -o $filename.html`
  `pandoc $filename.html -f html -t gfm -o $filename.md`
done