// alert("hello!");


let numbers = [1,2,3];
numbers.push(7);
console.log(numbers);
// PUSH - se adauga la final  

numbers.unshift(0);
console.log(numbers);
// UNSHIFT - se adauga la inceput 


let lastNumber = numbers.pop();
console.log(numbers, lastNumber);
// pop - scoate ultimu numar din array

let firstNumber = numbers.shift();
console.log(numbers, firstNumber);
// shift - scoate primul numar din array



// --------------------------------

// Functions
// Declarare
function alertUser(){
    alert("Hello world!");
}

// Apelare
alertUser();


// Parametri 
function sum(a, b){
    console.log(a + b)
}

sum(3,4);
sum(6,7);
sum(9,3);


// Return value 
function sum2(a, b){
    const mySum = a + b;
    return mySum; 
}

const result = sum2(1,2)
console.log(result, sum2(11,22))
console.log(typeof result);

// -------------
if(sum2(2,3) > 3){
    console.log("X");
} else {
    console.log("A");
}


let counter = 0;
while (counter < 3) {
    console.log("din while", counter);
    counter++;
}

for (let i = 0; i <= 3; i++) {
    console.log("din for", i);
}