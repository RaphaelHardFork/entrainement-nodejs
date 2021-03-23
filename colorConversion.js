// Fonctions de convertion des couleurs 

// Conversion de la teinte (0~360°) en RGB
const hueToRbg = (p, q, t) => {
  if (t < 0) {
    t += 1
  } else if (t > 1) {
    t -= 1
  }

  if (t < 1 / 6) {
    return p + (q - p) * 6 * t
  } else if (t < 1 / 2) {
    return q
  } else if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6
  } else {
    return p
  }
} // Fonction privée


// RGB vers HSL
const rgbToHsl = (r, g, b) => {
  r /= 255
  g /= 255
  b /= 255
  let max = Math.max(r, g, b)
  let min = Math.min(r, g, b)
  let h = s = l = (max + min) / 2

  if (max === min) {
    h = s = 0 // Sans teint = Hue:0~360 Saturation:0
  } else {
    let d = max - min //d pour delta

    s = l > 0.5 ? d / (2 - max - min) : (d / (max + min))
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g: h = (b - r) / d + 2
        break
      case b: h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  return colorHSL = [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}


// HSL vers RGB
const hslToRgb = (h, s, l) => {
  s /= 100
  l /= 100
  h /= 360
  let q = (l < 0.5 ? l * (1 + s) : l + s - l * s)
  let p = 2 * l - q
  if (s === 0) {
    return [l, l, l]
  } else {
  }
  return [Math.round(hueToRbg(p, q, h + 1 / 3) * 255), Math.round(hueToRbg(p, q, h) * 255), Math.round(hueToRbg(p, q, h - 1 / 3) * 255)]
}


// HSL vers HEX
// input => h: 0~360 / s&l: 0~100
const hslToHex = (h, s, l) => {
  return `#${hslToRgb(h, s, l)[0] < 16 ? '0' : ''}${((hslToRgb(h, s, l)[0]).toString(16))}\
${hslToRgb(h, s, l)[1] < 16 ? '0' : ''}${((hslToRgb(h, s, l)[1]).toString(16))}\
${hslToRgb(h, s, l)[2] < 16 ? '0' : ''}${((hslToRgb(h, s, l)[2]).toString(16))}`
}

// RGB vers HEX
// rgb => [r,g,b]: 0~255
const rgbToHex = (rgb) => {
  return `#${rgb[0] < 16 ? '0' : ''}${(rgb[0].toString(16))}\
${rgb[1] < 16 ? '0' : ''}${rgb[1].toString(16)}\
${rgb[2] < 16 ? '0' : ''}${rgb[2].toString(16)}`
}


// HEX vers RGB
const hexToRgb = (hex) => {
  hex = hex.split('')
  let r = parseInt(hex[1] + hex[2], 16)
  let g = parseInt(hex[3] + hex[4], 16)
  let b = parseInt(hex[5] + hex[6], 16)

  return [r, g, b]
}

// HEX vers HSL
const hexToHsl = (hex) => {
  let rgb = hexToRgb(hex)

  let h = rgbToHsl(rgb[0], rgb[1], rgb[2])[0]
  let s = rgbToHsl(rgb[0], rgb[1], rgb[2])[1]
  let l = rgbToHsl(rgb[0], rgb[1], rgb[2])[2]

  return [h, s, l]
}



exports.hslToRgb = hslToRgb
exports.rgbToHsl = rgbToHsl
exports.rgbToHex = rgbToHex
exports.hslToHex = hslToHex
exports.hexToRgb = hexToRgb
exports.hexToHsl = hexToHsl
