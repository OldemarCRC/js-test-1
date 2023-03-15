const day= prompt("What weekday is today? ");
switch (day) {
    case "monday": // day === "monday"
        document.write("<h1>Study!</h1>");
        break;
    case "tuesday":
        document.write("<h1>Study more!</h1>");
        break;
    case "wednesday":
    case "thursday":
        document.write("<h1>Practice!</h1>");
        break;
    case "friday":
        document.write("<h1>Practice more!</h1>");
        break;
    case "saturday":
    case "sunday":
        document.write("<h1>Enjoy the weekend 👏</h1>");
        break;
    default:
        document.write("<h1>Not a valid day!</h1>");
}

let n = "Victoria"
switch (n) {
    case "Victoria": // n === "Victoria"
        document.write("<h1>Victoria</h1>");
        break;
    default:
        document.write("<h1>variable n were not assigned to your name</h1>")
}


