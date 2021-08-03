//create the player object. give it two keys, name and chips
//creating an object
let player = {
  name : "Per", 
  chips : 145
}

//start of the game BEFORE playing. rest all 0
let cards = [] 
let sum = 0
let hasBlackJack = false //initialy: don't have blackjack
let isAlive = false // belum join game
let message = ""

//store message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
// CARA 1 getElementById: store sum paragraph in a variable sumEl
let sumEl = document.getElementById("sum-el")
// CARA 2 querySelector: store sum paragraph in a variable sumEl (more specific) 
// REMEMBER! # for id, . for class
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


//name and chips earned, grab a hold of the player-el paragraph
let playerEl = document.getElementById("player-el")
//render the player name and chips
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
  let randomNumber = Math.floor( Math.random()*13 ) + 1
  // 0.000 - 12.999 (kalau Math.random()*13)
  // 0 - 12 (kalau add Math.floor)
  
  // if 1 -> return 11
  // if 11-13 -> return 10
  if(randomNumber>10){
    return 10
  }else if (randomNumber===1){
    return 11
  }else{
    return randomNumber
  }
}


function startGame(){
  isAlive = true //once joined, auto alive
  //generate the two random numbers
  //reassign the cards and sum variables so that the game can start
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  
  renderGame()
}

function renderGame(){
  //render out firstCard and secondCard
  //cardsEl.textContent = "Cards: " + cards[0] + "," + cards[1]
  
  //create a for loop that renders all the cards instead of just two like the above
  for(let i=0;i<cards.length;i++){
    cardsEl.textContent += cards[i] + " "
  }
  
  //render out ALL the cards we have
  sumEl.textContent = "Sum: " + sum
  //rule blackjack: must get as close to 21 or 21. 
  if (sum < 21) {
    message = "Do you want to draw a new card?🙂"
  }
  // triple === maksudnya 'is the sum strictly equals 21'
  else if (sum === 21) {
     message = "Wohoo! You've got Blackjack!😄"
    hasBlackJack = true // got blackjack
  }
  else if (sum > 21){
     message = "You're out of the game😭"
    isAlive = false
  }
  //display the message in the messageEl using messageEl.textContent
  messageEl.textContent = message
  
  //CASH OUT! ni takleh pakai sebab dia keluar kat console je pakai yang dipslay message atas ni instead
  //console.log(hasBlackJack)
  //console.log(isAlive)  
  //console.log(message)
}

function newCard(){
  //only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if(isAlive == true && hasBlackJack==false){
    //1.Create a card variable, and hard code its value to a number (2-11)
    let card = getRandomCard()
    //2. Add the new card to the sum variable
    sum += card
    //push the card to the cards array
    cards.push(card)
    console.log(card)
    //3. Call startGame()
    renderGame() 
  }
}

//EXERCISE 
// EX1: ARRAY
//Create an array that describes yourself. Use 3 primitive data types you've learned (string, int, boolean)
//let myself = ["My name is farhanah", 21, true]

//EX2: PUSH & POP OPERATION
//let cards = [7,4]
//console.push(6)
//console.log(cards)
// ouput -> [7,4,6]
// cards.pop()
// ouput -> [7,4]

//EX3: How To Count With Javascript FOR LOOPS
//Where should we START counting?
//Where is the FINISH line?
//What's the STEP SIZE we should size?

//      start    finish    step size
//for(let count=1; count<11; count+=1){
  //console.log(count)
//

//another example
//let messages = [
  //"Hey, how's it going?",
  //"I'm great, thank you! How about you?",
  //"All good. Been working on porfoloio lately.",
  //"Same here!",
  //"Great to Hear"
//]

//DRY - dont repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

//better! 
//for(let i=0; i<messages.length;i+=1){
  //console.log(messages[i])
//}

//another example
//let cards2 = [7,3,9]
//create a for loop that logs out all the cards in the array
//use cards.length to specify how long the loop should run
//for(let i=0;i<cards2.length;i+=1){
  //console.log(cards2[i])
//}
//ouput: 7 3 9

//another example
//for(let i=0;i<sentence.length;i++){
  //greetingEl.textContent += sentence[i] + " "
//}
//satu baris output instead of ke bawah

//EX4:  FUNCTION AND RETURN 
//let player1Time = 102
//let player2Time = 107

//function getFastestTime(){
  //if (player1Time<player2Time){
    //return player1Time
  //}else if (player2Time<player1Time){
    //return player2Time
  //}else{
    //return player1Time
  //}
//}

//let fastestRace = getFastestRaceTime()
//console.log(fastestRace)

//Write a function that returns the total race time
//call/invoke the function and store the returned value in a new variable
//finally, log the variable out
//function getTotalRaceTime(){
  //return player1Time+player2Time
//}
//let totalTime = getTotalRaceTime()
//console.log(totaltime)

//EX5: Random number Math.random & Math.floor
// Math.random() 0.000 -> 0.999 
//let randomNumber = Math.random() * 6
//console.log(randomNumber)
// ouput: 0 -> 5.9999

//Math.floor()
//let flooredNumber = Math.floor(3.45632)
//console.log(flooredNumber)
// outtput: 3 removes decimals

//combine floor and random
//let randomNumber = Math.floor(Math.random()*6)
//console.log(randomNumber)
//output - removes decimals. 0 -> 5

//crete a function, rollDice(), that returns a random number between 1 and 6
//function rollDice(){
  //let randomNumber = Math.floor(Math.random()*6)+1
  //return randomNumber
//}
//console.log(rollDice())

//EX6 IF STATEMENTS
//let hasSolvedChallenge = false
//let hasHintsLeft = false

//Create an if statement that checks that both variables are false
//if (hasSolvedChallenge == false && hasHintsLeft == false){
  //showSolution()
//} 
//else{
  
//}
//If so, run the showSolution() function

//function showSolution(){
  //console.log("Showing the solution...")
//}

//EX 7 OBJECTS - store data indepth - composite / complex data types (key value pairs)
//let course = {
  //title: "Learn CSS Grid for free",
  //title is key, learn bla bla is value
  //lessons: 16,
  //creator: "Per Harald Borgen",
  //length: 63,
  //level: 2,
  //isFree: true, 
  //tags: ["html","css"]
//}
//to access these values
//console.log(course["tags"])
//or better way
//console.log(course.tags)
//ouput ["html","css"]
