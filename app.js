//CMDER
//TERMINAL
//CONSOLE

// array
var names= [];
names.push('Charles');
names.push('Ebbonai');
names.push('Kenny');
names.push('Letty');
names.push('Wes');

// IMPORTS
var math = require('./Math');

function test() {
    var name="Wes";
    var age="";

    console.log(name);

    if(age < 60){
        console.log("You're still young.")
    }

    else{
        console.log("Getting a bit old")
    }
}

//Log numbers 3-12 except for number 7
function problem1(){
    for(let i = 3; i < 13; i++){
        if (i != 7){
            console.log(i);
        }
    }
}

//Reverse Array Order

function reverse(){
    for(let j = names.length-1; j >= 0; j--){
        console.log(names[j]);
    }
}

function init() {
    console.log("Hello NodeJS"); 
    test();
    problem1 ();
    reverse();
    math.test();

    // Add
    var result = math.add(21,25);
    console.log("Result: " + result);

    //Subtract
    var result = math.subtract(21,55);
    console.log("Result: " + result);

    // Multiply 
    var result
