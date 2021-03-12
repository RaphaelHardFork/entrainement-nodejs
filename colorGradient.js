// Ce programme sert à définir un gradient de couleur avec une ou plusieurs couleurs entrante.

// Import des packages
const chalk = require('chalk') //https://github.com/chalk/chalk
const readlineSync = require('readline-sync') //https://github.com/anseki/readline-sync 

// Déclaration des fonctions
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
  return colorHSL = [h * 360, s * 100, l * 100]
}

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
}



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


const gradient = (color, interval) => {
  color = color.split('')
  if (color[0] === '#') {
    let colorR = parseInt(color[1] + color[2], 16)
    let colorG = parseInt(color[3] + color[4], 16)
    let colorB = parseInt(color[5] + color[6], 16)
    let hue = rgbToHsl(colorR, colorG, colorB)[0]
    let saturation = rgbToHsl(colorR, colorG, colorB)[1]
    let lightness = rgbToHsl(colorR, colorG, colorB)[2]
    let step = 100 / interval
    let i
    let colorString = ''
    let zero = ''

    if (interval > 3 && interval <= 100) {
      for (i = 0; i <= 100; i += step) {

        hue = Math.round(hue)
        saturation = Math.round(saturation)
        i = Math.round(i)

        colorString = `#${hslToRgb(hue, saturation, i)[0] < 16 ? '0' : ''}${((hslToRgb(hue, saturation, i)[0]).toString(16))}\
${hslToRgb(hue, saturation, i)[1] < 16 ? '0' : ''}${((hslToRgb(hue, saturation, i)[1]).toString(16))}\
${hslToRgb(hue, saturation, i)[2] < 16 ? '0' : ''}${((hslToRgb(hue, saturation, i)[2]).toString(16))}`
        console.log(chalk.bgHsl(hue, saturation, i)(colorString))

      }
    } else {
      console.log('Add an interval between 3 and 100')
    }
  } else {
    console.log('Add your color in format: #RRGGBB')
  }
}

let userColor = readlineSync.question('Choose a color in the #------ format: ')
let userInterval = Number(readlineSync.question('Choose an interval for the gradient (between 3 and 100): '))

gradient(userColor, userInterval)