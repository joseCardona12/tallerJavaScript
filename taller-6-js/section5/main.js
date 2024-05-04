
const url = "data.json"; // url
const enterOptionUser =       () => prompt("Ingrese la opción del menú"); // Request option user
const enterQuantityPeople =   () => prompt("Ingrese la cantidad de personas..."); //Request quantity people
const enterNumberRoom =       () => prompt("Ingrese el número de la habitación"); //Request number room
const enterNameGuest =        () => prompt("Ingrese el nombre del huesped a cargo de los demás!...");
const enterDateInitial =      () => (prompt("Ingrese la fecha de inicio: "));
const enterDateFinal =        () => prompt("Ingrese la fecha final: ");
const enterIdUser =           () => prompt("Ingrese el id de la reservación");
let idCount = 1;

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
    1. Ver las Habitaciones Disponibles
    2. Registro de Reservas
    3. Ver Reservas Actuales
    4. Cancelar Reservas
    5. Editar Reservas
    6. Salir del Programa
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
            const numberRoom = rooms.find(room=> room.number === numberRoomEnter);
            if(!numberRoom.availability){
                reject("Upss. No está disponible la habitación...");
            }
            resolve(numberRoom);
        },2000)
    }) 
}
 const createReservation = (reservations,obtainRoom,quantityPeopleEnterTwo,numberRoomEnter,nameGuestEnter,dateInitial,dateFinal) =>{
    console.log("Creando reservación!...");
    const generateId = () =>{
        return idCount++;
    } 
    const idGenerate = generateId();
    const reserve = {
        idReserve: idGenerate,
        nameGuest: nameGuestEnter,
        numberRoom: numberRoomEnter,
        quantityPeople: parseInt(quantityPeopleEnterTwo),
        dateInit: dateInitial,
        dateFin: dateFinal
    }
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const addReservation =  reservations.push(reserve);
            if(!addReservation){
                reject("Error al crear");
            }
            obtainRoom.availability = false;
            resolve("Se creó correctamente la reserva...");
        },2000)
    })
}
const showDetailsReservation = (reservations,rooms,roomTypes,nameGuestEnter) =>{
    console.log("Mostrando detalles...");
    return new Promise((resolve,reject)=>{
        const message = "Datos encontrados correctamente!...";
        setTimeout(()=>{
            const reserveFilter = reservations.filter(reserve =>reserve.nameGuest === nameGuestEnter); // filter for name user
            if(!reserveFilter.length >0){ //verify content array reserveFilter
                reject("No se encontró ninguna reserva a este nombre") //Case error
            }
            reserveFilter.forEach(reserve=>{ 
                const roomFind = rooms.find(room=>room.number == reserve.numberRoom); // find room for number
                const roomTypeFind = roomTypes.find(type => type.id === roomFind.roomTypeId); // find roomType for id
                //Show details
                console.log(`
                Detalles de las reserva de: ${reserve.nameGuest} 
                Número de la habitación: ${roomFind.number}
                Tipo de habitación: ${roomTypeFind.name}
                Descripción: ${roomTypeFind.description}
                Precio por noche: $${roomFind.priceNight}
                ----------------------------------------------
                `);
            })
            resolve(message)
        },2000)
    })
} 
const showCurrentlyReservation = (reservations,idUserEnter) =>{
    console.log("Mostrando las reservaciones actuales...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const reservesFilter = reservations.filter(reserve=>reserve.idReserve === idUserEnter); //Filter for name
            if(!reservesFilter.length >0){ //Verify weight of array reservesFilter
                reject("Upss. No se encontró ninguna reservación con este id"); 
            }
            reservesFilter.forEach(reserve=>{// show reserve
                console.log(`
                Reservaciones actuales de: ${reserve.nameGuest}
                Número de la habitación: ${reserve.numberRoom}
                Cantidad de personas reservadas: ${reserve.quantityPeople}
                Fecha de inicio: ${reserve.dateInit}
                Fecha final: ${reserve.dateFin}
                ---------------------------------------------------------
                `)
            resolve("Reserva encontrada");
            }) 
        },3000)
    })
}
const CancelReservation = (rooms,reservations,numberRoomEnter,idUserEnter) =>{
    const roomFind = rooms.find(room=> room.number === parseInt(numberRoomEnter)); // find room for number
    if(!roomFind){
        console.log("Upps. No se pudo cancelar el elemento");
    }
    reservations.splice(idUserEnter-1, idUserEnter);
    roomFind.availability = true;
    return "La reserva se canceló correctamente!...";

}
const editReservation = (reservations,numberRoomEnter, dateInitialEnter,dateFinalEnter) =>{
    console.log("Editando la reserva...")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const reserveFind = reservations.find(reserve=>reserve.numberRoom === numberRoomEnter);
            const flag = true;
            if(!flag){
                reject("No se encontró la reserva...");
            }
            reserveFind.dateInit = dateInitialEnter;
            reserveFind.dateFin = dateFinalEnter;
            resolve("Se editó correctamente la reserva");
        },2000)
    })
}
const reservationHotel = async() =>{ //Function first
    try{
        const reservations = []; // Reeservations
        const reservacionesCopy = [...reservations]; // Copy reservarions
        const data = await loadData(); // function load data
        const {rooms,roomTypes} = data;
        const roomsCopy = [...rooms] // Copy arrays
        const roomTypesCopy = [...roomTypes];
        console.log("Habitaciones: ", roomsCopy); //Show rooms
        console.log("Tipos de habitaciones: ", roomTypesCopy); //Show types rooms
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
                    showRoomsAvailability(roomsCopy,roomTypesCopy,quantityPeopleEnter)
                    break;
                case 2: //Create reservation
                    const quantityPeopleEnterTwo = enterQuantityPeople();
                    if(!verifyDataNumber(quantityPeopleEnterTwo)){
                        showMessage(verifyDataNumber(quantityPeopleEnterTwo));
                        return;
                    }
                    showMessage(verifyDataNumber(quantityPeopleEnterTwo));
                    const numberRoomEnter =  enterNumberRoom(); //Request enter number room
                    if(!verifyDataNumber(numberRoomEnter)){ // verify number - enter number room
                        showMessage(verifyDataNumber(numberRoomEnter)); // case false
                        return;
                    }
                    showMessage(verifyDataNumber(numberRoomEnter)) //case true //verify available
                    const dateInitial = enterDateInitial();
                    const dateFinal = enterDateFinal(); 
                    try{
                        const obtainRoom = await verifyRoomAvailable(roomsCopy,parseInt(numberRoomEnter)); //Verify rooms
                        if(obtainRoom.availability){
                            const nameGuestEnter =  enterNameGuest();
                            let reservationCreate = await createReservation(reservacionesCopy,obtainRoom,quantityPeopleEnterTwo,numberRoomEnter,nameGuestEnter,dateInitial,dateFinal);
                            console.log(reservationCreate);
                            console.log(reservacionesCopy)
                            console.log(rooms);
                        }
                    }catch(error){
                        console.error(error)
                    }
                    break;
                case 3:
                    try{
                        const nameGuestEnter = enterNameGuest();
                        const currentlyReservationShow =  await showDetailsReservation(reservacionesCopy,roomsCopy,roomTypesCopy,nameGuestEnter);
                        console.log(currentlyReservationShow)
                    }catch(error){
                        console.error(error)
                    }
                    break;
                case 4: // Cancel reservation
                    try{
                        const idUserEnter = enterIdUser();
                        const currentlyReservationShow = await showCurrentlyReservation(reservacionesCopy,parseInt(idUserEnter)); // show reserve
                        console.log(currentlyReservationShow);
                        const numberRoomEnter = enterNumberRoom(); //Reques number room of the reserve
                        if(!verifyDataNumber(numberRoomEnter)){
                            showMessage(verifyDataNumber(numberRoomEnter));
                            return;
                        }
                        const reservationDeleted = CancelReservation(rooms,reservations,numberRoomEnter,idUserEnter); //Cancel reservation
                        console.log(reservationDeleted);
                    }catch(error){
                        console.error(error);
                    }
                    break;
                case 5: // Edit reservation
                    try{
                        const idUserEnter = enterIdUser(); // Request id user
                        const currentlyReservationShow = await showCurrentlyReservation(reservacionesCopy,parseInt(idUserEnter)); // show reserve
                        console.log(currentlyReservationShow);
                    }catch(error){
                        console.error(error)
                    }
                    try{
                        const numberRoomEnter = enterNumberRoom();
                        const dateInitialEnter = enterDateInitial();
                        const dateFinalEnter = enterDateFinal();
                        const reservationEdit = await editReservation(reservacionesCopy,numberRoomEnter,dateInitialEnter,dateFinalEnter);
                        console.log(reservationEdit);
                        console.log(reservacionesCopy)
                    }catch(error){
                        console.error(error);
                    }
                    break;
                case 6:
                    console.log("Saliendo del programa...");
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