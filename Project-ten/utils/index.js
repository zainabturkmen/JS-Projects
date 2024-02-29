// js

// import { people } from "./utils/js.js";
import {clickMe} from "./utils/data.js"

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    container.innerHTML = clickMe(people);
});

