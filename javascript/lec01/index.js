import {gcd, multiGcd} from './gcd.js';

// 결과 확인할 내용을 main() 안에 작성

export function main(){
    console.log(gcd(3, 12) ===3);
    console.log(multiGcd(16, 24, 8) === 8 );
}