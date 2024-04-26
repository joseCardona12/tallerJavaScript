const sizesPermitted = [55,40,20];
const sizeSuitCaseUserOriginal = [60,40,20];

//Function for show title in the console.
const showTitle = (sizes) =>{
    console.log("***Caso 2****");
    console.log("La aerolínea tiene un límite del tamaño de la maleta");
    sizes.forEach(size => {
        if(size === 55){
            console.log(`Alto ${size} cm`)
        }
        if(size === 40){
            console.log(`Largo ${size} cm`)
        }
        
        if(size === 20){
            console.log(`Ancho ${size} cm`)
        }
    });
    console.log("Tenemos malas noticias. La maleta supera las dimensiones mencionadas.."),
    console
}

//Function for factor reduction for dimension
const reductionFactorForDimension = (sizesPermitted,sizeSuitCaseUserOriginal) =>{
    const [heightPermitted, lengthPermitted,widthPermitted] = sizesPermitted;
    const [heightOriginal,LenghtOriginal,widthOriginal] = sizeSuitCaseUserOriginal;
    calReductionFactorHeight = (heightPermitted / heightOriginal);
    calReductionFactorLength = (lengthPermitted / LenghtOriginal);
    calReductionFactorWidth = (widthPermitted /widthOriginal);
    return [calReductionFactorHeight,calReductionFactorLength,calReductionFactorWidth];
}

//Function for find reduction most small
const reductionMostSmall = (factorForDimensionRedution) =>{
    const [reductionHeight,reductionLength,reductionWidth] = factorForDimensionRedution;
    const mostSmallReduction = Math.min(reductionHeight,reductionLength,reductionWidth);
    return mostSmallReduction;
}

//Function for obtain the factor most small of all dimension
const factorMosSmallAllDimension = (sizeSuitCaseUserOriginal,mostSmallReduction) =>{
    const [heightOriginal,LenghtOriginal,widthOriginal] = sizeSuitCaseUserOriginal;

    const heightNew = (heightOriginal * mostSmallReduction);
    const lengthNew = (LenghtOriginal * mostSmallReduction);
    const widthNew = (widthOriginal * mostSmallReduction);
    return [heightNew,lengthNew,widthNew];
}
 
const caseTwo = (sizesPermitted,sizeSuitCaseUserOriginal) =>{
    const paragraphOne = document.getElementById("paragraphOne");
    const paragraphTwo = document.getElementById("paragraphTwo");
    const paragraphThree = document.getElementById("paragraphThree");
    showTitle(sizesPermitted);
    const factorForDimensionRedution = reductionFactorForDimension(sizesPermitted,sizeSuitCaseUserOriginal);
    const mostSmallReduction = reductionMostSmall(factorForDimensionRedution);
    const mostSmallAllDimensionFactor = factorMosSmallAllDimension(sizeSuitCaseUserOriginal,mostSmallReduction);

    //Change text content of the paragraphs
    paragraphOne.textContent = `
    El factor de reducción para cada dimensión son: ${factorForDimensionRedution}`
    paragraphTwo.textContent = `
    El factor de reducción más pequeño es: ${mostSmallReduction}
    `;
    paragraphThree.textContent =`
    Nuevas dimensiones ${mostSmallAllDimensionFactor}`

    console.log("Ya cumples con el tamaño permitido");
}
caseTwo(sizesPermitted,sizeSuitCaseUserOriginal);