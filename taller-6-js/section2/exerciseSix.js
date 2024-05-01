//Event loop y Web APIs
console.log("Mensaje 1: Inmediatamente");
setTimeout(()=>{
    console.log("Mensaje 2:Con timeout de 0 segundos")
},0)
setTimeout(()=>{
    console.log("Mensaje 3: Con timeout de 1 segundo")
},1000)

/* Preguntas
    1.¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? 
        R// El mensaje 2 está contenido por medio de un "setTimeout", lo que significa que es una macrotask y será enviada a la posición de Web API, posteriormente, se ejecutará después del código netamente js.
    2. ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
    R// En primer lugar, se ejecutan las tareas propias de JavaScript.
        En segundo lugar, se manejan las microtareas de las Web APIs.
        En tercer lugar, se procesan las macrotareas de las Web APIs.
        Cuando el intérprete de JavaScript encuentra código JavaScript, lo coloca en la pila de llamadas (Call Stack) y lo ejecuta de manera inmediata.
        Si el intérprete encuentra código correspondiente a las Web APIs, lo traslada al contexto de las "Web APIs". Una vez que finaliza su ejecución, el intérprete continúa su proceso.
        Durante la ejecución, las tareas asíncronas pueden ser clasificadas como microtareas o macrotareas, dependiendo de su naturaleza y prioridad.
        En el ciclo de eventos, se da prioridad a las microtareas sobre las macrotareas. Una vez que se vacía la cola de microtareas, se procede a ejecutar las macrotareas en la cola correspondiente.*/