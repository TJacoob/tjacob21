#!/usr/bin/env bash
# Device mockups for project covers, built with ImageMagick.
#
#   scripts/mockup.sh phone <screenshot.png> <out.png>
#       One phone (transparent PNG) showing a 1179x2556 phone screenshot, with an iOS status bar.
#   scripts/mockup.sh cover <out.webp> <background> <tint> <left.png> <center.png> <right.png>
#       Mobile-only cover: three phones (from `phone`) over a darkened, tinted background photo.
set -euo pipefail

FRAME=${FRAME:-$HOME/blimunda/products/greatr/assets/frames/iphone.cropped.png}
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

# Frame geometry (iphone.cropped.png, 2087x4341): transparent screen at +81+81, 1932x4180.
FW=2087; FH=4341; SX=81; SY=81; SW=1932
# Screenshots are a 393x852 viewport with no status bar, so the screen grows by a 54pt bar
# and the frame is stretched to match, at a row clear of the side buttons.
BAR=265                    # 54pt at 1932/393 px per pt
SHOT_H=4189                # 2556 * 1932/1179
SH=$((BAR + SHOT_H))       # 4454
EXTRA=$((SH - 4180))
CUT=2600

phone() {
	local shot=$1 out=$2

	magick "$FRAME" \
		\( -clone 0 -crop ${FW}x${CUT}+0+0 +repage \) \
		\( -clone 0 -crop ${FW}x1+0+${CUT} +repage -scale ${FW}x$((EXTRA + 1))\! \) \
		\( -clone 0 -crop ${FW}x$((FH - CUT - 1))+0+$((CUT + 1)) +repage \) \
		-delete 0 -append "$TMP/frame.png"

	# Screen mask: the transparent region inside the frame, flood-filled from the centre.
	magick "$TMP/frame.png" -alpha extract -threshold 50% -colorspace sRGB -type TrueColor \
		-fill red -draw "color $((FW / 2)),$((SY + SH / 2)) floodfill" \
		-fill black +opaque red -fill white -opaque red "$TMP/mask.png"

	# Status bar: the screenshot's top rows carried up, so the header (plain or photo) continues under it.
	magick "$shot" -resize ${SW}x${SHOT_H}\! "$TMP/shot.png"
	magick "$TMP/shot.png" -crop ${SW}x8+0+0 +repage -scale ${SW}x1\! -scale ${SW}x${BAR}\! -blur 6x3 "$TMP/bar.png"
	local ink
	ink=$(magick "$TMP/bar.png" -colorspace gray -format '%[fx:mean > 0.55 ? 0 : 1]' info:)
	[ "$ink" = 1 ] && ink=white || ink=black

	# Time in the left ear, signal and battery in the right ear (island is at x 697-1245, centre y 140).
	magick -size ${SW}x${SH} xc:none "$TMP/bar.png" -geometry +0+0 -composite \
		"$TMP/shot.png" -geometry +0+${BAR} -composite \
		-fill $ink -font Helvetica-Bold -pointsize 82 -gravity NorthWest -annotate +268+98 '9:41' \
		-gravity NorthWest -stroke none \
		-draw "rectangle 1461,146 1476,168" -draw "rectangle 1483,136 1498,168" \
		-draw "rectangle 1505,124 1520,168" -draw "rectangle 1527,111 1542,168" \
		-fill none -stroke $ink -strokewidth 6 -draw "roundrectangle 1574,111 1702,169 16,16" \
		-stroke none -fill $ink -draw "roundrectangle 1584,121 1692,159 9,9" \
		-draw "roundrectangle 1708,129 1716,151 3,3" \
		"$TMP/screen.png"

	magick -size ${FW}x$((FH + EXTRA)) xc:none "$TMP/screen.png" -geometry +${SX}+${SY} -composite \
		"$TMP/mask.png" -alpha off -compose CopyOpacity -composite \
		-compose Over "$TMP/frame.png" -composite "$out"
}

cover() {
	local out=$1 bg=$2 tint=$3 left=$4 center=$5 right=$6
	local W=1600 H=1120

	magick "$bg" -resize ${W}x${H}^ -gravity center -extent ${W}x${H} -blur 0x5 \
		\( +clone -fill "$tint" -colorize 100 \) -compose Multiply -composite \
		-modulate 75 "$TMP/bg.png"

	# Side phones behind and lower, the centre phone in front; each with a soft drop shadow.
	for p in left center right; do
		local h=860
		[ $p = center ] && h=960
		magick "${!p}" -resize x${h} \
			\( +clone -background black -shadow 60x24+0+18 \) +swap -background none -layers merge +repage \
			"$TMP/$p.png"
	done

	magick "$TMP/bg.png" \
		"$TMP/left.png" -gravity center -geometry -400+70 -composite \
		"$TMP/right.png" -gravity center -geometry +400+70 -composite \
		"$TMP/center.png" -gravity center -geometry +0+30 -composite \
		-quality 82 "$out"
}

"$@"
