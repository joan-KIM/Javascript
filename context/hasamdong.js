// 커피 주문하기
// 아메리카노 lv 1 1초

// 카라멜 마키아토 lv 2 2초

// 흑당 버블티 lv 3 3초

// 블루베리 요거트 스무디 lv 4 4초


// 주문이 들어와 여러개가 막들어와
// 1명이 주문도 받고 커피도 만들어야함

// 주문 들어온 순서대로 make 한다. 단, make를 이미 하고 있으면 안한다. = 이벤트루프
// 주문 요청 -> 커피 만들어주세요. (web API)
// 실제로 만드는거 = make 는 콜백함수
// 주문 들어온 순서대로 한다 = task Queue
// 단, make 하고 있으면 안한다 = 콜스택이 비워있지 않으면 큐에서 실행하지 않는다.
// 이벤트 루프는 setInterval(fn, 1000) 이거로 한다.

// 1. 주문이 들어온다. (구현 완료)
// 2. order : 큐에 주문 요청을 넣는다.
// 3. 커피루프(지금 커피를 만드는지 1초마다 확인하는 애)가 커피를 만들고 있는지 확인해서 안만들고 있으면 만들라고 한다.
// 4. make : 커피 만들라고 하면 만든다. n초 걸려서 만든 다음 완료목록에 넣는다.
// 5. 커피루프가 완료목록에 있는지 확인해서 완료되었으면 주문완료라고 한다.

const COFFEE_TIME = {
    '아메리카노': 1000,
    '카라멜 마키아토': 2000,
    '흑당 버블티': 3000,
    '블루베리 요거트 스무디': 4000
}

const orderQueue = [];
const completeQueue = [];

let isMaking;

function coffeeLoop() {
    setInterval(() => {
        // 만드는 중인지 확인
        if(!isMaking && orderQueue.length > 0){
            // 안만드는 중이면 orderQueue에서 하나 꺼내서 make 하라고 한다.
            const order = orderQueue.shift();

            // make 동작이 다 끝나고 push 해야함. 근데 make 함수가 비동기함수.
            make(order.coffee, (coffee)=> {
                completeQueue.push({name : order.name, coffee : coffee});
                console.log(coffee.menu + coffee.quantity + '제조완료');
            });
            
        }
        // 완료목록 확인해서 완료된거 있으면 완료됐다고 console 찍는다.
        if(completeQueue.length > 0){
            const completed = completeQueue.shift();
            console.log(`${completed.name}님 주문하신 ${completed.coffee.menu} ${completed.coffee.quantity} 나왔습니다.`)
        }
    }, 1000);
}


/**
 * 커피 만들기
 * @param {string} coffee.menu 커피 이름
 * @param {number} coffee.quantity 커피 수량
 */
// coffee, 제조 완료 됏을 때 동작할 함수(제조 완료 알려주는 함수)
function make(coffee, onComplete) {
    isMaking = true;
    const duration = COFFEE_TIME[coffee.menu] * coffee.quantity;
    console.log(coffee.menu + '제조시작');

    setTimeout(() => {
        isMaking = false;       
        onComplete(coffee);
    }, duration);
}

// jsdoc
/**
 * 커피 주문하기
 * @param {string} name 주문자
 * @param {Object} coffee 주문 커피
 * @param {string} coffee.menu 커피 이름
 * @param {number} coffee.quantity 커피 수량
 */
function order(name, coffee) {
    console.log(`${name}님이 ${coffee.menu} ${coffee.quantity}을 주문하셨습니다.`);
    orderQueue.push({name, coffee });
}

function main() {
    // 주문리스트
    /**
     * 0초 카라멜 마키아토 1잔
     * 1초 아메리카노 1잔
     * 3초 흑당 버블티 2잔
     * 5초 블루베리 요거트 스무디 1잔
     * 10초 아메리카노 4잔
     */
    let time = 0;
    coffeeLoop();
    const interval = setInterval(() => {
        console.log(time + '초');
        switch(time) {
            case 0: order('주문자 1', {menu: '카라멜 마키아토', quantity: 1}); break;
            case 1: order('주문자 2', {menu: '아메리카노', quantity: 1}); break;
            case 3: order('주문자 3', {menu: '흑당 버블티', quantity: 2}); break;
            case 5: order('주문자 4', {menu: '블루베리 요거트 스무디', quantity: 1}); break;
            case 10: order('주문자 5', {menu: '아메리카노', quantity: 4}); break;

            case 20: clearInterval(interval); console.log('영업 종료'); process.exit();
            default: break;
        }
        time++;
    }, 1000);
}

main();