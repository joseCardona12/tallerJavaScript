//Promesas y callbacks en acción
/* -------------------------------------------------------------------------*/
// function manejarAsincronia(callback,promesa){ //Define function
//     const message = "¡Promesa cumplida y callback ejecutado!"
//     const myPromise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve();
//         },2000)
//     })
    
//     myPromise.then(()=>{
//         callback(message)
//     })
// }

// manejarAsincronia((message)=>{
//     console.log(message)
// },myPromise)

/* En el anterior código habría un error. Cuando invocamos la función "manejarAsincronia", estamos pasando un
argumento que no existe, solo existe en el ámbito de función, dentro de la función anteriormente mencionada.
Sin embargo, podemos corregir el error si inicializamos una variable "promesa" y posteriormente la pasamos como
argumento a la función. En la función le asignamos nuestro constructor promesa y podemos trabajar
*/
let promesa;
function manejarAsincronia(callback,promesa){ //Define function
    console.log("Todavía no soy una promesa");
    const message = "¡Promesa cumplida y callback ejecutado!"
    const greeting = "Hola. Estoy pasando por el callback como argumento.";
    promesa = new Promise((resolve, reject)=>{
        console.log("Soy una promesa!...");
        setTimeout(()=>{
            const flag = false;
            if(flag){
                resolve([message,greeting,flag]);
            }else{
                reject(["Hubo un error en la promesa",flag])
            }    
        },2000)
    })
    promesa
        .then(([message,greeting,flag])=>{
            console.log("Se ejecutó bien la promesa...")
            callback(message,greeting,flag);
        })
        .catch(([error,flag])=>{
            console.log("Se ejecutó mal la promesa...")
            console.error("ERROR", error)
            callback(flag);
        })
}

manejarAsincronia((message,greeting,flag)=>{
    if(!flag){
        console.log("Soy un callback Reject")
        return;
    }
    console.log("Soy un callback Resolve")
        console.log(message);
        console.log(greeting)
    
},promesa) 


// Invocar la función pasando un callback y la promesa
/* Preguntas
    1.¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
        R// La función seguiría funcionando normalmente. No obstante, el tiempo en ejecutarse el resolve tomaría más
        o menos tiempo. Después del tiempo obtenemos el resolve y activamos el then para mostrar algo después de 
        que la promesa se cumplió.
    2.¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
        R//Si hay un rechazo, la función no mostraría nada, debido a que no estamos utilizando el reject para que
        el catch lo capture y muestre algún mensaje de error.
    3.¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa? S
        
*/