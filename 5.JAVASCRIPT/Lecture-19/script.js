/* Javascript IIFE Function */

/* immediately invoked function expression */

// (function Profile(){return console.log('Hello World!')})()

// (
//     function Profile()
//     {
//         return console.log('Hello World!')
//     }
// )()

// (
//     function Profile(name)
//     {
//         return console.log(name);

//     }
// )("SkillQode")

/* Javascript Object */

{
    let Profile = {
      name: "vishal",
      age: 25,
      gender: "male",
      proffesion: "painter",
    };
  
    let Students = {
      study: 10,
      subject: "English",
      time: "10 to 5",
    };
  
    console.log(Profile);
  
    console.log(Profile.name);
  
    console.log(Profile["name"]);
  
    /* Object.assign() Method */

  //   Object.assign(target);
  //   Object.assign(target, source1);
  //   Object.assign(target, source1, source2);
  //   Object.assign(target, source1, source2, /* …, */ sourceN);

  let newObject = Object.assign(Profile, Students);

  console.log(newObject);


}


{
    let Profile = {
      name: "vishal",
      age: 25,
      gender: "male",
      proffesion: "painter",
      ProfileName: function () {
        console.log(`My Name is ${this.name} and my age is ${this.age}`);
      },
    };
  
    //   Profile.name = "Sai"
  
    //   console.log(Profile);
  
    //   console.log(Profile.ProfileName());
  
    let newObject = Object.create(Profile);
  
    newObject.name = "Sai";
    newObject.age = 26;
  
    console.log(Profile);
  
    console.log(newObject);
  }
  
  {
  
      // Object.defineProperties(obj, props)
  
    const object1 = {};
  
    Object.defineProperties(object1, {
      property1: {
        value: 42,
        writable: true,
      },
      property2: {
          value:50,
      },
    });
  
    console.log(object1.property2);
  
    console.log(object1);
    
  }
  
  {
      // Object.defineProperty(obj, prop, descriptor)
  
      const object1 = {};
  
      Object.defineProperty(object1, "name" ,  {
          value: 42,
      });
  
      console.log(object1);
      
    
      // console.log(object1.property2);
    
      // console.log(object1);
  
  }
  {
      let Profile = {
          name: "vishal",
          age: 25,
          gender: "male",
          proffesion: "painter",
        };
  
        for(let [key , value] of Object.entries(Profile)){
          console.log(`${key} : ${value}`);
        }
      
  }
  
  {
  
      let Profile = {
          name: "vishal",
          age: 25,
          gender: "male",
          proffesion: "painter",
      };
  
      Object.freeze(Profile)   
  
      Profile.name = 'Kirtan'
  
      console.log(Profile);
  
      let frozenObject = Object.isFrozen(Profile)
  
      console.log(frozenObject);
      
  }
  
  // Object.getOwnPropertyNames()
  // Object.hasOwn()
  // Object.seal()
  // Object.setPrototypeOf()
  // Object.values()
  // Object.is()
  // Object.isSealed()
  // Object.keys()