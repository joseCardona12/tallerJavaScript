let countOptionError = 0;
let countOptionTrue = 0;
const chooseConfirmUser = (variable) => confirm(
`Es posible acceder a cada una de las variables
(${variable}) en diferentes partes de código`);
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
const exerciseOne = () =>{ //Function first
    const index = 0;
    const optionsDetail = [
    "Las variables globales puedes ser utilzadas en cualquier parte de nuestro entorno de ejecución. " + //Option one
    "Sin embargo, es importante \nlimitar el scope de la variable y utilizar las variable en entornos locales."+ 
    "Esto nos ayuda a evitar confusiones con los nombres, que sea modular y fácil de mantener",
    "Las function variables, son variables disponibles exclusivamente en la función creada. Es de ámbito local. Nos ayuda " + //Option two
    "A encapsular el procedimiento de la función.",
    "Las variables de bloques como: let, const son más limitadas, solo existen como bloque if, else, for, while, etc. " + 
    "No pueden ser utilizar fuera de el. Sim embargo, podemos retornat y reutilizar la varible al asignarla en otra variable."
    ] 
    const optionGlobalVariable = chooseConfirmUser("globalVariable");
    verifyEnterUserConfirm(optionGlobalVariable,optionsDetail,index);
    const optionFunctionVarible =  chooseConfirmUser("functionVariable");
    verifyEnterUserConfirm(!optionFunctionVarible,optionsDetail,index + 1);
    const optionBlockVariable = chooseConfirmUser("blockVariable");
    verifyEnterUserConfirm(!optionBlockVariable,optionsDetail,index+2);
    console.log(countOptionError,countOptionTrue);
}
exerciseOne();