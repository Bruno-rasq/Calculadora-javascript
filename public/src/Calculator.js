//Importando operações matematicas 
import {
    Addition, multiplication, division,
    subtraction, percent,
} from "./operators.js";


//
const result = document.querySelector('#result');
const historyCalc = document.querySelector('.history');
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
let history = '';


//Debug...
const Debug = () => {

    const debug = [
        `${currentValue}`,
        `${values}`,
        `${operatorsKey}`,
        `${first}`,
        `${second}`,
        `${history}`
    ]

    console.log(debug.join('\n'))
}

//calculando...
const Calc = (num1, num2, op) => {

    let n1 = num1
    let n2 = num2
    let operatorCalc = op

    const Operations = {
        '+': Addition(n1, n2),
        '-': subtraction(n1, n2),
        'x': multiplication(n1, n2),
        '/': division(n1, n2),
        '%': percent(n1, n2)
    }

    let response = Operations[operatorCalc]

    //100,000,000
    if(response > 100000000) return `Erro.`
    else return response
}

//Limpar...
const Clear = () => {
    currentValue = "0"
    result.innerHTML = currentValue
    history = ''
    historyCalc.innerHTML = history

    values.length = 0
    operatorsKey.shift()

    first = false
    second = false
}

//limpar ultimo digito...
const backspace = (current) => {

    if (current !== "0") {

        let split = current.split('')
        split.pop();

        let response = split.length === 0 ? "0" : split.join('');

        return response;

    } else {

        return "0"
    }
}

//Adicionar valor ao valor corrente...
const AddCurrentInValues = () => {
    values.push(Number(currentValue))
}

// exibição de erro...
const Erro = () => {
    result.innerHTML = 'Erro.'
    history = ''
}

const num = (value) => {
    if (currentValue.length < 8) {

        if (currentValue === "0") currentValue = ''

        currentValue += value
        result.innerHTML = currentValue
    }
}

const backspaceFunc = () => {
    let newValue = backspace(currentValue)
    result.innerHTML = newValue
    currentValue = newValue
}

const key = (key) => {

    operatorsKey.push(key);

    if(history === '') history = `${currentValue} ${key}`
        else history += ` ${key}`
        historyCalc.innerHTML = history


        if (!first) {
            first = true
            AddCurrentInValues()

        } else if (first && !second && currentValue != '0') {
            second = true
            AddCurrentInValues()

        }

        if (operatorsKey.length >= 2) {

            let n1 = values.shift()
            let n2 = values.shift()
            let op = operatorsKey.shift()
            let response = Calc(n1, n2, op)

            if(response != 'Erro.') {

                result.innerHTML = response
                values.push(response)
                first = true
                second = false
                
            } else {
    
                Clear()
                Erro()
            }

        }

        currentValue = '0'
}

const equal = () => {

    if (values.length === 0) result.innerHTML = currentValue

    if (values.length === 1 && currentValue === '0') result.innerHTML = values[0]

    if (values.length === 1 && currentValue != '0') {

        AddCurrentInValues()

        let n1 = values.shift()
        let n2 = values.shift()
        let op = operatorsKey.shift()
        let response = Calc(n1, n2, op)

        if(response != 'Erro.') {

            Clear()

            result.innerHTML = response
            values.push(response)
            first = true

            history += `${n1} ${op} ${n2} =`
            historyCalc.innerHTML = history
            history = `${response}`

        } else {

            Clear()
            Erro()
        }


    }
}



// Capturando valores numericos
Numbers.forEach((NumberKey) => {
    NumberKey.addEventListener('click', () => {
        let value = NumberKey.value;

       num(value)

        // Debug()
    })
})


// limpa o ultimo digito inserido
backspace_btn.addEventListener('click', () => {

    backspaceFunc()

    // Debug()
})


//Capturando operadores inseridos
keys.forEach((OperatorKey) => {
    OperatorKey.addEventListener('click', () => {

        key(OperatorKey.value)

        // Debug()
    })
})


// Limpando tudo
clear_btn.addEventListener('click', () => {

    Clear()
    operatorsKey.length = 0

    // Debug()
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

    // Debug()
})


//botão de inicilização do calculo
Equal_btn.addEventListener('click', () => {

    equal()

    // Debug()
})


const KeyMapper = {

    '0': () => num('0'),
    '1': () => num('1'),
    '2': () => num('2'),
    '3': () => num('3'),
    '4': () => num('4'),
    '5': () => num('5'),
    '6': () => num('6'),
    '7': () => num('7'),
    '8': () => num('8'),
    '9': () => num('9'),
    'Backspace': () => backspaceFunc(),
    '+': () => key('+'),
    '-': () => key('-'),
    '/': () => key('/'),
    '*': () => key('x'),
    'Enter': () => equal(),
    '=': () => equal()
}


document.onkeydown = (event) => {

    event.preventDefault()

    let key = event.key
    KeyMapper[key]()
}