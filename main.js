let homeScore = 0
let guestScore = 0

const container = document.querySelector('.container')
const homeDisplay = document.querySelector("#home-display")
const guestDisplay = document.querySelector("#guest-display")
const newGame = document.querySelector("#new-game")

container.addEventListener('click', function(e) {
  const target = e.target
  const homePts = target.dataset.homePts
  const guestPts = target.dataset.guestPts
  console.log(target)

  if(homePts) {
    homeScore += Number(homePts)
    homeDisplay.textContent = homeScore
  }
  if(guestPts) {
    guestScore += Number(guestPts)
    guestDisplay.textContent = guestScore
  }
  highlight()
})

function highlight() {
    homeDisplay.classList.toggle('highlighter', homeScore > guestScore)
    guestDisplay.classList.toggle('highlighter', homeScore < guestScore)
}

newGame.addEventListener('click', function() {
  homeScore = 0
  guestScore = 0
  homeDisplay.textContent = homeScore
  guestDisplay.textContent = guestScore
  homeDisplay.classList.remove('highlighter')
  guestDisplay.classList.remove('highlighter')

})
