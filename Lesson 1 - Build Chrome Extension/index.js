let myLeads = []
let oldLeads = [] //new boleh je abaikan. untuk main with paramater je 

const inputEl=document.getElementById("input-el")
//input letak const instead of let. const cannot be reassign. 
//cth kalau tulis inputEl="Fana", it won't allow. Error.

//function saveClicked(){
  //console.log("Button clicked!")
//}
//instead, use the eventListener
const inputBtn = document.getElementById("input-btn")

//Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el") //!!
const deleteBtn = document.getElementById("delete-btn")

// Get the leads from the localStorage - PS:JSON.parse()
//Store it in a varible, leadsFromLocalStorage
//localStorage.clear() kalau nak clear storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//Log out the variable to check je
//console.log(leadsFromLocalStorage)

const tabBtn = document.getElementById("tab-btn")

//check if leadsFromLocalStorage is truthy
//if so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads) //myLeads data will become variable leads in function renderLeads(leads)

tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active:true, currentWindow: true},function(tabs){
    //console.log(tabs[]) // output: object array
    //console.log(tabs[0]) // output: object 
    //console.log(tabs[0].url) //output: dapat link sahaja, so use this

    //save the url instead of logging it out
     myLeads.push(tabs[0].url) 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
   });
    //another structure untuk paham 
    //chrome.tabs.query({
      //active:true, 
      //currentWindow: true},
      //function(tabs){
   //});
})

function render(leads){
  let listItems = ""
  // Log out the items in the myLeads array using a for loop
  //every myLeads -> leads, once changed, the body of this function has no idea about myLeads[] that we set at first line. it only cares about the value you've entered into the function when you called it 
  for(i=0;i<leads.length;i++){
    listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a></li>"
    //simplier this line using below:
    //listItems += '
    //<li>
      //<a target='_blank' href='${myLeads[i]}'>
        //${myLeads[i]}
    //</a>
    //</li>
    //'
    
    // !!
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    //tukar textContent ke innerHTML so that it could make <li>, <p> and etc  work
    // cara this line work: 1. create element (<li>), 2. setting the text content (myLeafs[i]), 3.append to ul 

    // another way sama macam atas:
    //const li = document.createElement("li")
    //li.textContent = myLeads[i]
    //ulEl.append(li) //append li
  }
  ulEl.innerHTML = listItems
}

//double click
deleteBtn.addEventListener("dblclick",function(){
  //console.log("double clicked!")
  localStorage.clear()
  myLeads = [] //set to empty array - reset
  render(myLeads)
})

inputBtn.addEventListener("click", function(){
  //Google -> "get value from input field javascript"
  //console.log("Button clicked!")
  myLeads.push(inputEl.value) 
  // Call the renderLeads() function to push written input inside ul
  //clear out the input field
  inputEl.value = ""
  
  //Save the myLeafs array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  // to verify that it works:
  //console.log(localStorage.getItem("myLeads"))
  
  render(myLeads)
})

// MANIFEST.JSON - tabs won't work if don't have this
  //{
    //manifest_version": 3,
      //"version": "1.0",
      //"name": "Leads tracker",
      //"action": {
        //"default_popup": "index.html",
        //"default_icon": "icon.png"
      //},
      //"permissions": [
       //"tabs"
      //]
  ///}

//EXERCISE
//EX1: LET & CONST
// Which of these variable should be changed from let to const?

// let basePrice= 520 - const (haven't change so use const)
// let discount = 120 - const (haven't change so use const)
// let shippingCost = 12
// let shippingTime = "5-12 days"

//shippingCost = 15
//shippingTime = "7-14 days"

//Calculating the full price
//let fullPrice = basePrice - discount + shippingCost
//(const - is only assign once)
//Finally, notifying the customer
//console.log("Total cost: "+fullPrice + ". It will arrive in " + shippingTime)

//EX2: INNERHTML
// example: Use .innerHTML to render a Buy! button inside the div container
//const container = document.getElementById("container")
//container.innerHTML = "<buton>Buy!</button>"

// example: when clicked, render a paragraph under the button (in the container) that says "Thank you for buying!"
//const container = document.getElementById("container")
//container.innerHTML = "<button onclick='buy()'>Buy!</button>"

//function buy(){
  //container.innerHTML += "<p>Thank you for buying!</p>"
//}

//EX3: TEMPLATE STRINGS/LITERALS
//const recipient = "James"

//Refactor the email string to use template strings
//const email = 'Hey " + recipient "! How is it going? Cheers Per'
//console.log(email)
//Masukkan recipient
//const email2 = 'Hey ${recipient}! How is it going? Cheers Per'
//console.log(email2)
//Create a new variable, sender, and set its value to your name
//const sender = "Per Harald Borgen"
//Use your sender variable instead of "Per"
//const email3 = 'Hey ${recipient}! How is it going? Cheers ${sender}'
//console.log(email3)

//EX4: LOCAL STORAGE
//let myLeads = []
//const inputEl = document.getElementById("input-el")
//const inputBtn = document.getElementById("input=btn")
//const ulEl = document.getElementById("ul-el")

//1. Save a key-value pair in localStorage
//2. Refresh the page. Get the value and log it to the console
//3. Clear local storage

//HINTS:
//localStorage.setItem(key,value)
//localStorage.getItem(key)
//localStorage.clear()
//PS: both key and value need to be strings
                       
//localStorage.setItem("myName","Per Harald Boren")
//let name = localStorage.getItem("myName")
//console.log(name)
//localStorage.clear()
//output: null - sebab ada clear

//EX5: Changing Data type to string for local storage
//Cara 1
//let myLeads= ["www.awesomelead.com"]'
//myLeads = JSON.parse(myLeads)
//myLeads.push("www.epiclead.com")
//console.log(myLeads)

//Cara 2 much simpler
//let myLeads = []
//myLeads = JSON.stringify(myLeads)
//console.log(typeof myLeads) // untuk check datatype

//EX6: Truthy and Falsy Statements
//Javascript ni pelik sikit sometimes dalam if statements boleh jadi camni

//falsy values
//const credits = 0
//if (credits){ // akan translate 0, falsy values so output dia sorry-..
  //console.log("Let's play")
//} else{
  //console.log("Sorry, you have no credits")
//}

//truthy
//if ("yolo"){ // string jadi true/truthy value, so output dia let'splay
  //console.log("Let's play")
//} else{
  //console.log("Sorry, you have no credits")
//}

//how to know truthy and falsy
//truthy

//falsy
//0
//""
//null - if variable tak set ke apa-apa (how you as developer signalize emptiness)
//undefined (how JavaScript signalizes emptiness)
//NaN

//Other way to check truthy falsy
//let trueOfFalse = Boolean("hello") // ganti hello with any variables you want to check
//console.log(trueOfFalse)

//challenges cuba teka 
//console.log( Boolean("") ) //falsy
//console.log( Boolean("0") ) //truthy - ni string sis
//console.log( Boolean(100) ) //truthy
//console.log( Boolean(null) ) //falsy
//console.log( Boolean([0]) ) //truthy - ni array kak
//console.log( Boolean(-0) ) //falsy - 0 is always falsy

//EX7: Write your own function paramater
//const welcomeEl = document.getElementById("welcome-el")
//function greetUser(name){ //it is expected we use name in the body of this function
  //welcomeEl.textContent = "Welcome back, " + name 
//}
//greetUser("Per") //let value of name
//output: Welcome back, Per

//kalau nak buat lebih pun boleh
//function greetUser(greeting,name, emoji){ 
  //welcomeEl.textContent = greeting + " , " + name 
  //tukar jadi template literals:
  //welcomeEl.textContent = '${greeting}, ${name}, ${emoji}' 
//}
//greetUser("Welcome back","Per", "🍉")
//output: Welcome back, Per

//kalau numbers in paramaters
//Create a function, add(), that adds two numbers together and returns the sum
//function add(num1,num2){
  //return num1+num2
//}
//console.log( add(3,4) ) //should log 7
//console.log( add(9,102) )//should log 111

//kalau array as parameters
//Create a function, getFirst(arr), that returns the first item in the array
//function getFirst(arr){
  //return arr[0]
//}
//let firstCard = getFirst([10,2,5])// num
//console.log(firstCard) 
//console.log(getFirst(["Babi","telur"])) //string
//Call it with an array as an argument to verify that it works

//TRYING MYSELF
//Refector the function so that it takes a parameter, leads, that it uses instead of the global myLeads variable. Remember to update all innovacations of the function as well

