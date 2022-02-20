function timeout(fn, delay){
    const startTime = Date.now();
    const delayTime = startTime + delay;
    while(Date.now() < delayTime){

    }
    fn();
}

setTimeout(()=>console.log('hi1'), 0)
timeout(()=> console.log('hi'), 0);

