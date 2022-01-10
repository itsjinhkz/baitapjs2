function chaoHoi() {
  var members = document.getElementById("memberTag").value;
  var chaoTxt = document.getElementById("ketqua");
  switch (members) {
    case "B":
      chaoTxt.value = "Chào Ba";
      break;
    case "M":
      chaoTxt.value = "Chào Mẹ";
      break;
    case "AT":
      chaoTxt.value = "Chào Anh Trai";
      break;
    case "EG":
      chaoTxt.value = "Chào Em Gái";
      break;
    default:
      chaoTxt.value = "Vui lòng chọn 1 trong 4 người.";
  }
}
