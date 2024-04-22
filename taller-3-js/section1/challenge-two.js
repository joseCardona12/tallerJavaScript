//Validate password safe

const enterPassword = () => prompt("Ingrese una contraseña: ");
const showTitle = () =>{
    console.log("***Reto 2***");
    console.log(`Para ingresar la contraseña es necesario:
    1.La contraseña debe tener almenos 8 caracteres
    2.La contraseña debe tener almenos 1 número`)
}

const verifyEnterPassword = (passwordEnter) =>{
    let dataIncorrect = [];
    //Verify the password contain eight caracters
    if(passwordEnter.length < 8){
        dataIncorrect.push("La longitud es incorrecta (Mínimo 8)");


    }

    const numbers = [1,2,3,4,5,6,7,8,9];
    passwordEnter.split("").some(number => numbers.includes(number));
    //Verify the password contain a number
    if(!/\d/.test(passwordEnter)){
        dataIncorrect.push("La contraseña no tiene almenos un número!...");
    }
    //Verify the password contain a letter
    if(!/[a-zA-Z]/.test(passwordEnter)){
        dataIncorrect.push("La contraseña no tiene almenos una letra");
    }
    if(!/[!@#$%^&*()+_\-={}[\]:;"'?<>,.|\/\\~`]/.test(passwordEnter)){
        dataIncorrect.push("La contraseña no contiene un caracter especial");
    }

    return dataIncorrect;

}

const validateShow = (enterPasswordVerify) =>{
    if(enterPasswordVerify.length > 0){
        console.log("contraseña incorrecta");
        enterPasswordVerify.forEach(error =>{
            console.log(error)
        })
    }else{
        console.log("Contraseña correcta");
    }

}


const validatePassword = () =>{
    const passwordEnter = enterPassword();
    const enterPasswordVerify = verifyEnterPassword(passwordEnter);
    validateShow(enterPasswordVerify);

}

const main = () =>{
    validatePassword();
}

main();