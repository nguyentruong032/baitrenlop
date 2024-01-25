var phantu = document.createElement("h1");
phantu.innerHTML = "nội dung thẻ h1";
var bien = document.getElementById("container");
bien.appendChild(phantu);

function addnode_img() {
  var img = document.createElement("img");
  pt = document.createElement("img");
  pt.src = "./giay.jpg";
  document.getElementById("bo").appendChild(pt);
}
function addnode() {
  var x = document.createElement("p");
  x.className = "p3";
  x.innerText = "the new one";
  var cha = document.getElementById("container1");
  var y = document.getElementById("p2");
  cha.insertBefore(x, y);
}
function changenode() {
  var node = document.createElement("div");
  node.innerText = "The new one";
  var x = document.getElementById("container2");
  var y = document.getElementById("p4");
  x.replaceChild(node, y);
}
function remove_node1(x) {
  var elmnt = document.getElementById(x);
  elmnt.remove();
}
function remove_node2(x, y) {
  var cha = document.getElementById(x);
  var con = document.getElementById(y);
  cha.removeChild(con);
}
