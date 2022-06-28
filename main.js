
//variabe global
let id = 0;

//local Storage, asignacion de clave
const clave_local_storage = "coleccionPerros";

//guardamos los datos obtenidos del localStorage todo en una variable, que contiene un ARRAY
let coleccionDePerros = cargar_perros();


//identificamos el elemento boton y creamos un evento
let btnCrear = document.querySelector("#btn_crear");
btnCrear.addEventListener('click', () => {
    
    if(validar_formulario()){
        generarPerro();
        reset_form();  

    } else{
        alert("Ingrese toda la informacion necesaria");
    }  
});

//funcion validadora
function validar_formulario() {
    // declaracion de variables del Dom dentro de la funcion
    let inputNombre = document.querySelector('#nombre').value;
    let inputRaza = document.querySelector('#raza').value;
    let inputEdad = document.querySelector('#edad').value;
    let inputGenero = document.querySelector('#genero').value;
    let inputRutaFoto = document.querySelector('#ruta_foto').value;

    if (
        (!inputNombre) || (!inputRaza) || (!inputEdad) || (!inputGenero) || (!inputRutaFoto) 
    ) {
        return false;
    } else {
        return true;
    }
}

//funcion que genera objeto perro. OJO EL ORDEN
function generarPerro() {
    //1) identifico inputs, asigno variables
    let inputNombre = document.querySelector('#nombre').value;
    let inputRaza = document.querySelector('#raza').value;
    let inputEdad = document.querySelector('#edad').value;
    let inputGenero = document.querySelector('#genero').value;
    let castrado = document.querySelector('#castrado').checked;
    let inputRutaFoto = document.querySelector('#ruta_foto').value;
    inputRutaFoto = inputRutaFoto.replace('C:\\fakepath', '\\images');

    //2) creo el objeto perro, con la clase Perro
    let perro = new Perro(id, inputNombre, inputRaza, inputEdad, inputGenero, castrado, inputRutaFoto);
    id++;
    //3) genero elementos de Dom, muestro targetas
    generar_card_perro(inputNombre, inputRutaFoto);

    //4) agrego el objeto creado, como elemento del array coleccionDePerros 
    coleccionDePerros.push(perro);
    
    console.log(coleccionDePerros);

    //5) guardo la informacion generada en el local Storage
    localStorage.setItem(clave_local_storage, JSON.stringify(coleccionDePerros));

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

//funcion que resetea los input del formulario
function reset_form(){

     document.querySelector('#nombre').value = "";
     document.querySelector('#raza').value = "";
     document.querySelector('#edad').value = "";
     document.querySelector('#genero').value = "";
     document.querySelector('#castrado').value = false;
     document.querySelector('#ruta_foto').value = "";

}


//funcion que toma datos del localStorage y los recorre en un arreglo, cargandolos como objetos perro
function cargar_perros(){

    let arregloStorage = localStorage.getItem(clave_local_storage);
    console.log(arregloStorage);
    if (arregloStorage){

        arregloStorage = JSON.parse(arregloStorage);
        for (let i=0; i< arregloStorage.length; i++){

            let perro = arregloStorage[i];
            generar_card_perro(perro.nombre,perro.foto)
        }
        return arregloStorage;  //si encuentra datos dentro del Storage, devuelve el arreglo
    }

    return new Array();    //si no encuentra datos, crea un nuevo Array vacio.
}


