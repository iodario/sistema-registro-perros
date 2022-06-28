

class Perro {

    constructor(id, nombre, raza, edad, genero, castrado, foto) {
        this.id = id;
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.genero = genero;
        this.castrado = castrado;
        this.foto = foto;
        this.estado = 'en adopcion';
    }

    getEstadoPerro(){
        return this.estado;
    }

    setEstadoPerro(){
        this.estado = nuevoEstadoPerro;
    }
}