import {
Addition, multiplication, division,
subtraction, percent, backspace,
} from "./operators.js";

//
const result = document.querySelector('#result');
const Equal_btn = document.querySelector('#equal-btn');

const backspace_btn = document.querySelector('.backspace');
const clear_btn = document.querySelector('.clear');
const opposite_btn = document.querySelector('#opposite');

const Numbers = document.querySelectorAll('.number');
const keys = document.querySelectorAll('.keys_operators');


// variaveis auxiliares
let currentValue = "0";
let first = false;
let second = false;
let operator = null;
let values = [];


// Capturando valores
Numbers.forEach((NumberKey) => {
    NumberKey.addEventListener('click', () => {
        let value = NumberKey.value;

        if (currentValue.length < 8) {

            if (currentValue === "0") {
                currentValue = ''
            }

            currentValue += value
            result.innerHTML = currentValue

        }

        //Debug
        console.log(currentValue, values, operator, first, second)
    })
})


//Capturando operadores inseridos
keys.forEach((OperatorKey) => {
    OperatorKey.addEventListener('click', () => {
        operator = OperatorKey.value;

        if (!first) {
            first = true
            values.push(Number(currentValue))

        } else if (first) {
            second = true

        } else if (first && second) {
            values.push(Number(currentValue))
            responseCalc(values, operator)

        }
        currentValue = "0"

        //Debug
        console.log(currentValue, values, operator, first, second)
    })
})


//botão de inicilização do calculo
Equal_btn.addEventListener('click', () => {

    if (values.length === 0) {
        result.innerHTML = currentValue

    } else if (values.length === 1 && currentValue === '0') {
        result.innerHTML = values[0]

    } else if (values.length === 1 && currentValue != '0') {
        values.push(Number(currentValue))

        //Debug
        console.log(currentValue, values, operator, first, second)

        responseCalc(values, operator)
    }
})


//calculando...
const responseCalc = (arr, op) => {

    let n1 = arr.shift()
    let n2 = arr.shift()
    let operatorCalc = op

    const Operations = {
        '+': Addition(n1, n2),
        '-': subtraction(n1, n2),
        'x': multiplication(n1, n2),
        '/': division(n1, n2),
        '%': percent(n1, n2)
    }
    
    let response = Operations[operatorCalc]

    values.push(Number(response))
    result.innerHTML = `${response}`

    currentValue = "0"
    second = false
    operator = null


    //Debug
    console.log(currentValue, values, operator, first, second)
}



//limpando operações e valores
clear_btn.addEventListener('click', () => {

    currentValue = "0"
    result.innerHTML = currentValue

    values.length = 0
    operator = null
    first = false
    second = false

    //Debug
    console.log(currentValue, first, second, values)
})

backspace_btn.addEventListener('click', () => {

    let newValue = backspace(currentValue)
    result.innerHTML = newValue
    currentValue = newValue

    //Debug
    console.log(currentValue, first, second, values)
})


opposite_btn.addEventListener('click', () => {

    if (values.length === 0) {
        let aux = Number(currentValue)
        let opposite = aux > 0 ? -aux : Math.abs(aux);

        currentValue = `${opposite}`
        result.innerHTML = currentValue

    } else {
        let aux = Number(values[0])
        let opposite = aux > 0 ? -aux : Math.abs(aux);

        values[0] = opposite
        result.innerHTML = values[0]
    }

})