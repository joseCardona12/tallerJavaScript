//generatenNameEmailDomain
//Enter data
//Normalization
//Separation and extraction
//Generation name user
//Generation email
//Store data
//Verify uniqueness

let users = {};
const enterNameCompleted = () => prompt("Ingrese el nombre y apellido...");

const verifyDataString = (dataString) =>{
    const dataStringVerify = (isNaN(dataString))
                            ?true
                            :false
    return dataStringVerify;
}

//Function show message
const showMessage = (dataEnterVerify) =>{
    (dataEnterVerify)
    ?console.log("Es un tipo de dato string.")
    :console.log("Es un tipo de dato number");

}

const separateNameCompleted = (nameCompletedEnter) =>nameCompletedEnter.split(" ");

const firstLetterNameUser = (nameUser,lastNameUser) => nameUser.slice(0,3) + lastNameUser.slice(0,3);
const emailGeneration = (nameUserGeneration) => nameUserGeneration + "@myDomain.com";
const verifUniqueness = (nameUser,emailUser) =>{
    let count = 0;
    let newNameUser = nameUser;

    if(Object.keys(users).includes(newNameUser)){
        count += 1;
        newNameUser+=count;

        //Update email
        emailUser = emailGeneration(newNameUser);
    }else{
        console.log("El valor no está repetido!...");
    }
    return [newNameUser,emailUser];
}

const generateNameEmailDomain = () =>{
    let nameCompletedEnter = enterNameCompleted();
    const nameCompletdEnterVerify = verifyDataString(nameCompletedEnter);

    if(nameCompletdEnterVerify){
        showMessage(nameCompletdEnterVerify);
        nameCompletedEnter = nameCompletedEnter.toLocaleLowerCase();
        const nameCompletedSeparate = separateNameCompleted(nameCompletedEnter);
        const [nameUser, lastNameUser] = nameCompletedSeparate;
        let nameUserGeneration = firstLetterNameUser(nameUser,lastNameUser);
        let emailUserGeneration = emailGeneration(nameUserGeneration);
        const [nameUserNew,emailUserNew] = verifUniqueness(nameUserGeneration,emailUserGeneration);

        users[nameUserNew] = emailUserNew;
        console.log(users);

    }else{
        showMessage(!nameCompletdEnterVerify);
    }
    
    

}

const main = () =>{
    generateNameEmailDomain();
}

main();















