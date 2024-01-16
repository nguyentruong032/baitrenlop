var x = [];
var y = 0;
function load_images() {
  for (i = 1; i <= 6; ++i) {
    x[i] = new Image();
    x[i].src = "img/anh-" + i + ".jpg";
  }
}
function next() {
  if (y < x.length - 1) {
    y++;
    document.getElementById("cho").src = x[y].src;
  }
  if (y == x.length - 1) {
    y = 0;
  }
}
function back() {
  if (y > 0) {
    y--;
    document.getElementById("cho").src = x[y].src;
  }
  if (y == 0) {
    y = x.length - 1;
  }
}
