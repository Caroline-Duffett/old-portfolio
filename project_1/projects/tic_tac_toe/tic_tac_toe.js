//console.log('hi'); //works

//------------- Player name inputs -------------------------//
//Function to get player 1 name input and display player 1 name
const player1Name = () => {
  let playerOne = document.getElementById('name1').value;
  document.getElementById('p1').innerHTML = `Player One ❌: ${playerOne}`
}

//Function to delete player one input once name entered
const removeP1Input = () => {
  let parent1 = document.getElementById('p1inputDiv')
  parent1.remove();
}

//Function to display player 2 input
const viewPlayer2 = () => {
  document.getElementById('p2inputDiv').style.visibility = 'visible';
}

//When button is clicked will display player 1 name and delete input
const btn1Functions = () => {
  player1Name();
  removeP1Input();
  viewPlayer2();
}


//Function to get player 2 name input and display player 2 name
const player2Name = () => {
  let playerTwo = document.getElementById('name2').value;
  document.getElementById('p2').innerHTML = `Player Two 🔵: ${playerTwo}`
}

//Function to delete player two input once name entered
const removeP2Input = () => {
  let parent2 = document.getElementById('p2inputDiv')
  parent2.remove();
}

//Makes start button visible
const viewStart = () => {
  document.getElementById('start').style.visibility = 'visible';
}

//When button is clicked will display player 2 name
const btn2Functions = () => {
  player2Name();
  removeP2Input();
  viewStart();
}
//----------------------------------------------//


//--------------------- The Game ---------------------------------
let i = 0

const selecting1 = () => {
  btn1 = document.getElementById('1');
  btn1.remove()
  if (turn = i%2 === 0) {
    const text = document.getElementById('statement');
    text.innerHTML = `Player two's turn`

    square1 = document.getElementById('t1');
    square1.innerHTML = `❌`
    i++
  } else {
    const text = document.getElementById('statement');
    text.innerHTML = `Player one's turn`

    square1 = document.getElementById('t1');
    square1.innerHTML = `🔵`
    i++
  }

}

const selecting2 = () => {
  btn2 = document.getElementById('2');
  btn2.remove()
  if (turn = i%2 === 0) {
    const text = document.getElementById('statement');
    text.innerHTML = `Player two's turn`

    square2 = document.getElementById('t2');
    square2.innerHTML = `❌`
    i++
  } else {
    const text = document.getElementById('statement');
    text.innerHTML = `Player one's turn`

    square2 = document.getElementById('t2');
    square2.innerHTML = `🔵`
    i++
  }
}

const selecting3 = () => {
  btn3 = document.getElementById('3');
  btn3.remove()
  if (turn = i%2 === 0) {
    const text = document.getElementById('statement');
    text.innerHTML = `Player two's turn`

    square3 = document.getElementById('t3');
    square3.innerHTML = `❌`
    i++
  } else {
    const text = document.getElementById('statement');
    text.innerHTML = `Player one's turn`

    square3 = document.getElementById('t3');
    square3.innerHTML = `🔵`
    i++
  }
}

const selecting4 = () => {
  btn4 = document.getElementById('4');
  btn4.remove()
  if (turn = i%2 === 0) {
    const text = document.getElementById('statement');
    text.innerHTML = `Player two's turn`

    square4 = document.getElementById('t4');
    square4.innerHTML = `❌`
    i++
  } else {
    const text = document.getElementById('statement');
    text.innerHTML = `Player one's turn`

    square4 = document.getElementById('t4');
    square4.innerHTML = `🔵`
    i++
  }
}

const selecting5 = () => {
  btn5 = document.getElementById('5');
  btn5.remove()
  if (turn = i%2 === 0) {
    const text = document.getElementById('statement');
    text.innerHTML = `Player two's turn`

    square5 = document.getElementById('t5');
    square5.innerHTML = `❌`
    i++
  } else {
    const text = document.getElementById('statement');
    text.innerHTML = `Player one's turn`

    square5 = document.getElementById('t5');
    square5.innerHTML = `🔵`
    i++
  }
}

const selecting6 = () => {
  btn6 = document.getElementById('6');
  btn6.remove()
  if (turn = i%2 === 0) {
    const text = document.getElementById('statement');
    text.innerHTML = `Player two's turn`

    square6 = document.getElementById('t6');
    square6.innerHTML = `❌`
    i++
  } else {
    const text = document.getElementById('statement');
    text.innerHTML = `Player one's turn`

    square6 = document.getElementById('t6');
    square6.innerHTML = `🔵`
    i++
  }
}

const selecting7 = () => {
  btn7 = document.getElementById('7');
  btn7.remove()
  if (turn = i%2 === 0) {
    const text = document.getElementById('statement');
    text.innerHTML = `Player two's turn`

    square7 = document.getElementById('t7');
    square7.innerHTML = `❌`
    i++
  } else {
    const text = document.getElementById('statement');
    text.innerHTML = `Player one's turn`

    square7 = document.getElementById('t7');
    square7.innerHTML = `🔵`
    i++
  }
}

const selecting8 = () => {
  btn8 = document.getElementById('8');
  btn8.remove()
  if (turn = i%2 === 0) {
    const text = document.getElementById('statement');
    text.innerHTML = `Player two's turn`

    square8 = document.getElementById('t8');
    square8.innerHTML = `❌`
    i++
  } else {
    const text = document.getElementById('statement');
    text.innerHTML = `Player one's turn`

    square8 = document.getElementById('t8');
    square8.innerHTML = `🔵`
    i++
  }
}

const selecting9 = () => {
  btn9 = document.getElementById('9');
  btn9.remove()
  if (turn = i%2 === 0) {
    const text = document.getElementById('statement');
    text.innerHTML = `Player two's turn`

    square9 = document.getElementById('t9');
    square9.innerHTML = `❌`
    i++
  } else {
    const text = document.getElementById('statement');
    text.innerHTML = `Player one's turn`

    square9 = document.getElementById('t9');
    square9.innerHTML = `🔵`
    i++
  }
}
//------------------------------------------------------------------


//--------------------------- Start Game ---------------------------
//Functions that switch from inputs to start the game
//removes start button
const removestart = () => {
  let startbtn = document.getElementById('start')
  startbtn.remove();
}

//makes game appear
const gameBoard = () => {
  document.getElementById('gameDiv').style.visibility = 'visible';
}

//Function that starts the game
const startGame = () => {
  removestart();
  gameBoard();
}
//------------------------------------------------------------------
