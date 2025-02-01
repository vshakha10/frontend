/*Async And Await Tomorrow*/
/*Javascript Dom*/

/* Document Object Model */

/* document.getElementById() */

{
    document.getElementById('heading').innerHTML='<span> This is Heading Tag </span>'
}

{
    // let dom = document.getElementById('para')
    // console.log(dom);

    // console.log(dom.getAttribute('id'));
    // console.log(dom.getAttribute('class'));
    // console.log(dom.getAttribute('type','para'));
    
    
}

{
    document.getElementsByClassName()
    let dom = document.getElementsByClassName('box')
    console.log(dom);
    dom[0].innerHTML="Hello World!!";
    dom[1].innerHTML="Hello World!!";
    for(let i=0; i<10;i++){
        let dom = document.getElementsByClassName("box");
        dom[i].innerHTML = "Hello World!!";
    }   
}

{
//Qurey Selector

// querySelector(selectors)

    // let dom = document.querySelector('.box')
    // let dom = document.querySelector('div')
    // let dom = document.querySelector('class="box"')

    // let dom = document.querySelector("a[target='_blank']")

    // console.log(dom);

    // dom.innerText = "facebook"

    // dom.style.backgroundColor = "red"

    // let dom2 = document.querySelectorAll('div')

    // console.log(dom2);
    
}