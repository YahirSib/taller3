var peli = {
    "peliculas": [
        {"Nombre" : "Venom: Carnage liberado",
         "Duracion" : "1h 37m",
         "Categoria" : "Acción / Ciencia ficción ",
         "Butaca" : "Tradicionales" ,
         "Imagen" : "venom.jpg",
         "Horario" : "13:25 | 14:25 | 14:55 | 15:25"},
         {"Nombre" : "Eternals",
          "Duracion" : "2h 37m",
          "Categoria" : "Aventura / Acción ",
          "Butaca" : "Tradicionales o D-Box",
          "Imagen" : "eternals.jpg",
          "Horario" : "19:15 | 19:40 | 20:15 | 21:10 | 21:40"},
          {"Nombre" : "Halloween Kills",
           "Duracion" : "1h 45m",
           "Categoria" : "Terror/Suspenso ",
           "Butaca" : "Tradicionales o D-Box",
           "Imagen" : "halloween.jpg",
           "Horario" : "16:50 | 17:50 | 18:15 | 19:15 "}
    ]
};

var myArrayObject = [];
var caja1 = document.getElementById('test');
caja1.style.display = "block";
var caja2 = document.getElementById('factura');
caja2.style.display = "none";
//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var div = document.getElementById("peliculas");
div.innerHTML = volcarDatos(peli.peliculas);

function volcarDatos(datos){
    var total = datos.length;
    data = "";
    for(var i=0; i<total; i++){
      data += '<div class="peli">';
      data += '<div class="img">';
      data += '<img src="'+datos[i].Imagen+'" alt="">';
      data += '</div>';
      data += '<div class="info">';
      data += '<h2>'+datos[i].Nombre+'</h2>';
      data += '<p>Horarios: '+datos[i].Horario+'</p>';
      data += '<p>Categoria: '+datos[i].Categoria+'</p>';
      data += '<p>Butaca: '+datos[i].Butaca+'</p>';
      data += '<p>Horarios: '+datos[i].Duracion+'</p>';
      data += '<div class="botones">';
      data += '<a onclick="Comprar('+i+');" href="#" style="text-decoration:none; color:white;" id="'+i+'">comprar</a>';
      data += '</div>';
      data += '<div class="hide">';
      data += '<form class="frm" action="javascript:void(0);">';
      data += '<label>Cantidad</label>';
      data += '<input type="number" name="cant" id="cant'+i+'" >';
      data += '<label>Horario</label>';
      data += '<input type="text" name="horario" id="horario'+i+'" >';
      data += '</form>';
      data += '</div>';
      data += '</div>';
      data += '</div>';
    }

    return data;
}

function Comprar(i){
  var voletos = document.getElementById('cant'+i);
  var horario = document.getElementById('horario'+i);
  var compraObj = new Object();
  compraObj.NombrePeli = peli.peliculas[i].Nombre;
  compraObj.Voletos = parseInt(voletos.value);
  compraObj.Horario = horario.value;
  myArrayObject.push(compraObj);
  console.log("Guardando arreglo de datos en localStorage.");
  localStorage.setItem("ventas", JSON.stringify(myArrayObject));

}

function Facturar(){
  var caja1 = document.getElementById('test');
  caja1.style.display = "none";
  var caja2 = document.getElementById('factura');
  caja2.style.display = "block";
  var div = document.getElementById('datos');
  imprimir ="";
    console.log("Restaurando arreglo de datos desde localStorage.");
    var myArrayObject = JSON.parse(localStorage.getItem("ventas"));
    for(var i=0; i<myArrayObject.length; i++){
        var compraObj = myArrayObject[i];
        console.log("Nombre: " + compraObj.NombrePeli, "Edad: " + compraObj.Voletos);
        imprimir += "<tr>";
        imprimir += '<td>'+compraObj.NombrePeli+'</td>';
        imprimir += '<td>'+compraObj.Voletos+'</td>';
        imprimir += '<td>'+compraObj.Horario+'</td>';
        imprimir += "</tr>";
        div.innerHTML += imprimir;
}

}

function Regresar(){
  var caja1 = document.getElementById('test');
  caja1.style.display = "block";
  var caja2 = document.getElementById('factura');
  caja2.style.display = "none";
}
