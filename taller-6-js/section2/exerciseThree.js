/* Ejercicio 3: Closures en Acción*/ 

/* Creación de la función con Closure*/
function crearSumador(numberCurrent){
    return function otraFunction(numberToSum){
        return numberCurrent + numberToSum;
    }
}

/* Uso de la función y Observación de Clousures*/
const sumarCinco = crearSumador(7);
console.log(sumarCinco(7));
console.log(sumarCinco(5));
console.log(sumarCinco(6));
console.log(sumarCinco(9));

/*Question  
    1.¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
    R//Las funciones retienen la referencia de las variables. Al finalizar la ejecución de la función externa, esta puede devolver una función que accede a una variable que pertenece a su ámbito, pero que está fuera de su contexto inmediato. Al enviar esa variable como parámetro a la función externa, su alcance se amplía, permitiendo que la función interna la utilice. No obstante, es preferible incluir las variables en el ámbito de la función interna al pasarlas como parámetros explícitos. Esto mejora la claridad del código y reduce la dependencia de variables externas.

    2.¿Cuáles son las implicaciones de memoria de mantener estos closures,especialmente si se crean muchas instancias de funciones con closures?
    R//-En primer lugar el cógido sería más díficil de leer al estar utilizando variables fuera de su contexto.
    -El rendimiento es uno de los puntos más implicados, debido a que cada cierre mantiene una referencia y al estar instanciando 
    seguidamente estamos recreando procesos inadecuados que no serían comprensibles con productos mucho más amplios, como objetos
    con mayor información.
    -Volverse incontrolable. El ejemplo es sencillo. No obstante, al estar recreando esta función en ámbitos mucho más complejo
    perderíamos el hilo del proceso.

*/



