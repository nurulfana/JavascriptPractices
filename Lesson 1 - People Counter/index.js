//grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
//change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
  count = count + 1
  //countEl.innerText = count
  // asalnya document.getElementById("count-el").innerText(7)  
  countEl.textContent = count
}
 
//1.Create a function, save(), which logs out the count when it's called
function save(){
  //2.Create a variable that contains both the count and dash separator
  let countStr = count + " - "  
  //3.Render the varibale in the saveEl using innerText (tapi takleh pakai ni just contoh)
  //saveEl.innerText = countStr
  //3.Use this instead
  saveEl.textContent += countStr
  //NB:Make sure to not delete the exisisting content of the paragraph  
  
  //rest after tekan save
  countEl.textContent = 0
  count = 0 
  console.log(count)
}



// EXERCISES
//EX: 1
//  let count = 0
//  console.log(count)
//to check betul tak count=0. akan keluar dekat console

//1.Create a variable, myAge, and set its value to your age
//  let myAge = 21
//2.Log the myAge varibale to console
//  console.log(myAge)

//EX: 2
//1.Create two variables, myAge and humanDogRatio
// 1 human year = 7 dog years
//  let myAge = 21
//  let humanDogRatio = 7
//2.Multiply the two together and store the result in myDogAge
//  let myDogAge = myAge * humanDogRatio
//3.Log myDogAge to the console
//  console.log(myDogAge)

//EX: 3
//1.Create a variable, bonusPoints. Initiate it as 50. Increase it to 100.
//  let bonusPoints = 50
//  console.log(bonusPoints)
//  bonusPoints = bonusPoints + 50
//  console.log(bonusPoints)
//2.Decrease it down to 25, and then finally increase it to 70
//  bonusPoints = bonusPoints - 75
//  console.log(bonusPoints)
//  bonusPoints = bonusPoints + 45
//  console.log(bonusPoints)
//3.Console.log the value after each step

//EX: 4 functionable button
// 1.Initiate the count as 0
 
// 2.Listen for clicks on the increment button

// 3.Increment the count variable when the button is clicked
// 4.Change the count-el in the HMTL to reflect the new count

//function increment() {
  //console.log("The Button was clicked")
  
//}

//EX 5: Setting Up The Race - belajar methods function to write less code
//Setting up the race
//function countdown() {
  //console.log(5)
  //console.log(4)
  //console.log(3)
  //console.log(2)
  //console.log(1)
//}

//countdown()
//GO!
//Players are running the race
//Race is finished!
//Get ready for a new race
//countdown()

//EX 6 functions
//let lap1 = 34
//let lap2 = 33
//let lap3 = 36

//1.Create a funtion that logs out the sum of all lap times
//function myLaps(){
  //cara 1
  //console.log(lap1+lap2+lap3)
  //cara 2
  //let totalTime = lap1 + lap2 + lap3
  //console.log(totalTime)
//}
//myLaps()

//EX 7 create a function that increments
//let lapsCompleted = 0
//1.Create a function that increments the lapsCompleted variable with one
//function incrementLap() {
  //lapsCompleted = lapsCompleted + 1
//}
//2.Run it three times
//incrementLap()
//incrementLap()
//incrementLap()
//console.log(lapsCompleted) // console ni kena ada untuk keluar the output!!

//EX 8 strings variables
// bila ada "" it's a string
//let num = 3
//let message = "You have new notifications"
//console.log(message + "," num)
//or
//let messageToUser = message + "," + num
//console.log(messageToUser)

//EX 9 render a welcome message
//1.Grab the welcome-el paragraph and store it in a variable called welcomeEl
//let welcomeEl = document.getElementById("welcome-el")
//2.Create two variables (name&greeting) that contains your name and the greeting we want to render on the page
//let name = "fana"
//let greeting = "Welcome!"
//3.Render the welcome message using welcomeEl.innerText
//welcomeEl.innerText = name+greeting

//add an emoji to the end
//welcomeEl.innerText = welcomeEl.innerText + "😃"
//or
//welcomeEl.innerText += "😃"
