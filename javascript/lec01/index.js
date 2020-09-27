// import {gcd, multiGcd, euclidGcd, rec_euclidGcd} from './gcd.js';
// import {calcAnd, calcOr, calcNot} from './week01.js';
import {toBinary, toDecimal, rec_toBinary, rec_toDecimal} from './week01-2.js';

// 결과 확인할 내용을 main() 안에 작성

export function main(){
    // console.log(toBinary(11));
    // console.log(rec_toBinary(11));
    console.log(toDecimal([1,0,0,1]));
    console.log(rec_toDecimal([1,0,0,1]));
    console.log(toDecimal([1,1,1]));
    console.log(rec_toDecimal([1,1,1]));


    /*
    console.log(gcd(3, 12) ===3);
    console.log(multiGcd(16, 24, 8) === 8 );
    console.log(euclidGcd(3,9) === 3);
    console.log(euclidGcd(10,4) === 2);
    console.log(euclidGcd(16,72) === 8);
    console.log(rec_euclidGcd(10,20));
    */

    /*
    console.log(calcAnd(true, true) === true)
    console.log(calcOr(1,0) === true)
    console.log(calcNot(true))
    console.log(calcNot(0))
    */
}