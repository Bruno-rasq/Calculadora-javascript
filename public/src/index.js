import { Addition, multiplication, division, 
         subtraction, percent, backspace } from "./operators.js";

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
let value;
let operator;
let values = [];


// capturando valores inseridos
Numbers.forEach((el) => {
    el.addEventListener('click', () => {
        value = el.value;

        if (currentValue.length < 8) {

            if (currentValue === "0") {
                currentValue = ''
            }

            currentValue += value

            result.innerHTML = currentValue
        }

        //Debug
        console.log(currentValue, first, second, values)
    })
})


//limpando operações e valores
clear_btn.addEventListener('click', () => {

    result.innerHTML = "0"
    currentValue = "0"

    values.length = 0
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

    // inserir codigo de troca de sinal em currentCalue
    console.log('clicou!')

})


// capturando operadores inseridos
keys.forEach((el) => {
    el.addEventListener('click', () => {

        operator = el.value;

        if (!first) {

            first = true
            values.push(currentValue)
            values.push(operator)
            currentValue = "0"

        } else if (first) {

            if (values.length === 1) {
                values.push(operator)
                values.push(currentValue)

            } else {
                values.push(currentValue)

            }

            second = true
            currentValue = "0"
            responseOperator()
        }


        //Debug
        console.log(currentValue, first, second, values)

    })
})

// exibir resultado após pressionar botão de igual
Equal_btn.addEventListener('click', () => {

    if (values.length === 1) {
        result.innerHTML = values[0]

    } else if (values.length === 2) {
        values.push(currentValue)
        currentValue = "0"
        responseOperator()

    } else {
        responseOperator()
    }

    //Debug
    console.log(currentValue, first, second, values)
})

const responseOperator = () => {

    let n1 = Number(values.shift())
    let operator = values.shift()
    let n2 = Number(values.shift())

    let response;
    switch (operator) {
        case '+':
            response = Addition(n1, n2);
            break;

        case '-':
            response = subtraction(n1, n2);
            break;

        case '/':
            response = division(n1, n2);
            break;

        case 'x':
            response = multiplication(n1, n2);
            break;

        case '%':
            response = percent(n1, n2);
            break;

        default:
    }

    currentValue = "0"
    values.length = 0
    values.push(`${response}`)
    first = false
    second = false

    result.innerHTML = response
}