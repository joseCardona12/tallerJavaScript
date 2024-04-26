const day = 4;

const enterOptionPool = () => confirm("¿Te vas a meter a la piscina?");
const pricePool = () => Number(prompt("Ingrese el valor de la piscina: "));
const continueWalk = () => confirm("¿Quieres continuar la cominata?");
const priceBeach = () => Number(prompt("¿Qué valor tiene ir a la playa?"));
const priceMotorcycle = () => Number(prompt("¿Qué precio tiene la moto"));
const priceDrinkCoctel = () => Number(prompt("¿Qué valor tienen los cocteles"))
const drinkCoctel = () => confirm("¿Quieres tomar cocteles!..");
const dayEnter = () => (confirm("Te quedas este día"));
const priceBingo = () => Number(prompt("¿Cuánto ganaste en el bingo?"));
const priceBet = () => Number(prompt("¿Cuánto aspostaste?..."));

//Function for show error
const showError = (dataEnter) =>{
    (dataEnter)
    ?console.log("...")
    :console.log("Upss. Hubo un error!...");
}

const verifyOptionChoose = (index) =>{
    const payWork = localStorage.getItem("payWorkNew"); //obtain value payWork of Localstorage
    let payWorkConvertToInt = parseInt(payWork); //Convert a parse Int
    let days = 0;
    if(index === 0){ //Option Yellow 
        console.log(`Ir a piscina.
        Nota: El agua huele raro`)
        const optionPoolEnter = enterOptionPool();
        if(optionPoolEnter){
            const poolPrice = pricePool();
            if(poolPrice){
                payWorkConvertToInt-= parseInt(poolPrice);
                console.log(`El precio gastado fue $${poolPrice}`)
                console.log(`Ahogandose... Demasiado cloro... Ayuda (El agua es fuerte).
                Muere... Terminan las vacaciones!`);
                setTimeout(()=>{
                    window.location.href = "../index.html";
                },5000)
            }else{
                showError(poolPrice);
            }

        }else{
            console.log("Disfruta. No pasa nada");
            dayEnter();
            days+=1; //Add days enter for the user
        }
    }
    if(index === 1){ //Option green
        console.log(`Caminatas, y agüita para el camino`);
        const walkContinue = continueWalk(); //Confirm continue walk

        if(walkContinue){
            console.log("Elegiste seguir caminando...");
            console.log("Es una hermosa cascada...");
            console.log("Hay que tomarnos unas fotos");
            dayEnter();
            days+=1; //Add days enter for the user

        }else{
            console.log("¿Dónde estamos?...");
            console.log("Ya es de noche. Nos perdimos!...");
            dayEnter();
            days+1;
        }
    }
    if(index === 2){ //Option red
        console.log("Actividades en la playa");
        const beachPrice = priceBeach(); // Enter price beach
        if(beachPrice){
            payWorkConvertToInt-=parseInt(beachPrice); // subtract price to beach the payWok available   
            console.log("Juguemos Voleibol.");
            console.log("La estamos pasando genial...");
            const motorCyclePrice = priceMotorcycle(); //Enter price motorcycle

            if(motorCyclePrice){
                payWorkConvertToInt-=parseInt(motorCyclePrice); // subtract price to motorcycle the payWok available   
                console.log("Excelente. Estamos nadando y montando moto...")
                const coctelDrink = drinkCoctel(); //Question for drink coctel
                if(coctelDrink){
                    const drinkCoctelPrice = priceDrinkCoctel(); // Enter price coctel
                    if(drinkCoctelPrice){
                        payWorkConvertToInt-=parseInt(drinkCoctelPrice); // subtract price to motorcycle the payWok available  
                        console.log(`El coctel es rico... Tengo un dolor de cabeza, empiezo a ver poco.
                        Debe ser chirrinchi adulterado... Importante: Hay que ir a emergencia.
                        Precios de gastos: 1.Playa $${beachPrice} 2.Moto $${motorCyclePrice} 3.Coctel $${drinkCoctelPrice}
                        Terminan las vacaciones -------------------------------------------->`);
                        setTimeout(()=>{
                            window.location.href = "../index.html";
                        },6000);
                    }else{
                        showError(drinkCoctelPrice); //Show error ------------->
                    }
                }else{
                    showError(coctelDrink);
                }
            }else{
                showError(motorCyclePrice);
            }
        }else{
            showError(beachPrice);
        }
    }
    if(index === 3){
        console.log("Actividades dentro del hotel ----------->")
        console.log("Ganaste el bingo...");
        const bingoPrice =  priceBingo(); //Price bingo

        if(bingoPrice){
            console.log(`Ganamos: $${bingoPrice}`)
            payWorkConvertToInt+=parseInt(bingoPrice);
            console.log("Apostemos... PERDIMOS!.");
            const betPrice = priceBet();
            if(betPrice){
                payWorkConvertToInt-=parseInt(betPrice);
                console.log(`Noo. Hemos perdidos mucho dinero ${betPrice}`)
                setTimeout(()=>{
                    window.location.href = "../index.html";
                },6000);
            }
        }else{
            showError(bingoPrice); //Show error
        }
    }

    localStorage.setItem("payWordLastCast",payWorkConvertToInt); //Set payWord to localstorage
}

//Function first
const caseSix = () =>{
    const optionChoose = document.querySelectorAll(".section-title");
    optionChoose.forEach((element,index) =>{
        element.addEventListener("click", ()=>{
            if(index === 0){
                verifyOptionChoose(index);
            }
            if(index === 1){
                verifyOptionChoose(index)
            }
            if(index === 2){
                verifyOptionChoose(index);
            }
            if(index === 3){
                verifyOptionChoose(index);
            }
        })
    })
}

caseSix();