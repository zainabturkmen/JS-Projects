

const wallHeight = 80;

function calculate(value){
    const myValue = value * 2.54
    return myValue
}

const width = calculate(100);
const height = calculate(wallHeight);

const result = [width, height]
console.log(result);