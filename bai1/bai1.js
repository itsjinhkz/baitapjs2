function xepSo() {
  var a = document.getElementById("firstNumb").value * 1;
  var b = document.getElementById("secondNumb").value * 1;
  var c = document.getElementById("thirdNumb").value * 1;
  var kq = document.getElementById("ketqua");
  if (a < b && b < c) {
    kq.value = [a, b, c];
  } else if (a < c && c < b) {
    kq.value = [a, c, b];
  } else if (b < c && c < a) {
    kq.value = [b, c, a];
  } else if (b < c && a < c) {
    kq.value = [b, a, c];
  } else if (c < b && b < a) {
    kq.value = [c, b, a];
  } else {
    kq.value = [c, a, b];
  }
}
