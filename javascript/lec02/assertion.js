// https://ko.javascript.info/try-catch

export function assert(exception){
       if (!exception) {
           throw new Error("실패..");
       }
       return true;
}

// export function isEqual(value, equal){
//     try{
//         assert(value === equal);
//         console.log("성공");
//     }catch(error){
//         console.log(error.message);
//     }
// }

const obj = {
    a:1,
    b: {
      c: 2,
      d: {
        e: ['f', { g: 'h' }]
      },
      i:[]
    }
  }

function isObject(obj) {
    return typeof obj === 'object';
}

export function isEqual(value, equal){
    if(!(isObject(value) && isObject(equal))){
        assert(value === equal);
        return;
    }

    if(Array.isArray(value) && Array.isArray(equal)){
        assert(value.length === equal.length);

        for (const index in value) {
            isEqual(value[index], equal[index]);
        }
        
    } else{
        assert(Object.keys(value).length === Object.keys(equal).length);

        for (const property in value) {
            isEqual(value[property], equal[property]);
        }
    }
}

export function expect(value, to){
    try{
        isEqual(value, to);
        console.log("성공");
    }catch(e){
        console.log(e.message);
    }
}