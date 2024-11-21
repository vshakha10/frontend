// 1. Write a program that calculates the sum of all numbers from 1 to 100.

// let sum = 0

// for(let num = 1 ; num<= 100 ; num++)
// {
//     sum = sum + num;
// }
// console.log(`sum number `,sum);


// 2. Write a program that prints the multiplication table of a given number (for example, 5).

// let num = 20

// for(let i=1; i<=10;i++){ 
          
//     console.log(`${num}*${i}=${num*i}`); 
// } 

// 3. Write a program that calculates the factorial of a given number (for 
    // example, 5!). 
 
    // { 
 
    //     let i = 1; 
    //     let fact = 1; 
         
    //     while(i<=7){ 
    //         fact= fact * i; 
    //         i++; 
    //     } 
    //     console.log(`factorial`,fact); 
    // } 

    // { 
 
    //     let i = 6; 
    //     let fact = 1; 
         
    //     while(i>=1){ 
    //         fact= fact * i; 
    //         i--; 
    //     } 
    //     console.log(`factorial`,fact); 
    // } 

     // 4. Write a program that prints the first 10 numbers in the Fibonacci 
    // // sequence 
 
    // { 
 
    //     let n1 = 0; 
    //     let n2 = 1; 
    //     let n3 = 1; 
 
    //     for(let i = 1; i <= 10; i++){ 
    //         n3 = n1 + n2; 
    //         n1 = n2; 
    //         n2 = n3; 
    //         console.log(n1); 
    //     } 
         
    // } 

     // 5. Write a program that reverses a given string. 
 
    // { 
    //     let str = "JavaScript"; 
 
    //     for (let i = str.length - 1; i >= 0; i--) { 
    //         console.log(str[i]); 
    //     } 
    // } 

    // 6. Write a program that calculates the sum of all elements in an array.
    {   let numArray = [10, 20, 30];
        let sum = 0;
        for (let num of numArray) {        
            sum += num;
        }    
        console.log(`Sum of all elements ${sum}`);
    }
    // 7. Write a program that finds the largest number in an array.
    {   let arr = [53, 23, 43, 54, 2, 564, 221];
        let largest = 0;
        for (let a of arr) {
            if (a > largest) {            
                largest = a;
            }    
        }
        console.log(`Largest Number in array is: ${largest}`)
    }