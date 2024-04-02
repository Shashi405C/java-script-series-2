// let collections = ["shashi",23,true,{name:"yamini"}]
// forEach() = ("Excutes a provied function once for each array")
let scores = [10, 20, 30, 40, 50, 60, 70, 80];
let students = ["Shashi", "Madhu", "Manoj", "Dharani", "Sudheer"];

students.forEach(function (item, index) {
  document.write(index + 1 + ". " + item + "<br>");
});

scores.forEach(function (apple) {
  document.write(apple * 2 + "<br>");
});
