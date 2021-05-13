class Auto{
    constructor(marca, modelo, potencia, maxiVelocidad){
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.maxiVelocidad = maxiVelocidad;
    }
    calcularTiempo(km) {
        let tiempo = 0;
        tiempo = km / this.maxiVelocidad;
        return console.info("El tiempo es:" + (tiempo / 3600) + "Segundos");
    }
}

module.exports = Auto;
