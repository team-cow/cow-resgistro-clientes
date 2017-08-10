var start = function (){
    setTimeout(inicio, 3000)
}

var inicio = function (){
    location.href = "views/inicio.html";
}

$(document).ready(start)
