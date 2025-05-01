let bank = 100

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },

  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]


//NOTE - this draws my players to the server/gets teams
function drawPlayers() {
  players.forEach(player => {
    const ramdomTeamNumber = Math.ceil(Math.random() * 2)
    player.teamNumber = ramdomTeamNumber
  })
  drawTeamOne()
  drawTeamTwo()
}

//NOTE - draws team one emojis to the server/ *10 players each
function drawTeamOne() {
  let teamOneEmojies = ''
  const teamOnePlayers = players.filter(player => player.teamNumber == 1)
  teamOnePlayers.forEach(player => teamOneEmojies += player.emoji)
  const teamOneElement = document.getElementById('TeamOne')
  teamOneElement.innerText = teamOneEmojies
}
//NOTE - draws team two emojis to the server

function drawTeamTwo() {
  let teamTwoEmojies = ''
  const teamTwoPlayers = players.filter(player => player.teamNumber == 2)
  teamTwoPlayers.forEach(player => teamTwoEmojies += player.emoji)
  const teamTwoElement = document.getElementById('TeamTwo')
  teamTwoElement.innerText = teamTwoEmojies
}

function randomNumber() {
  return Math.floor(Math.random() * 2) + 1
}

function drawBank() {
  const drawBank = bank
  const bankElement = document.getElementById('bank')
  bankElement.innerText = `$${bank}`
}

let teamOneSkill = 0
let teamTwoSkill = 0


function betTeam1(betAmount) {
  if (betAmount > bank) {
    window.alert('You do not have the correct amount of funds to make the bet')
    return
  }
  const teamOnePlayers = players.filter(player => player.teamNumber == 1)
  const teamTwoPlayers = players.filter(player => player.teamNumber == 2)

  teamOnePlayers.forEach(player => teamOneSkill += player.skill)
  teamTwoPlayers.forEach(player => teamTwoSkill += player.skill)

  if (teamOneSkill > teamTwoSkill) {
    bank += betAmount
  }
  else {
    (teamTwoSkill > teamOneSkill)
    bank -= betAmount
  }
  drawPlayers()
  drawBank()
}

function betTeam2(betAmount) {
  const teamOnePlayers = players.filter(player => player.teamNumber == 1)
  const teamTwoPlayers = players.filter(player => player.teamNumber == 2)

  teamOnePlayers.forEach(player => teamOneSkill += player.skill)
  teamTwoPlayers.forEach(player => teamTwoSkill += player.skill)

  if (teamOneSkill > teamTwoSkill) {
    bank -= betAmount
  }
  else {
    (teamTwoSkill > teamOneSkill)
    bank += betAmount
  }
  drawBank()
  drawPlayers()
}

function betTeam(teamNumber, betAmount) {
  if (betAmount > bank) {
    window.alert('you dont have enough to bet')
    return
  }

  let teamOneScore = 0
  let teamTwoScore = 0

  players.forEach(player => {
    if (player.teamNumber == teamNumber) {
      teamOneScore += player.skill
    }
    else {
      teamTwoScore += player.skill
    }
  })

  if (teamOneScore > teamTwoScore) {
    bank += betAmount
  }
  else {
    (teamTwoScore > teamOneScore)
    bank -= betAmount
  }
  drawPlayers()
  drawBank()
  checkBank()
}

function checkBank() {
  if (bank < 0) {
    window.alert('Out of betting funds! Game Over!!')
    return
  }
}

function resetBank() {
  if (bank < 0) {
    window.alert('GameOver!!!')
  }
  bank = 100
}