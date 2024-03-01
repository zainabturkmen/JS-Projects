

const clickMe = (people) =>{
    const newPeople= people
    .map((person)=>{
    const {name, age} = person;
    return `<p>${name} ${age}</p>`
    })
    .join("")
    return newPeople;
};

export default clickMe;