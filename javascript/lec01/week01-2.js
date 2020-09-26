// 3. 진수변환
export function toBinary(dec){
    if (dec === 0) return [0]

    let answer = [];

    while(dec){
        let r = dec % 2;
        dec = Math.floor(dec/2);
        answer.unshift(r);
    }

    return answer;
}

// 수를 반드시 왼쪽에서 오른쪽으로 읽지 않아도 됨.
export function toDecimal(binaryArr){
    let answer = 0;

    for(let i=0; i < binaryArr.length; i++){
        answer += binaryArr[i] * (2 ** (binaryArr.length-1-i) );
    }

    return answer;
}