export const Addition = (n1, n2) => {

    let aux = (n1 + n2)
    return aux
};

export const subtraction = (n1, n2) => {

    let aux = (n1 - n2)
    return aux
};

export const multiplication = (n1, n2) => {

    let aux = (n1 * n2)
    return aux
};

export const division = (n1, n2) => {

    let aux = (n1 / n2);
    if( aux % 2 === 0){
        return aux
    } else {
        return `${aux.toFixed(3)}` 
    }
    
};

export const percent = (n1, n2) => {

    let aux = ((n2 * n1)/100)
    return aux
};

export const backspace = (current) => {

    if (current !== "0") {

        let split = current.split('')
        split.pop();

        let response = split.length === 0 ? "0" : split.join('');

        return response;

    } else {

        return "0"
    }
};