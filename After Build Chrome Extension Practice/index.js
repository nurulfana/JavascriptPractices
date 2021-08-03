//PRACTICES
//EX 1 LET AND CONST and template strings

//SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

//PLAYING THE GAME
// reassign variables so dia let variables
points += 100
hasWon = true

//ANNOUNCING THE WINNNER
if (hasWon){
  console.log(`${player} got ${points} points and won the ${game} game!
  `)
} else {
  console.log(`The winner is ${opponent}! ${player} lost the game`)
}

//Go through all variables and decide if they should be let or const
//Change the console logs to use template string instead of double quotes


//EX 2 Log out items in an array
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

//Create a function that takes a single parameter, an array, and logs all the item of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr){
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
  }
}
logItems(myCourses)


//EX 3 Save to localStorage

//Save a value to localStorage
//Delete your code and refresh the page
//Fetch your value from localStorage and log it out

localStorage.setItem("myCredits","100")
// localStorage.clear()
let myCredits = localStorage.getItem("myCredits")
console.log(myCredits)


//EX 4 Generate Sentence

//The generateSentence(desc, arr) takes two parameter: a description and an array.
//It should return a string based upon the description and array.

//Example 1: if you pass in "largest countries", and ["China","India", "USA"], it should return the string: "The 3 largest countries are China, India, USA"

//Example 2: if you pass in "best fruits" and ["Apples","Bananas"], it should return: "The 2 best fruits are Apples and Bananas"

// Use both a for loop and a template string to solve the examples

function generateSentence(desc,arr){
  let baseString = `The ${arr.length} ${desc} are `
  const lastIndex = arr.length - 1
  for(let i=0;i<arr.length;i++){
    if(i===lastIndex){
      baseString += arr[i]
    } else {
    baseString += arr[i] + ", "
  }
  }
  return baseString
}
const sentence = generateSentence("highest mountains", ["Mount Everest","K2"])
console.log(sentence)


//EX 5 Render Images

//Create a function that renders the 3 team images
//Use a for loop, template strings (``), plus equals (+=)
//.innerHTML to solve the challenge

const imgs = [
  "images/hip1.jpg",
  "images/hip2.jpg",
  "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImage(){
  let imgsDOM =""
  for(let i=0; i<imgs.length; i++){
    imgsDOM += `<img alt="Team Pictures" class="team-img" src="${imgs}">`
  }
  container.innerHTML = imgsDOM
}
renderImage()

//EX 4 Add Event Listener and Object in an Array
let data = [
  {
  player: "Jane",
  score: 52
  },
  {
  player: "Mark",
  score: 41
  }
]

//Fetch the button from the DOM, store it in a variable
//Use addEventListener() to listen for button clicks
//Log Jane's score when the button is clicked (via data)

const scoreBtn = document.getElementById("score-btn")

scoreBtn.addEventListener("click",function(){
  console.log(data[0])     
  console.log(data[0].score) // if nak score sahaja
})
