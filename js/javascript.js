function saludo() {

  let usuario=prompt("Ingrese su nombre");

if (usuario=="" || usuario==null){

  alert("El campo está vacío");
  saludo();
} else{
  alert("Bienvenido/a "+ usuario + "!");
}
}

 function mayorDeEdad(){
    let edad=confirm("¿Es mayor de edad?");

 if (edad==true){
     alert("Gracias por tu visita! :)");
  }else{
        alert("Entras bajo tu propia responsabilidad")
   }
}
mayorDeEdad();

function descuento() {
  let clave= "ADA2023";
  let codigo= prompt("Ingrese el código de descuento");
  
  if(clave==codigo){
      let servicio= parseInt(prompt("Ingrese el monto convenido"));
      let descuento= servicio*0.20;
      let precioFinal = servicio - descuento;
      alert("El descuento es de "+ descuento);
      alert("El precio final es "+ precioFinal);

  }

}
