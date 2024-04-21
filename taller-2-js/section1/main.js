

const enterOptionUser          = () => prompt("Ingrese una opción");
const enterDestinationTravel   = () => prompt("Ingrese el destino de viaje...");
const enterDurationTravelDiary = () => prompt("Ingrese la duración del viaje por días...");
const enterBudgetEstimated     = () => prompt("Ingrese el presupuesto estimado para el viaje...");
const enterAccommodation       = () => prompt("Ingrese el valor a gastar en Alojamiento...");
const enterTransport           = () => prompt("Ingrese el valor a gastar en Transporte...");
const enterActivitys           = () => prompt("Ingrese el valor a gastar en Activitys...");

//Variables first
let durationTravelDiaryEnter, budgetEstimatedEnter, accomodationEnter, transportEnter, activitysEnter, flag = true;
const valuesEnter = [];

//Fuctions menu
const menuTravel = () =>{
    console.log("***********Reto 1*******************");
    console.log("El viaje de julian");
    console.log("OPCIONES----------------------------");
    console.log("1. Definir destino de viaje");
    console.log("2. Definir duración del viaje en días");
    console.log("3. Editar la duración del viaje");
    console.log("4. Definir el presupuesto estimado");
    console.log("5. Editar el presupuesto estimado");
    console.log("6. Ingresar el valor de alojamiento");
    console.log("7. Ingresar el valor de transporte");
    console.log("8. Ingresar el valor de actividades");
    console.log("9. Salir del programa");
}

//Function for verify the cancel the prompt
const verifyPrompt = (enterOptionUser) =>{

    const prompt = (enterOptionUser == null)
                    ? true
                    : false;

    return prompt
}

//Function for verify enter number user Number
const verifyEnterNumberUser = (dataEnterNumber) => {
    const optionUser = (!isNaN(dataEnterNumber))
                        ? true
                        : false;
    return optionUser;
}

//Function for verify enter number user String
const verifyEnterStringUser = (dataEnterString) => {
    const optionUser = (isNaN(dataEnterString))
                        ? true
                        : false;
    return optionUser;
}

//Functios for cal the budget
const calculateBudget = (newArrayValues) =>{
    const sumExpenses = (newArrayValues[0] * (newArrayValues[2] + newArrayValues[3] + newArrayValues[4]));
    (newArrayValues[1] >= sumExpenses)
    ?alert("Tienes suficiente dinero!.")
    :alert("No tienes sufiente dinero. Recomiendo cambiar el presupuesto o los días de la estadía");
}

//Functions add valuesEnter
const addValuesEnter = (durationTravelDiaryEnter, budgetEstimatedEnter, 
                        accomodationEnter, transportEnter, activitysEnter) =>{
    
    valuesEnter.push(durationTravelDiaryEnter,budgetEstimatedEnter,accomodationEnter,transportEnter,activitysEnter);

}

//Functions convertToFloat
const convertToFloat = (valuesEnter) =>{
    const newArrayValues = [];
    valuesEnter.forEach(values => {
        newArrayValues.push(parseFloat(values));
    });

    return newArrayValues;

}

//Function travel
const travel = () =>{
    while(flag){
        menuTravel();
        //Enter option the user
        const optionUserEnter = enterOptionUser();
        const promtVerify = verifyPrompt(optionUserEnter);
        const optionUserEnterVerify = verifyEnterNumberUser(optionUserEnter);

        //Verify enter option the user cancel//
        if(promtVerify){
            flag = false;
        }else{
            //Verify enter option the user Number // True - false
        if(optionUserEnterVerify){
            //Enter travel destination
            if(optionUserEnter == 1){
                const destinationTravelEnter = enterDestinationTravel();
                const destinationTravelEnterVerify = verifyEnterStringUser(destinationTravelEnter);

                (destinationTravelEnterVerify) 
                ? console.log(`Vamos hacia ${destinationTravelEnter}`)
                :alert("Lugar incorrecto!.");

            //Enter duration travel for diary
            }else if(optionUserEnter == 2){
                durationTravelDiaryEnter = enterDurationTravelDiary();
                const durationTravelDiaryEnterVerify = verifyEnterNumberUser(durationTravelDiaryEnter);

                (durationTravelDiaryEnterVerify)
                ?console.log('Valor correcto!.')
                :alert("Valor incorrecto!.");
                
            //Edit duration travel for diary
            }else if(optionUserEnter == 3){
                durationTravelDiaryEnter = enterDurationTravelDiary();
                const durationTravelDiaryEnterVerify = verifyEnterNumberUser(durationTravelDiaryEnter);
                
                if(durationTravelDiaryEnterVerify){
                    newArrayValues = convertToFloat(valuesEnter);
                    newArrayValues[0] = parseFloat(durationTravelDiaryEnter);
                    console.log(newArrayValues);
                }else{
                    alert("Valor incorrecto!.");
                }

            //Enter budget estimated 
            }else if(optionUserEnter == 4){
                budgetEstimatedEnter = enterBudgetEstimated();
                const budgetEstimatedEnterVerify = verifyEnterNumberUser(budgetEstimatedEnter);
            
            //Edit budget estimated
            }else if(optionUserEnter == 5){
                budgetEstimatedEnter = enterBudgetEstimated();
                const budgetEstimatedEnterVerify = verifyEnterNumberUser(budgetEstimatedEnter);

            //Enter accommodation
            }else if(optionUserEnter == 6){
                accomodationEnter = enterAccommodation();
                const accomodationEnterVerify = verifyEnterNumberUser(accomodationEnter);

            //Enter transport
            }else if(optionUserEnter == 7){
                transportEnter = enterTransport();
                const transportEnterVerify = verifyEnterNumberUser(transportEnter);

            //Enter activitys
            }else if(optionUserEnter == 8){
                activitysEnter = enterActivitys();
                const activitysEnterVerify = verifyEnterNumberUser(activitysEnter);

                //Add the values enters
                addValuesEnter(durationTravelDiaryEnter,budgetEstimatedEnter,accomodationEnter,transportEnter,activitysEnter);
                const newArrayValues = convertToFloat(valuesEnter);
                console.log(newArrayValues);

                //Function for calculate the values
                calculateBudget(newArrayValues);

            //Exit
            }else if(optionUserEnter == 9){
                console.log("Opción 9");
                flag = false;    
            }else{
                console.log("Opción incorrecta!.");
            }
        }else{
            alert("Valor incorrecto. Intenta de nuevo!.")
            }
        }
  
    }
    console.log(`Datos ingresados ----------->
    Duración del viaje: ${durationTravelDiaryEnter}
    Presupuesto estimado: $${budgetEstimatedEnter}
    Precio alojamiento: $${accomodationEnter}
    Precio transporte: $${transportEnter}
    Precio actividades: $${activitysEnter}
    Gracias por utilizar este programa`);
}
const main = () =>{
    travel();
}

main();