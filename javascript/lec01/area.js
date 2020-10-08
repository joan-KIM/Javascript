function getRect({width, height}){
    return width * height;
}

function getCircle({radius}){
    return Math.PI * radius ** 2;
}

function getTriangle({base, height}){
    return base * height * 0.5;
}
/*
let obj = {
    width:5,
    height:10
};

getArea('rectangle', {
    width:5,
    height:10
});
*/
export function getArea(figure, values){
    switch(figure){
        case 'rectangle':
            return getRect(values);
        case 'circle':
            return getCircle(values);
        case 'triangle':
            return getTriangle(values);
    }
}
