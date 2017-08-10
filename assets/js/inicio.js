var cargarPagina= function (){
  $("#btn-agregar-cliente").click(crearCliente);
}
var crearCliente = function () {
  location.href = "forms-client.html";
}

$(document).ready(cargarPagina)
