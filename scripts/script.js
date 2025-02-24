// document.getElementById("count-element").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;

/*let myAge = 31;

let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;

console.log(myDogAge); */

// let count = 5;

// //count+1
// count++;

// console.log(count);

// let bonusPoints = 50;

// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;

// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;

// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;

// console.log(bonusPoints);

// function countdown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }
// countdown();
// countdown();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function lapSum() {
//   let totalLapTime = lap1 + lap2 + lap3;
//   console.log(totalLapTime);
// }
// lapSum();

// let lapsCompleted = 0;

// function lapsIncremented() {
//   lapsCompleted++;
// }

// lapsIncremented();
// lapsIncremented();
// lapsIncremented();

// console.log(lapsCompleted);
// function meaningOfAll() {
//   console.log(42);
// }
// meaningOfAll();

// let username = "Steve";
// let message = "You have some new notifications";
// let messageToUser = username + ", " + message + "!";

// console.log(messageToUser);

// let named = "LB";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + named + ".";
// console.log(myGreeting);

// let points

//---------------------------------------------
let count = 0; // Initialize count as 0

let countElement = document.getElementById("count-element"); //creates the countElement, and initializes it as the html nubmer
//regularily called the DOM (Document Object Model)
console.log(countElement);

let countSave = document.getElementById("save-el");
console.log(countSave);
function increment() {
  //listen for clicks on button
  count++; //increment the count when the button is clicked
  countElement.textContent = count;
  console.log(count);
  console.log("button was pressed");
}

function save() {
  let seperator = count + " - ";
  countSave.textContent += seperator;

  console.log(count);
  count = 0;
  countElement.textContent = count;
}
//change the count-element in the HTML to reflect new count

// function increment() {
//   console.log("The button was pressed");
// }
