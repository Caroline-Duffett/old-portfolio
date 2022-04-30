//console.log('hi'); //works

//-------------WAY ONE -------------------------//

//Function to get player 1 name input and display player 1 name
const player1Name = () => {
  let playerOne = document.getElementById('name1').value;
  document.getElementById('p1').innerHTML = `Player One: ${playerOne}`
}

//Function to delete player one input once name entered
const removeP1Input = () => {
  let parent1 = document.getElementById('p1inputDiv')
  parent1.remove();
}

//When button is clicked will display player 1 name and delete input
const btn1Functions = () => {
  player1Name();
  removeP1Input();
}


//Function to get player 2 name input and display player 2 name
const player2Name = () => {
  let playerTwo = document.getElementById('name2').value;
  document.getElementById('p2').innerHTML = `Player Two: ${playerTwo}`
}

//Function to delete player two input once name entered
const removeP2Input = () => {
  let parent2 = document.getElementById('p2inputDiv')
  parent2.remove();
}

//When button is clicked will display player 2 name
const btn2Functions = () => {
  player2Name();
  removeP2Input();
}


//----------------------------------------------//
