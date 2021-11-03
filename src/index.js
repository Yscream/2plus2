// connect js library to html
import Decimal from 'decimal.js'

// func which will detect errors in input
function error(event) {
    const input = event.target
    const errorDiv = input.nextSibling

    const value = Number(input.value)
    if (!isFinite(value)) {
        errorDiv.innerHTML = 'This is not number'
    }
    if (value === 0 || value) {
        errorDiv.innerHTML = ''
    }
    if (input.value.includes(' ')) {
        errorDiv.innerHTML = 'This is not number'
    }
}

// func which will be sum two arguments from inputs;
function sum() {
    const x = Number(document.getElementById('firstInput').value)
    const y = Number(document.getElementById('secondInput').value)
    if (!isFinite(x) || !isFinite(y)) {
        document.querySelector('.result').innerHTML = 'This is not number'
    } else {
        document.querySelector('.result').innerHTML = Decimal.sum(x, y)
    }
    if (
        document.getElementById('firstInput').value.includes(' ') ||
        document.getElementById('secondInput').value.includes(' ')
    ) {
        document.querySelector('.result').innerHTML = 'This is not number'
    }
}

// create a fucn to load HTML-elements
function ready() {
    // create first input
    const firstInput = document.createElement('input')
    firstInput.id = 'firstInput'
    firstInput.addEventListener('input', error)
    document.body.append(firstInput)

    // create first div for error-message
    const firstDiv = document.createElement('div')
    firstDiv.classList.add('error-message1')
    document.body.append(firstDiv)

    // create second input
    const secondInput = document.createElement('Input')
    secondInput.id = 'secondInput'
    secondInput.addEventListener('input', error)
    document.body.append(secondInput)

    // create second div for error-message
    const secondDiv = document.createElement('div')
    secondDiv.setAttribute('class', 'error-message2')
    document.body.append(secondDiv)

    // create button
    const button = document.createElement('button')
    button.textContent = 'Count'
    button.addEventListener('click', sum)
    button.id = 'button'
    document.body.append(button)

    // create third div for result
    const thirdDiv = document.createElement('div')
    thirdDiv.setAttribute('class', 'result')
    document.body.append(thirdDiv)
}

window.addEventListener('DOMContentLoaded', ready)
