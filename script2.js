// const prompt=require("prompt-sync")({sigint:true});

const day = prompt("What week day is today? ");

// const day = "monday";

switch (day) {
    case "monday": // day === "monday"
        // console.log("Study!");
        document.write("<h1>Study!</h1>");
        break;
    case "tuesday":
        // console.log("Study more!");
        document.write("<h1>Study more!</h1>");
        break;
    case "wednesday":
    case "thursday":
        // console.log("Practice!");
        document.write("<h1>Practice!</h1>");
        break;
    case "friday":
        // console.log("Practice more!");
        document.write("<h1>Practice more!</h1>");
        break;
    case "saturday":
    case "sunday":
        // console.log("Enjoy the weekend 👏");
        document.write("<h1>Enjoy the weekend 👏</h1>");
        break;
    default:
        // console.log("Not a valid day!");
        document.write("<h1>Not a valid day!</h1>");
}
