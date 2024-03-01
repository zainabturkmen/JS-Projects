// j

import { people } from "./utils/data.js";
import clickMe from "./utils/clickMe.js"
import get from "./utils/getElement.js"

const container = get(".container");
const btn = get(".btn");
const h2 = get(".h2");
const h3 = get(".h3");
const h4 = get(".h4");

btn.addEventListener("click", () => {
    // container.innerHTML = clickMe(people);
    setTimeout(()=>{
        h2.style.color= "blue";
        setTimeout(()=>{
            h3.style.color = "red"
            setTimeout(()=>{
                h4.style.color = "green"
            },3000)
        },2000)
    }, 1000);
});




