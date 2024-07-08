/* // Array de medicamentos para el autocompletado
var medicamentos = ["Paracetamol", "Ibuprofeno", "Aspirina", "Amoxicilina", "Diclofenaco", "Ketoprofeno"];
const buscador = document.getElementById("busquedaMedicamento");

// Función para manejar el autocompletado
function autocompletar() {
    var input = document.getElementById("busquedaMedicamento");
    var sugerencias = document.getElementById("sugerencias");
    sugerencias.innerHTML = "";
    var palabra = input.value.toLowerCase();
    if (palabra.length === 0) {
        return;
    }
    for (var i = 0; i < medicamentos.length; i++) {
        if (medicamentos[i].toLowerCase().indexOf(palabra) === 0) {
            var sugerencia = document.createElement("div");
            sugerencia.textContent = medicamentos[i];
           sugerencia.setAttribute("id","sugerencia"); 
          sugerencia.addEventListener("click", function() {
                input.value = this.textContent;
                sugerencias.innerHTML = "";
            });
            sugerencias.appendChild(sugerencia);
        }
    }
} */
/* // Event listener para el evento de input en el campo de busqueda
buscador.addEventListener("input", autocompletar); */

function buscarMedicamento() {
    var medicamento = buscador.value;

    if (medicamento.toLowerCase() === "ketoprofeno") {   //En vez de un if, considerar cambiar a case
        var farmaciaUno = {
            medicamento: "Ketoprofeno",
            precioMasBarato: 7.990,
            farmaciaMasBarata: "Farmex",
            imagen: "https://i.postimg.cc/8Ps8dtgD/farmex.png" // URL de la imagen de Farmex
        };
        var farmaciaDos = {
            medicamento: "Ketoprofeno",
            precioMasBarato: 18.099,
            farmaciaMasBarata: "Salcobrand",
            imagen: "https://i.postimg.cc/HLDfgmcs/salcobrand.png" // URL de la imagen de Salcobrand
        };

        var precioMasBarato;
        var farmaciaMasBarata;
        var imagenFarmaciaMasBarata; // Variable para almacenar la imagen de la farmacia mas barata
        if (farmaciaUno.precioMasBarato < farmaciaDos.precioMasBarato) {
            precioMasBarato = farmaciaUno.precioMasBarato;
            farmaciaMasBarata = farmaciaUno.farmaciaMasBarata;
            imagenFarmaciaMasBarata = farmaciaUno.imagen;
        } else {
            precioMasBarato = farmaciaDos.precioMasBarato;
            farmaciaMasBarata = farmaciaDos.farmaciaMasBarata;
            imagenFarmaciaMasBarata = farmaciaDos.imagen;
        }

        var resultadoSeccion = document.getElementById("resultado");
        resultadoSeccion.innerHTML = "<h2>Resultados para '" + medicamento + "'</h2><p>" + 
        farmaciaUno.farmaciaMasBarata + ": $" + farmaciaUno.precioMasBarato.toFixed(3) + " <img src='" + farmaciaUno.imagen + "'></p><p>" + 
        farmaciaDos.farmaciaMasBarata + ": $" + farmaciaDos.precioMasBarato.toFixed(3) + " <img src='" + farmaciaDos.imagen + "'></p><p>" + 
        "La farmacia con el precio más bajo es: " + farmaciaMasBarata + " ($" + precioMasBarato.toFixed(3) + ") <img src='" + imagenFarmaciaMasBarata + "'></p>";

        resultadoSeccion.style.border= "2px solid grey";
    } else if (medicamento.toLowerCase() === "ibuprofeno") {
        var farmaciaUno = {
            medicamento: "Ibuprofeno",
            precioMasBarato: 1.290,
            farmaciaMasBarata: "Farmex"
        };
        var farmaciaDos = {
            medicamento: "Ibuprofeno",
            precioMasBarato: 10.795,
            farmaciaMasBarata: "Farmacia Ahumada"
        };

        var precioMasBarato;
        var farmaciaMasBarata;
        if (farmaciaUno.precioMasBarato < farmaciaDos.precioMasBarato) {
            precioMasBarato = farmaciaUno.precioMasBarato;
            farmaciaMasBarata = farmaciaUno.farmaciaMasBarata;
        } else {
            precioMasBarato = farmaciaDos.precioMasBarato;
            farmaciaMasBarata = farmaciaDos.farmaciaMasBarata;
        }

        var resultadoSeccion = document.getElementById("resultado");
        resultadoSeccion.innerHTML = "<h2>Resultados para '" + medicamento + "'</h2><p>" + 
        farmaciaUno.farmaciaMasBarata + ": $" + farmaciaUno.precioMasBarato.toFixed(3) + "</p><p>" + 
        farmaciaDos.farmaciaMasBarata + ": $" + farmaciaDos.precioMasBarato.toFixed(3) + "</p>" +
        "<p>La farmacia con el precio más bajo es: " + farmaciaMasBarata + " ($" + precioMasBarato.toFixed(3) + ")</p>";
        resultadoSeccion.style.border= "2px solid grey";
    } else {
        var resultadoSeccion = document.getElementById("resultado");
        resultadoSeccion.innerHTML = "<p>No se encontraron resultados para '" + medicamento + "'</p>";
        resultadoSeccion.style.border= "2px solid grey";
    }
}

// Funcion corre con un enter
/* buscador.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("botonBuscar").click();
    }
  }); */