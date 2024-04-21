//Variables and data type ---------------->
//Challenge one - The travel of Julian
//Organize his itinerary

//Enter destination - const - READY-
//Enter duration the travel a days -let -READY -
//Edit duration the travel a days -let 
//Enter de budget estimated - READY
//Edit budget estimated
//Enter accommodation, transport, activitys / valor diario
//Script conditionals verify budget - duration travel - cost diary

//Variables first
let durationTravelDiaryEnter, budgetEstimatedEnter, expensesDiaryEnter, flag = true;
console.log(durationTravelDiaryEnter);


const enterOptionUser  = () => prompt("Ingrese una opción");
const enterDestinationTravel = () => prompt("Ingrese el destino de viaje...");
const enterDurationTravelDiary = () => prompt("Ingrese la duración del viaje por días...");
const enterBudgetEstimated = () => prompt("Ingrese el presupuesto estimado...");
const enterExpensesDiary  = () => prompt("Ingrese los gasto diarios (Transporte, alojamiento, actividades)")

//Function menu travel
const menuTravel = () =>{
    console.log("***********Reto 1*******************");
    console.log(`El viaje de Julian
    Opciones----------------------------->
    1.Definir destino de viaje
    2.Definir duración del viaje en días
    3.Editar la duración del viaje
    4.Definir el presupuesto estimado
    5.Editar el presupuesto estimado
    6.Defina el valor de gasto diario
    7.Ver resultado
    8.Salir del programa`);
}

//Function verify data string
const verifyDataString = (dataEnterString) =>{

    const enterStringData = (isNaN(dataEnterString))
                            ?true
                            :false
    return enterStringData;
}

//Function verify data number
const verifyDataNumber = (dataEnterNumber) =>{
    const enterNumberData = (!isNaN(dataEnterNumber))
                            ?true
                            :false
    return enterNumberData;
}

//FUnction convert to Int data
const convertToInt = (dataConvert) => parseInt(dataConvert);

//Function show Message //True - false
const showMessage = (destinationTravelEnterVerify) =>{
    (destinationTravelEnterVerify)
    ?console.log("El valor es correcto!")
    :console.log("El valor es incorrecto!");
}

//Function calculate values
const calcultateValues = (durationTravelDiaryEnter, budgetEstimatedEnter, expensesDiaryEnter) =>{
    const calculateExpenses = (durationTravelDiaryEnter * expensesDiaryEnter);
    return calculateExpenses;

}
//Function verifyCalculte values
const calcultateValuesVerify = (budgetEstimatedEnter, calculateExpenses) =>{
    (budgetEstimatedEnter >= calculateExpenses)
    ? console.log("Tienes suficiente dinero")
    :console.log("No tienes suficiente dinero. Puedes cambiar la duración de días o el presupueto estimado");
}
//Function edit data 
const editDataEnter = (durationTravelDiaryEnter,toIntConvert) => durationTravelDiaryEnter = toIntConvert;

const travel = () =>{
    while(flag){
        menuTravel();
        const optionUserEnter = enterOptionUser();
        const optionUserEnterVerify = verifyDataNumber(optionUserEnter);
        const toIntConvert = convertToInt(optionUserEnter);

        if(optionUserEnterVerify){
            switch(toIntConvert){
                case 1:
                    const destinationTravelEnter = enterDestinationTravel();
                    const destinationTravelEnterVerify = verifyDataString(destinationTravelEnter);
                    showMessage(destinationTravelEnterVerify);
                    break;
                case 2:
                    durationTravelDiaryEnter = enterDurationTravelDiary();
                    const durationTravelDiaryEnterVerify = verifyDataNumber(durationTravelDiaryEnter);
                    if(durationTravelDiaryEnterVerify){
                        const toIntConvert = convertToInt(durationTravelDiaryEnter);
                        durationTravelDiaryEnter = toIntConvert;
                        console.log(durationTravelDiaryEnter);
                        showMessage(durationTravelDiaryEnterVerify);
                    }else{
                        showMessage(durationTravelDiaryEnterVerify);
                    }
                    break;
                case 3:
                    let durationTravelDiaryEnterEdit = enterDurationTravelDiary();
                    const durationTravelDiaryEnterVerifyEdit = verifyDataNumber(durationTravelDiaryEnterEdit);
                    
                    if(durationTravelDiaryEnterVerifyEdit){
                        const toIntConvert = convertToInt(durationTravelDiaryEnterEdit);
                        durationTravelDiaryEnterEdit = toIntConvert;
                        durationTravelDiaryEnter = durationTravelDiaryEnterEdit
                        console.log("El valor se editó correctamente!.")
                        console.log(durationTravelDiaryEnter);
                    }else{
                        showMessage(durationTravelDiaryEnterVerify);
                    }
                    break;
                case 4:
                    budgetEstimatedEnter = enterBudgetEstimated();
                    const budgetEstimatedEnterVerify = verifyDataNumber(budgetEstimatedEnter);
                    
                    if(budgetEstimatedEnterVerify){
                        const toIntConvert = convertToInt(budgetEstimatedEnter);
                        budgetEstimatedEnter = toIntConvert;
                        console.log(budgetEstimatedEnter);
                        showMessage(budgetEstimatedEnterVerify);
                    }else{
                        showMessage(budgetEstimatedEnterVerify);
                    }
                    break;
                case 5:
                    let budgetEstimatedEnterEdit = enterBudgetEstimated();
                    const budgetEstimatedEnterEditVerify = verifyDataNumber(budgetEstimatedEnterEdit);
                    
                    if(budgetEstimatedEnterEditVerify){
                        const toIntConvert = convertToInt(budgetEstimatedEnterEdit);
                        budgetEstimatedEnterEdit = toIntConvert;
                        budgetEstimatedEnter = budgetEstimatedEnterEdit
                        console.log("El valor se editó correctamente!.")
                        console.log(budgetEstimatedEnter);
                    }else{
                        showMessage(durationTravelDiaryEnterVerify);
                    }
                    break;
                case 6:
                    expensesDiaryEnter = enterExpensesDiary();
                    const expensesDiaryEnterVerify = verifyDataNumber(expensesDiaryEnter);
                    
                    if(expensesDiaryEnterVerify){
                        const toIntConvert = convertToInt(expensesDiaryEnter);
                        expensesDiaryEnter = toIntConvert;
                        console.log(expensesDiaryEnter);
                        showMessage(expensesDiaryEnterVerify);
                    }else{
                        showMessage(expensesDiaryEnterVerify);
                    }
                    break;
                case 7:
                    const calculateExpenses = calcultateValues(durationTravelDiaryEnter, budgetEstimatedEnter, expensesDiaryEnter);

                    calcultateValuesVerify(budgetEstimatedEnter, expensesDiaryEnter);
                    console.log(`Valores obtenidos------------->
                                Duración del viaje en días: ${durationTravelDiaryEnter}
                                Presupuesto estimado: $${budgetEstimatedEnter}
                                Gastos por día: $${expensesDiaryEnter}
                                Gastos totales:: $${calculateExpenses}`);
                    break;
                case 8:
                    flag = false;
                    break;
                default:
                    console.log("Opción invalida");
            }
        }else{
            showMessage(optionUserEnterVerify);
        }

    }
}

const main = () =>{
    travel();
}

main();