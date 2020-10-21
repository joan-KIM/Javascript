// https://ko.javascript.info/try-catch

export function assert(exception){
    try {
       if (!exception) {
        throw new Error("실패함");
       }

       console.log("문제없음");
    } catch (error) {
        console.log(error.name +": " +error.message);
    }
}

export function expect(value, equal){
    assert(value == equal);
}

export function expect2(value, equal){
    if ( value().isArray ){
        return value().every((element, index) => element === equal[index]);
    } else{

    }
}


