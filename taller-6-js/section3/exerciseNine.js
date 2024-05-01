//Ejercicio 9: Domina las Web APIs con Promesas y Fetch

const confirmReady = () => confirm("¿Listo para iniciar el ejercicio?...");
const enterTimeUser = () => prompt("Ingrese el intervalo de tiempo que quires que se demore el programa en ejecutarse");
const enterMessage = () => prompt("Qué mensaje quieres mostrar después de ese intervalo de tiempo");
const showTitle = () =>{
    console.log(`
    Bienvenido al ejericicio nueve de la section 3
    En este ejercicio usaremos Web APIs con Promesas y Fetch
    `);
}
const verifyDataNumber = (dataNumber) =>{ //Verify data number
    return (!isNaN(dataNumber))
            ?true
            :false
}
const loandingData = (url) =>{
    return fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error("Error al cargar los datos")
            }
            return response.json();
        })

}
const hopeTime = () =>{
    const readyConfirm = confirmReady(); // question to user. Are you ready
    if(!readyConfirm){ //Verify confirm ready - false
        console.log("No estás listo. Intenta cuando estés listo");
        return;
    }
    const timeUserEnter = enterTimeUser();
    const dataNumberVerify =  verifyDataNumber(timeUserEnter); //Verify data number
    if(!dataNumberVerify){
        console.log("No se permiten string");
        return;
    }
    const messageEnter =  enterMessage();
    const myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(messageEnter)
        },timeUserEnter * 1000)
    })
    myPromise
        .then((messageEnter)=>{
            console.log(messageEnter);
            return loandingData("https://jsonplaceholder.typicode.com/posts")
        })
        .then(data=>{
            data.forEach((element)=>{
                console.log(element.title)
            })
        })
        .catch(error=>{
            console.log(`ERROR. ${error}`)
        })
}

const main = () =>{
    hopeTime();
}
main();