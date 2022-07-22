const cards = document.querySelectorAll(".card")
let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false

let ryder = document.getElementById("ryder")
let marshall = document.getElementById("marshall")
let rocky = document.getElementById("rocky")
let sky = document.getElementById("sky")
let zuma = document.getElementById("zuma")
let chase = document.getElementById("chase")
let rubble = document.getElementById("rubble")

function reset() {
  window.location.reload()
}

function chama() {
  ryder.play()
}

function chaseCard() {
  if (lockBoard) return
  chase.play()
}

function marshallCard() {
  if (lockBoard) return
  marshall.play()
}

function rockyCard() {
  if (lockBoard) return
  rocky.play()
}

function skyCard() {
  if (lockBoard) return
  sky.play()
}

function zumaCard() {
  if (lockBoard) return
  zuma.play()
}

function rubbleCard() {
  if (lockBoard) return
  rubble.play()
}

function flipCard() {
  if (lockBoard) return
  if (this === firstCard) return

  this.classList.add("flip")
  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
    return
  }

  secondCard = this
  hasFlippedCard = false
  checkForMath()
}

function checkForMath() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    desableCards()
    return
  }
  unflipCards()
}

function desableCards() {
  firstCard.removeEventListener("click", flipCard)
  secondCard.removeEventListener("click", flipCard)

  resetBoard()
}

function unflipCards() {
  lockBoard = true
  setTimeout(() => {
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    resetBoard()
  }, 1500)
}

function resetBoard() {
  ;[hasFlippedCard, lockBoard] = [false, false]
  ;[firstCard, secondCard] = [null, null]
}

;(function shuffle() {
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 12)
    card.style.order = randomPosition
  })
})()

cards.forEach(card => {
  card.addEventListener("click", flipCard)
})
