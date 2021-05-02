$(document).ready(function() {
    var json = "https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/616b1fb83cbfd4eb6d9e7d52924bb00a/country-codes_json.json";
    $.ajax({
        dataType: 'json',
        url: json 
    }).then(function(data) {
        const acordeon = document.querySelector('#paises')

        for(var i=0; i<data.length; i++){

            const tituloSeccion = document.createElement('H3');
            tituloSeccion.textContent = data[i]["CLDR display name"];

            const contenido = document.createElement('P');
            contenido.innerHTML = "<b>Nombre corto en inglés habitual del país:</b> "+ data[i]["CLDR display name"] + "<br>" + " <b>Capital:</b> " + data[i]["Capital"] + "<br>" + " <b>Código:</b> " + 
            data[i]["FIPS"] + "<br>" + " <b>Códigos asignados por la Federación Internacional de Fútbol:</b> " + data[i]["FIFA"] + "<br>" + " <b>Continente:</b> " + data[i]["Continent"] + "<br>" + " <b>Lenguaje:</b> " + data[i]["Languages"] + "<br>" 
            + " <b>ID Geográfico:</b> " + data[i]["Geoname ID"] + "<br>" + " <b>Señales distintivas de vehículos en tráfico internacional:</b> " + data[i]["DS"] + "<br>";

            acordeon.appendChild(tituloSeccion);
            acordeon.appendChild(contenido);

        }
    })
});