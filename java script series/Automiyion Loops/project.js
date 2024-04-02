var amount = 100;
var days = 60;
var intrest = 2;

for (let i = 1; i <= days; i++) {
  if (i % 4 === 0) {
    amount += intrest;
  }
  document.write("Ypur amount is" + i + "th day" + amount + "<br>");
}
