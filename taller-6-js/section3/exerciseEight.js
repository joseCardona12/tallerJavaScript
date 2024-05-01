//Clousures, promesas y web APIs
//Ejercicio 8: Magia con Closures  
const enterOptionUser = () => prompt("¿Qué te gustaría hacer?\n1.Incrementar\n2.Obtener\n3.Salir"); 
const showTitle = () => { //Function show title
    console.log("Bienvenido al ejercicio ocho de la sección 3");
    console.log("Este ejercicio utiliza un contador como ejemplo");

}
const verifyDataNumber = (dataNumber) =>{ //Verify data number
    return (!isNaN(dataNumber))
            ?true
            :false
}
const exerciseEight = () =>{ //Function first
    let flag = true;
    let count = 0;
    showTitle();
    const increaseCount = () =>{
        count++;
    }
    const obtainCount = () =>{
        return count
    }
    while(flag){
        const optionUserEnter = enterOptionUser();
        const dataNumberVerify =  verifyDataNumber(optionUserEnter);
        if(!dataNumberVerify){
            console.log("Es valor es incorrecto")
            return;
        }

        switch(parseInt(optionUserEnter)){
            case 1:
                console.log("Elegiste incrementar el contador...");
                increaseCount();
                console.log(`El valor a incrementado `);
                break;
            case 2:
                console.log("Elegiste obtener el contador...");
                const countObtain = obtainCount();
                console.log(`El valor del contador es: ${countObtain}`)
                break;
            case 3:
                console.log("Saliendo del programa...")
                flag = false;
                break;
            default:
                console.log("Esta opción no está disponible!...");
        }
    }
}
const main = () =>{
    exerciseEight();
}
main();