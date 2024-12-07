/* Javascript Array Object Methods */

/* Array.at Method */

// at(index)


{
    let newArray = [1 , 2 , 3 , 4 , 5 , 6]

    console.log(newArray.at(-1));
}

/* Array.concat Method */

// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)


{
    // let array1 = ['html' , 'css' , 'bootstrap']

    // let array2 = ['toys' , 'television' , 'bicycle' , 'Riksha']

    // let array3 = [11 , 22 , 33]

    // let array4 = array2.concat(array1 , array3)

    // console.log(array4);
}

/* Array.copyWithin Method */

// copyWithin(target, start)
// copyWithin(target, start, end)


{
    let array1 = ['🍏' , '🍉' , '🍒' , '🍓' , '🥑' , '🥦' , '🍇' , '🥭']

    console.log(array1);

    // let array2 = array1.copyWithin(4)

    // console.log(array1);

    // let array2 = array1.copyWithin(2 , 5)

    // console.log(array2);

    // let array2 =  array1.copyWithin(2 , 4 , 7)

    // console.log(array2);


    // let array2 = array1.copyWithin(-8)

    // console.log(array1);
    
}

// Array.prototype.entries()

// entries()


{
    let array = [1, 2 , 3 , 4 , 5]

    let array2 = array.entries()

    console.log(array2.next().value);
    console.log(array2.next().value);
    console.log(array2.next().value);
    console.log(array2.next().value);
    console.log(array2.next().value);
    console.log(array2.next().value);
    
}

// Array.prototype.every()

// every(callbackFn)
// every(callbackFn, thisArg)

{
    let num = [45 , 25 , 78 , 95 , 43 , 5]

    let array = num.every((item) => item > 4)

    console.log(array);
}



