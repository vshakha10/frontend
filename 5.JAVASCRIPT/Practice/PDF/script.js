// 1.JavaScript Program To Print Hello World

console.log('hello world');

// 2.JavaScript Program to Add Two Numbers

let num1 = 22;
let num2 = 26;

console.log(num1+num2);

// 3. JavaScript Program to Find the Square Root

console.log(Math.sqrt(8));

// 4. JavaScript Program to Calculate the Area of a Triangle

// let new1 = 3;
// let new2 = 4;

// console.log(${0.5 * new1 * new2});

// 5. JavaScript Program to Swap Two Variables

{
    let A = 6;
    let B = 7;

    let c = A;
    A = B;
    B = c;

    console.log(A);
    console.log(B);

}

//6.JavaScript Program to Solve Quadratic Equation



{
    // 7) JavaScript Program to Convert Kilometres to Miles

    const miles = 0.62137119;
    let kilometers = 17;

    console.log(kilometers * miles);
}


{
    // 8) Javascript Program to Convert Celsius to Fahrenheit

    let celsius = 30;

    let fahrenheit = ((celsius * 9) / 5) + 32;
    console.log(fahrenheit);
}

{
    // 9) Javascript Program to Generate a Random Number

    let randomNum = Math.round(Math.random() * 100 + 1);
    console.log(randomNum);
}


{
    // 10) Javascript Program to Check if a number is Positive, Negative, or Zero


    let num = 10;

    if (num > 0) {
        console.log(`${num} is positive`);
    } else if (num < 0) {
        console.log(`${num} is negative`);
    } else {
        console.log(`${num} is zero`);
    }
}


{
    // 11) Javascript Program to Check if a Number is Odd or Even

    let num = 8;

    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}


{
    // 12) JavaScript Program to Find the Largest Among Three Numbers

    let num1 = 50;
    let num2 = 60;
    let num3 = 5;

    if ((num1 > num2) && (num1 > num3)) {
        console.log("Nunber 1 is largest among three numbers")
    } else if ((num2 > num1) && (num2 > num3)) {
        console.log("Number 2 is largest");
    } else if ((num3 > num1) && (num3 > num2)) {
        console.log("Number 3 is largest among three numbers");
    } else {
        console.log("Invalid");
    }
}


{
    // 13) JavaScript Program to Check Prime Number

    let num = 15;

    if ((num % 1 == 0) && (num % num == 0)) {
        console.log("Prime Number");
    }
}


{
    // 15) JavaScript Program to Find the Factorial of a Number

    let n = 2;
    let fact = 5 ;

    for (let i = n; i >= 1; i--) {
        fact = fact * i;
    }
    console.log(fact);
}

{
    //  16) JavaScript Program to Display the Multiplication Table

    let multiply = 9;

    for (let i = 1; i <= 10; i++) {
        console.log(`${multiply} * ${i} = ${multiply * i}`);
    }
}



{
    // 17) JavaScript Program to Print the Fibonacci Sequence

    let n1 = 0;
    let n2 = 1;
    let n3 = 1;
    let i = 1;

    while (i <= 10) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;

        i++;
        console.log(`${n1}`);
    }
}

{
    //  18) JavaScript Program to Check Armstrong Number

    let num = 153;
    let sum = 0;

    let temp = num;

    while (temp > 0) {
        let remainder = temp % 10;
        sum = sum + remainder * remainder * remainder;
        temp = Math.floor(temp / 10);
    }

    if (sum == num) {
        console.log(`${num} is an Armstrong number`);
    } else {
        console.log(`${num} is not an Armstrong number`);
    }
}