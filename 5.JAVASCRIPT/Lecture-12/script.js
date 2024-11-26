/* Javascript Math Object Method */

/* self Method */

// Math.sign()
// Math.sin()
// Math.sqrt()
// Math.trunc()
// Math.log()
// Math.log10()
// Math.log2()
// Math.cos()


// angle = degree * PI / 180


// console.log(Math.log(10));
// console.log(Math.log10(10));
// console.log(Math.log2(10));

// https://byjus.com/maths/logarithm-table/


// let math1 = Math.tan(0 * 3.14 / 180)

// console.log(math1);

/* Javascript Number Method */

console.log(Number.isFinite(0/1));
console.log(Number.isFinite(5/10));
console.log(Number.isFinite(10/5));
console.log(Number.isFinite(NaN));
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.10));
console.log(Number.isNaN(10));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('ABC' * 10));
console.log(Number.parseFloat(10.56));
console.log(Number.parseInt(10.56));
console.log(Number.isInteger(-10.10));

/* Number.prototype.toExponential() */

// toExponential()
// toExponential(fractionDigits)

{
    
    let value = 25000000
    
    console.log(value.toExponential(5));

}

// Number.prototype.toFixed()

{

    let value = 45698.4898

    console.log(value.toFixed());
    console.log(value.toFixed(0));
    console.log(value.toFixed(1));
    console.log(value.toFixed(2));
    console.log(value.toFixed(3));
}


// Number.prototype.toPrecision()

{
    let value = 45698.4898

    // console.log(value.toPrecision(0));
    console.log(value.toPrecision(1));
    console.log(value.toPrecision(2));
    console.log(value.toPrecision(3));
    
}

// Number.prototype.toString()


{

    let num = 10

    console.log(typeof(num.toString()));

    console.log(typeof(num.valueOf()));
    
}