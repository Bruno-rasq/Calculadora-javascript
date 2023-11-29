function DecimalVerification (num){

    if(Number.isInteger(num)){
        return num

    } else {

        let aux = `${num}`
        let [int, float] = aux.split('.')

        let floatAux = []
        let A = float.split('')
        for(let i = 0; i < 3; i++){
            if(A[i] != null || A[i] != undefined){
                floatAux.push(A[i])
            }
        }

        let response = `${int[0]}.${floatAux.join('')}`
        return response
    } 
}


export const Addition = (n1, n2) => {

    if(Number.isInteger(n1 + n2)){
        return n1 + n2
    } else {

        let aux = (n1 + n2)
        let response = DecimalVerification(aux)
        return response
    }
};

export const subtraction = (n1, n2) => {

    if(Number.isInteger(n1 - n2)){
        return n1 - n2
    } else {
        
        let aux = (n1 - n2)
        let response = DecimalVerification(aux)
        return response
    }
};

export const multiplication = (n1, n2) => {

    if(Number.isInteger(n1 * n2)){
        return n1 * n2
    } else {
        
        let aux = (n1 * n2)
        let response = DecimalVerification(aux)
        return response
    }
};

export const division = (n1, n2) => {

    if(Number.isInteger(n1 / n2)){
        return n1 / n2
    } else {
        
        let aux = (n1 / n2)
        let response = DecimalVerification(aux)
        return response
    }
    
};

export const percent = (n1, n2) => {

    if(Number.isInteger(((n2 * n1)/100))){
        return ((n2 * n1)/100)
    } else {
        
        let aux = ((n2 * n1)/100)
        let response = DecimalVerification(aux)
        return response
    }
};