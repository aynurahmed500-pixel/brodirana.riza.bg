function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
function toggleFaq(el){
  const answer = el.nextElementSibling;
  answer.classList.toggle("show");
}