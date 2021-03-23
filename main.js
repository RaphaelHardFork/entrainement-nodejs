/* Ce programme sert à définir un gradient de couleur avec une couleurs
entrante et permet de trouver les couleurs complémentaires */

// Message d'introduction
console.log(`\
+-----------------------------------------------+
|                                               |
|         Welcome to the Color Finder           |
|                                               |
+-----------------------------------------------+

You can input the following options to input your color in the format you want:
    RGB format: -rgb
    HSL format: -hsl
    HEX format: -hex (option by default)
    
Press x to exit.

`)


// Gestion des erreurs
let option
if (process.argv.length === 2) {
  option = '-hex'
} else if (process.argv[2] !== '-rgb' && process.argv[2] !== '-hsl' && process.argv[2] !== '-hex') {
  option = '-hex'
  console.log('You enter the wrong argument among: -hex / -rgb / -hsl\nBy default you are in the -hex option')
} else {
  option = process.argv[2]
}

// Importation des packages
const chalk = require('chalk') //https://github.com/chalk/chalk
const readlineSync = require('readline-sync') //https://github.com/anseki/readline-sync 

// Importation des fonctions
const convert = require('./colorConversion')
const { gradient } = require('./colorGradient')
const choice = require('./colorOption')




// input de la couleur en fonction de l'option
switch (option) {
  case '-rgb':
    userColor = choice.rgbChoice()
    userColor = convert.rgbToHex(userColor)
    break
  case '-hsl':
    userColor = choice.hslChoice()
    userColor = convert.hslToHex(userColor[0], userColor[1], userColor[2])
    break
  default:
    userColor = choice.hexChoice()
    // Exit
    if (userColor === 'x' || userColor === 'X') {
      process.exit(0)
    }
}


// Choix de l'utilisateur avec sa couleur

// Gradient
gradient(userColor)
// Couleurs complémentaires

