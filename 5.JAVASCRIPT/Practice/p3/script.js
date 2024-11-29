// 6. Trim extra spaces from a string using trim(). 
 
{ 
    let test = '     hello     '; 
    console.log(test); 
    console.log(test.trim());  
} 
 
// 7. Extract the first 10 characters of a string using slice() or substring(). 
 
{ 
    let demo = 'janvi mulani jiteshbhai'; 
    console.log(demo.slice(0,10)); 
    console.log(demo.substring(0,10)); 
 
} 
 
// 8. Find the position of the first and last occurrence of a characterin a string using indexOf() and lastIndexOf(). 
 
{ 
    let newStr = 'just chill'; 
    console.log(newStr.indexOf('s')); 
    console.log(newStr.lastIndexOf('l')); 
 
} 
 
// 9. Split a sentence into an array of words using split() and jointhem back using join(). 
{ 
    let str = 'This is javascript, and javascript is scripting language, jijimkmkmj'; 
    console.log(str); 
    let str1 = str.split(','); 
    console.log(str1); 
    console.log(str1.join()); 
 
} 
 
// 10. Check if a string starts and ends with a specific character usingstartsWith() and endsWith(). 
{ 
 
    let new1 = 'This is javascript, and javascript is scripting language'; 
    console.log(new1.startsWith('T')); 
    console.log(new1.endsWith('a')); 
 
} 
 
 
// Math Methods Practice 
  
// 1. Generate a random number between 1 and 100 using Math.random. 
 
 
 
 
// 3.Calculate the area of a circle given its radius using Math.PI. 
   let r = 5; 
   let new2 = Math.PI * r * r; 
   console.log(new2);