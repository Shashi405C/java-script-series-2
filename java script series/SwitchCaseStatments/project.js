let Name = prompt("Please enter your name");
let Marks = prompt("Enter your marks");

switch (true) {
  case Marks > 90 && Marks <= 100:
    result = "Great! You are the Topper";
    break;
  case Marks > 65 && Marks <= 90:
    result = "Congratulations! You got the First Class";
    break;
  case Marks >= 40 && Marks <= 65:
    result = "You got the Second Class";
    break;
  case Marks < 30:
    result = "You failed in the exam";
    break;
  default:
    result = "Please enter your marks";
    break;
}

// document.write(result);
document.write("Hello" + Name + "your" + result);
// document.write("Hello" + Name + +result + "<h2>");
