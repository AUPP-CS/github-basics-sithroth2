// let name = prompt("Input your name: ")
// year = prompt("Input your year: ")
// major = prompt("input your major: ")
// now= new Date()
// alert(`My name is ${name}. I am a ${year} majoring in ${major}.\
//     Today is ${now.getDate()}-${now.getMonth()}-${now.getFullYear()}.`)

// let a = 10
// let b = null
// console.log("Hello World")


// // syntax
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
let num = [1,2,3,4,5]
let [a, b] = num
console.log(a)
console.log(b)

let car = {
    'name': 'corolla',
    'brand': 'toyota',
    'color': 'white'
}

let {name, brand, color} = car
console.log(name)
console.log(brand)