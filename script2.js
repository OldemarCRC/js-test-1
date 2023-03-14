const age = Number(document.getElementById("age").value);
if (age <= 25 && age >= 16) {
    console.log("You can work in McDonald's!")
    document.write("<h2>You can work in McDonald's!</h2>")
} else if (16 < age && age > 26) {
    document.write("<h2>You can´t work in McDonald's!</h2>")
}
