// js

const People = [
    {name: "Zainab", lastmane:"Turkmen", age:"21"},
    {name: "joe", lastmane:"anderson", age:"22"},
    {name: "su", lastmane:"susi", age:"23"},
];

// const container = document.querySelector("body");

const btn = document.querySelector(".btn");

 const clickMe = () => {
    const NewPeople = People.map((person)=> {
        console.log(person);
    });
 };

btn.addEventListener("click", ()=>{
    clickMe();
})

