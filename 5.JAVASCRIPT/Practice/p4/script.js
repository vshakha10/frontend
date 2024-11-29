// Date Object

{
    let currentDate = new Date();
    console.log(currentDate);
    console.log(Date.now());
    console.log(Date(Date.parse()));
    console.log(Date(Date.UTC()));
}

// get methods

{
    let date = new Date("august 15 2024 10:30:15");
    let newDate = new Date();

    console.log(date);
    console.log(date.getDate());
    console.log(date.getDay());
    console.log(date.getMonth());
    console.log(date.getFullYear());
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    console.log(newDate.getMilliseconds());
    console.log(date.getTimezoneOffset());
}

// set methods

{
    let currentDt = new Date();
    console.log(currentDt);
    let newDt = currentDt.setDate(30);
    newDt = currentDt.setMonth(2);
    newDt = currentDt.setFullYear(2025);
    newDt = currentDt.setHours(14);
    newDt = currentDt.setMinutes(25);
    newDt = currentDt.setSeconds(55);
    console.log(currentDt);
}

{
    let currentDate = new Date();
    console.log(currentDate.toDateString());
    console.log(currentDate.toLocaleDateString());
    console.log(currentDate.toString());
}