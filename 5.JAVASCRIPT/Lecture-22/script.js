/* Callback Hell Function */

/* Ice-Cream Production */

// let store = true

/* raw Materials */

// if(store == true){
//     setTimeout(() => {
//         console.log('Row Materials');
//         setTimeout(() => {
//             console.log('Ice-Creame Preparation');
//             setTimeout(() => {
//                 console.log('Homogenization');
//                 setTimeout(() => {
//                     console.log('Pasteurization');
//                     setTimeout(() => {
//                         console.log('Aging');
//                         setTimeout(() => {
//                             console.log('Freezing');
//                             setTimeout(() => {
//                                 console.log('Packeging & Labeling');
//                                 setTimeout(() => {
//                                     console.log('Hardening');
//                                     setTimeout(() => {
//                                         console.log('Storage $ Transport');
//                                     } , 9000)
//                                 } , 8000)
//                             } , 7000)
//                         } , 6000 )
//                     } , 5000)
//                 } , 4000)
//             } , 3000)
//         } , 2000)
//     } , 1000)
// }else{
//     console.log('Row Material Not Available');
// }


// self practice

{

    let rawmaterials = true
    let stove = true
    let flavour = 'red sauce'


    if (rawmaterials == true){
        setTimeout(()=>{
            console.log('rawmaterials');
            if (stove == true){
                setTimeout(()=>{
                        console.log('stove');
                    setTimeout(()=>{
                            console.log('boil pasta');
                        setTimeout(()=>{
                                console.log('mix vegitables');
                            if(flavour == "white sauce") {
                                    console.log('white sauce');   
                                }
                                else if (flavour == "red sauce"){
                                    console.log('red sauce');
                                }
                                else if(flavour == "chiezz pasta"){
                                    console.log('chiezz pasta');
                                }
                                setTimeout(()=>{
                                    console.log('add topping');
                                    setTimeout(()=>{
                                        console.log('serve pasta');
                                    },6000)
                                },5000)
                            },4000)
                        },3000)
                    },2000)
                }
            },1000)
        }
    }