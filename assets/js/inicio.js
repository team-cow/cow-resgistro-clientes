var cargarPagina= function (){
  $("#btn-agregar-cliente").click(crearCliente);
  empresaApi();
}
var crearCliente = function () {
  location.href = "forms-client.html";
}
var claveSecreta = ".json?auth=Fs0R5qQp19UlVbJAsFugqzPKc54mksSXx5pZVkLt";
var apiUrl = {
  url:"https://cow-mx.firebaseio.com/empresa/"
}

var empresaApi = function() {
  $.getJSON(apiUrl.url + claveSecreta, function(response){
    crearEmpresa(response);

  })
};

var plantilla =   '<tr class="row">'+
                    '<td>'+
                      '<h4 class="texto-piso texto-blanco right-align"><b>PISO <span class="fondo-rojo"> 1</b></h4>'+
                    '</td>'+
                    '<td>'+
                      '<div class="col s12">'+
                        '<div class="row card horizontal">'+
                          '<div class="col s7 card-stacked">'+
                            '<div class="card-content texto-chico">'+
                              '<h5>Nombre:__NOMBRE__EMPRESA__</h5>'+
                              '<p>Renta:__RENTA__</p>'+
                              '<p>Modalidad de pago:__MODALIDAD__PAGO__</p>'+
                              '<p>Estado: __ESTADO__PAGO__</p>'+
                            '</div>'+
                          '</div>'+
                          '<div class="col s5 card-image">'+
                            '<img class="responsive-img" src="https://dummyimage.com/100/000/fff">'+
                            '<div class="card-action">'+
                              '<a href="detalles.html" class="btn btn-rojo">DETALLE</a>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</td>'+
                  '</tr>';
var plantillaFinal ="";

function crearEmpresa(empresas) {
  var contenedor = document.getElementById("contenedor-clientes");
  console.log(empresas);

  empresas.forEach(function(empresa){
    console.log(empresa);
    var empresaNombre = empresa.name;
    var empresaRenta = empresa.inicioPago;
    var empresaModalidad = empresa.modality;
    var empresaEstado = empresa.sku;


      plantillaFinal += plantilla.replace("__NOMBRE__EMPRESA__",empresaNombre)
      .replace("__RENTA__",empresaRenta)
      .replace("__MODALIDAD__PAGO__",empresaModalidad)
      .replace("__ESTADO__PAGO__",empresaEstado)
    });
    contenedor.innerHTML = plantillaFinal;

}



$(document).ready(cargarPagina)
