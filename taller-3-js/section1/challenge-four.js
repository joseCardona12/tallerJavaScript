//Challenge four -
let flag = true;
const enterOptionChoose = () => (prompt("Ingrese la opción del menú: ")); 
const enterNameEvent = () => prompt("Ingrese el nombre del evento: ");
const enterDateEvent = () => (prompt("Ingrese la fecha del evento: "));
const enterDescriptionEvent = () => prompt("Ingrese la descripción del evento: ");
const enterIdentifierEvent = () => prompt("Ingrese el identificador del evento");
const enterKeysEvent = () => prompt("¿Qué valor quieres editar?");

//Function menu------------>
const menu = () =>{
    console.log("***Reto 4: Sistema de gestion de eventos***");
    console.log(`Opciones----------------------------------->
    1.Creación de eventos
    2.Visualización y búsqueda de eventos
    3.Actualización de eventos.
    4.Eliminación de eventos
    5.Salir del programa`);
}
const verifyDataNumber = (dataNumber) =>{ //Function verify number of enter user
    return(!isNaN(dataNumber))
    ?true
    :false;
}
const verifyDataString = (dataString) =>{
    return(isNaN(dataString))
    ?true
    :false;
}
const showMessage = (message) =>{ //Function for show message /true - false
    (message)
    ?console.log("...")
    :console.log("Upss. Ocurrió un error");
}
const normalizeData = (data)=>{ //Function normalize data
    return data.toLowerCase().trim();
}
const getIdentifierOnly = () =>{ //Function identifier only
    const dateNow = new Date();
    let identifierOnly = dateNow.getTime();
    return identifierOnly;
}
const addEvent = (eventsCopy,identifierOnly,nameEvent,dateEvent,descriptionEvent) =>{ //add event
    const eventAdd = eventsCopy.push({identifier:identifierOnly,name:nameEvent,date:dateEvent,description:descriptionEvent});
    if(!eventAdd){
        console.log("No se pudo agregar el evento. Intenta de nuevo!...");
        return;
    }
    console.log("Se agregó correctamente el evento");
}
const showEvents = (eventsCopy) =>{ //Function show events
    let count = 0;
    console.log("Eventos--------->")
    eventsCopy.forEach(event=>{
        count++;
        console.log(`Evento ${count}`);
        const values = Object.values(event) //show values
        console.log(values);
    })
}
const searchEventForName = (eventsCopy,nameEventEnterSearch) =>{ //Function for searh event for nameEvent
    eventsCopy.forEach(event=>{
        if(event.name.includes(nameEventEnterSearch)){
            if(event.name === nameEventEnterSearch){
                console.log(`
                Id del evento: ${event.identifier}
                Nombre del evento: ${event.name}
                Fecha del evento: ${event.date}
                Descripción del evento: ${event.description}`);
            }
        }
    })
}
const verifyIdentifierEvent = (eventsCopy,identifierEventEnter) =>{ //Verify event identifier
    for(events of eventsCopy){
        if(events.identifier != identifierEventEnter){
            return false;
        }
        return events;
    }
}
const updateKeysEvents = (eventsCopy,identifierEventVerify) =>{ //update event
    const newDataEvent = {} //create new objet  
    eventsCopy.forEach(event=>{
        Object.keys(event).forEach(key=>{ //run events
            const enterNewData  = prompt(`Ingrese el valor para la key ${key}`) //enter data for every key 
            newDataEvent[key] = normalizeData(enterNewData);    //Normalize data
        })
    })
    Object.assign(identifierEventVerify,newDataEvent); // change information
}
const removeEvent = (eventsCopy,identifierEventEnterRemove,) =>{ //function remove event
    const keys = eventsCopy.map(event=>event.identifier);
    console.log(keys)
    if(!keys.includes(parseInt(identifierEventEnterRemove))){
        console.log("El identificador no fue encontrado")
        return eventsCopy;
    }
    const newEvents = eventsCopy.filter(event=>event.identifier !== parseInt(identifierEventEnterRemove));
    console.log(newEvents);
}
//Function first
const challengeFour = (flag) =>{
    const events = [];
    const eventsCopy = [...events];
    menu();
    while(flag){
        const optionChooseEnter =  enterOptionChoose(); //Ooption choose of user
        const dataNumberVerify = verifyDataNumber(optionChooseEnter); // verify option shoose. Only number
        if(dataNumberVerify){   //True continue the option - false/show error
            switch(parseInt(optionChooseEnter)){
                case 1:
                    let nameEventEnter  = enterNameEvent(); //name event
                    if(!verifyDataString(nameEventEnter)){ //verify string
                        showMessage(verifyDataString(nameEventEnter));
                        return;
                    }
                    let dateEventEnter = enterDateEvent(); //date event
                    if(!verifyDataString(dateEventEnter)){
                        showMessage(verifyDataString(dateEventEnter));
                        return;
                    }
                    let descriptionEventEnter  = enterDescriptionEvent(); // description event
                    if(!verifyDataString(descriptionEventEnter)){
                        showMessage(verifyDataString(descriptionEventEnter));
                        return;
                    }
                    showMessage(descriptionEventEnter); //Correct
                    nameEventEnter = normalizeData(nameEventEnter); //Normalize name
                    dateEventEnter = normalizeData(dateEventEnter); //Normalize date
                    descriptionEventEnter = normalizeData(descriptionEventEnter); //Normalize description
                    const identifierOnly = getIdentifierOnly(); //Obtain identifier only
                    addEvent(eventsCopy,identifierOnly,nameEventEnter,dateEventEnter,descriptionEventEnter); //Add new event
                    break;
                case 2:
                    showEvents(eventsCopy); //show events
                    let nameEventEnterSearch = enterNameEvent();
                    nameEventEnterSearch = normalizeData(nameEventEnterSearch), //Normalize name event
                    searchEventForName(eventsCopy,nameEventEnterSearch);
                    break;
                case 3:
                    const identifierEventEnter = enterIdentifierEvent(); // enter identifier event user
                    const identifierEventVerify = verifyIdentifierEvent(eventsCopy,identifierEventEnter); //verify exist of indentifier
                    updateKeysEvents(eventsCopy,identifierEventVerify);
                    console.log(eventsCopy);
                        
                    break;
                case 4:
                    const identifierEventEnterRemove = enterIdentifierEvent();
                    removeEvent(eventsCopy,identifierEventEnterRemove);
                    break;
                case 5:
                    flag = false;
                    break;
                default:
                    console.log("Opción invalida. Intenta de nuevo");
            }
        }else{
            showMessage(dataNumberVerify);

        }
    }
    
}
const main = (flag) =>{
    challengeFour(flag);
}
main(flag);