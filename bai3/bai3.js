function kiemTraSo() {
  var n1Value = document.getElementById("n1").value * 1;
  var n2Value = document.getElementById("n2").value * 1;
  var n3Value = document.getElementById("n3").value * 1;
  var kqN1 = document.getElementById("kqN1");
  var kqN2 = document.getElementById("kqN2");
  var kqN3 = document.getElementById("kqN3");
  if (n1Value % 2 == 0) {
    kqN1.innerHTML = n1Value + " là số chẵn";
  } else {
    kqN1.innerHTML = n1Value + " là số lẻ";
  }
  if (n2Value % 2 == 0) {
    kqN2.innerHTML = n2Value + " là số chẵn";
  } else {
    kqN2.innerHTML = n2Value + " là số lẻ";
  }
  if (n3Value % 2 == 0) {
    kqN3.innerHTML = n3Value + " là số chẵn";
  } else {
    kqN3.innerHTML = n3Value + " là số lẻ";
  }
}
