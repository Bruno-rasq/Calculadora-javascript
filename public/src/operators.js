export const Addition = (n1, n2) => {
    return n1 + n2
};

export const subtraction = (n1, n2) => {
    return n1 - n2
};

export const multiplication = (n1, n2) => {
    return n1 * n2
};

export const division = (n1, n2) => {
    return (n1 / n2)
};

export const percent = (n1, n2) => {
    return ((n2 * n1)/100)
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