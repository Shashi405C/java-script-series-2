// let collections =["shashi", 23,true, {name:"madhu"}]

// Indexof = ("Returns the first index of at which a given element can be found in an array or -1 it is not present")

let students = ["Shashi", "Madhu", "Sudheer", "Manoj", "Dharani"];
// document.write(students.indexOf("Dharani"));

var newStudents = students.indexOf("sathish");

if (newStudents == -1) {
  students.push("sathish");
}
// document.write(students.indexOf("Ramesh"));
document.write(students);
