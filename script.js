let firstValue = '2'
let secondValue = '2'
let operator = '*'

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
