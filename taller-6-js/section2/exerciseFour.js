//Funciones declaradas vs expresadas 
console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
    console.log(funcionDeclarada());
} catch (error) {
    console.log("Error:", error.message);
}
  
console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
    console.log(funcionExpresada());
} catch (error) {
    console.log("Error:", error.message);
}
  
// Declaración de una función declarada
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}
  
// Declaración de una función expresada
const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

/* 
    1.¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
       R//La función declarada funciona correctamente. No obstante, la función expresada presenta un error al
       llamarla antes de su declaración.
    2.¿Cómo difieren los resultados entre la función declarada y la función expresada?
       R//las funciones declaradas funcionan, debido al hoisting que poseen. Sin embargo, las funciones
       expresadas al ser asignadas a variables de tipo const o let no pueden invocarse antes de su declaración.
    ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
        R//El hoisting. Las funciones declaradas como las variables con var las eleva. Suben al inicio del 
        entorno de ejecución, esto no sucede con const y let y por tal motivo son más utilizadas.
*/