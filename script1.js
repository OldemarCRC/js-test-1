// const prompt=require("prompt-sync")({sigint:true});

const age = prompt("Please enter your age: ");

if (age >= 18)
    document.write("<h1>You are an adult</h1>");
if (age < 18)
    document.write("<h1>You are underage</h1>");

if (age <= 25 && age >= 16)
    document.write("<h2>You can work in McDonald's!</h2>");
else 
    document.write("<h2>You can´t work in McDonald's!</h2>");

// if (age <= 25 && age >= 16) {
//     console.log("You can work in McDonald's!")
// } else {
//     console.log("You can´t work in McDonald's!")
// }

