var pa = document.getElementById("par");
pa.addEventListener("click", myFunction);
pa.addEventListener("click", someOtherFunction);
function myFunction() {
  alert("Hello World");
}
function someOtherFunction() {
  alert("This function was also executed!");
}
