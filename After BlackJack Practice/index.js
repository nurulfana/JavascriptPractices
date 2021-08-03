//PRACTICES
//EX1: OBJECTS AND FUNCTIONS
// Create a person object that contains three keys: name, age, and country.
// Use yourself as an example to set the values for name, age and country
let person = {
  name: "fana",
  age: 21,
  country: "MY"
}

function logData(){
  console.log(person.name + " is "+person.age+" years old and lives in "+person.country)
}
logData()
// Create a function, logData(), that uses the person object to create a string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

//EX2 : If else
let age = 75

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discaunt
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

//Create a conditional statement (if/else/else if) that logs out the discount
//the passenger will get based upon the value of the age variable

if (age<6){
  console.log("Free")
} else if (age<18){
  console.log("Child discount")
} else if (age<27){
  console.log("Student discount")
} else if (age<67){
  console.log("Full price")
} else{
  console.log("Senior citizen discount")
}

//EX3: Loops and Arrays
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

/* Use a for loop to log the following to the console:
The 5 largest countries in the world:
-China
-India
-United States
-Indonesia
-Pakistan
*/
console.log("The 5 largest countries in the world:")
for(let i=0; i<largeCountries.length; i++){
  console.log("- " + largeCountries[i])
}

//EX4: Push, Pop, Unshift, Shift 
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

//You need to help me fixup the largeCountries array so that 
//China and Pakistan are added back into their respective places
// Use push() & pop() and their counterparts unshift() & shift()

largeCountries.pop() 
// buang belakang = Monaco
largeCountries.push("Pakistan")
// masuk Pakistan kat belakang
largeCountries.shift()
// remove depan Tuvalu
largeCountries.unshift("China")
// masuk China kat depan
console.log(largeCountries)

//EX5: Rock, Paper, Scissors. RANDOM
let hands = ["rock", "paper", "scissor"]

//create a function that returns a random item from the array

function getHand(){
  let randomIndex = Math.floor(Math.random() * 3)
  return hands[randomIndex]
}
console.log(getHand()) //untuk dapatkan nilai method tulis 'get'

//EX5: Sorting Fruits
let fruit = ["🍎","🍊","🍎","🍎","🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

//Create a function that puts the apples onto the appleShelf and the oranges onto the orangeSelf. Use a for loop, a conditional statement, and the textContent property
function fruitShelf(){
  for(let i=0;i<fruit.length;i++){
  if(fruit[i]==="🍎"){ 
    appleShelf.textContent += "🍎"
    console.log(appleShelf)
  }
  else if(fruit[i]==="🍊"){
    orangeShelf.textContent += "🍊"
  }
  }
}
console.log(fruitShelf())
