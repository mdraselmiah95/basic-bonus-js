const day = "friday";

switch (day) {
  case "monday": //day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write the code examples");
    break;
  case "friday":
    console.log("Record the video");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend 📷");
    break;
  default:
    console.log("Not a valid day");
}

//similar like this

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
} else if (day === "friday") {
} else if (day === "saturday" || day === "sunday") {
} else {
}
