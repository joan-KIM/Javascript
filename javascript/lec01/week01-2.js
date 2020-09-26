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

export function toDecimal(args){
    let answer = 0;
    let exp = args.length - 1;

    for(let i=0; i < args.length; i++){
        answer = answer + args[i] * (2 ** exp);
        exp--;
    }

    return answer;
}