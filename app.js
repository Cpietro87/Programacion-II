const Auto = require("./Auto");
const Escuela = require("./escuela");
const CuentaBancaria = require("./cuentaBancaria");

console.info("Ejercicio N°1")
const autoUno = new Auto("Fiat",2000,10,300);
const autoDos = new Auto("Ford",1990,5,250);
const autoTres = new Auto("Renault",2010,15,300);
const autoCuatro = new Auto("Chevrolet",2003,15,300);
const autoCinco = new Auto("VolsWaven",2018,20,320);

const AUTOS = [];

AUTOS.push(autoUno,autoDos,autoTres,autoCuatro,autoCinco);
console.info(AUTOS);

console.info(autoUno.calcularTiempo(400))

console.info("Ejercicio N°2")
  
const jorge = new Escuela("Procesa Sarmiento","Jorge");
const sebastian = new Escuela("Procesa Sarmiento","Sebastian");
const carina = new Escuela("Procesa Sarmiento","Carina");
const alberto = new Escuela("Procesa Sarmiento","Alberto");

jorge.agregarCursoUno();
alberto.agregarCursoUno();
carina.agregarCursoDos();
sebastian.agregarCursoDos();

console.info("Ejercicio N°3")

const cuentaUno = new CuentaBancaria("356"); 
cuentaUno.extraccion(500);
cuentaUno.extraccion(60000);
cuentaUno.depositar(500);
cuentaUno.depositar(500100);