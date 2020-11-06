function a() {
    a2();
    myThis.a2();
}

function a2() {
    console.log(this)
    a3();
}

const myThis = {
    c: 30, 
    a2: a2
}

function a3() {
    a4();
}
function a4() {
    a5();
}
function a5() {
    a6();
}
function a6() {
    a7();
}
function a7() {
    a8();
}
function a8() {
    a9();
}

function a9() {
    a10();
}

function a10() {
    
}

a();        // 전역에서 호출 

console.log(this);

/* 

전역 컨텍스트 -> 첫번째줄부터 해석해왔으니까, a ... a10 함수가 무엇인지 알고있음.
a를 호출 -> a로 이동 -> 이 때, 함수 컨텍스트가 생김.

*/
//node환경과 브라우저 환경을 나눠서 실행해야할때..
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis

/*

3) 전역 컨텍스트의 this ==> node 환경이라면 global, 브라우저 환경이라면 window
globalThis

나를 실행하는 


*/

const obj = {};

function outer() {
    var aaa = 10;
    
    function inner() {
        aaa = aaa+1;
    }
    obj.inner = inner;
}

outer();

obj.inner();

// 꼭 return 을 의미하는 것은 아님

