var hinh = [
  "anh1.jpg",
  "anh 2.jpg",
  "anh 3.jpg",
  "./background4.webp",
  "./background5.jpg",
];

var index = 0;
function prev() {
  index--;
  if (index < 0) index = hinh.length - 1;
  document.getElementById("hinh").src = hinh[index];
}

function next() {
  index++;
  if (index >= hinh.length) index = 0;
  document.getElementById("hinh").src = hinh[index];
}
