function validate() {
  let ho = document.getElementById("familyline").value;
  let ten = document.getElementById("username").value;
  let birth = document.getElementById("birth").value;
  let month = document.getElementById("birth").value;
  let year = document.getElementById("year").value;
  let tel = document.getElementById("tel").value;

  if (ho == "") {
    alert("vui long nhap ho");
    return false;
  }
  if (ten == "") {
    alert("vui long nhap ten");
    return false;
  }
  if (birth == "") {
    alert("vui long nhap ngày sinh");
    return false;
  }
  if (month == "") {
    alert("vui long nhap tháng sinh");
    return false;
  }
  if (year == "") {
    alert("vui long nhap năm sinh");
    return false;
  }
  if (tel == "") {
    alert("vui long nhap số điện thoại");
    return false;
  }
}
