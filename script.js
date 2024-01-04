let firstValue = '2'
let secondValue = '2'
let operator = '*'

let btnOne = document.querySelector('#button-1')
let btnTwo = document.querySelector('#button-2')
let btnThree = document.querySelector('#button-3')
let btnFour = document.querySelector('#button-4')
let btnFive = document.querySelector('#button-5')
let btnSix = document.querySelector('#button-6')
let btnSeven = document.querySelector('#button-7')
let btnEight = document.querySelector('#button-8')
let btnNine = document.querySelector('#button-9')
let btnZero = document.querySelector('#button-0')

function add(firstValue, secondValue) {
    const result = Number(firstValue) + Number(secondValue)
    return console.log(result)
}

function substract(firstValue, secondValue) {
    const result = Number(firstValue) - Number(secondValue)
    return console.log(result)
}

function multiply(firstValue, secondValue) {
    const result = Number(firstValue) * Number(secondValue)
    return console.log(result)
}

function divide(firstValue, secondValue) {
    const result = Number(firstValue) / Number(secondValue)
    return console.log(result)
}

function operate(firstValue, secondValue, operator) {
    if (operator == '+') {
        add(firstValue, secondValue)
    } else if (operator == '-') {
        substract(firstValue, secondValue)
    } else if (operator == '*') {
        multiply(firstValue, secondValue)
    } else if (operator == '/') {
        divide(firstValue, secondValue)
    }
}

operate(firstValue, secondValue, operator)
