
function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}


<script>
let zoom = 1;

function zoomIn() {
  zoom += 0.1;
  document.getElementById("mapWrapper").style.transform = `scale(${zoom})`;
}

function zoomOut() {
  zoom = Math.max(0.5, zoom - 0.1);
  document.getElementById("mapWrapper").style.transform = `scale(${zoom})`;
}
</script>
