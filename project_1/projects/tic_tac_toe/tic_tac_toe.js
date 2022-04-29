//console.log('hi'); //works

//Function to get player 1 name input and display player 1 name
const player1Name = () => {
  let playerOne = document.getElementById('name1').value;
  document.getElementById('p1').innerHTML = `Player One: ${playerOne}`
}

//Function changes text from play 1 to player 2
const removePlayer1 = () => {
  const remove1 = document.getElementById('text').innerHTML = `Player Two: `
}

//Function changes id from name1 to name 2
const idChange = () => {
  const change = document.getElementById('name1').id = 'name2';
}

//Function changes id from p1Btn to p2Btn
const btnChange = () => {
  const changeBtn = document.getElementById('p1Btn').id = 'p2Btn';
}

//calls all player one functions on click
const p1Functions = () => {
  player1Name();
  removePlayer1();
  idChange();
  btnChange();
}

//Function to get player 2 name input and display player 2 name
const player2Name = () => {
  let playerTwo = document.getElementById('name2').value;
  document.getElementById('p2').innerHTML = `Player Two: ${playerTwo}`
}

const p2Functions = () => {
  player2Name();
}
