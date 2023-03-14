const prompt=require("prompt-sync")({sigint:true});

const age = prompt("Please enter your age: ");
if (age <= 25 && age >= 16) {
    console.log("You can work in McDonald's!")
} else {
    console.log("You can´t work in McDonald's!")
}
