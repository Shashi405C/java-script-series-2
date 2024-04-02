// let collection = { "shashi",23,true,{name:"yamini"}}
// slice = ("Returns a shallow copy of a portion of an array into a new array")

// let students = ["anil", "shashi", "madhu", 33, 34, 35];
// let myStudents = students.slice(0, 4);
// document.write(myStudents);

// console.log(students);

// let collection = { "shashi",23,true,{name:"yamini"}}
//  = ("changes the contents of an array by removing replacing or adding elements")

let myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let myNewNumbers = myNumbers.splice(4, 1, "Starts in the sky");

let myNewNumbers = myNumbers.splice(4, 3, "Starts in the sky");
document.write(myNumbers + "<br>");
// document.write(myNumbers);
