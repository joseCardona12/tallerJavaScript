const paragraph = document.getElementById("paragraph-one");
const city = "Medellín";
const arrival = "2:00 a.m.";
const board = "3:00 a.m.";
const travelDestination = "Macondo";
const password = "01110010_01101001_01110111_01101001";

//Function show title 
const showTitle = (arrival,city,board,travelDestination,password,charactersConvert) =>{
    console.log("***Caso 3***");
    console.log(`Hola. Recuerda. Llegas a las ${arrival} a ${city}. 
    Importante! Debes abordar a las ${board} para ${travelDestination}`)
    console.log(`La clave binaria es: ${password}
    convertida es: ${charactersConvert}`)
}

//Function for separate the values with outh under score password
const WithOuthUnderScorePassword = (password) => password.split("_");
const separatePasswordGroup = (withOutUnderScorePassword) =>{
    const [byteOne,byteTwo,byteThree,byteFour] = withOutUnderScorePassword;
    const arraybyteOne = byteOne.split("");
    const arrayByteTwo = byteTwo.split("");
    const arrayByteThree = byteThree.split("");
    const arrayByteFour = byteFour.split("");
    return [arraybyteOne,arrayByteTwo,arrayByteThree,arrayByteFour];
}

//Function for obtain potency array password
const potencyArrayPassword = (passwordGroupSeparate) =>{
    const [arraybyteOne,arrayByteTwo,arrayByteThree,arrayByteFour] = passwordGroupSeparate;
    let passwordPotencyOne = 0;
    let passwordPotencyTwo = 0;
    let passwordPotencyThree = 0;
    let passwordPotencyFour = 0;
    //Count for value
    let countByte = 0;
    for(let i = parseInt(arraybyteOne.length - 1); i>=0; i--){
        passwordPotencyOne+=((Math.pow(2,countByte) * arraybyteOne[i]))
        countByte++;
    }
    countByte = 0;
    for(let i = parseInt(arrayByteTwo.length - 1); i>=0; i--){
        passwordPotencyTwo+=((Math.pow(2,countByte) * arrayByteTwo[i]))
        countByte++;
    }
    countByte = 0;
    for(let i = parseInt(arrayByteThree.length - 1); i>=0; i--){
        passwordPotencyThree+=((Math.pow(2,countByte) * arrayByteThree[i]))
        countByte++;
    }
    countByte = 0;
    for(let i = parseInt(arrayByteFour.length - 1); i>=0; i--){
        passwordPotencyFour+=((Math.pow(2,countByte) * arrayByteFour[i]))
        countByte++;
    }
    return [passwordPotencyOne,passwordPotencyTwo,passwordPotencyThree,passwordPotencyFour];
}
const convertToCharacters = (passwordPotencyOne,passwordPotencyTwo,passwordPotencyThree,passwordPotencyFour) =>{
    console.log(passwordPotencyOne,passwordPotencyTwo)
    const charactersConvert = String.fromCharCode(passwordPotencyOne,passwordPotencyTwo,passwordPotencyThree,passwordPotencyFour);
    return charactersConvert;
}

const addParagraphHtml = (paragraph,charactersConvert) =>{
    return paragraph.innerHTML =`${charactersConvert}`
}

const caseThree = (password,paragraph,arrival,city,board,travelDestination) =>{
    const passwordWithOutUnderScore = WithOuthUnderScorePassword(password);  
    const passwordGroupSeparate = separatePasswordGroup(passwordWithOutUnderScore);
    const passwordPotency = potencyArrayPassword(passwordGroupSeparate);
    const [passwordPotencyOne,passwordPotencyTwo,passwordPotencyThree,passwordPotencyFour] = passwordPotency;
    const charactersConvert = convertToCharacters(passwordPotencyOne,passwordPotencyTwo,passwordPotencyThree,passwordPotencyFour);
    addParagraphHtml(paragraph,charactersConvert);
    showTitle(arrival,city,board,travelDestination,password,charactersConvert)
    
}
caseThree(password,paragraph,arrival,city,board,travelDestination);


