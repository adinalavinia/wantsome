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

// creati o functie care sa returneze un array care sa contina un 

