//Trthy y falsy, operadores, if-else
//Evaluation the Julian
//Activitys decide diarys - 
//State moods -conditions external
//levelEnergy - weather - loadWorkActuall
//Values truthy and falsy

const enterLevelEnergy = () => prompt("Ingrese el nivel de energía...");
const enterWeather = () => prompt("Ingrese el clima...");
const enterLoadWorkActuall = () => prompt("Ingrese la carga laboral actual...");


//Function for title
const showTitle = () =>{
    console.log("****Reto 1****");
    console.log("Bienvenido al programa Julian");
    console.log(`Para usar este programa debes tenter en cuenta. Lo siguiente:
    1. Si Ingresas un valor será tomado en cuenta como bueno
    2. Si no ingresas ningún valor será tomado como malo
    3. Si ingresas "0" es un nivel de enegía bajo`);
}

const verifyEnterLevelEnergy = (levelEnergyEnter) =>{
    (levelEnergyEnter === "bajo" || 
    levelEnergyEnter == null || levelEnergyEnter == "0")
    ?console.log("No salir a correr. Tómate un día libre!.")
    :console.log("Tienes buena energía");

}

const verifyEnterWeather = (weather) =>{
    (weather == undefined || weather == false)
    ?console.log("Quedate en casa trabajando en proyectos personales. Relajate!.")
    :console.log("Puedes salir a correr!. Está haciend un clima bueno");
}

const verifyEnterLoadWorkActuall = (workActuallEnter) =>{
    (workActuallEnter == undefined || workActuallEnter == false ||
    workActuallEnter === "alto")
    ?console.log("Intenta descansar en periodos pequeños y retoma las actividades")
    :console.log("No hay mucha carga laboral. A trabajar!.");
}
//Function first ----->
const evaluation = () =>{
    showTitle();
    const levelEnergyEnter = enterLevelEnergy();
    verifyEnterLevelEnergy(levelEnergyEnter);

    const weather = enterWeather();
    verifyEnterWeather(weather);

    const workActuallEnter = enterLoadWorkActuall();
    verifyEnterLoadWorkActuall(workActuallEnter);
    

}

const menu = () =>{
    evaluation();
}

menu();