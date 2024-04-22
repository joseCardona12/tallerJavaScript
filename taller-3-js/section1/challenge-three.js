//Challenge three

const enterEmailUser = () => prompt("Ingrese un correo electrónico...");

const showTitle = () =>{
    console.log("***Reto 2***");
    console.log(`Para ingresar la contraseña es necesario:
    1.El correo debe contar con un solo símbolo @
    2.El correo debe contener almenos un punto . Después del símbolo @
    3.El punto . y el símbolo @ no pueden estar juntos
    4.El correo electrónico no puede contener espacion en blanco...`)
}

const separateEmailUserEnter = (emailUserEnter) =>{
    let emailUserEnterSeparate = emailUserEnter.split("");
    return emailUserEnterSeparate;
}

const verifyEmailUserEnter = (emailUserEnterSeparate) =>{
    const emailUserEnterVerify = (emailUserEnterSeparate.includes("@"))
                                ?true
                                :false
    return emailUserEnterVerify;
}

const VerifyIndexAt = (emailUserEnterSeparate) =>{
    const indexAt = emailUserEnterSeparate.indexOf("@");
    const emailIndex = emailUserEnterSeparate[indexAt+2] === ".";
    const indexEmailVerify = (emailIndex)
                            ?true
                            :false;
    return indexEmailVerify;
}

const verifySpaceWhite = (emailUserEnterSeparate) =>{
    const spaceWhite = emailUserEnterSeparate.includes(" ");  
    const whiteSpaceVerify = (spaceWhite)
                            ?true
                            :false;
    return whiteSpaceVerify;
}

const verifyAllConditions = (emailUserEnterVerify,indexEmailVerify,whiteSpaceVerify) =>{
    console.log(emailUserEnterVerify,indexEmailVerify,whiteSpaceVerify)
    (emailUserEnterVerify && indexEmailVerify && !whiteSpaceVerify)
    ?console.log("El correo es correcto!...")
    :console.log("EL correo es incorrecto!...")
}

const validateEmail = () =>{
    const emailUserEnter = enterEmailUser();
    const emailUserEnterSeparate = separateEmailUserEnter(emailUserEnter);
    const emailUserEnterVerify = verifyEmailUserEnter(emailUserEnterSeparate);
    const indexEmailVerify = VerifyIndexAt(emailUserEnterSeparate);
    const whiteSpaceVerify = verifySpaceWhite(emailUserEnterSeparate);
    verifyAllConditions(emailUserEnterVerify,indexEmailVerify,whiteSpaceVerify);
}

const main = () =>{
    validateEmail();
}

main();