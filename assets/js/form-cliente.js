$(document).ready(function() {
  $('select').material_select();
});

var config = {
  apiKey: "AIzaSyC7W53EtVRzFA_KyVTAvSrKQH9kn9_hArA",
  authDomain: "cow-mx.firebaseapp.com",
  databaseURL: "https://cow-mx.firebaseio.com",
  projectId: "cow-mx",
  storageBucket: "cow-mx.appspot.com",
  messagingSenderId: "657599989698"
};
firebase.initializeApp(config);

var formulario = document.getElementById("crear-empresa");
formulario.addEventListener("submit", extraerDatos);
console.log("formulario",formulario);

var clientes={
  empresa:[]
}
console.log(clientes);

function extraerDatos(e){
  e.preventDefault()
  var nombreEmpresa = document.getElementById("name-business").value;
  var skuCode = document.getElementById("sku_code").value;
  var initialPayment = document.getElementById("initial-payment").value;
  var modality = document.getElementById("modality").value;
  // var logo = document.getElementById("list-logo").src;
  var representante = document.getElementById("name_contact").value;
  var email = document.getElementById("email_contact").value;
  var telefonoContacto = document.getElementById("telephone_contact").value;
  var contactoEmergencia = document.getElementById("name_contact_emergency").value;
  var telfContactoEmergencia = document.getElementById("telephone_contact_emergency").value;

  clientes.empresa.push(
    {
      "name":nombreEmpresa,
      "sku":skuCode,
      "inicioPago":initialPayment,
      "modality":modality,
      "miembros":{
          "representante":{
              "nombre":representante,
              "email":email,
              "telefonoContacto":telefonoContacto,
              "contactoEmergencia":{
                  "nombreEmergencia":contactoEmergencia,
                  "telefonoEmergencia":telfContactoEmergencia
              }
          },
          "equipo":{
            0:{
              "nombre":"ado",
              "email":"ado@asdfasd.com",
              "telefonoContacto":"564649989",
              "contactoEmergencia":{
                  "nombreEmergencia":"Lucia",
                  "telefonoEmergencia":"4156465464"
              }
            },
            1:{
              "nombre":"jonh",
              "email":"jonh@asdfasd.com",
              "telefonoContacto":"5464646",
              "contactoEmergencia":{
                  "nombreEmergencia":"Manu",
                  "telefonoEmergencia":"863813"
              }
            }
          }
    }
  }
  )
  console.log(clientes);
  guardarDatos(clientes);
}

//Get a reference to the database service
var database = firebase.database();

function guardarDatos(empresa) {
  //Guardar en BD: Usar el método set()
  database.ref("/").set(empresa);
}



//Leer datos en BD:
database.ref('/empresa').on('value',function (snapshot) {
  var empresa= snapshot.val();
  console.log(empresa);
  clientes.empresa = empresa;
  // mostrarUsuarios(empresa);
})
