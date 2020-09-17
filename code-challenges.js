// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

const div3 = (number) => {
  if (number % 3 === 0){
    return `${number} is divisble by three`
    }
  else if (number % 3 !== 0){
    return `${number} is not divisible by three`
  }
}

console.log(div3(num1))
console.log(div3(num2))
console.log(div3(num3))


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const caps = (array) => {
  let capNouns = array.map(value => {
  var firstLet =  value.charAt(0).toUpperCase()
  var endWord = value.substring(1)
    return firstLet.concat(endWord)
  })
    return capNouns
}
console.log(caps(randomNouns))
// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const onlyNums = (array) => {
  let numsArr = array.filter(value => {
    if(typeof value === 'number'){
      return value
    }
  })
  return numsArr.sort((a, b) => a - b)
}
console.log(onlyNums(mixedDataArray))





// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3
var stringArray = []

// const stringIndex = (string) => {
//   stringArray = vowelTester1.split("")
//   stringArray.map(index => value {
//       if (stringArray[i] === "a" || "e" || "i" || "o" || "u"){
//
//
//
// console.log(stringIndex(stringArray))
//
//


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, operator, num2) => {
  if(operator === "*"){
    return num1 * num2
  }
  else if(operator === "+"){
    return num1 + num2
  }
  else if(operator === "-"){
    return num1 - num2
  }
  else if(num2 === 0 && operator === "/" ){
    return "Cant divide by 0"
  }
  else if(operator === "/") {
    return num1 / num2
  }
}



// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"



// --------------------6) Create a function that takes in the following variable and returns only the websites that end in ".io".

var websites = ["codepen.io", "codecademy.com", "coursera.org", "codepen.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
// Expected output: "codepen.io" "codepen.io"

// const io = (websites) => {
//   for(let i = 0; websites.length; i++){
//     if(indexof(i) === "io"){
//       return [i]
//     }
//   }
// }
// console.log(io(websites))

// --------------------6) STRETCH: Write a function that takes a number as an argument and uses a WHILE loop to count up to that number from 0.
