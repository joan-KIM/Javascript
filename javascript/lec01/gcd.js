export function gcd(a,b){
    let answer = 0;
    let min = 0;

    if (a > b) {
        min = b;
    } else {
        min = a;
    }

    for (let i = 1; i <= min; i++){
        if (a % i == 0 && b % i == 0){
            answer = i;
        }
    }

    return answer;
}

export function multiGcd(...args) {
    let answer = gcd(args[0], args[1])
    for (let i = 2; i < args.length; i++){
        answer = gcd(answer, args[i])
    }
    return answer;
}
