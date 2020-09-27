// 3. 진수변환
export function toBinary(dec){
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

export function rec_toBinary(dec){
   if (dec === 0 || dec === 1){
       return [dec];
   }else{
       return rec_toBinary(Math.floor(dec/2)).concat(dec%2);
   }  
}

// export const rec_toBinary = dec => (dec===0 || dec===1) ? [dec] : rec_toBinary(Math.floor(dec/2)).concat(dec%2);

export function rec_toDecimal(binaryArr){
    if (binaryArr.length === 0){
        return 0;
    }else{
        return binaryArr.shift() * (2 ** binaryArr.length) + rec_toDecimal(binaryArr);
    }
}