//DecisionLastHour
//Articles additional 
//Validate weather - space Available suitcase / totalPermit

let articlesAdditionals = [], flag = true
const enterWeather = () => prompt("Ingrese el clima...");
const enterSpaceSuitCase = () => prompt("Ingrese el espacio restante de la maleta...");
const enterLimitWeightSuitCase = () => prompt("Ingrese el espacio total de la maleta...");
const enterNameArticleAdditional = () => prompt("Ingrese el artículo adicional...");
const enterWeightArticleAddtional = () => prompt("Ingrese el peso del artículo adicional");

//Functions showTitle
const showTitle = () =>{
    console.log("****Reto 2***");
    console.log("Calculadora de presupuesto");
}

//Function verify data Number
const verifyDataString = (dataStringEnter) =>{
    const enterDataString = (isNaN(dataStringEnter))
                            ?true
                            :false;
    return enterDataString;

}

//Function verify data Number
const verifyDataNumber = (dataNumberEnter) =>{
    const enterDataNumber = (!isNaN(dataNumberEnter))
                            ?true
                            :false;
    return enterDataNumber;

}

//Function show message
const showMessage = (dataEnterVerify) =>{
    (dataEnterVerify)
    ?console.log("Es un tipo de dato string.")
    :console.log("Es un tipo de dato number");

}

const addArticlesAdditionals = (nameArticle,weightArticle) =>{
    articlesAdditionals.push({name: nameArticle, weight: weightArticle});
    return true;
}

const verifyWeatherEnter = (weatherEnter) =>{

    if(weatherEnter === "lluvia"){
        console.log("Considera llevar un paraguas")
    }
}

const RunsArticlesAdditionals = () =>{
    let sumWeight = 0;
    
    articlesAdditionals.forEach(article =>{
        sumWeight+=article.weight;
    });
    return sumWeight;
}

const verifyAddArticlesAdditionals = (sumWeight,limitWeightSuitCaseEnter) =>{
    console.log(sumWeight,limitWeightSuitCaseEnter)
    const addArticlesAdditionalsVerify = (sumWeight > limitWeightSuitCaseEnter)
                                            ?true
                                            :false;
    return addArticlesAdditionalsVerify;

}

const decisionLastHour = () =>{
    showTitle();
    const weatherEnter = enterWeather();
    const weatherVerify = verifyDataString(weatherEnter);

    if(weatherVerify){
        showMessage(weatherVerify);
        verifyWeatherEnter(weatherEnter);
        const spaceSuitCaseEnter = enterSpaceSuitCase();
        const spaceSuitCaseEnterVerify = verifyDataNumber(spaceSuitCaseEnter);

        if(spaceSuitCaseEnterVerify){
            showMessage(!spaceSuitCaseEnterVerify);
            const spaceSuitCaseEnterConvert = parseInt(spaceSuitCaseEnter);

            const limitWeightSuitCaseEnter = enterLimitWeightSuitCase();
            const limitWeightSuitCaseEnterVerify = verifyDataNumber(limitWeightSuitCaseEnter);

            if(limitWeightSuitCaseEnterVerify){
                showMessage(!limitWeightSuitCaseEnterVerify);
                const limitWeightSuitCaseEnterConvert = parseInt(limitWeightSuitCaseEnter);

                while(flag){
                    const nameArticleAdditionalEnter = enterNameArticleAdditional();
                    const nameArticleAdditionalEnterVerify = verifyDataString(nameArticleAdditionalEnter);
    
                    if(nameArticleAdditionalEnterVerify){
                        showMessage(nameArticleAdditionalEnterVerify);
                        const weightArticleAdditionalEnter =  enterWeightArticleAddtional();
                        const weightArticleAdditionalVerify = verifyDataNumber(weightArticleAdditionalEnter);
    
                        if(weightArticleAdditionalVerify){
                            showMessage(!weightArticleAdditionalVerify);
                            const weightArticleAdditionalEnterConvert = parseInt(weightArticleAdditionalEnter);
                        
                            //Add articles additionals
                            (weightArticleAdditionalEnterConvert <= spaceSuitCaseEnterConvert && weightArticleAdditionalEnterConvert <=limitWeightSuitCaseEnterConvert)
                            ?addArticlesAdditionals(nameArticleAdditionalEnter,weightArticleAdditionalEnterConvert)
                            :console.log("El artículo no se pudo agregar");
    
                            //Obtain sumWeight
                            const sumWeight = RunsArticlesAdditionals();
                            const addArticlesAdditionalsVerify = verifyAddArticlesAdditionals(sumWeight,limitWeightSuitCaseEnterConvert);
                            console.log(articlesAdditionals)
                            //Verify sum - limit aticles / space
                            if(addArticlesAdditionalsVerify){
                                console.log("Ya no puedes seguir agregando artículos. Maleta llena!") 
                                flag = false;
                            }else{
                                console.log("Puedes llevar una cámara o algún otro artículo que no sea esencial pero deseable");
                            }
                        }else{
                            showMessage(weightArticleAdditionalVerify);
                        }
                    }else{
                        showMessage(!nameArticleAdditionalEnterVerify);
                    }  
                } 
                
            }else{
                showMessage(limitWeightSuitCaseEnterVerify);
            }
        }else{
            showMessage(spaceSuitCaseEnterVerify);
        }

    }else{
        showMessage(!weatherVerify);
    }
}


const main = () =>{
    decisionLastHour();
    
}

main();


