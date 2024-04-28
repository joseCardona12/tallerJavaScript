//Challenge one
const calificationsUser = () => prompt("Ingrese las calificaciones separadas por coma."); // enter calification user

const showTitle = () =>{ //Function show title
    console.log("***Reto 1: Calculadora de Promedio de Calificaciones***");
}
//Function convert califications in to float
const convertToFloatCalifications = (userCalifications) => userCalifications.map(califications=> parseFloat(califications));

const averageCalifications = (calificationsSum,calificactionsConvertToFloat) =>calificationsSum / calificactionsConvertToFloat.length; //Function average califications
const sumCalifications = (calificactionsConvertToFloat) =>{ //Function sum califications
    const calificacionsSum = calificactionsConvertToFloat.reduce((accum,item)=>{
        return accum = accum+item; //dum acumulator with item
    },0)
    return calificacionsSum;
}
const challengeOne = () =>{ //Function first
    showTitle();
    let userCalifications = calificationsUser(); //call the function califications
    userCalifications = userCalifications.split(","); // new array separate for ,
    const calificactionsConvertToFloat = convertToFloatCalifications(userCalifications); //convert califications to float
    const calificationsSum = sumCalifications(calificactionsConvertToFloat); // obtain sum califications
    const calificationsAverage = averageCalifications(calificationsSum,calificactionsConvertToFloat);
    console.log(`
    La suma de las calificaciones es: ${calificationsSum}
    El promedio es: ${calificationsAverage}
    Gracias por utilizar el programa--->
    `)
}

const main = () =>{
    challengeOne();
}

main();