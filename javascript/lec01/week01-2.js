// 3. 진수변환
export function toBinary(a){
    let answer = [];

    while(a != 1){
        let r = a % 2;
        a = a / 2;
        answer.unshift(r);
    }
    
    answer.unshift(1);

    return answer;
}

export function toDecimal(binaryArr){
    let answer = 0;

    for(let i=0; i < binaryArr.length; i++){
        answer += binaryArr[i] * (2 ** (binaryArr.length-1-i) );
    }

    return answer;
}