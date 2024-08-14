// name function

function sayHii(name){
    console.log(`hii ${name}`)
}
sayHii("ankita");
sayHii("nikhil");
sayHii("yash");


// higher order and call back function 

function sendEmail(name){
    console.log(`Email send to ${name}`);
    return 3;

}


function sayGreeting(name,abc){
console.log(`Hello ${name}`);
abc(name);
}
sayGreeting("Pooja",sendEmail)


// arrow function

function date(){
    console.log(`${new Date()}`)
}
setInterval(date,2000)


//arrow fun
setInterval(
    () => {
    console.log(`${new Date()}`)
}
,2000);


 //IIFE
 (() => {
    console.log(`${new Date()}`)
})()

