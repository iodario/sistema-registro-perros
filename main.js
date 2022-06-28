
//variabe global
let id = 0;

//identificamos el elemento boton y creamos un evento
let btnCrear = document.querySelector("#btn_crear");
btnCrear.addEventListener('click', () => {
    console.log('entro el evento');
    validar_formulario();
});

//funcion validadora
function validar_formulario() {
    // declaracion de variables del Dom dentro de la funcion
    let inputNombre = document.querySelector('#nombre').value;
    let inputRaza = document.querySelector('#raza').value;
    let inputEdad = document.querySelector('#edad').value;
    let inputGenero = document.querySelector('#genero').value;
    let castrado = document.querySelector('#castrado').checked;
    let inputRutaFoto = document.querySelector('#ruta_foto').value;

    if (
        (!inputNombre) || (!inputRaza) || (!inputEdad) || (!inputGenero) || (!inputRutaFoto) || (!castrado)
    ) {
        return alert('error, ingrese toda la informacion');
    } else {
        return generarPerro();
    }
}

function generarPerro() {
    let inputNombre = document.querySelector('#nombre').value;
    let inputRaza = document.querySelector('#raza').value;
    let inputEdad = document.querySelector('#edad').value;
    let inputGenero = document.querySelector('#genero').value;
    let castrado = document.querySelector('#castrado').checked;
    let inputRutaFoto = document.querySelector('#ruta_foto').value;
    inputRutaFoto = inputRutaFoto.replace('C:\\fakepath', '\\images');

    let perro = new Perro(id, inputNombre, inputRaza, inputEdad, inputGenero, castrado, inputRutaFoto);
    id++;

    generar_card_perro(inputNombre, inputRutaFoto);

}

//funcion que se encarga de mostrar los detalles de cada perro
function generar_card_perro(nombre, ruta_foto) {

    let new_div = document.createElement("div");
    let new_h2 = document.createElement("h2");

    //creo un id único para el div que contendrá la imagen cargada, y le asigno contenido
    new_div.id = "div" + nombre + ruta_foto;
    new_h2.textContent = nombre;

    //creo un elemento img, y le asigno una propiedad src con la ruta.
    let new_img = document.createElement("img");
    new_img.src = ruta_foto;

    //hago el appenchild
    new_div.appendChild(new_h2);
    new_div.appendChild(new_img);

    //identifico el div que contiene la targeta
    let contenedor = document.getElementById("perroCtn");
    contenedor.appendChild(new_div);

}