// j

import { people } from "./utils/data.js";
import clickMe from "./utils/clickMe.js"
import get from "./utils/getElement.js"

const container = get(".container");
const btn = get(".btn");
const h2 = get(".h2");

btn.addEventListener("click", () => {
    container.innerHTML = clickMe(people);
});


