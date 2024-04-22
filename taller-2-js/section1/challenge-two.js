//Manage a list of souvenirs potentials
//List object souvernirs potentials - const
//name , cost, available = true;
//Evaluations / Conditionals aspects


const souvenirsPotentials = [];
let flag = true;
const enterOptionUser = () => prompt("Ingrese la opción del menu...");
const enterNameSouvenir = () => prompt("Ingrese el nombre del souvenirs... ");
const enterCostSouvenir = () => prompt("Ingrese el costo del souvenir...");
const enterAvailableSouvenir = () => prompt("Ingrese el estado de disponiblidad del producto 0.No Disponible 1.Disponible");
const enterBudgetActually = () => prompt("Ingrese el presupuest actual...");

console.log(souvenirsPotentials);
//Function menu ----->
const menu = () =>{
    console.log("Reto 2 **********************");
    console.log(`1.Agregar souvenirs: 
                 2.Ver souvenirs
                 3.Comprar souvenirs
                 4.Salir del programa:`);

}

//Function verify data Number
const verifyDataNumber = (dataNumberEnter) =>{
    const enterDataNumber = (!isNaN(dataNumberEnter))
                            ?true
                            :false;
    return enterDataNumber;

}

//Function verify dataString
const verifyDataString = (dataNumberString) =>{
    const enterDataString = (isNaN(dataNumberString))
                            ?true
                            :false;
    return enterDataString;
}

//Fuction 
const convertToBoolean= (dataConvert) =>{

    if(dataConvert >= 0 && dataConvert <=1){
        if(dataConvert == 1){
            dataConvert = Boolean(dataConvert);
            return dataConvert
        }else if(dataConvert == 0){
            dataConvert = Boolean(dataConvert);
            return dataConvert;
        }

    }else{
        console.log("Data incorrecta!");
    }
    
}

//Function veridy first promt- cancel /Enter value user
const verifyFirstPrompt = (enterOptionUser) =>{
    const optionUserEnter = (enterOptionUser == null)
                            ?true
                            :false;
    return optionUserEnter;
}

//Function show message
const showMessage = (dataEnterVerify) =>{
    (dataEnterVerify)
    ?console.log("Es un tipo de dato string.")
    :console.log("Es un tipo de dato number");

}

//Function add Souvenir potentials
const addSouvenirPotentials = (nameSouvenir, costSouvenir, availableSouvenir = false) =>{
    souvenirsPotentials.push({name:nameSouvenir, cost:costSouvenir,available:availableSouvenir});
    return true;
}

//Function show souvenir potentials
const showSouvenirPotentials = (souvenirsPotentials) => {

    return souvenirsPotentials;

}


const typesSouvenirs = () =>{
    while(flag){
        menu();
        const optionUserEnter = enterOptionUser();
        const optionUserEnterVerifyPrompt = verifyFirstPrompt(optionUserEnter);
        const optionUserEnterVerify = verifyDataNumber(optionUserEnter);
        console.log(optionUserEnterVerify)

        //Verify the enter value user. if is null / cancel. Finish the program. else. Continue
        if(optionUserEnterVerifyPrompt){
            console.log("Terminó el programa");
            flag = false;
        }else{
            console.log("Continua en el programa");
            //Verify option user for number
            if(optionUserEnterVerify){
                showMessage(!optionUserEnterVerify);
                //Option enter------------>
                switch(parseInt(optionUserEnter)){
                    case 1:
                        const nameSouvenirEnter = enterNameSouvenir();
                        const nameSouvenirEnterVerify = verifyDataString(nameSouvenirEnter);

                        if(nameSouvenirEnterVerify){
                            showMessage(nameSouvenirEnterVerify);

                            const costSouvenirEnter = enterCostSouvenir();
                            const costSouvenirEnterVerify = verifyDataNumber(costSouvenirEnter);

                            if(costSouvenirEnterVerify){
                                showMessage(!costSouvenirEnterVerify);
                                const costSouvenirConvert = parseFloat(costSouvenirEnter);

                                const availableSouvenirEnter = enterAvailableSouvenir(costSouvenirConvert);
                                const availableSouvenirEnterVerify = verifyDataNumber(availableSouvenirEnter);

                                if(availableSouvenirEnterVerify){
                                    showMessage(!availableSouvenirEnter);
                                    const availableSouvenirEnterConvert = convertToBoolean(parseInt(availableSouvenirEnter));
                                    console.log(availableSouvenirEnterConvert);

                                    const souvernirAdd = addSouvenirPotentials(nameSouvenirEnter,costSouvenirConvert,availableSouvenirEnterConvert);
                                        (souvernirAdd)
                                        ?console.log("El souvenir fue agregado correctamente")
                                        :console.log("Error al agregar el souvenir...");
                                    
                                }else{
                                    showMessage(!availableSouvenirEnterVerify);
                                }
                            }else{
                                showMessage(costSouvenirEnterVerify);
                            }
                        }else{
                            showMessage(!nameSouvenirEnterVerify);
                        }

                        break;
                    case 2:
                        const showSourvenirs = showSouvenirPotentials(souvenirsPotentials);
                        console.log(showSourvenirs);
                        break;
                    case 3:
                        const budgetActuallyEnter = enterBudgetActually();
                        const budgetActuallyEnterVerify = verifyDataNumber(budgetActuallyEnter);

                        if(budgetActuallyEnterVerify){
                            showMessage(!budgetActuallyEnter);
                            const budgetActuallyEnterConvert = parseFloat(budgetActuallyEnter);
                            
                            let souvenirAvailables = [];
                            let souvenirsNotAvailables = [];
                            souvenirsPotentials.forEach(souvenir =>{
                                (budgetActuallyEnterConvert >= souvenir.cost && souvenir.available == true)
                                ?souvenirAvailables+=souvenir.name
                                :souvenirsNotAvailables+=souvenir.name
                            })

                            console.log(`Souvenirs que puedes comprar:
                            ${souvenirAvailables}
                            souvenirs que no puedes comprar
                            ${souvenirsNotAvailables}`);

                        }else{
                            showMessage(budgetActuallyEnterVerify);
                        }
                        break;
                    case 4:
                        flag = false;
                        break;
                    default:
                        console.log("Opción incorrecta!.");
                }
            }else{
                showMessage(!optionUserEnterVerify);
            }
        }
    }
}

const main = () =>{
    typesSouvenirs();
}

main();