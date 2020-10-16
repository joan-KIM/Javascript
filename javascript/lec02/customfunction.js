export function customFilter(callback){
    let arr = [];
    
    for(let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            arr.push(this[i]);
        }
    }
    return arr;
}

export function customEvery(callback) {
    for (let i = 0; i < this.length; i++){
        if (!callback(this[i],i, this)) {
            return false;
        }
    }
    return true;
}

export function customSome(callback){
    for(let i = 0; i < this.length; i++) {
        if (callback(this[i],i,this)){
            return true;
        }
    }
    return false;
}

export function customForEach(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i],i,this);
    }
}

export function customMap(callback){
    let arr = new Array(this.length);

    for(let i = 0; i < this.length; i++){
        arr[i] = callback(this[i],i,this);
    }

    return arr;
}

export function customReduce(callback, initialValue) {
    let accumulator, currentIndex;
    if (initialValue) {
        accumulator = initialValue;
        currentIndex = 0;
    } else{
        accumulator = this[0];
        currentIndex = 1;
    }

    for(let i = currentIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }

    return accumulator;
}

export function customFlat(depth) {
    
}

function flatDeep(arr, d = 1) {
    if (d < 1){
        // return arr.slice();  // 새로운 배열을 만드는 방법 세가지
        // return [].concat(arr);
        return [...arr];
    }

    return arr.reduce((acc, val) => { 
        if (!Array.isArray(val)) {
            return [...acc, val];
        }
        return acc.concat(flatDeep(val, d - 1));
    }, []);

 };