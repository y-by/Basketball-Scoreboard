let homeScore = document.querySelector("#homeScore")
let guestScore = document.querySelector("#guestScore")
let H1 = document.querySelector(".H1")
let H2 = document.querySelector(".H2")
let H3 = document.querySelector(".H3")
let G1 = document.querySelector(".G1")
let G2 = document.querySelector(".G2")
let G3 = document.querySelector(".G3")

let homeCounter = 0
let guestCounter = 0

function addOneToHome() {
  homeCounter++
}
function addOneToGuest() {
  guestCounter++
}

H1.addEventListener('click', ()=> {
  addOneToHome()
  homeScore.textContent = homeCounter
})
H2.addEventListener('click', ()=> {
  addOneToHome()
  addOneToHome()
  homeScore.textContent = homeCounter
})
H3.addEventListener('click', ()=> {
  addOneToHome()
  addOneToHome()
  addOneToHome()
  homeScore.textContent = homeCounter
})
G1.addEventListener('click', ()=> {
  addOneToGuest()
  guestScore.textContent = guestCounter
})
G2.addEventListener('click', ()=> {
  addOneToGuest()
  addOneToGuest()
  guestScore.textContent = guestCounter
})
G3.addEventListener('click', ()=> {
  addOneToGuest()
  addOneToGuest()
  addOneToGuest()
  guestScore.textContent = guestCounter
})

// THE CLOCK
//**********/ Set the date we're counting down to **************
let countDownDate = new Date("Oct 22, 2026 12:00:00").getTime();
//**************************************************************

// Update the count down every 10 millisecond
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes, seconds and milliseconds
  // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((distance % 1000) / 100)
  
  // Output the result in an element with id="clock"
  document.getElementById("clock").innerHTML = hours + ":"
  + minutes + ":" + seconds + ":" + milliseconds + "";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 100);