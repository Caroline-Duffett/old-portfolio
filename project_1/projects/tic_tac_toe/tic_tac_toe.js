//console.log('hi'); //works

//-------------WAY 1 Player name inputs -------------------------//
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


// //--------------------- Makes Game ---------------------------------
// //const selection = () => {
//   const selecting1 = () => {
//     btn1 = document.getElementById('1');
//     btn1.remove()
//     //i++
//   }
//
//   const selecting2 = () => {
//     btn2 = document.getElementById('2');
//     btn2.remove()
//     //i++
//   }
//
//   const selecting3 = () => {
//     btn3 = document.getElementById('3');
//     btn3.remove()
//     //i++
//   }
//
//   const selecting4 = () => {
//     btn4 = document.getElementById('4');
//     btn4.remove()
//     //i++
//   }
//
//   const selecting5 = () => {
//     btn5 = document.getElementById('5');
//     btn5.remove()
//     //i++
//   }
//
//   const selecting6 = () => {
//     btn6 = document.getElementById('6');
//     btn6.remove()
//     //i++
//   }
//
//   const selecting7 = () => {
//     btn7 = document.getElementById('7');
//     btn7.remove()
//     //i++
//   }
//
//   const selecting8 = () => {
//     btn8 = document.getElementById('8');
//     btn8.remove()
//     //i++
//   }
//
//   const selecting9 = () => {
//     btn9 = document.getElementById('9');
//     btn9.remove()
//     //i++
//   }
// //}
//
// const statement1 = () => {
//   const text = document.getElementById('statement');
//   text.innerHTML = `player one's turn`
// }
//
// // const p1selecting = () => {
// //   const selecting1 = () => {
// //     btn1 = document.getElementById('1');
// //     btn1.remove()
// //     i++
// //   }
// //
// //   const selecting2 = () => {
// //     btn2 = document.getElementById('2');
// //     btn2.remove()
// //     i++
// //   }
// //
// //   const selecting3 = () => {
// //     btn3 = document.getElementById('3');
// //     btn3.remove()
// //     i++
// //   }
// //
// //   const selecting4 = () => {
// //     btn4 = document.getElementById('4');
// //     btn4.remove()
// //     i++
// //   }
// //
// //   const selecting5 = () => {
// //     btn5 = document.getElementById('5');
// //     btn5.remove()
// //     i++
// //   }
// //
// //   const selecting6 = () => {
// //     btn6 = document.getElementById('6');
// //     btn6.remove()
// //     i++
// //   }
// //
// //   const selecting7 = () => {
// //     btn7 = document.getElementById('7');
// //     btn7.remove()
// //     i++
// //   }
// //
// //   const selecting8 = () => {
// //     btn8 = document.getElementById('8');
// //     btn8.remove()
// //     i++
// //   }
// //
// //   const selecting9 = () => {
// //     btn9 = document.getElementById('9');
// //     btn9.remove()
// //     i++
// //   }
// // }
// //
// const p1Turn = () => {
//   statement1();
//   //p1selecting();
//   //selection();
// }
//
//
// //----
//
// const statement2 = () => {
//   const text = document.getElementById('statement');
//   text.innerHTML = `player two's turn`
// }
//
// // const p2selecting = () => {
// //   const selecting1 = () => {
// //     btn1 = document.getElementById('1');
// //     btn1.remove()
// //     i++
// //   }
// //
// //   const selecting2 = () => {
// //     btn2 = document.getElementById('2');
// //     btn2.remove()
// //     i++
// //   }
// //
// //   const selecting3 = () => {
// //     btn3 = document.getElementById('3');
// //     btn3.remove()
// //     i++
// //   }
// //
// //   const selecting4 = () => {
// //     btn4 = document.getElementById('4');
// //     btn4.remove()
// //     i++
// //   }
// //
// //   const selecting5 = () => {
// //     btn5 = document.getElementById('5');
// //     btn5.remove()
// //     i++
// //   }
// //
// //   const selecting6 = () => {
// //     btn6 = document.getElementById('6');
// //     btn6.remove()
// //     i++
// //   }
// //
// //   const selecting7 = () => {
// //     btn7 = document.getElementById('7');
// //     btn7.remove()
// //     i++
// //   }
// //
// //   const selecting8 = () => {
// //     btn8 = document.getElementById('8');
// //     btn8.remove()
// //     i++
// //   }
// //
// //   const selecting9 = () => {
// //     btn9 = document.getElementById('9');
// //     btn9.remove()
// //     i++
// //   }
// // }
//
//
//
// const p2Turn = () => {
//   statement2();
//   //p2selecting();
//   //selection();
// }
//
//
// //Runs the game
// const game = () => {
//   for (let i = 0; i < 10; i++) {
//     if (i%2 === 0) {
//       p1Turn();
//       console.log('1');
//       i++
//     } else {
//       p2Turn();
//       console.log('2');
//       i++
//     }
//     console.log(i);
//   }
// }
//
//
// //------------------------------------------------------------------
//
// //removes start button
// const removestart = () => {
//   let startbtn = document.getElementById('start')
//   startbtn.remove();
// }
//
// //makes game appear
// const gameBoard = () => {
//   document.getElementById('gameDiv').style.visibility = 'visible';
// }
//
// //Function that starts the game
// const startGame = () => {
//   removestart();
//   gameBoard();
//   game();
// }




//--------------------- Makes Game ---------------------------------
//const selection = () => {
  // const selecting1 = () => {
  //   btn1 = document.getElementById('1');
  //   btn1.remove()
  //   //i++
  // }
  //
  // const selecting2 = () => {
  //   btn2 = document.getElementById('2');
  //   btn2.remove()
  //   //i++
  // }
  //
  // const selecting3 = () => {
  //   btn3 = document.getElementById('3');
  //   btn3.remove()
  //   //i++
  // }
  //
  // const selecting4 = () => {
  //   btn4 = document.getElementById('4');
  //   btn4.remove()
  //   //i++
  // }
  //
  // const selecting5 = () => {
  //   btn5 = document.getElementById('5');
  //   btn5.remove()
  //   //i++
  // }
  //
  // const selecting6 = () => {
  //   btn6 = document.getElementById('6');
  //   btn6.remove()
  //   //i++
  // }
  //
  // const selecting7 = () => {
  //   btn7 = document.getElementById('7');
  //   btn7.remove()
  //   //i++
  // }
  //
  // const selecting8 = () => {
  //   btn8 = document.getElementById('8');
  //   btn8.remove()
  //   //i++
  // }
  //
  // const selecting9 = () => {
  //   btn9 = document.getElementById('9');
  //   btn9.remove()
  //   //i++
  // }
//}



// //--------------------DO NOT CHANGE ABOVE LINE --------------
// const game = () => {
//   console.log('Game Function');
//   while (i < 10) {
//     console.log('While Loop');
//     if (i%2 === 0) {
//       p1Turn();
//       console.log('Player 1 seciton');
//     } else {
//       p2Turn();
//       console.log('Player two section');
//     }
//     console.log(`value of i: ${i}`);
//   }
// }
//
//
//
// const selecting1 = () => {
//   btn1 = document.getElementById('1');
//   btn1.remove()
//   if (turn = i%2 === 0) {
//     square1 = document.getElementById('t1');
//     square1.innerHTML = `❌`
//     i++
//   } else {
//     square1 = document.getElementById('t1');
//     square1.innerHTML = `🔵`
//     i++
//   }
//
// }
//
// const selecting2 = () => {
//   btn2 = document.getElementById('2');
//   btn2.remove()
//   if (turn = i%2 === 0) {
//     square2 = document.getElementById('t2');
//     square2.innerHTML = `❌`
//     i++
//   } else {
//     square2 = document.getElementById('t2');
//     square2.innerHTML = `🔵`
//     i++
//   }
// }
//
// const selecting3 = () => {
//   btn3 = document.getElementById('3');
//   btn3.remove()
//   if (turn = i%2 === 0) {
//     square3 = document.getElementById('t3');
//     square3.innerHTML = `❌`
//     i++
//   } else {
//     square3 = document.getElementById('t3');
//     square3.innerHTML = `🔵`
//     i++
//   }
// }
//
// const selecting4 = () => {
//   btn4 = document.getElementById('4');
//   btn4.remove()
//   if (turn = i%2 === 0) {
//     square4 = document.getElementById('t4');
//     square4.innerHTML = `❌`
//     i++
//   } else {
//     square4 = document.getElementById('t4');
//     square4.innerHTML = `🔵`
//     i++
//   }
// }
//
// const selecting5 = () => {
//   btn5 = document.getElementById('5');
//   btn5.remove()
//   if (turn = i%2 === 0) {
//     square5 = document.getElementById('t5');
//     square5.innerHTML = `❌`
//     i++
//   } else {
//     square5 = document.getElementById('t5');
//     square5.innerHTML = `🔵`
//     i++
//   }
// }
//
// const selecting6 = () => {
//   btn6 = document.getElementById('6');
//   btn6.remove()
//   if (turn = i%2 === 0) {
//     square6 = document.getElementById('t6');
//     square6.innerHTML = `❌`
//     i++
//   } else {
//     square6 = document.getElementById('t6');
//     square6.innerHTML = `🔵`
//     i++
//   }
// }
//
// const selecting7 = () => {
//   btn7 = document.getElementById('7');
//   btn7.remove()
//   if (turn = i%2 === 0) {
//     square7 = document.getElementById('t7');
//     square7.innerHTML = `❌`
//     i++
//   } else {
//     square7 = document.getElementById('t7');
//     square7.innerHTML = `🔵`
//     i++
//   }
// }
//
// const selecting8 = () => {
//   btn8 = document.getElementById('8');
//   btn8.remove()
//   if (turn = i%2 === 0) {
//     square8 = document.getElementById('t8');
//     square8.innerHTML = `❌`
//     i++
//   } else {
//     square8 = document.getElementById('t8');
//     square8.innerHTML = `🔵`
//     i++
//   }
// }
//
// const selecting9 = () => {
//   btn9 = document.getElementById('9');
//   btn9.remove()
//   if (turn = i%2 === 0) {
//     square9 = document.getElementById('t9');
//     square9.innerHTML = `❌`
//     i++
//   } else {
//     square9 = document.getElementById('t9');
//     square9.innerHTML = `🔵`
//     i++
//   }
// }
//
//
//
//
// const statement1 = () => {
//   const text = document.getElementById('statement');
//   text.innerHTML = `player one's turn`
// }
//
// const p1Turn = () => {
//   statement1();
//   console.log('statement 1');
//   //p1selecting();
// }
//
// // const p1selecting = () => {
// //   const selecting1 = () => {
// //     btn1 = document.getElementById('1');
// //     btn1.innerHTML = `❌`
// //     i++
// //   }
// //
// //   const selecting2 = () => {
// //     btn2 = document.getElementById('2');
// //     btn2.innerHTML = `❌`
// //     i++
// //   }
// //
// //   const selecting3 = () => {
// //     btn3 = document.getElementById('3');
// //     btn3.innerHTML = `❌`
// //     i++
// //   }
// //
// //   const selecting4 = () => {
// //     btn4 = document.getElementById('4');
// //     btn4.innerHTML = `❌`
// //     i++
// //   }
// //
// //   const selecting5 = () => {
// //     btn5 = document.getElementById('5');
// //     btn5.innerHTML = `❌`
// //     i++
// //   }
// //
// //   const selecting6 = () => {
// //     btn6 = document.getElementById('6');
// //     btn6.innerHTML = `❌`
// //     i++
// //   }
// //
// //   const selecting7 = () => {
// //     btn7 = document.getElementById('7');
// //     btn7.innerHTML = `❌`
// //     i++
// //   }
// //
// //   const selecting8 = () => {
// //     btn8 = document.getElementById('8');
// //     btn8.innerHTML = `❌`
// //     i++
// //   }
// //
// //   const selecting9 = () => {
// //     btn9 = document.getElementById('9');
// //     btn9.innerHTML = `❌`
// //     i++
// //   }
// // }
//
// //----
//
// const statement2 = () => {
//   const text = document.getElementById('statement');
//   text.innerHTML = `player two's turn`
// }
//
// const p2Turn = () => {
//   statement2();
//   console.log('statement 2');
//   //p2selecting();
// }
//
// // const p2selecting = () => {
// //   const selecting1 = () => {
// //     btn1 = document.getElementById('1');
// //     btn1.innerHTML = `🔵`
// //     i++
// //   }
// //
// //   const selecting2 = () => {
// //     btn2 = document.getElementById('2');
// //     btn2.innerHTML = `🔵`
// //     i++
// //   }
// //
// //   const selecting3 = () => {
// //     btn3 = document.getElementById('3');
// //     btn3.innerHTML = `🔵`
// //     i++
// //   }
// //
// //   const selecting4 = () => {
// //     btn4 = document.getElementById('4');
// //     btn4.innerHTML = `🔵`
// //     i++
// //   }
// //
// //   const selecting5 = () => {
// //     btn5 = document.getElementById('5');
// //     btn5.innerHTML = `🔵`
// //     i++
// //   }
// //
// //   const selecting6 = () => {
// //     btn6 = document.getElementById('6');
// //     btn6.innerHTML = `🔵`
// //     i++
// //   }
// //
// //   const selecting7 = () => {
// //     btn7 = document.getElementById('7');
// //     btn7.innerHTML = `🔵`
// //     i++
// //   }
// //
// //   const selecting8 = () => {
// //     btn8 = document.getElementById('8');
// //     btn8.innerHTML = `🔵`
// //     i++
// //   }
// //
// //   const selecting9 = () => {
// //     btn9 = document.getElementById('9');
// //     btn9.innerHTML = `🔵`
// //     i++
// //   }
// // }
//
//
// // //Runs the game
// // const game = () => {
// //   console.log('Game Function');
// //   for (let i = 0; i < 10; i++) {
// //     console.log('For Loop');
// //     if (i%2 === 0) {
// //       p1Turn();
// //       console.log('Player 1 seciton');
// //     } else {
// //       p2Turn();
// //       console.log('Player two section');
// //     }
// //     console.log(`value of i: ${i}`);
// //   }
// // }
//
//
// //------------------------------------------------------------------
//
// //removes start button
// const removestart = () => {
//   let startbtn = document.getElementById('start')
//   startbtn.remove();
// }
//
// //makes game appear
// const gameBoard = () => {
//   document.getElementById('gameDiv').style.visibility = 'visible';
// }
//
// //Function that starts the game
// const startGame = () => {
//   removestart();
//   gameBoard();
//   game();
// }









//--------------------DO NOT CHANGE ABOVE LINE --------------
const game = () => {
  console.log('Game Function');
  while (i < 10) {
    console.log('While Loop');
    if (i%2 === 0) {
      p1Turn();
      console.log('Player 1 seciton');
    } else {
      p2Turn();
      console.log('Player two section');
    }
    console.log(`value of i: ${i}`);
  }
}

const statements = [
  {
    statment: 'player 1',
    function: statement1 = () => {
      const text = document.getElementById('statement');
      text.innerHTML = `player one's turn`
    }
  },
  {
    statment: 'player 2',
    function: statement2 = () => {
      const text = document.getElementById('statement');
      text.innerHTML = `player two's turn`
    }
  },
]

const p1Turn = () => {
  statements[0]
  console.log('statement 1');
}

const p2Turn = () => {
  statement2();
  console.log('statement 2');
}


const selecting1 = () => {
  btn1 = document.getElementById('1');
  btn1.remove()
  if (turn = i%2 === 0) {
    square1 = document.getElementById('t1');
    square1.innerHTML = `❌`
    i++
  } else {
    square1 = document.getElementById('t1');
    square1.innerHTML = `🔵`
    i++
  }

}

const selecting2 = () => {
  btn2 = document.getElementById('2');
  btn2.remove()
  if (turn = i%2 === 0) {
    square2 = document.getElementById('t2');
    square2.innerHTML = `❌`
    i++
  } else {
    square2 = document.getElementById('t2');
    square2.innerHTML = `🔵`
    i++
  }
}

const selecting3 = () => {
  btn3 = document.getElementById('3');
  btn3.remove()
  if (turn = i%2 === 0) {
    square3 = document.getElementById('t3');
    square3.innerHTML = `❌`
    i++
  } else {
    square3 = document.getElementById('t3');
    square3.innerHTML = `🔵`
    i++
  }
}

const selecting4 = () => {
  btn4 = document.getElementById('4');
  btn4.remove()
  if (turn = i%2 === 0) {
    square4 = document.getElementById('t4');
    square4.innerHTML = `❌`
    i++
  } else {
    square4 = document.getElementById('t4');
    square4.innerHTML = `🔵`
    i++
  }
}

const selecting5 = () => {
  btn5 = document.getElementById('5');
  btn5.remove()
  if (turn = i%2 === 0) {
    square5 = document.getElementById('t5');
    square5.innerHTML = `❌`
    i++
  } else {
    square5 = document.getElementById('t5');
    square5.innerHTML = `🔵`
    i++
  }
}

const selecting6 = () => {
  btn6 = document.getElementById('6');
  btn6.remove()
  if (turn = i%2 === 0) {
    square6 = document.getElementById('t6');
    square6.innerHTML = `❌`
    i++
  } else {
    square6 = document.getElementById('t6');
    square6.innerHTML = `🔵`
    i++
  }
}

const selecting7 = () => {
  btn7 = document.getElementById('7');
  btn7.remove()
  if (turn = i%2 === 0) {
    square7 = document.getElementById('t7');
    square7.innerHTML = `❌`
    i++
  } else {
    square7 = document.getElementById('t7');
    square7.innerHTML = `🔵`
    i++
  }
}

const selecting8 = () => {
  btn8 = document.getElementById('8');
  btn8.remove()
  if (turn = i%2 === 0) {
    square8 = document.getElementById('t8');
    square8.innerHTML = `❌`
    i++
  } else {
    square8 = document.getElementById('t8');
    square8.innerHTML = `🔵`
    i++
  }
}

const selecting9 = () => {
  btn9 = document.getElementById('9');
  btn9.remove()
  if (turn = i%2 === 0) {
    square9 = document.getElementById('t9');
    square9.innerHTML = `❌`
    i++
  } else {
    square9 = document.getElementById('t9');
    square9.innerHTML = `🔵`
    i++
  }
}
//------------------------------------------------------------------

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
  game();
}

















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
// //Function change
// const functionChange = () => {
//   document.getElementById('p1Btn').onclick = btn2Functions()
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
// //Function to get player 2 name input and display player 2 name
// const player2Name = () => {
//   let playerTwo = document.getElementById('name2').value;
//   document.getElementById('p2').innerHTML = `Player Two: ${playerTwo}`
// }
//
// const btn2Functions = () => {
//   player2Name();
// }




//-------------- WAY 5 ----------------//
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
//   p2Btn.onclick = btn2Functions();
//   const appendDiv = document.getElementById('p1inputDiv');
//   appendDiv.appendChild(p2Btn);
// }
//
// //Function change
// const functionChange = () => {
//   document.getElementById('p2Btn').onclick = btn2Functions()
// }
//
// //calls all player one functions on click
// const btn1Functions = () => {
//   player1Name();
//   removePlayer1();
//   idChange();
//   removep1Btn();
//   makep2Btn();
//   functionChange();
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


//--------------------- WAY 6 -------------------//
// //Hide player 2 button
// document.getElementById('p2Btn').style.display = 'none';
//
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
//   p2Btn.onclick = btn2Functions();
//   const appendDiv = document.getElementById('p1inputDiv');
//   appendDiv.appendChild(p2Btn);
// }
//
// //Function change
// const functionChange = () => {
//   document.getElementById('p2Btn').onclick = btn2Functions()
// }
//
// //calls all player one functions on click
// const btn1Functions = () => {
//   player1Name();
//   removePlayer1();
//   idChange();
//   removep1Btn();
//   makep2Btn();
//   functionChange();
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
