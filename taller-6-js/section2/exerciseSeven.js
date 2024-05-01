const useEventLoop = () =>{ //code process event loop
  console.log("Inicio del script");

  setTimeout(() => {
    console.log("Primer setTimeout");
  }, 0);
  
  setTimeout(() => {
    console.log("Segundo setTimeout");
  }, 0);

  Promise.resolve("Promesa resuelta").then(console.log);
  console.log("Fin del script");
  
}

const optionChooseUser = () => prompt("Adivina el orden en que se mostrarán los mensajes en cola.");
const menu = () =>{
  console.log(
  `
  Opciones --------------->
  1.Opción 1
  2.Opción 2
  3.Opción 3 
  `
  )
}
const verifyDataNumber = (dataNumber) =>{
  return(!isNaN(dataNumber))
        ?true
        :false
}
const exerciseSeven = () =>{
  const button = document.getElementById("button"); // Button of htmlc
  button.addEventListener("click", ()=>{
    menu(); // call to menu
    const chooseUserOption = optionChooseUser(); // option choose user
    if(!verifyDataNumber(chooseUserOption)){
      return;
    }
    switch(parseInt(chooseUserOption)){
      case 1:
        console.log("La opción es incorrecta");
        console.log(`
        Errores---> "El seguimiento 'Primer setTimeout, segundo setTimeout, promesa resuelta y 
        fin del script' es incorrecto. Esto se debe a que, después del primer console.log(), 
        el último console.log() se ejecuta, ya que es código propio de JavaScript. 
        Luego sigue la promesa como microtarea, y por último, la primera tarea en la cola 
        de macrotareas, que es un setTimeout con una duración de 0. La secuencia finaliza 
        con la ejecución del segundo setTimeout como macrotarea"
        `)
        console.log("Respuesta---------->");
        useEventLoop();
        break;
      case 2:
        console.log("La opción es incorrecta");
        console.log(`
        Errores -----> "Te equivocaste con el console.log() de los setTimeout(), primero va el primer
        setTimeout y después el segundo setTimeOut. Lo hiciste muy bien...
        `)
        console.log("Respuesta---------->");
        useEventLoop();
        break;
      case 3:
        console.log("Felicitaciones!👍. Comprendiste correctamente el flujo de ejecución del event Loop");
        console.log("Respuesta---------->");
        useEventLoop();
        break;
      default:
        console.log("La opción no está disponible!...");
    }
  })
}
exerciseSeven();

