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
let value;
let first = false;
let second = false;
let operator = null;
let values = [];


// Capturando valores
Numbers.forEach((NumberKey) => {
    NumberKey.addEventListener('click', () => {
        value = NumberKey.value;

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
});


//Capturando operadores inseridos
keys.forEach((OperatorKey) => {
    OperatorKey.addEventListener('click', () => {
        operator = OperatorKey.value;

        if (!first) {
            values.push(currentValue)
            first = true

        } else if (first) {
            second = true
            
        } else if(first && second){
            values.push(currentValue)
            responseCalc(values, operator)
            operator = null

        }
        currentValue = "0"

        //Debug
        console.log(currentValue, first, second, values, operator)

    })
});


//botão de inicilização do calculo
Equal_btn.addEventListener('click', () => {

    if (values.length === 0) {
        result.innerHTML = currentValue

    } else if (values.length === 1){
        values.push(currentValue)

        //Debug
        console.log(currentValue, first, second, values)

        responseCalc(values, operator)
        operator = null
    }
});


//calculando...
const responseCalc = (arr, op) => {

    let n1 = Number(arr.shift())
    let n2 = Number(arr.shift())
    
    let operatorCalc = op

    let response;
    switch (operatorCalc) {
        
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

    values.push(`${response}`)
    result.innerHTML = response

    currentValue = "0"
    second = false
};




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

    // inserir codigo de troca de sinal em currentCalue
    console.log('clicou!')

})