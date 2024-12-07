{
    // Array.reduce()

    let numArr = [10, 20, 30, 40];
    let intialValue = 50;

    console.log(numArr.reduce((prev, next) => prev + next, intialValue));
}

{
    // Array.reduceRight()

    let numArr = ['10', '20', '30', '40'];
    let intialValue = 50;

    console.log(numArr.reduceRight((prev, next) => prev + next, intialValue));
}

{
    // Array.slice()

    let array = ["html", "css", "javascript", "reactJS", "nodeJS"];

    console.log(array.slice(2));
    console.log(array.slice(1, 4));
    console.log(array.slice(-3));
    console.log(array.slice(-3, -1));
    console.log(array.slice(-3, 3));
}

{
    // Array.some()

    let array = [1, 2, 3, 4, 5];

    console.log(array.some((item) => item % 2 == 0));
}

{
    let array = ['March', 'Jan', 'Feb', 'Dec'];
    console.log(array.sort());

    let numArray = [32, 4, 546, 12];
    console.log(numArray.sort((a, b) => a - b));
}


function

{
    function hello() {
        console.log("Hello World");
    }

    hello();
}

function sayHello() {
    return console.log("This is from return");
}

sayHello();

function parameterFunction(num1, num2) {
    return num1 + num2; 
}

let resultSum = parameterFunction(5, 15);
console.log(resultSum);