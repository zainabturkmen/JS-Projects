

const num1 = 4;
const num2 = 6;

// if(num1 < num2){
//     console.log("hey he")
// }else{
//     console.log("hooo");
// }

switch(num1){
    case 1:
        console.log('yammy 1')
        break;
    case 2:
        console.log('yammy 2')
        break;
    case 3:
        console.log('yammy 3')
        break;
        default:
            console.log("fail fail fail")
}


// While loop

let amount = 20;

// while (amount >  0){
//     console.log(`hey i am Zainab ${amount}`);
//     amount--;
// }

// do loop

do{
    console.log(`hey i am`);
    amount++;
} while (amount > 30)

// hey I am for loop

for(let i = 0; i < 1; i++){
    console.log("Hi");
}

// Arrays properties and methods

const myArray = ["bob", "nani", "gogo", "bibi"]

const myFriends = ["gul", "naz,", "Pary"]

const result = [];

for(let i=1; i < myArray.length; i++){
    console.log(i)
    console.log(myArray[i])
    result.push(`${myArray[i]} ${myFriends[i]}`)

}

console.log(result)


