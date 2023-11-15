 export const Addition = (n1, n2) => {
    return n1 + n2
};

 export const substration = (n1, n2) => {
    return n1 - n2
};

 export const multiply = (n1, n2) => {
    return n1 * n2
};

 export const division = (n1, n2) => {
    return Math.round(n1 / n2)
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