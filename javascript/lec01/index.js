import {gcd, multiGcd} from './gcd.js';

export function main(){
    console.log(gcd(3, 12) ===3);
    console.log(multiGcd(16, 24, 8) === 8 );
}