const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; 

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

// let futureDate = new Date(2024, 2, 23, 8, 3, 0); 
const futureDate = new Date(tempYear, tempMonth, tempDay + 1, 9, 40, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
// const secs = futureDate.getSeconds();

let month = futureDate.getMonth()
month = months[month];
const date = futureDate.getDate()

const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}: ${mins}am`

// future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime(){
  const tody = new Date().getTime();
  const t = futureTime - tody;

  // values in ms
  const oneDay = 24*60*60*100;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  // calculate all values
  let days = t/oneDay;
  days = Math.floor(days);
  let hours =  Math.floor(( t % oneDay) / oneHour);
  let minutes =  Math.floor(( t % oneHour) / oneMinute);
  let seconds =  Math.floor(( t % oneMinute) / 1000);

  // set values arrays;
  const value = [days, hours, minutes, seconds]

  function format(item){
    if(item < 10){
      return ( item = `0${item}`);
    }
    return item;
  };

  items.forEach(function(item, index){
    item.innerHTML = format(value[index]);
  });

  if(t<0){
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway expired</h4>
    `;
  }
};

let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime()