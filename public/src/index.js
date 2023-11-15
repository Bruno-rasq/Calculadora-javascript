import { Addition, multiply, division, substration, backspace } from "./operators.js";

//
const result = document.querySelector('#result');
const Equal_btn = document.querySelector('#equal-btn');

const backspace_btn = document.querySelector('.backspace');
const clear_btn = document.querySelector('.clear');

const Numbers = document.querySelectorAll('.number');
const keys = document.querySelectorAll('.keys_operators');


// variaveis auxiliares
let currentValue = "0"
let first = false
let second = false
let value;
let operator;
let values = []


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
    })
});

//limpando operações e valores
clear_btn.addEventListener('click', () => {

    result.innerHTML = "0"
    currentValue = ""

    values.length = 0
    first = false
    second = false
})

backspace_btn.addEventListener('click', () => {

    let newValue = backspace(currentValue)
    result.innerHTML = newValue

    currentValue = newValue
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

        } else {
            second = true

            values.push(currentValue)
            currentValue = "0"
        }

        if (first === true && second === true) {

            let n1 = Number(values.shift())
            let operator = values.shift()
            let n2 = Number(values.shift())

            let response;
            switch (operator) {
                case '+':
                    response = Addition(n1, n2);
                    break;

                case '-':
                    response = substration(n1, n2);
                    break;

                case '/':
                    response = division(n1, n2);
                    break;

                case 'x':
                    response = multiply(n1, n2);
                    break;

                default:
            }

            currentValue = "0"
            result.innerHTML = response
            values.length = 0
            values.push(response)

            second = false
        }

    })
});

// exibir resultado após pressionar botão de igual
Equal_btn.addEventListener('click', () => {

    values.push(currentValue)

    let n1 = Number(values.shift())
    let operator = values.shift()
    let n2 = Number(values.shift())

    let response;
    switch (operator) {
        case '+':
            response = Addition(n1, n2);
            break;

        case '-':
            response = substration(n1, n2);
            break;

        case '/':
            response = division(n1, n2);
            break;

        case 'x':
            response = multiply(n1, n2);
            break;

        default:
    }

    currentValue = "0"
    result.innerHTML = response
    values.length = 0
    values.push(response)

    second = false

});