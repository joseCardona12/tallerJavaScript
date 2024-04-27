//Challenge three
const enterEmailUser = () => prompt("Ingrese un correo electrónico...");
const arrayTrue = [];

//fuction show information the challenge------->
const showTitle = () =>{
    console.log("***Reto 2***");
    console.log(`Para ingresar el correo es necesario:
    1.El correo debe contar con un solo símbolo @
    2.El correo debe contener almenos un punto . Después del símbolo @
    3.El punto . y el símbolo @ no pueden estar juntos
    4.El correo electrónico no puede contener espacion en blanco...`)
}
//Function separate enter email - return array with the elements.
const separateEmailUserEnter = (emailUserEnter) =>{
    const emailUserEnterSeparate = emailUserEnter.split("");
    return emailUserEnterSeparate;
}
//Function find at and index the email enter user
const verifyAtIndexEmailEnterUser = (emailUserEnterSeparate,arrayTrue) =>{
    let count = 0;
    let indexAt = 0;
    emailUserEnterSeparate.forEach((letter,indexElement) =>{ //Runs the emailEnterSeparate for fing the simbol @
        if(letter === "@"){
            count++;
            indexAt = indexElement;
            arrayTrue.push(true);
        }
    })
    if(count > 1){
        console.log("Upss!. Debe contener un solo símbolo '@'.");
        return;
    }
    arrayTrue.push(true)
    return indexAt;
}
//Function verify point in the email enter user
const verifyPointEmailEnterUser = (emailUserEnterSeparate,atIndexEmailEnterUserVerify,arrayTrue) =>{
    let count = 0;
    for(let i= atIndexEmailEnterUserVerify; i<= emailUserEnterSeparate.length-1; i++){
        if(emailUserEnterSeparate[i] === "."){
            count++;
        }
    }
    if(count === 0){ //Verify point-->
        console.log("Debe contener al menos un punto '.' después del símbolo '@'.");
        return;
    }
    if(count > 1){ //Verify exist point
        console.log("Upss!. No puedes tener más de un punto.");
        return;
    }
    if(emailUserEnterSeparate[atIndexEmailEnterUserVerify+1] === "."){ //Verify point together of at
        console.log("El punto '.' y el símbolo '@' no pueden estar juntos.");
        return;
    }
    arrayTrue.push(true);

}
const verifySpaceWhite = (emailUserEnterSeparate,arrayTrue) =>{
    emailUserEnterSeparate.forEach(element=>{
        if(element === " "){
            console.log("El correo no puede contener espacios");
        }
    })
    arrayTrue.push(true); //Add true
}
//Function first
const challengeThree = (arrayTrue) =>{
    showTitle();
    const emailUserEnter = enterEmailUser(); //Enter email the user 
    const emailUserEnterSeparate = separateEmailUserEnter(emailUserEnter);
    const atIndexEmailEnterUserVerify =  verifyAtIndexEmailEnterUser(emailUserEnterSeparate,arrayTrue);
    verifyPointEmailEnterUser(emailUserEnterSeparate,atIndexEmailEnterUserVerify,arrayTrue);
    verifySpaceWhite(emailUserEnterSeparate,arrayTrue);
    
    if(arrayTrue.length === 4){ //Validate array true for 4.
        console.log("El correo es válido!...");
    }
}
const main = (arrayTrue) =>{
    challengeThree(arrayTrue);
}
main(arrayTrue);