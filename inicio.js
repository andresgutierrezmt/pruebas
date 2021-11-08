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
        admin: 0,
        usuario: $("#usuario").val(),
        password: $("#password").val(),
        nombre: $("#nombre").val(),
        apellido:$("#apellido").val(),
        email: $("#email").val(),
        telefono: $("#telefono").val(),
    }

    let datosPeticion = JSON.stringify(datos);
    alert(datosPeticion);
    $.ajax({
        url:"http://localhost:8080/api/Usuarios/save",
        data : datosPeticion,
        type: 'POST',
        contentType:"application/JSON",

        success: function (respuesta) {
            alert(datosPeticion);
            console.log(respuesta);
            alert("usuario registrado con exito! ")
        },

        error: function (xhr, status) {
            alert("Error peticion POST..." + status );
        }
    });

    $("#modalv").hide(500);

}