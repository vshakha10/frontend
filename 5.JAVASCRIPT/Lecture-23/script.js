/* Javascript Promises */

// let promise = new Promise(function (resolve  , rejected){

// })

// let promise = new Promise(function (resolve  , rejected){
//     setTimeout(() => {
//         // resolve('Operation Complete!!!!')
//         rejected('Operation not complete!!!')
//     } , 5000)
// })
// .then((result) => {
//     console.log(result);
// })
// .then(() => {
//     console.log('Promise Complete!!!');
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log('All Promise Complete!!');
// })


// let health = 'healthy'

// let newPromise = new Promise((resolve, reject) => {
//     if(health == 'sick'){
//         setTimeout(() => {
//             rejected('Kayo is sick')
//         } , 5000)
//     }else(
//         setTimeout(() => {
//             resolve('Kayo is Healthy')
//         } , 5000)
//     )
// }).then((result) => {
//     console.log(result);
// }).then(() => {
//     console.log('I have a cake and I am happy!!');
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('I still have a party!!');
// })

// self task


let exammarks = 98 
 
let promise = new Promise(function(resolve, rejected){ 
    if(exammarks > 90 && exammarks < 99){ 
        setTimeout(()=>{ 
            resolve("dad will gift Mobile"); 
             
        },2000); 
    }else if(exammarks > 70 && exammarks < 90){ 
        setTimeout(()=>{ 
            resolve("dad will gift laptop"); 
        },3000); 
    }else if (exammarks > 50 && exammarks < 70 ){ 
        setTimeout(()=>{ 
            resolve("dad will gift car") 
        },4000); 
    }else{ 
        setTimeout(()=>{ 
 
            rejected("dad will not gift anything") 
        },4000); 
    } 
     
}).then((result)=>{ 
    console.log(result); 
     
}).then(()=>{ 
    console.log("resolve promise completed"); 
     
}).catch((error)=>{ 
    console.log( error); 
     
}).catch(()=>{ 
    console.log("rejected promise completed"); 
     
}).finally(()=>{ 
    console.log("javascript promise"); 
     
})
