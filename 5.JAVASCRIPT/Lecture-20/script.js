/* Javascript Function Methods */

/* Call() , apply() and bind() Method */

// The call() method of Function instances calls this function with a given this value and arguments provided individually.

// call(thisArg)
// call(thisArg, arg1)
// call(thisArg, arg1, arg2)
// call(thisArg, arg1, arg2, /* …, */ argN)


/* Without use call() */

// {
//   function sum(a , b){
//     return a + b
//   }

//   console.log(sum(12 , 6));
// }

/* with call() method */

// {
//   function sum(a , b){
//     return a + b
//   }

//   let result = sum.call(this , 12 , 6)

//   console.log(result);
  
// }

/* with object */

// {
//   let profile = {
//     name:'John',
//     age:45
//   }

//   function demoFunc(){
//     console.log(`name is ${this.name} and age is ${this.age}`);
//   }

//   demoFunc.call(profile)
// }

/* Function.prototype.apply() */

// The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).

// apply(thisArg)
// apply(thisArg, argsArray)

// {
//   function sum(a , b){
//     return a + b
//   }

//   let result = sum.apply(this , [12 , 6])

//   console.log(result);
  
// }

// {
//   let profile = {
//     name:'John',
//     age:45
//   }

//   function demoFunc(){
//     console.log(`name is ${this.name} and age is ${this.age}`);
//   }

//   demoFunc.apply(profile)
// }

/* Function.prototype.bind() */

// The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.

// bind(thisArg)
// bind(thisArg, arg1)
// bind(thisArg, arg1, arg2)
// bind(thisArg, arg1, arg2, /* …, */ argN)

// {
//   function sum(a , b){
//     return a + b
//   }

//   let result = sum.bind(this , 12 , 6)

//   console.log(result);
  
// }

// {
//   let dog = {
//     name:'Tommy',
//     sound:'Bow Bow',
//     animalProfile:function (){
//       console.log(`name is ${this.name} and it's sound ${this.sound}`);
      
//     }
//   }

//   let snack = {
//     name:'Tillo',
//     sound:'Sneah Sneah'
//   }

//   let elephant = {
//     name:'pushpa',
//     sound:'sami sami'
//   }

//   function animalProfile(){
//     console.log(`name is ${this.name} and it's sound ${this.sound}`);
//   }

  // console.log(animalProfile.call(dog));
  // console.log(animalProfile.call(snack));

  // console.log(dog.animalProfile());

  // let profile = dog.animalProfile.bind(snack)

  // let profile1 = dog.animalProfile.bind(elephant)

  // console.log(profile());

  // console.log(profile1());
  
  
// }