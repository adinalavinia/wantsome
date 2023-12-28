let initialValues = [undefined, null, 22, 44, 87, "abc", true];
let otherValues = [undefined, null, 467, 345, "asd", "asdfg", false];

// push la otherValues in initialValues
initialValues.push(otherValues);
console.log(initialValues);

// 2. 5 - push la valorile din otherValues in initialValues
for(let i=0; i<otherValues.length; i++){
    initialValues.push(otherValues[i]);
}
console.log(initialValues);


// 3 - adaugam o valoare la un numar dintr-un array

let x = 12;
if (typeof x === "number") {
}
for (let i= 0; i< initialValues.length; i++){
    if (typeof initialValues[i] === "number") {
        initialValues[i] = initialValues[i] + 5;
    }
}
console.log(initialValues);

// concatenam stringuri

for (let i= 0; i< initialValues.length; i++){
    if (typeof initialValues[i] === "string") {
        initialValues[i] = initialValues[i] + "happy coding";
    }
}
console.log(initialValues);

// inversati valorile boolene


for (let i= 0; i< initialValues.length; i++){
    if (typeof initialValues[i] === "boolean") {
        initialValues[i] = !initialValues[i];
    }
}
console.log(initialValues);


// functie care returneaza un array numai cu stringurile din initialValues

function newArray(){
    let strings = [];
    for (let i= 0; i< initialValues.length; i++){
        if (typeof initialValues[i] === "string") {
            strings.push(initialValues[i]);
        }
    }
    return strings;
}
let asd = newArray();
console.log(asd);


// creati o functie care returneaza suma numerelor din initialValues

function sum(){
    let suma = 0;
    for(let i=0; i<initialValues.length; i++){
        if (typeof initialValues[i] === "number") {
            suma += initialValues[i];
        }
    }
    return suma;
}

console.log(sum());

// creati o functie care sa returneze un array care sa nu contina null si undefined tot din initialValue









//


const age1 = 15;
switch (age1) {
    case 17:
        console.log("am 17 ani");
        break;
    case 20: 
        console.log("am 20 ani");
        break;
    case 16: 
        console.log("am 15 ani");
        break;
    default:
        console.log("nu stiu cati ani am");
        break;

}



// 

// let age = prompt("introdu varsta cumparatorului");
// let price = prompt("introdu pretul biletului");

// if (age < 15){
//     let priceDiscount = price - (price * 0.25);
//     console.log("pret redus = " + priceDiscount);
// } else if (age >=15 && age <= 25){
//     let priceDiscount = price - (price * 0.10);
//     console.log("pret redus = " + priceDiscount);
// } else if (25 <= age) {
//     console.log("nu beneficiaza de reducere");
// }

  



//


let buyerAge = 17;
let price2 = 100;
switch(buyerAge) {
    case 15:
        console.log(price2 - (price2 * 0.25));
        break;
    case 16:
        console.log(price2 - (price2 * 0.20));
        break;
    case 17:
        console.log(price2 - (price2 * 0.15));
        break;
    case 18:
        console.log(price2 - (price2 * 0.10));
        break;
    default:
        console.log("fara reducere");
}









// pare


let number = 1;

for (let i=1; i<=100; i++) {
    if(i % 2 == 0){
        console.log(i);
    }
}

// numere impare

let i = 1;

while (i <= 100) {
    if(i % 2 != 0){
        console.log(i)
    }
    i++;
}