// Fonctions appliquées après le choix de l'option

// Importation des packages
const readlineSync = require('readline-sync')


// Choix RGB
const rgbChoice = () => {
  let colorChoosed = false

  while (!colorChoosed) {
    userColor = readlineSync.question('Choose rgb value between 0 and 255 in the following format => red,green,blue: ')
    // Exit
    if (userColor === 'x' || userColor === 'X') {
      process.exit(0)
    }
    // Verification de l'input
    userColor = userColor.split(',').map((elem) => Number(elem))
    let total = userColor[0] + userColor[1] + userColor[2]
    let isNumber = true
    for (let elem of userColor) {
      if (isNaN(elem)) {
        isNumber = false
      }
    }

    if (userColor.length !== 3 || total > 765 || total < 0 || !isNumber) {
      console.log(`You enter a wrong value. Please follow the right format.\nTo exit press X\n`)
    } else {
      colorChoosed = true
    }
  }
  return userColor
}


// Choix HSL
const hslChoice = () => {
  let colorChoosed = false

  while (!colorChoosed) {
    userColor = readlineSync.question('Choose h value between 0~360, s & l value between 0~1 in the following format => h,s,l: ')
    // Exit
    if (userColor === 'x' || userColor === 'X') {
      process.exit(0)
    }
    // Verification de l'input
    userColor = userColor.split(',').map((elem) => Number(elem))
    isNumber = true
    for (let elem of userColor) {
      if (isNaN(elem)) {
        isNumber = false
      }
    }
    if (userColor[0] > 360 || userColor[1] > 100 || userColor[2] > 100 || !isNumber) {
      console.log(`You enter a wrong value. Please follow the right format.\nTo exit press X\n`)
    } else {
      colorChoosed = true
    }
  }
  return userColor
}


// Choix HEX
const hexChoice = () => {
  let colorChoosed = false

  while (!colorChoosed) {
    userColor = readlineSync.question('Choose a color in the #------ format: #')
    // Exit
    if (userColor === 'x' || userColor === 'X') {
      process.exit(0)
    }
    // Verification de l'input
    userColor = userColor.split('')
    isNumber = true
    userColor.map((elem) => {
      if (isNaN(parseInt(elem, 16))) {
        isNumber = false
      }
    })
    if (userColor.length !== 6 || !isNumber) {
      console.log(`You enter a wrong value. Please follow the right format.\nTo exit press X\n`)
    } else {
      colorChoosed = true
    }
  }
  return '#' + userColor.join('')
}

// Exportation des fonctions
exports.rgbChoice = rgbChoice
exports.hslChoice = hslChoice
exports.hexChoice = hexChoice