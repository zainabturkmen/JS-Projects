// j

import { people } from "./utils/data.js";
import clickMe from "./utils/clickMe.js"

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    container.innerHTML = clickMe(people);
});

