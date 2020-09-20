import {gcd, multiGcd, euclidGcd, rec_euclidGcd} from './gcd.js';

// 결과 확인할 내용을 main() 안에 작성

export function main(){
    // console.log(gcd(3, 12) ===3);
    // console.log(multiGcd(16, 24, 8) === 8 );
    
    // console.log(euclidGcd(3,9) === 3);
    // console.log(euclidGcd(10,4) === 2);
    // console.log(euclidGcd(16,72) === 8);

    console.log(rec_euclidGcd(10,45) === 5);
}