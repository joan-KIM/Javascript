function getRect(values){
    const [w,h] = values;
    return w*h;
}

function getCircle(r){
    return Math.PI * r ** 2;
}

function getTriangle(values){
    const [b,h] = values;
    return b * h * 0.5;
}

export function getArea(figure, ...values){
    switch(figure){
        case 'rectangle':
            return getRect(values);
        case 'circle':
            return getCircle(values);
        case 'triangle':
            return getTriangle(values);
    }
}
