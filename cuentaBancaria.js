let monto = 50000;
 class CuentaBancaria{
   constructor(numCuenta){
     this.numCuenta = numCuenta;
   }
   extraccion(montoExtraccion){
     if(montoExtraccion > 100000){
       console.info("El monto a extraer es mayor a 100000")
     }
     else if(monto < montoExtraccion){
       console.info("No hay monto suficiente");
     }
     else{
       console.info("El monto total es:" + (monto - montoExtraccion));
     }
   }
   depositar(deposito){
     if(deposito >= 500000){
       console.info("El monto a Depositar supera los 500000");
     }
     else{
      console.info("El monto total es: " + (monto + deposito));
     } 
   }
 }
 
 
module.exports = CuentaBancaria;