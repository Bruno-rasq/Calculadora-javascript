let result = document.querySelector('#result');

// operators btn
let multiply_btn = document.querySelector('.multiply');
let subtraction_btn = document.querySelector('.subtraction');
let addition_btn = document.querySelector('.addition');
let division_btn = document.querySelector('.division');
let Equal_btn = document.querySelector('.equal');

let Percent_btn = document.querySelector('.percent');
let opposite_btn = document.querySelector('.opposite');
let backspace_btn = document.querySelector('.backspace');
let clear_btn = document.querySelector('.clear');
let floatpoint_btn = document.querySelector('.float-point');

// 
let Numbers = document.querySelectorAll('.number')

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

// opposite_btn.addEventListener('click', () => {

//     let newValue = opposite(currentValue)
//     result.innerHTML = newValue

//     currentValue = newValue
// })

// const opposite = (current) => {

//     if(current !== "0"){

//         let stgToNumber = Number(current)

//         if(stgToNumber > 0){
//             return -stgToNumber
//         } else {
//             return Math.abs(stgToNumber)
//         }

//     } else {
//         return "0"
//     }
// };