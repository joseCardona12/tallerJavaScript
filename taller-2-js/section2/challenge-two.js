//Calculator budget
//Manage budget diary
//budget diary - cost estimated /eatOut - buyBook

const enterBudgetDiary = () => prompt("Ingrese el presupuesto diario...");
const enterEatOut = () => prompt("Ingrese el valor para la comida por fuera...");
const enterBuyBook = () => prompt("Ingrese el valor para comprar el libro...");
const enterSavingDiary = () => prompt("Ingrese el valor mínimo para el ahorro diario...");

//Functions showTitle
const showTitle = () =>{
    console.log("****Reto 2***");
    console.log("Calculadora de presupuesto");
}

//Function verify data Number
const verifyDataNumber = (dataNumberEnter) =>{
    const enterDataNumber = (!isNaN(dataNumberEnter))
                            ?true
                            :false;
    return enterDataNumber;

}

//Function verify null /false
const verifyTruthyFalsy = (dataEnter) =>{
    const truthyFalsyVerify = (dataEnter == null || dataEnter == undefined ||
                                dataEnter == "" || dataEnter == false)
                                ?false
                                :true;
    return truthyFalsyVerify;
}

//Function show message
const showMessage = (dataEnterVerify) =>{
    (dataEnterVerify)
    ?console.log("Es un tipo de dato string.")
    :console.log("Es un tipo de dato number");

}

//Function calcultate data
const calculateBudget = (budgetDiary,eatOut,buyBook,savingDiary) =>{

    const budgetCalculate = (eatOut + buyBook);
    (eatOut > savingDiary || eatOut > budgetDiary)
    ?console.log("No puedes comprar comida por fuera.")
    :console.log("Puedes comprar la comida por fuera...");

    (buyBook > savingDiary || buyBook > budgetDiary)
    ?console.log("No puedes comprar el libro...")
    :console.log("Puedes comprar el libro...");

    (budgetCalculate > savingDiary || budgetCalculate > budgetDiary)
    ?console.log("No puedes comprar ningúno de los gastos...")
    :console.log("Puedes comprar ambos...");
    

}

//Function showDataEnter 
const showDataEnter = (dataShow) => console.log(`El valor ingresado fue: $${dataShow}`);

const calculatorBudget = () =>{
    showTitle();
    const budgetDiaryEnter = enterBudgetDiary();
    const budgetDiaryEnterVerifyData = verifyTruthyFalsy(budgetDiaryEnter);

    if(budgetDiaryEnterVerifyData){
        const budgetActuallyEnterVerify = verifyDataNumber(budgetDiaryEnter);
        if(budgetActuallyEnterVerify){
            showMessage(!budgetActuallyEnterVerify);
            const budgetDiaryEnterConvert = parseFloat(budgetDiaryEnter);
            showDataEnter(budgetDiaryEnterConvert);
    
            const eatOutEnter = enterEatOut();
            const eatOutEnterVerify = verifyDataNumber(eatOutEnter);
    
            if(eatOutEnterVerify){
                showMessage(!eatOutEnterVerify);
                const eatOutEnterConvert = parseFloat(eatOutEnter);
                showDataEnter(eatOutEnterConvert);
    
                const buyBookEnter = enterBuyBook();
                const buyBookEnterVerify = verifyDataNumber(buyBookEnter);
    
                if(buyBookEnterVerify){
                    showMessage(!buyBookEnterVerify);
                    const buyBookEnterConvert = parseFloat(buyBookEnter);
                    showDataEnter(buyBookEnterConvert);
    
                    const savingDiaryEnter = enterSavingDiary();
                    const savingDiaryEnterVerify = verifyDataNumber(savingDiaryEnter);
    
                    if(savingDiaryEnterVerify){
                        showMessage(!savingDiaryEnterVerify);
                        const savingDiaryEnterConvert = parseFloat(savingDiaryEnter);
                        showDataEnter(savingDiaryEnterConvert);

                        calculateBudget(budgetDiaryEnterConvert,eatOutEnterConvert,buyBookEnterConvert,savingDiaryEnterConvert);
                    }else{
                        showMessage(savingDiaryEnterVerify);
                    }
    
                }else{
                    showMessage(buyBookEnterVerify);        
                }
            }else{
                showMessage(eatOutEnterVerify);
            }
        }else{
            showMessage(budgetActuallyEnterVerify);
        }
    }else{
        console.log("No ingresaste ningún valor!...");
        
    }
        
      
}


const main = () =>{
    calculatorBudget();
}

main();