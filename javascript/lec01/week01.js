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
    const [sum, carry1] = halfAdder(a,b);
    const [sumOut, carry2] = halfAdder(c,sum);
    const carryOut = Number(calcOr(carry1, carry2));
    return [sumOut, carryOut];
}

// 4. 이진수 덧셈

/* toBinary가 고정길이 배열을 반환할
export function toBinary(dec){
    let answer = [0,0,0,0,0,0,0,0];
    let i = 0;

    while(dec){
        let r = dec % 2;
        dec = Math.floor(dec/2);
        answer[i]=r;
        i++;
    }

    return answer;
}
*/

export function toBinary(dec){
    let answer = [];

    while(dec){
        let r = dec % 2;
        dec = Math.floor(dec/2);
        answer.push(r);
    }

    return answer;
}

// 수 읽는법 오른쪽 -> 왼쪽
export function addBinary(arr1, arr2){
    const length = (arr1.length >= arr2.length) ? arr1.length : arr2.length;
    const answer = [];
    let [sum, carry] = [0,0];

    for (let i = 0; i < length; i++){
        if (carry){
            [sum, carry] = fullAdder(arr1[i], arr2[i], carry);
        }else{
            [sum, carry] = halfAdder(arr1[i], arr2[i]);
        }
        answer.push(sum);
    }

    if (carry) {
        answer.push(carry);
    }

    return answer;
}

// 고정크기의 배열일 경우
export function addBinary2(arr1, arr2){
    const answer = [];
    let [sum, carry] = [0,0];

    for (let i = 0; i < 8; i++){
        if (carry){
            [sum, carry] = fullAdder(arr1[i], arr2[i], carry);
        }else{
            [sum, carry] = halfAdder(arr1[i], arr2[i]);
        }
        answer.push(sum);
    }

    // if (carry) {
    //     answer.push(carry);
    // }

    return answer;
}

export function addBinary3(arr1, arr2){
    let length;
    let answer = [];

    if(arr1.length <= arr2.length) {
        length = arr1.length;
        answer = arr2;
    } else{
        length = arr2.length;
        answer = arr1;
    } 

    let [sum, carry] = [0,0];

    for (let i = 0; i < length; i++){
        [sum, carry] = fullAdder(arr1[i], arr2[i], carry);
        answer[i] = sum;
    }

    for (let i = length; carry = 0; i++){
        [sum, carry] = halfAdder(answer[i], carry);
        answer[i] = sum;
    }

    if (carry){
        answer.push(carry);
    }

    return answer;
}