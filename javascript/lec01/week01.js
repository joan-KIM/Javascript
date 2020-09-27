// 1. 논리연산자 
export const calcAnd = (a,b) => Boolean(a*b);
export const calcOr = (a,b) => Boolean(a+b);
export const calcNot = a => a? false:true;

// 2. 전가산기 반가산기

function calcXor(a,b){
    return Number(calcOr(calcAnd(a,calcNot(b)), calcAnd(calcNot(a),b)));
}


export function halfAdder(a,b) {
    const sum = calcXor(a,b);
    const carry = Number(calcAnd(a,b));
    return [sum, carry];
}

export function fullAdder(a,b,c) {
    let sum, sumOut, carry1, carry2, carryOut;
    [sum, carry1] = halfAdder(a,b);
    [sumOut, carry2] = halfAdder(c,sum);
    carryOut = Number(calcOr(carry1, carry2));
    return [sumOut, carryOut];
}