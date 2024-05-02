//Aplicando todos los conceptos - proyecto de sistema de Reservas de Hotel
const url = "data.json";
// const enterInputUser = (roomsNumbers) => prompt(` 
//     Ingrese el número de habitación a reservar
//     Habitaciones disponibles:
//     ${roomsNumbers}
// `) // Function enter input user

const enterOptionUser = () => prompt("Ingrese la opción de menú");
const enterQuantityPeople = () => prompt("¿Cuántas personas se alojarán");
const enterNumberRoom = () => prompt("Ingrese el número de habitación a reservar");
const enterNameUser = () => prompt("Ingrese el nombre de la persona a cargo");
const menu = () =>{
    console.log("Opción disponibles");
    console.log(
    `
    Opciones disponibles 
    1.Registro de reservas
    2.
    
    `
    )
}

function verifyDataNumber(dataNumber){
    return (!isNaN(dataNumber))
            ?true
            :false;
}
const showMessage = (dataEnter) =>{
    (dataEnter)
    ?console.log("...")
    :console.log("No se permiten este tipo de datos")
}
const generateId = () =>{ // Generate id
    let id = 1;
    return function(){
        return id++;
    }  
}
const createReservartion = (rooms,numberRoomEnter) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const roomAvailable = rooms.find(room=>room.number === numberRoomEnter)
            if(!roomAvailable){
                reject("La habitación no existe");
            }else if(!roomAvailable.availability){
                reject('La habitación no está disponible');
            }else{
                resolve(roomAvailable)
            }
        },2000)
    })    
}
const loadAndShowData = () =>{ //Function load data and show data
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{
            fetch(url) //Utilizo la función fetch para slicitar los datos 
            .then(response=>{
                if(!response.ok){ //Si no es ok, lanza un nuevo error
                    throw new Error("Error al cargar los datos");
                }
                return response.json(); // retorna la respuesta tranformada en json
            })
            .then(data=>{ //Recibo la data
                console.log("Habitaciones: " , data.rooms); //Muestra las rooms y tipos de rooms
                console.log("Tipos de habitaciones: ", data.roomTypes)
                resolve(data) //Utilizo la función resolve y le paso como argumento la data
            })
            .catch(error=>{
                console.error(error);
                reject(error);  
            })
        },2000)
    })
}

loadAndShowData()
    .then(({rooms,roomTypes})=>{
        let flag = true;
        while(flag){ // flag - true
            menu();
            const optionUserEnter = enterOptionUser(); // option choose user
            const dataNumberVerify =  verifyDataNumber(optionUserEnter); //verify data number 
            if(!dataNumberVerify){
                showMessage(!dataNumberVerify) //show message true - false
                return;
            }
            showMessage(dataNumberVerify)
            switch(parseInt(optionUserEnter)){
                case 1:
                    const reservations = [];
                    const idGenerate = generateId(); //Obtain id
                    const obtainId = idGenerate();
                    const quantityPeopleEnter =  enterQuantityPeople(); // enter quantity people
                    const dataNumberVerify =  verifyDataNumber(quantityPeopleEnter);
                    if(!dataNumberVerify){ //Verify data number
                        showMessage(!dataNumberVerify)
                        return;
                    }
                    showMessage(dataNumberVerify);
                    const roomAvailables = rooms.filter(room=>{ //Filter data for id, similar return roomAvaibles
                        const typeRoom = roomTypes.find(type=> type.id === room.roomTypeId);
                        return typeRoom.capacity >= quantityPeopleEnter && room.availability
                    })
                    console.log(roomAvailables);
                    const numberRoomEnter = enterNumberRoom(); //Enter number room 
                    const numberRoomEnterVerify = verifyDataNumber(numberRoomEnter); //Verify data number 
                    if(!numberRoomEnterVerify){
                        showMessage(!numberRoomEnterVerify)
                        return
                    }
                    showMessage(numberRoomEnterVerify);
                    const nameUserEnter =  enterNameUser(); //enter name user
                    createReservartion(rooms,numberRoomEnter)
                        .then(roomAvailable=>{
                            const reserve = {
                                id: obtainId,
                                guest: nameUserEnter,
                                number: parseInt(numberRoomEnter),
                                quantity: quantityPeopleEnter
                            }
                            reservations.push(reserve); // add new reserva
                            roomAvailable.availability = false; //Reservation sucesss / change availability the rooms
                            console.log("La habitación se reservó con exito")
                            console.log(rooms,reservations)
                        })
                        .catch(error=>{
                            console.error("ERORR", error)
                        })   
                    break;
                case 2:
                    break;
                default:
                    console.log("La opción no existe");
            }
        }
        
        

    })
