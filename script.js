let name = prompt('What is your name?')
alert('Nice to meet you ' + name)

const joinBand = confirm(
  'Do you want to be in my band? Click OK for yes or Cancel for no.'
)
if (joinBand === true) {
  alert('Great!')
  let instrumentChoice = prompt('Do you want to play guitar, bass or drums?')
  switch (instrumentChoice) {
    case 'guitar':
      let numberOfGuitarStrings = prompt(
        'Do you want six strings or twelve strings?'
      )
      if (numberOfGuitarStrings === 'six') {
        alert('Sweet.')
      } else {
        alert('We are not a folk band')
      }
      break
    case 'bass':
      let numberOfBassStrings = prompt('Do you want 4, 5 or 6 strings?')
      if (parseInt(numberOfBassStrings) > 4) {
        alert('Sorry. We are not a prog rock band.')
      } else {
        alert('Nice.')
      }
      break
    case 'drums':
      let bigBadDrums = prompt('Are you any good?')
      if (bigBadDrums === 'yes') {
        alert('Good drummers are hard to find.')
      } else {
        alert('Do you have the number of a good drummer?')
      }
      break
  }
} else {
  alert('Too bad.')
}
