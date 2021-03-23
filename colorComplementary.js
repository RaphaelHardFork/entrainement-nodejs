// Fonctions permmettant de trouver les couleurs complémentaires

// Importation des packages
const chalk = require('chalk') //https://github.com/chalk/chalk
const readlineSync = require('readline-sync') //https://github.com/anseki/readline-sync 

// Importation des fonctions
const convert = require('./colorConversion')

// Couleur opposée
const opposite = (color) => {
  console.log(chalk.rgb(convert.hexToRgb(color)[0], convert.hexToRgb(color)[1], convert.hexToRgb(color)[2])(color))
  let hsl = convert.hexToHsl(color)
  hsl[0] = (hsl[0] + 180) % 360
  console.log(chalk.hsl(hsl[0], hsl[1], hsl[2])(convert.hslToHex(hsl[0], hsl[1], hsl[2])))
  return convert.hslToHex(hsl[0], hsl[1], hsl[2])
}

console.log(opposite('#AA45EE'))