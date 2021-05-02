document.addEventListener('DOMContentLoaded', function() {

    //Agregar datepicker al input de fecha
    $("#fecha").datepicker({ 
        dateFormat: 'yy-mm-dd'
    });

    //Accion cuando el boton de generar mensaje sea presionado
    document.getElementById("boton").addEventListener("click", function(e){
        e.preventDefault();

        //Almacenar la informacion del formulario en variables
        let nombre = document.querySelector('#nombre').value;
        let apellido = document.querySelector('#apellido').value;
        let fecha = document.querySelector('#fecha').value;
        

        //Validacion del formulario
        if( nombre == '' || apellido == '' || fecha == ''){
            console.log('Llene todos los campos')
        } else {
            console.log(nombre);
            console.log(apellido);
            console.log(fecha);
        }
    })
});



