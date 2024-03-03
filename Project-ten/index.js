// j

import { people } from "./utils/data.js";
import clickMe from "./utils/clickMe.js";
import get from "./utils/getElement.js";

const container = get(".container");
const btn = get(".btn");
const h2 = get(".h2");
const h3 = get(".h3");
const h4 = get(".h4");

btn.addEventListener("click", () => {
    addColor(100,h2, "red")
    .then(() => addColor(200, h3, "green"))
    .then(() => addColor(300, h4, "blue"))
    const elementi = document.createElement("h1")
    // const input = document.createElement("input")
    elementi.textContent = "Hey me, Zainab, stuck in tutorail hell 🥹🧑‍💻👊🔪🗡️🍭🍉"
    document.body.innerHTML += `
    <h1 class = "h1h1">${elementi.textContent}</h1>
    <textarea class = "input"></textarea>
    `
});

function addColor(time, element, color){
    return new Promise((resolve, reject) => {
        if(element){
            setTimeout(() => {
                element.style.color = color
                resolve();
            }, time);
        }else{
            reject(new Error(`there is no such element ${element}`));
        };
    });
};

// container.innerHTML = clickMe(people);
// callback hell
 // setTimeout(()=>{
    //     h2.style.color= "blue";
    //     setTimeout(() => {
    //         h2.style.backgroundColor = "black"
    //     }, 1500);
    //     setTimeout(()=>{
    //         h3.style.color = "red"
    //         setTimeout(()=>{
    //             h3.style.backgroundColor = "black"
    //         },2500)
    //         setTimeout(()=>{
    //             h4.style.color = "green"
    //             setTimeout(() => {
    //                 h4.style.backgroundColor = "black"
    //             }, 3500);
    //         },3000)
    //     },2000)
    // }, 1000);

