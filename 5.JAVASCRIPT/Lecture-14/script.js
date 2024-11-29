/* Javascript Array Method */

const newArray = ['html' , 'css' , 45 , undefined , null]

console.log(newArray);

console.log(newArray.length);

newArray.length = 10

console.log(newArray);

console.log(newArray[5]);

newArray.length = 6

console.log(newArray);

const array = new Array(10 , 20)

console.log(array);

const array1 = [10 , 20]

console.log(array1);

const newArray2 = [1 , 2 , 3 , 4 , 5 , 6]

console.log(newArray2);

newArray2[0] = 'skill'

console.log(newArray2);

newArray2.pop()

console.log(newArray2);

newArray2.shift()

console.log(newArray2);

newArray2.push(6)

console.log(newArray2);

newArray2.unshift(1)

console.log(newArray2);

{
    let array1 = [1 , 2 , 3]
    let array2 = [4 , 5 , 6]

    console.log(array1);
    console.log(array2);

    let array3 = array1.concat(array2)

    console.log(array3);

    array1[0] = 11

    console.log(array3);

    console.log(array1);
    
}