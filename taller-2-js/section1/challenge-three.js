//plan itinerary
//article addition
//budgetFinal - plan travel

let flag = true, dataEnterArray = [], articlesAdditional = [],dataEnterCalculate;
const enterOptionUser   = () => prompt("Ingrese la opción del menú...");
const enterBudgetInitial = () => prompt("Ingrese el presupuesto Inicial...");
const enterCostEstimated = () => prompt("Ingrese los costos estimados...");
const enterUmbral = () => prompt("Ingrese el valor del umbral (Gastos imprevistos)...");
const enterNameArticle = () => prompt("Ingrese el nombre del artículo...");
const enterPriceArticle = () => prompt("Ingrese el precio del artículo...");

console.log(dataEnterArray);


//Function menu
const menu = () =>{
    console.log("*****Reto 3 ***************************");
    console.log("Opciones------------------------------->");
    console.log(`
    1.Agregar el presupuesto inicial y costo estimado
    2.Ver dinero restante: 
    3.Agregar artículo adicional
    4.Incluye alojamiento, transporte y comida`);
    console.log("---------------------------------------->")
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

//Function show message
const showMessage = (dataEnterVerify) =>{
    (dataEnterVerify)
    ?console.log("Es un tipo de dato string.")
    :console.log("Es un tipo de dato number");

}

//Function add data to array
const addData = (budgetInitial,costEstimated,umbral) =>{
    dataEnterArray.push(budgetInitial,costEstimated,umbral);
    return true;
}

//Function add articles additional
const addArticleAdditional = (nameArticle,priceArticle) =>{
    articlesAdditional.push({name: nameArticle, price: priceArticle});
    return true;
}


//Function calculate restBudgeet
const calculateDataEnter = (budgetInitial,costEstimated) =>{
    const dataEnterCalculate = (budgetInitial - costEstimated);
    return dataEnterCalculate;
}

//Function veify budget final
const verifyBudgetFinal = (restData,umbral) =>{
    const budgetFinalVerify = (restData >= umbral)
                                ?console.log(`Puedes comprar un artículo extra`)
                                :console.log('Evite gastos adicionales para no sobrepasar el presupuesto');
    return budgetFinalVerify;
}

//Function verify articlesAdditional
const verifyArticlesAdditional = (articlesAdditional, restData) =>{
    let nameArticles = [];
    articlesAdditional.forEach(article => {
        (restData >= article.price)
        ?nameArticles += article.name
        :console.log("Error al ingresar los articles!...");
    });

    return nameArticles;
}

const planItinerary = () =>{
    while(flag){
        menu();

        const optionUserEnter = enterOptionUser();
        const optionUserEnterVerify = verifyDataNumber(optionUserEnter);

        //Verify number enter
        if(optionUserEnterVerify){
            showMessage(!optionUserEnterVerify);

            switch(parseInt(optionUserEnter)){

                case 1:
                    const budgetInitialEnter = enterBudgetInitial();
                    const budgetActuallyEnterVerify = verifyDataNumber(budgetInitialEnter);

                    //Verify budgetActually number ------>
                    if(budgetActuallyEnterVerify){
                        showMessage(!optionUserEnterVerify);
                        const budgetActuallyEnterConvert = parseFloat(budgetInitialEnter);

                        const costEstimatedEnter = enterCostEstimated();
                        const costEstimatedEnterVerify = verifyDataNumber(costEstimatedEnter);

                        if(costEstimatedEnterVerify){
                            showMessage(!costEstimatedEnterVerify);
                            const costEstimatedEnterConvert = parseFloat(costEstimatedEnter);

                            const umbralEnter = enterUmbral();
                            const umbralEnterVerify = verifyDataNumber(umbralEnter);

                            if(umbralEnterVerify){
                                showMessage(!umbralEnterVerify);
                                const umbraEnterConvert = parseFloat(umbralEnter);

                                //Add values budgetActually and costEstimated
                                const dataAdd = addData(budgetActuallyEnterConvert,costEstimatedEnterConvert,umbraEnterConvert);
                                (dataAdd)
                                ?console.log("Datos ingresados correctamente!...")
                                :console.log("Error al ingresar los datos...");
                            }else{
                                showMessage(umbralEnterVerify);
                            }

                        }else{
                            showMessage(costEstimatedEnterVerify);
                        }
                    }else{
                        showMessage(optionUserEnterVerify);
                    }
                    break;
                case 2:
                    const [budgetInitial, costEstimated, umbral] = dataEnterArray;
                    dataEnterCalculate = calculateDataEnter(budgetInitial,costEstimated);
                    budgetFinalVerify = verifyBudgetFinal(dataEnterCalculate,umbral);
                    break;
                case 3:
                    const nameArticleEnter = enterNameArticle();
                    const nameArticleEnterVerify = verifyDataString(nameArticleEnter);

                    if(nameArticleEnterVerify){
                        showMessage(nameArticleEnterVerify);
                        const priceArticleEnter = enterPriceArticle();
                        const priceArticleEnterVerify = verifyDataNumber(priceArticleEnter);

                        if(priceArticleEnterVerify){
                            showMessage(!priceArticleEnterVerify);
                            const priceArticleEnterConvert = parseFloat(priceArticleEnter);

                            //Add values articles addtion
                            const articleAdditionalAdd = addArticleAdditional(nameArticleEnter,priceArticleEnterConvert);

                            (articleAdditionalAdd)
                            ?console.log("Se agregó el artículo correctamente!....")
                            :console.log("Error al agregar el artículo. Intenta de nuevo!...");

                            const articlesAdditionalVerify = verifyArticlesAdditional(articlesAdditional,dataEnterCalculate);
                            console.log(`Los artículos que más económicos son: ${articlesAdditionalVerify}`);
                        }else{
                            showMessage(priceArticleEnterVerify);
                        }
                    }else{
                        showMessage(!nameArticleEnterVerify);
                    }
                    break;
                case 4:
                    flag = false;
                    break;
                default:
                    console.log("Opción invalida");
            }
        }else{
            showMessage(optionUserEnterVerify);
        }

    }

    console.log(dataEnterArray);
    console.log(articlesAdditional);
}

const main = () =>{
    planItinerary();
}

main();