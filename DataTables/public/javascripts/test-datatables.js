/**
 * Created by richard.jara on 06/04/2017.
 */

function onChangeSelect(select) {
    $("#select").change(function () {
        loadData(this.value);
    });
}

function loadData(name) {

    var query = "";

    if(name){
        query = "?nombre=" + name;
    }

    $('#table_id').DataTable( {
        destroy: true,
        "lengthChange": false, //change number of records to be shown per page
        "ajax": {
            url: "estudiantes" + query,
            dataSrc: "",
        },
        "columns": [
            { "data": "codigo" },
            { "data": "nombre" },
            { "data": "apellido" },
            { "data": "foto_nombre" },
            { "data": "foto_descripcion" },
            { "data": "promedio_general" },
            { "data": "pension" },
            { "data": "sexo" },
            { "data": "cedula" },
            { "data": "fecha_nacimiento" },
            { "data": "fecha_creacion" },
            { "data": "nivel" },
            { "data": "cursos_codigo" }
        ]
    });
}

$(document).ready(function() {
    onChangeSelect(this);
});