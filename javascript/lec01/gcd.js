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

export function euclidGcd(a,b){ 
    let tmp = 0;

    if(a < b){
        tmp = a;
        a = b;
        b = tmp;
    }

    while(b){
        let rmd = a % b;
        a = b;
        b = rmd;
    }

    return a;
}

export function rec_euclidGcd(a,b){
    if(a < b){
        [a,b] = [b,a]
    }

    if (b==0){
        return a;
    } else{
        return rec_euclidGcd2(b, a%b);
    }

    // return (b==0)?a:rec_euclidGcd(b, a%b);
}