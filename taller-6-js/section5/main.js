
const url = "data.json"; // url
const enterOptionUser = () => prompt("Ingrese la opción del menú"); // Request option user
const enterQuantityPeople = () => prompt("Ingrese la cantidad de personas..."); //Request quantity people
const enterNumberRoom = () => prompt("Ingrese el número de la habitación"); //Request number room

const loadData = () =>{ //Function load data
    console.log("Cargando los datos...");
    return new Promise((resolve,reject)=>{ // return a new promise 
        setTimeout(()=>{
            fetch(url)
                .then(response=>{ // obtain response
                    if(!response.ok){ // verify state
                        throw new Error("Error al cargar los datos"); 
                    }
                    return response.json();
                })
                .then(data=>{
                    resolve(data) // resolve promise
                })
                .catch(error=>{
                    reject(error); // reject promise
                })
        },2000) //assimilate 
    })
}
const menu = () =>{
    console.log("Bienvenido al programa de reservas------->");
    console.log(`
    1.Ver las habitaciones disponibles
    2.Registro de reservas
    3.
    4.
    `)
}
const verifyDataNumber = (dataVerify) =>{
    return (dataVerify)
            ?true
            :false;
}
const showMessage = (dataVerify) => {
    (dataVerify)
    ?console.log("...")
    :console.log("Este tipo de valores no son admitidos!...");
}
const showRoomsAvailability =  (rooms,roomTypes,quantityPeopleEnter) =>{ //Show room ava
    const roomAvailables = rooms.filter(room=>{
        return roomTypes.find(type=>type.capacity >= quantityPeopleEnter && room.availability && room.roomTypeId === type.id)
    })
    roomAvailables.forEach(room=>{
        console.log(`
        Habitación con capacidad --------->
        Número: ${room.number}
        Precio: ${room.priceNight}
        Disponibilidad: ${room.availability}
        `)
    })
}
const verifyRoomAvailable = (rooms,numberRoomEnter) =>{
    console.log("Verificando disponibilidad...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const numberRoom = rooms.find(room=> room.number === numberRoomEnter)
            if(!numberRoom.availability){
                reject("Upss. No está disponible la habitación...");
            }
            resolve(numberRoom.availability);
        },2000)
    }) 
}
 const createReservation = (reservations) =>{
    const reserve = {
        id: ,
        name:
    }
}
const reservationHotel = async() =>{ //Function first
    try{
        const data = await loadData();
        const {rooms,roomTypes} = data;
        console.log("Habitaciones: ", rooms); //Show rooms
        console.log("Tipos de habitaciones: ", roomTypes); //Show types rooms
        menu();
        let flag = true;
        while(flag){
            const optionUserEnter =  enterOptionUser(); //Request option enter to user
            if(!verifyDataNumber(optionUserEnter)){ // verify data number - false
                showMessage(verifyDataNumber(optionUserEnter)); 
                return;
            }
            showMessage(verifyDataNumber(optionUserEnter)) //true
            switch(parseInt(optionUserEnter)){
                case 1: //show rooms
                    const quantityPeopleEnter =  enterQuantityPeople(); // Request quantity people to reserve
                    showRoomsAvailability(rooms,roomTypes,quantityPeopleEnter)
                    break;
                case 2: //Create reservation
                    const reservations = [];
                    const numberRoomEnter =  enterNumberRoom(); //Request enter number room
                    if(!verifyDataNumber(numberRoomEnter)){ // verify number - enter number room
                        showMessage(verifyDataNumber(numberRoomEnter)); // case false
                        return;
                    }
                    showMessage(verifyDataNumber(numberRoomEnter)) //case true //verify available
                    const roomAvailable = await verifyRoomAvailable(rooms,parseInt(numberRoomEnter));
                    if(roomAvailable){
                        createReservation(reservations,rooms)
                    }
                    // createReservation(reservations);
                    break;
                case 4:
                    flag = false;
                    break;
                default: //Bad option
                    console.log("Esta opción no está disponible...");
            }
        }  
    }catch(error){
        console.error(error)
    }
}
const main = () =>{
    reservationHotel();
}
main();