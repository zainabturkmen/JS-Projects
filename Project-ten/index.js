// js

const people = [
    {name: "Zainab", lastmane:"Turkmen", age:"21"},
    {name: "joe", lastmane:"anderson", age:"22"},
    {name: "su", lastmane:"susi", age:"23"},
];

const container = document.querySelector(".container");

const btn = document.querySelector(".btn");

 const clickMe = () => {
    const newPeople = people.map((person)=> {
        const {name, age} = person
        return `<p>${name} ${age}</p>`;
    }).join("")
    container.innerHTML = newPeople;
 };

btn.addEventListener("click", ()=>{
    clickMe();
});

