// Fonction permettant de créer le gradient de couleur

// Import des packages
const chalk = require('chalk') //https://github.com/chalk/chalk
const readlineSync = require('readline-sync') //https://github.com/anseki/readline-sync 

// Import des fonctions
const { rgbToHsl } = require('./colorConversion')
const { hslToRgb } = require('./colorConversion')
const { hexToRgb } = require('./colorConversion')
const { hexToHsl } = require('./colorConversion')


// La fonction
const gradient = (color) => {

  // Reconversion de la couleur HEX en HSL
  let h = hexToHsl(color)[0]
  let s = hexToHsl(color)[1]

  // Choix de la longueur du gradient
  let intervalChoosed = false
  let interval
  while (!intervalChoosed) {
    interval = Number(readlineSync.question('Choose the length of the gradient (between 2 and 100): '))
    // Exit
    if (interval === 'x' || interval === 'X') {
      process.exit(0)
    }
    // Verification de l'input
    if (interval < 2 || interval > 100 || isNaN(interval)) {
      console.log('The length must be between 2 and 100.\nPress x to exit.\n')
    } else {
      intervalChoosed = true
    }
  }


  let step = Math.round(100 / interval)
  let colorString = ''

  // Génération du gradient
  for (let i = 0; i <= 100; i += step) {
    colorString = `#${hslToRgb(h, s, i)[0] < 16 ? '0' : ''}${((hslToRgb(h, s, i)[0]).toString(16))}\
${hslToRgb(h, s, i)[1] < 16 ? '0' : ''}${((hslToRgb(h, s, i)[1]).toString(16))}\
${hslToRgb(h, s, i)[2] < 16 ? '0' : ''}${((hslToRgb(h, s, i)[2]).toString(16))}`
    console.log(chalk.bgHsl(h, s, i)(colorString))
  }
}


// Exportation de la fonction
exports.gradient = gradient