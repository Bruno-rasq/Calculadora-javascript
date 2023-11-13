let result = document.querySelector('#result');

// operators btn
let multiply_btn = document.querySelector('.multiply');
let subtraction_btn = document.querySelector('.subtraction');
let addition_btn = document.querySelector('.addition');
let division_btn = document.querySelector('.division');
let Equal_btn = document.querySelector('.equal');

let Percent_btn = document.querySelector('.percent');
let negative_btn = document.querySelector('.negative');
let reset_btn = document.querySelector('.reset');
let resetALL_btn = document.querySelector('.resetALL');
let floatpoint_btn = document.querySelector('.float-point');

// 
let Numbers = document.querySelectorAll('.number')

let currentValue = ""
let first = false


let value;
Numbers.forEach((el) => {
    el.addEventListener('click', () => {
        value = el.innerHTML;

        if(currentValue === "0"){
            currentValue = ''
        }

        currentValue += value

        result.innerHTML = currentValue
    })
});

resetALL_btn.addEventListener('click', () => {

    result.innerHTML = "0"
    currentValue = ""
})

reset_btn.addEventListener('click', () => {

    let newValue = reset(currentValue)
    result.innerHTML = newValue

    currentValue = newValue
})

const reset = (current) => {

    if (current !== "0") {

        let split = current.split('')
        split.pop();

        let response = split.length === 0 ? "0" : split.join('');

        return response;

    } else {

        return "0"
    }
};
