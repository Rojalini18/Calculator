var x = document.querySelectorAll("#box2 >div");
var res = "";
var z = 0;
for (var i = 0; i < x.length; i++) {
  x[i].addEventListener("click", func);
}
function func(event) {
  var y = event.target.innerText;
  if (z == 1) {
    res = "";
  }

  console.log(y);
  if (y == "C") {
    res = "";
    document.querySelector("#show").innerText = res;
  } else if (y == "=") {
    var number = eval(res);
    var fixedNum = Math.round(number * 100) / 100;
    document.querySelector("#show").innerText = fixedNum;
    z = 1;
    res = fixedNum;
  } else {
    if (res.length == 0) {
      if (y == "/" || y == "*" || y == "+" || y == "-") {
        res = res;
      } else {
        res = res + y;
      }
    } else if (res.length > 0 && res.length <= 15) {
      if (
        res[res.length - 1] == "/" ||
        res[res.length - 1] == "*" ||
        res[res.length - 1] == "-" ||
        res[res.length - 1] == "+"
      ) {
        if (y == "/" || y == "*" || y == "+" || y == "-") {
          res = res;
        } else {
          res = res + y;
        }
      } else res = res + y;
    }
    z = 0;
    document.querySelector("#show").innerText = res;
  }
}
