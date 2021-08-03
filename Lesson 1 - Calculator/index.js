let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

//Create four funtions: add(), substract(), divide(), multiply() 
let sumEl = document.getElementById("sum-el")
function add(){
  let total = num1+num2
  sumEl.textContent = "Sum: " + total
}
function substract(){
  let substract = num1 - num2
  sumEl.textContent = "Sum: " + substract
}
function divide(){
  let divide = num1/num2
  sumEl.textContent = "Sum: " + divide
}
function multiply(){
  let multiply = num1*num2
  sumEl.textContent = "Sum: " + multiply
}
//Call the correct funtion when the user clicks on one of the buttons
//Perform the given calculation using num1 and num2
//Render the result of the calculation in the paragraph with id="sum-el"

//e.g if the user clicks on the "Plus" button, you should render "Sum: 10" (since 8+2 =10) inside the paragraph with id="sum-el"
