let array = [undefined, null, 22, "abc", true, ["asd", 45, false]];

for(let i=0; i<=array.length; i++){
    console.log(typeof array[i]);
}

// console.log(typeof array[0]);
// console.log(typeof array[1]);
// console.log(typeof array[2]);
// console.log(typeof array[3]);





// array cu integer - afisati min

let numbers = [2, 55, 43, 21, 1, 0, -46];
let min = numbers[0];

for(let i=0; i< numbers.length; i++ ){
    if(numbers[i]< min){
        min = numbers[i];
        console.log(min);
    }
}



