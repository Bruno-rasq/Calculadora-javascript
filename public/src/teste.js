//Importando operações matematicas 
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
let first, second = false;
let operatorsKey = [];
let values = [];


//calculando...
const Calc = (arr, op) => {

    let n1 = arr.shift()
    let n2 = arr.shift()
    let operatorCalc = op.shift()

    const Operations = {
        '+': Addition(n1, n2),
        '-': subtraction(n1, n2),
        'x': multiplication(n1, n2),
        '/': division(n1, n2),
        '%': percent(n1, n2)
    }
    
    let response = Operations[operatorCalc]
    return response
};


// Capturando valores numericos
Numbers.forEach((NumberKey) => {
    NumberKey.addEventListener('click', () => {
        let value = NumberKey.value;

        if (currentValue.length < 8) {

            if (currentValue === "0") currentValue = ''

            currentValue += value
            result.innerHTML = currentValue
        }

        //Debug
        console.log(currentValue, values, operatorsKey, first, second)
    })
})


// limpa o ultimo digito inserido
backspace_btn.addEventListener('click', () => {

    let newValue = backspace(currentValue)
    result.innerHTML = newValue
    currentValue = newValue

    //Debug
    console.log(currentValue, values, operatorsKey, first, second)
})


//Capturando operadores inseridos
keys.forEach((OperatorKey) => {
    OperatorKey.addEventListener('click', () => {
        operatorsKey.push(OperatorKey.value);

        if(!first){
            first = true
            values.push(Number(currentValue))

        } else if(first && !second){
            second = true
            values.push(Number(currentValue))

        }

        if(operatorsKey.length >= 2){

            let  response = Calc(values, operatorsKey)

            result.innerHTML = response
            values.unshift(response)
            second = false
        }

        currentValue = '0'

        //Debug
        console.log(currentValue, values, operatorsKey, first, second)
    })
})


// Limpando tudo
clear_btn.addEventListener('click', () => {

    currentValue = "0"
    result.innerHTML = currentValue

    values.length = 0
    operatorsKey.length = 0

    first = false
    second = false

    //Debug
    console.log(currentValue, values, operatorsKey, first, second)
})


//Mudando valor de possitivo para negativo (vice-versa)
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

    //Debug
    console.log(currentValue, values, operatorsKey, first, second)
})


//botão de inicilização do calculo
Equal_btn.addEventListener('click', () => {

    if (values.length === 0) result.innerHTML = currentValue

    if (values.length === 1 && currentValue === '0') result.innerHTML = values[0]

    if (values.length === 1 && currentValue != '0') {
        values.push(Number(currentValue))
        
        let  response = Calc(values, operatorsKey)

        result.innerHTML = response
        values.length = 0
        values.push(response)
        
        operatorsKey.length = 0
        
        second = false
        
    }

    //Debug
    console.log(currentValue, values, operatorsKey, first, second)
})

