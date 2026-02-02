// let name = prompt("Input your name: ")
// year = prompt("Input your year: ")
// major = prompt("input your major: ")
// now= new Date()
// alert(`My name is ${name}. I am a ${year} majoring in ${major}.\
//     Today is ${now.getDate()}-${now.getMonth()}-${now.getFullYear()}.`)

// let a = 10
// let b = null
// console.log("Hello World")


// // syntax ////
// while (condition) {
//     // code to be executed
// }
// sample 
// let i = prompt("Insert the number: ")
// while (i <= 5){
//     console.log(i)
//     i++;
// }

// let age = 5
// let adult = age >= 18 ? "adult" : "underage"
// console.log(adult)

// let x=5
// let addOne = x% 2 === 0 ? x + 1 : x
// console.log(addOne)

// Arrays, Objects
// let num = [1,2,3,4,5]
// let [a, b] = num
// console.log(a)
// console.log(b)

// let car = {
//     'name': 'corolla',
//     'brand': 'toyota',
//     'color': 'white'
// }

// let {name, brand, color} = car
// console.log(name)
// console.log(brand)

// let num1 = [1,2,3,4]
// let result = num1.map((num)=> {num * 2})
// let even =num1.filter((num) => num %2 ==0)
// console.log(even)
// console.log(result)

////Function ////

// function one(a, b){
//     return a/b
// }
// console.log(one(5, 10))

// //..............
// const hello = function(name){
//     console.log(`Hello ${name}`)
// }

// hello("Roth")
//..............

// const hello = (name) => console.log(`Hello ${name}`)    

//..................
// function greet(){
//     console.log("hello World")
// }

// const  greet = () =>{
//     console.log("Hello World")
//     console.log("Hello World")
// }

// function sayName(name) {
//     console.log(`Hello, ${name}`)
// }

// greet()
// sayName("Roth")

//// Higher order functions////

// const alertHello = () => {
//     setTimeout(() => alert("Hello!"), 3000)
// }
// alertHello()

//....................

// const logHello = () =>{
//     let count = 0
//     const intervalID = setInterval (() => {
//         console.log("Hello")
//         count++
//         if (count === 5) {
//             clearInterval( intervalID)
//         }
//     }, 1000)
// }
// logHello()

//// map() ////
// const n =[1, 2, 3, 4, 5];
// const square = n.map((num) => num * num);
// console.log(square);

// filter() ////
// const n = [1, 2, 3 ,4, 5];
// const even = n.filter((num) => num% 2 === 0);
// console.log(even); 

////

function calculateAverage(){
    
}


// Callback
// sum(diplayConsole, 1, 2);
// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }


