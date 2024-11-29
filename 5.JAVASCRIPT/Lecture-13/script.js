/* Javascript Date Object Method */

{
    let currentDate = new Date();
    console.log(currentDate);
    
}

{
    // Date() constructor


    // The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.

//   new Date();
//   new Date(value);
//   new Date(dateString);
//   new Date(dateObject);

//   new Date(year, monthIndex);
//   new Date(year, monthIndex, day);
//   new Date(year, monthIndex, day, hours);
//   new Date(year, monthIndex, day, hours, minutes);
//   new Date(year, monthIndex, day, hours, minutes, seconds);
//   new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);

//   Date();

let currentDate = new Date('march 20 1998')
console.log(currentDate);

}

{
    Date.now()

    let currentDate = Date.now()

    console.log(currentDate);
    
}

/* 16-10-2002 */

{
    Date.parse()

    let currentDate = Date.parse('27 nov 2024 08:36:00 GMT')

    console.log(currentDate);
    
}

{
    Date.UTC()

    let currentDate = Date.UTC('01 jan 1997')

    console.log(currentDate);

    const utcDate = new Date(Date.UTC(2018,11,1,0,0,0));

    console.log(utcDate);
    
    
}

{
    // Date.prototype.getDate()

    // let today = new Date()

    // console.log(today.getDate());
    // console.log(today.getDay());
    // console.log(today.getMonth());
    // console.log(today.getFullYear());
    // console.log(today.getHours());
    // console.log(today.getSeconds());
    // console.log(today.getMinutes());
    // console.log(today.getMilliseconds());
    // console.log(today.getTime());
    // console.log(today.getTimezoneOffset());
    // console.log(today.getUTCDate());




    let today = new Date ('02 jan 2005 10:50:56')
    console.log(today);
    
    
    let setDate = today.setDate(5)
    
    console.log(setDate);

    console.log(today);
    
}