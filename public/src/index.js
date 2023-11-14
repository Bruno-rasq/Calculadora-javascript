let result = document.querySelector('#result');
let Equal_btn = document.querySelector('#equal-btn');

let backspace_btn = document.querySelector('.backspace');
let clear_btn = document.querySelector('.clear');

let Numbers = document.querySelectorAll('.number');
let keys = document.querySelectorAll('.keys_operators');


//

let currentValue = "0"
let first, second = false

let value;
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


const backspace = (current) => {

    if (current !== "0") {

        let split = current.split('')
        split.pop();

        let response = split.length === 0 ? "0" : split.join('');

        return response;

    } else {

        return "0"
    }
};


let values = []

// key operators
let operator;
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
            values.push(operator)
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

            first = false
            second = false
        }

    })
});

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

    first = false
    second = false

    console.log(values)
});



// Math operators

const Addition = (n1, n2) => {
    return n1 + n2
};

const substration = (n1, n2) => {
    return n1 - n2
};

const multiply = (n1, n2) => {
    return n1 * n2
};

const division = (n1, n2) => {
    return Math.round(n1 / n2)
};