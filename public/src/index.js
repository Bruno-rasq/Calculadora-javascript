let result = document.querySelector('#result');
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

        if (currentValue === "0") {
            currentValue = ''
        }

        currentValue += value

        result.innerHTML = currentValue
    })
});

clear_btn.addEventListener('click', () => {

    result.innerHTML = "0"
    currentValue = ""
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



keys.forEach((el) => {
    el.addEventListener('click', () => {

        console.log(el.value)

    })
})