//Challenge two /
//Function calification user
const calificationsUser = () => prompt("Ingrese las calificaciones separadas por coma...");
const showTitle = () =>{ // Function show title
    console.log("***Reto 2: Calculadora de Estadísticas de Calificaciones***");
}
const showStatisticsCalifications = (calificationsSum,calificationMax,calificationMin,
    approvedNumber,failedNumber,calificationsSorted) =>{
    console.log(`
    Estadísticas de calificaciones
    Promedio: ${calificationsSum}
    Calificación máxima: ${calificationMax}
    Calificación mínima: ${calificationMin}
    Número de aprobados: ${approvedNumber}
    Número de reprobados: ${failedNumber}
    Lista ordenada de calificaciones: ${calificationsSorted};
    `)
}
//Function average califications enter user
const averageCalifications = (sumCalifications,userCalifications) => (sumCalifications / userCalifications.length);
const sumCalifications = (userCalifications) =>{ //Funtions sum calificatons 
    const calificationSum = userCalifications.reduce((accum,item)=>{
        return accum = accum + item; 
    })
    return calificationSum;
}
const maxCalification = (userCalifications) =>{ //calification max of user califications
    const calificationMax = userCalifications.reduce((accum, item)=>{
        return Math.max(accum,item)
    },userCalifications[0])
    return calificationMax;
}
const minCalification = (userCalifications) =>{ //calification min of user califications
    const calificationMin = userCalifications.reduce((accum, item)=>{
        return Math.min(accum,item)
    },userCalifications[0])
    return calificationMin;
}
const numberApproved = (userCalifications) =>{ //Function obtain califications greater or equals a 70
    const calificationApproved = 70;
    const approvedNumber = userCalifications.filter(calification => calification >= calificationApproved);
    return approvedNumber;
}
const numberFailed = (userCalifications) =>{ //Function obtain califications less to 70
    const calificationApproved = 70;
    const failedNumber = userCalifications.filter(calification => calification < calificationApproved);
    return failedNumber;
}
const sortedCalifications = (userCalifications) => userCalifications.sort();//Function for sorted califacations
const convertToFloatCalifications = (userCalifications) => userCalifications.map(calification=>parseFloat(calification));
const challengeTwo = () =>{ //Function first
    showTitle(); //Call show title
    let userCalifications = calificationsUser(); // enter calification user
    userCalifications = userCalifications.split(","); //Separate calification for,
    userCalifications = convertToFloatCalifications(userCalifications); //Convert to float califications
    let calificationsSum = sumCalifications(userCalifications); //Obtain sum califications
    calificationsSum = averageCalifications(calificationsSum,userCalifications) //Obtain average califications

    const calificationMax = maxCalification(userCalifications); //obtain calification min
    const calificationMin = minCalification(userCalifications); //obtain calification max

    const approvedNumber = numberApproved(userCalifications); 
    const failedNumber = numberFailed(userCalifications);

    const calificationsSorted = sortedCalifications(userCalifications);
    showStatisticsCalifications(calificationsSum,calificationMax,calificationMin,
    approvedNumber,failedNumber,calificationsSorted)
}
const main = () =>{
    challengeTwo();
}
main();