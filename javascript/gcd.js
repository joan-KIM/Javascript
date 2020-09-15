function gcd(a,b){
    let answer = 0;
    let j = 0;

    if (a > b) {
        j = b;
    } else {
        j = a;
    }

    for (i = 1; i <= j; i++){
        if (a % i == 0 && b % i == 0){
            answer = i;
        }
    }

    return answer;
}

function multiGcd() {
    let answer = gcd(arguments[0], arguments[1])
    for (let i = 2; i < arguments.length; i++){
        answer = gcd(answer, arguments[i])
    }
    return answer;
}

console.log(gcd(2,24))
console.log(multiGcd(16,24,8))

// module.exports = {gdc, multiGdc}