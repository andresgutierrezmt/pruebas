$(document).ready(function () {
    iniciar();
});

function mostrar(){
    $("#modalv").show(500);
}

function iniciar(){
    $("#modalv").hide(0.0005);
}

function cerrar(){
    $("#modalv").hide(500);
}

function enviar(){
    let datos={
        nombre: $("#name").val(),
        correo: $("#email").val(),
        telefono: $("#tel").val(),
    }
    let datosPeticion = JSON.stringify(datos);
    $("#modalv").hide(500);
    alert(datosPeticion);
}