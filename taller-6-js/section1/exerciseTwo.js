let countOptionError = 0;
let countOptionTrue = 0;
//Hoisting in practice
// vars call
const choseOptionOneConfirm = () => confirm(
`
¿Este código se ejecuta correctamente?
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);
// vars declaration
var a = 1;
let b = 2;
const c = 3;`);

const choseOptionTWoConfirm = () => confirm(
`
¿Este código se ejecuta correctamente?
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());
function funcionDeclarada() {
return "Función declarada ha sido llamada.";
}
const funcionExpresada = function () {
return "Función expresada ha sido llamada.";
};
`
)
const varsCall = () =>{ // Function vars call
    console.log("Valor de a:", a);
    console.log("Valor de b:", b);
    console.log("Valor de c:", c);
    // vars declaration
    var a = 1;
    let b = 2;
    const c = 3;
}
const showFunctions = () =>{
    // functions call
    console.log("Resultado de funcionDeclarada:", funcionDeclarada());
    console.log("Resultado de funcionExpresada:", funcionExpresada());
    function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
    }
    const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
    };
}
const verifyEnterUserConfirm = (dataConfirm,optionsDetail,index) =>{ //Verify enter user confirm
    if(dataConfirm){
      console.log("Correcto");
      console.log(optionsDetail[index]);
      countOptionTrue++;
    }else{
      console.log("Uppss. Opción incorrecta")
      console.log(optionsDetail[index]);
      countOptionError++;
    }
}
const exerciseTwo = () =>{ //Function first
    const index = 0;
    const optionDetail = [
        "Cuando se utilizan variables declaradas con la palabra clave var, "+ //Option one
        "estas adquieren un ámbito global y están sujetas al comportamiento de hoisting."+
        "Esto significa que pueden ser accesibles desde cualquier parte del entorno de ejecución." +
        "No obstante, el uso de var conlleva ciertos inconvenientes. En contraste, al emplear const y let," +
        "se activa la (dead zone), lo que restringe su alcance. Además, estas últimas no permiten hacer " + 
        "referencia a las variables antes de su asignación, lo que constituye una diferencia importante " +
        "con respecto a var y evita que se devuelva undefined.",
        "Las funciones declaradas pueden ser invocadas antes de su inicialización. "+
        "Sin embargo, en el caso de las funciones expresadas, es decir, cuando se les "+ 
        "asigna una función a una variable constante o let, no se puede acceder a su contenido "+
        "antes de su inicialización"
    ]
    const optionConfirmChoose = choseOptionOneConfirm(); //First question
    verifyEnterUserConfirm(!optionConfirmChoose,optionDetail,index);
    console.log("Resultado------------->");
    varsCall();
    
    const optionTwoConfirmChoose = choseOptionTwoConfirm(); //Second question
    verifyEnterUserConfirm(!optionTwoConfirmChoose,optionDetail,index);
    console.log("Resultado--------------->");
    showFunctions();     
}
exerciseTwo();


