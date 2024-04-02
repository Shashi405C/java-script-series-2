// switch

switch (true) {
  case 10 > 20:
    myAnswer = "green color";
    break;

  case 20 < 30:
    myAnswer = "yellow color";
    break;

  case 200 == 100:
    myAnswer = " pink color";
    break;

  case 100 == 10:
    myAnswer = "blue color is good";
    break;
  default:
    myAnswer = "Nothing is correct";
    break;
}
document.write(myAnswer);
