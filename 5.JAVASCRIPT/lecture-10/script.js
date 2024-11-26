{
console.log(word.charAt(8));
    console.log(word.charCodeAt(8));

    let str1 = "Good";
    let str2 = "Work";

    console.log(str1.concat(" " +str2));
    console.log(str2.endsWith("rk"));
    console.log(str1.startsWith("Good"));
    console.log(word.indexOf("ld"));
    console.log(str2.padEnd(10, '.'));
    console.log(str1.padStart(6, "@"));
    console.log(str1.repeat(3));
    console.log(word.replace("World", "JS"));

    let wd = "Hello world this is new world of JS";
    console.log(wd.replaceAll("world", "change"));

    let str3 = "THIS is STRING";
    console.log(str3.toLowerCase());

    let str4 = "hello to javascript";
    console.log(str4.toUpperCase());

    let str5 = "   Thank You!    ";
    console.log(str5);
    console.log(str5.trim());
    console.log(str5.trimEnd());
    console.log(str5.trimStart());
    console.log(wd.slice(8, 15));
    console.log(wd.slice(-10, -4));
    console.log(wd.substring(3, 10));
}