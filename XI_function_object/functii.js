// 

function message(greeting, name){
    console.log(greeting, name);
}

message("Hello", "Adina");



// media aritmetica a doua numere

let ma = (a,b) => {
    return (a+b)/2;
}
console.log(ma(2,4));

function media(a,b){
    sum = a + b;
    media = sum/2;
    return media;
}
console.log(media(6,9));


// functie cu doua numere naturale si returnare cel mai mic numar dintre ele

function lowest(a, b){
    if(a < b){
        return a;
    } else {
        return b;
    }
}
 console.log(lowest(12,8));


 // functie care primeste baza si exponentul ca argumente si 
 // returneaza rezultatul ridicarii bazei la puterea specificata

 function calc(a, b){
    let result = 1;
    for(let i = 0; i < b; i++){
        result = result * a;
    }
    return result;
 }
console.log(calc(2, 3));

// sau


function calc2(a, b){
    return a**b;
}
console.log(calc2(2,4));




// 


