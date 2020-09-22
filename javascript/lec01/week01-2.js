// 3. 진수변환
export function binaryNum(a){
    let answer = [];

    while(a != 1){
        let r = a % 2;
        a = a / 2;
        answer.unshift(r);
    }

    answer.unshift(1);
    
    return answer;
}
