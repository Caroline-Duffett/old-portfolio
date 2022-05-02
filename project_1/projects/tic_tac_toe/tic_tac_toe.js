//console.log('hi'); //works

//-------------WAY 1 -------------------------//
// //Function to get player 1 name input and display player 1 name
// const player1Name = () => {
//   let playerOne = document.getElementById('name1').value;
//   document.getElementById('p1').innerHTML = `Player One: ${playerOne}`
// }
//
// //Function to delete player one input once name entered
// const removeP1Input = () => {
//   let parent1 = document.getElementById('p1inputDiv')
//   parent1.remove();
// }
//
// //When button is clicked will display player 1 name and delete input
// const btn1Functions = () => {
//   player1Name();
//   removeP1Input();
// }
//
//
// //Function to get player 2 name input and display player 2 name
// const player2Name = () => {
//   let playerTwo = document.getElementById('name2').value;
//   document.getElementById('p2').innerHTML = `Player Two: ${playerTwo}`
// }
//
// //Function to delete player two input once name entered
// const removeP2Input = () => {
//   let parent2 = document.getElementById('p2inputDiv')
//   parent2.remove();
// }
//
// //When button is clicked will display player 2 name
// const btn2Functions = () => {
//   player2Name();
//   removeP2Input();
// }

//player 2 div html
// <div id=p2inputDiv>
//   <h4 id='text2'>Player 2: </h4>
//   <input type='Name' id="name2" placeholder='Name'>
//   <button onclick='btn2Functions()' id='p2Btn'>Enter</button>
// </div>

//----------------------------------------------//



//------------------- Way 2 ---------------------------//
// //Function to get player 1 name input and display player 1 name
// const player1Name = () => {
//   let playerOne = document.getElementById('name1').value;
//   document.getElementById('p1').innerHTML = `Player One: ${playerOne}`
// }
//
// //Function changes text from play 1 to player 2
// const removePlayer1 = () => {
//   const remove1 = document.getElementById('text1').innerHTML = `Player Two: `
// }
//
// //Function changes id from name1 to name 2
// const idChange = () => {
//   const change = document.getElementById('name1').id = 'name2';
// }
//
// //Function changes id from p1Btn to p2Btn
// const btnChange = () => {
//   const changeBtn = document.getElementById('p1Btn').id = 'p2Btn';
// }
//
// //Function that changes onclick
// const functionChange = () => {
//   const switchFunc = document.getElementById('p2Btn').onclick = btn2Functions()
// }
//
// //calls all player one functions on click
// const btn1Functions = () => {
//   player1Name();
//   removePlayer1();
//   idChange();
//   btnChange();
//   functionChange();
// }
//
// // //Function that sets the onclick for p2Btn
// // const p2BtnClick = () => {
// //   const p2Btn = document.getElementById('p2Btn')
// //   p2Btn.onclick = btn2Functions()
// // }
//
// //Function to get player 2 name input and display player 2 name
// const player2Name = () => {
//   let playerTwo = document.getElementById('name2').value;
//   document.getElementById('p2').innerHTML = `Player Two: ${playerTwo}`
// }
//
// const btn2Functions = () => {
//   player2Name();
// }



//------------- WAY 3 -----------------//
// //Function to get player 1 name input and display player 1 name
// const player1Name = () => {
//   let playerOne = document.getElementById('name1').value;
//   document.getElementById('p1').innerHTML = `Player One: ${playerOne}`
// }
//
// //Function changes text from play 1 to player 2
// const removePlayer1 = () => {
//   const remove1 = document.getElementById('text1').innerHTML = `Player Two: `
// }
//
// //Function changes id from name1 to name 2
// const idChange = () => {
//   const change = document.getElementById('name1').id = 'name2';
// }
//
// //Function to delete p1Btn create p2Btn
// const removep1Btn = () => {
//   let removeBtn1 = document.getElementById('p1Btn')
//   removeBtn1.remove();
// }
//
// //Function to create p2Btn and append it
// const makep2Btn = () => {
//   const p2Btn = document.createElement('button');
//   p2Btn.innerText = 'Enter';
//   p2Btn.id = 'p2Btn';
//   const appendDiv = document.getElementById('p1inputDiv');
//   appendDiv.appendChild(p2Btn);
// }
//
// //Function that sets the onclick for p2Btn
// const p2BtnClick = () => {
//   const p2Btn = document.getElementById('p2Btn')
//   p2Btn.onclick = btn2Functions()
// }
//
// //calls all player one functions on click
// const btn1Functions = () => {
//   player1Name();
//   removePlayer1();
//   idChange();
//   removep1Btn();
//   makep2Btn();
//   p2BtnClick();
// }
//
// //Function to get player 2 name input and display player 2 name
// const player2Name = () => {
//   let playerTwo = document.getElementById('name2').value;
//   document.getElementById('p2').innerHTML = `Player Two: ${playerTwo}`
// }
//
// const btn2Functions = () => {
//   player2Name();
// }



//------------------- WAY 4 ---------------------------//
//Function to get player 1 name input and display player 1 name
const player1Name = () => {
  let playerOne = document.getElementById('name1').value;
  document.getElementById('p1').innerHTML = `Player One: ${playerOne}`
}

//Function changes text from play 1 to player 2
const removePlayer1 = () => {
  const remove1 = document.getElementById('text1').innerHTML = `Player Two: `
}

//Function changes id from name1 to name 2
const idChange = () => {
  const change = document.getElementById('name1').id = 'name2';
}

//Function changes id from p1Btn to p2Btn
const btnChange = () => {
  const changeBtn = document.getElementById('p1Btn').id = 'p2Btn';
}

//Function change
const functionChange = () => {
  document.getElementById('p1Btn').onclick = btn2Functions()
}

//calls all player one functions on click
const btn1Functions = () => {
  player1Name();
  removePlayer1();
  idChange();
  btnChange();
  functionChange();
}

//Function to get player 2 name input and display player 2 name
const player2Name = () => {
  let playerTwo = document.getElementById('name2').value;
  document.getElementById('p2').innerHTML = `Player Two: ${playerTwo}`
}

const btn2Functions = () => {
  player2Name();
}
