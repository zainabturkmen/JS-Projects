

const clickMe = (people) =>{
    const newPeople= people
    .map((person)=>{
    const {name, job} = person;
    return `<p>${name} ${job}</p>`
    })
    .join("")
    return newPeople;
};

export default clickMe;