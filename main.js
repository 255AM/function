/* I Love JavaScript
Define a function that logs the string "I love JavaScript!" to the console.
Execute, or call, the function. */

function guitarLove(){
    console.log('I love guitars')
}

guitarLove()

/* Write a function that accepts two parameters of name and destination.
The function should log a sentence to the console about where that person wants to go.
Call the function three different times with different parameters. Example: if you pass in "Jessica" and "Mount Fuji" as parameters, you should see the sentence "Jessica would love to visit Mount Fuji." logged to the console. */

function whereTo(name, destination){
    return `${name} wants to visit ${destination}`
}

whereTo('chcuk', 'Mexico')
whereTo('JO', 'Hawaii')
whereTo('chcuk', 'Mexico')



let x = console.log(whereTo("gre", "here"))
console.log(x);

// aco Truck
// Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. (Both will be strings.)
// Inside the function, use string interpolation to build a sentence that announces the taco is ready. Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
// Return the taco sentence and store the returned sentence in a variable.
// Execute the function.
// Log the returned sentence to the console.

function orderTaco(typeOfShell, topping){
    return `your ${typeOfShell} taco with ${topping} is ready`
}

tacoDone = console.log(orderTaco('hard', 'beef'));

// . Calculator
// Write a function called add. It should accept two numbers as parameters and log their sum to the console.
// Write a function called subtract. It should accept two numbers as parameters and log the difference between the first and second number to the console.
// Write a function called multiply. It should accept two numbers as parameters and log their product to the console.
// Write a function called divide. It should accept two numbers as parameters, divide the first number by the second number, and log the result to the console.
// Call each function three times with different parameters.

function add(num1, num2){
    console.log(num1+num2);
}
add(444, 444)

// 2. Calculator Refactor
// Refactor your previous exercise so that each calculator function returns the result of its calculations. You should not have any console.logs inside your functions.
// When you execute your calculator functions, store each result in a new variable and log the variable to the console. The console.logs should now be outside the scope of your functions.

function addre(num1, num2){
    return num1+num2;
}
getSum = console.log(addre(470, 888))


// 3. Greetings Pt. 2
// Revisit the greetings exercise you did in the conditionals chapter, where you logged a greeting to the console based on the person's preferred language.
// Write a function that accepts two parameters: name and language.

function language(name, language){
    if (language === 'English'){
        console.log(`Hello, ${name}`);
    }else if (language === 'Spanish'){
            console.log(`Hola, ${name}`);
    }
}

console.log(language('Santa', 'Spanish'));

// If the person's preferred language is English, the function should print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.


// 4. Sandwich Maker
// Write a function that accepts three parameters: breadType (a string), sandwichName, and isToasted (a boolean).
// The function should check whether isToasted is true or false and build a sentence about the sandwich order accordingly.
// The function should return the sentence.
// Call the function three times, passing in three different sets of parameters.
// Example console output:
// "You ordered a toasted meatball sub sandwich on wheat."

function yourSandy(breadType, sandwichName, isToasted){
    if (isToasted){
        return `You ordered a toasted ${breadType} ${sandwichName} sub`
    }else{
        return `You ordered an untoasted ${breadType} ${sandwichName} sub`
    }
}

let sandy1 = console.log(yourSandy('italian', 'club', false))
let sandy2 = console.log(yourSandy('wheat', 'tuna', true))
let sandy3 = console.log(yourSandy('rye', 'steak', true))

// 5. The Rock's Hobbies
// Once again, we concern ourselves with our friend Dwayne:
let dwayneObject = {
  firstName: "Dwayne",
  nickName: "The Rock",
  lastName: "Johnson",
  favoriteFood: "Eggs",
  hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building incredible muscle mass"]
}

function printHobbies(){
// YOUR CODE GOES HERE
    for(let i=0; i<dwayneObject.hobbies.length; i++){
        console.log(dwayneObject.hobbies[i])
    }
}
// The printHobbies function should loop through the array of Dwayne The Rock Johnson's hobbies and print each one to the console.
// Call the printHobbies function.
printHobbies()



// 6. New Years Eve Party
// Copy and paste the following array into your JavaScript file:

let partyGuests = [
  {
    name: " Sam",
    age: 18
  },
  {
    name: " Jerry",
    age: 45
  },
  {
    name: " Lila",
    age: 29
  },
  {
    name: " Mary",
    age: 68
  },
  {
    name: " Todd",
    age: 10
  }
]

function ageChecker(requiredAge, event){
    // YOUR CODE GOES HERE
    let ofAge = []
    let notOfAge = []
    for(let i=0; i<partyGuests.length; i++){
        if (partyGuests[i].age > requiredAge){
            ofAge.push(partyGuests[i].name)
        }else{
            notOfAge.push(partyGuests[i].name)
        }
    } 
    console.log(`${ofAge} are allowed to ${event}. ${notOfAge} are not`); 
}
ageChecker(21, 'drinrrk')
// Fill in the ageChecker function so that it does the following things:

// Loop through the partyGuests and check if each guest is at least 21.
// Build a sentence or two about who can drink and who can't. (Example: " "Jery, Lila, and Mary can drink. Sam and Todd are too young.")
// Log the sentnece to the console.
// Optional Challenge- Make your function more reusable by adding parameters! Let's say that your next task is to sort through an array of people and figure out who is old enough to vote, not drink. You could write another function that does approximately the same thing, but with an array of potential voters and the cut off age of 18 instead of 21. But that would be a lot of repeat code, and our goal is to repeat ourselves as little as possible! Refactor your ageChecker function so that it accepts two parameters: an array of objects representing people (assume that they will be structured like the objects in the partyGuests array) and an age to check for. Now the function should return an array of people objects that are at or above the given cut-off age. Please ask for help with this one if you get stuck!

// 7. Celsius to Fahrenheit
// You'll be writing two functions: one that converts Celsius to Fahrenheit and the other, vice versa.
function cToF(tempC){
    let tempF = tempC * 1.8 + 32
    console.log(`You entered ${tempC} C. That converts to ${tempF} F.`)
}

function fToC(tempF){
    let tempC = (tempF - 32) / 1.8
    console.log(`You entered ${tempF} F. That converts to ${tempC} C.`)
}
cToF(23)

fToC(80)

// Write a function that takes the temperature in Celsius as the parameter
// The function should do the following calculation to get the temperature in Fahrenheit: T(F) = T(C) * 1.8 + 32
// Output the temperature in Fahrenheit to the console
// Write a second function that takes the temperature in Fahrenheit as the parameter
// The function should do the following calculation to get the temperature in Celsius: T(C) = (T(F) - 32) / 1.8
// Output the temperature in Celsius to the console
// Example output:

// "You entered [degrees in Celsius] Celsius. That converts to [degrees in Fahrenheit] Fahrenheit." "You entered [degrees in Fahrenheit] Fahrenheit. That converts to [degrees in Celsius] Celsius."


// 8. It All Adds Up!
// Copy and paste the following code into your JavaScript file:

let outsideArray =  [4, 7, 8008, 11, 9, -1];
// In your JavaScript file, create (declare) a function named addThemUp.
// The function should accept one argument: an array of numbers.
// Inside the function, loop over the array of numbers parameter and add them up to a running sum.
// The addThemUp function should return the sum.
// Call addThemUp and pass in outsideArray as an argument.
// Save the returned value in a variable called mySum.
// Log mySum to the console.
// Try changing the numbers in the array or adding new numbers.


let cumulative = 0
function addThemUp(numArr){
    for(let i=0; i<numArr.length; i++){
        cumulative += numArr[i]
    }
    return cumulative
}

mySum = console.log(addThemUp(outsideArray))



// 9. Law of Averages
// Copy and paste the following code into your JavaScript file:

let scoresToAverage =  [22, 34, 62, 11, 90, 88, 70, 65, 22, 89, 85, 39, 71, 92, 98, 84];
// In your JavaScript file, define a function named findAverage.
// The function should accept one argument: an array of numbers.
// Inside the function, loop over the array of numbers parameter and find their average.
// The findAverage function should return the average of all the numbers.
// Call findAverage and pass in scoresToAverage as an argument.
// Save the returned value in a variable called myAverage.
// Log myAverage to the console.
// Try adding new numbers to the outsideArray. Your function should still return the correct average no matter how many items are in the array.
let cumulative1 = 0
x = 0
function findAverage(numArr){
    for(let i=0; i<numArr.length; i++){
        x++;
        cumulative1 += numArr[i]
        console.log(x)
        console.log(cumulative1);
    }
    return cumulative1/x;
}

let avg = console.log(findAverage(scoresToAverage))

// 10. Shipping Calculator
// You work for an online clothing retailer. Every time an order ships, your company needs to calculate the cost of shipping so they can charge the customer correctly. Because they need to make this calculation so many times and in so many places, they've asked you to write a function that calculates shipping cost based on package weight, distance to destination, and whether or not the package is oversized.
// The cost of shipping is always the weight of the package multiplied by the distance it needs to travel, divided by 100.
// If the package is oversized, it adds ten dollars to the cost of shipping.
// Write a function that accepts whatever information you need to calculate the cost of shipping and returns the cost as an integer.
// Execute the function and output the result to the console.


