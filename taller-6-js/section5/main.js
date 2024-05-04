
const url = "data.json"; // url
const enterOptionUser = () => prompt("Ingrese la opción del menú"); // Request option user
const enterQuantityPeople = () => prompt("Ingrese la cantidad de personas..."); //Request quantity people
const enterNumberRoom = () => prompt("Ingrese el número de la habitación"); //Request number room
const enterNameGuest = () => prompt("Ingrese el nombre del huesped a cargo de los demás!...");
const enterDateInitial = () => prompt("Ingrese la fecha de inicio: ");
const enterDateFinal = () => prompt("Ingrese la fecha final: ");
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
    console.log(obtainRoom)
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
            resolve("La creación se realizó correctamente");
        },2000)
    })
}
const showCurrentlyReservation = (reservations,rooms,roomTypes,nameGuestEnter) =>{
    return new Promise((resolve,reject)=>{
        const message = "Datos encontrados correctamente!...";
        setTimeout(()=>{
            const reserveFilter = reservations.filter(reserve =>reserve.nameGuest === nameGuestEnter); // filter for name user
            if(!reserveFilter >0){ //verify content array reserveFilter
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
const reservationHotel = async() =>{ //Function first
    try{
        const reservations = []; // Reeservations
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
                        const obtainRoom = await verifyRoomAvailable(rooms,parseInt(numberRoomEnter)); //Verify rooms
                        if(obtainRoom.availability){
                            const nameGuestEnter =  enterNameGuest();
                            let reservationCreate = await createReservation(reservations,obtainRoom,quantityPeopleEnterTwo,numberRoomEnter,nameGuestEnter,dateInitial,dateFinal);
                            console.log(reservationCreate);
                            console.log(reservations)
                            console.log(rooms)
                        }
                    }catch(error){
                        console.error(error)
                    }
                    break;
                case 3:
                    try{
                        const nameGuestEnter = enterNameGuest();
                        const currentlyReservationShow =  await showCurrentlyReservation(reservations,rooms,roomTypes,nameGuestEnter);
                        console.log(currentlyReservationShow)
                    }catch(error){
                        console.error(error)
                    }
                    break;
                case 4:
                    break;
                case 5:
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