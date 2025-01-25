/* Javascript DOM */

/* Document Object Model*/

/* document */


/* innerHTML  , innerText , textContent */

function hello(){
    document.getElementById('heading').innerHTML = "Hello World!!"
}

/* document.getElementByClassName()*/

{
    let dom = document.getElementsByClassName('box')

    console.log(dom);

    dom[2].style.backgroundColor = "purple"   
}