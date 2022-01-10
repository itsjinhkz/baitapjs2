function tinhCanh() {
  var c1Value = document.getElementById("c1").value * 1;
  var c2Value = document.getElementById("c2").value * 1;
  var c3Value = document.getElementById("c3").value * 1;
  var kqEl = document.getElementById("kq");
  if (c1Value == c2Value && c2Value == c3Value) {
    kqEl.value = " Tam Giác Đều";
  } else if (c1Value == c2Value || c1Value == c3Value || c2Value == c3Value) {
    kqEl.value = "Tam Giác Cân";
  } else if (
    c1Value * c1Value == c2Value * c2Value + c3Value * c3Value ||
    c2Value * c2Value == c1Value * c1Value + c3Value * c3Value ||
    c3Value * c3Value == c1Value * c1Value + c2Value * c2Value
  ) {
    kqEl.value = "Tam Giác Vuông";
  } else {
    kqEl.value = "Bạn đã nhập sai";
  }
}
