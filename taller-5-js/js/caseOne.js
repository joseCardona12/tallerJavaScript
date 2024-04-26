const circles = document.querySelectorAll(".first-circle"); //Obtain element of html
const iconFly = document.getElementById("icon-fly"); //Obtain element of html
const messageParagraph = document.getElementById("message"); //
const messageParagraphTwo = document.getElementById("message-two");//
const modal = document.getElementById("main-modal");

const confirmDayUser = () => confirm("¿Hoy es viernes?"); //choose option the user /confirm /true-false
const ConfirmAiportUser = (airport) => confirm(`¿Llegaste al ${airport}`);
const enterEatBeforeFlying = () => prompt("Ingresa la comida a comprar");
const nameUser = "Hildebrando"; 
let payWork = 2500000;
let newPayWork = 0;
let moveX = 140;
const eatsAvailable = [
    {
        name:"almojabana con gaseosa",
        price: 15000
    },
    {
        name: "subway con gaseosa",
        price: 23000
    }
]

//Function for show html
const showHtml = (confirm,circle,iconFly,messageParagraph,moveX,index) =>{
    if(!confirm){
        messageParagraph.innerHTML = "Error. Intenta de nuevo!.";
        messageParagraph.classList.add("bad");
        return;
    }
    messageParagraph.innerHTML = "Avanzaste!."; //Show option correct 
    messageParagraph.classList.add("good");

    circle.style.pointerEvents = "none"

    iconFly.style.transition = "transform .4s ease"
    if(index === 0){
        iconFly.style.transform = `translate(${moveX}px)` //Move the fly, value initial is 95
        index++ 
        return;
    }
    if(index === 1){
        iconFly.style.transform = `translate(${(moveX*(index+1))}px)`
        index++
        return;
    }
    if(index === 2){
        iconFly.style.transform = `translate(${(moveX*(index+1))}px)`
        return;
    }
    if(index === 3){
        iconFly.style.transform = `translate(${(moveX*(index+1))}px)`
        messageParagraph.innerHTML = "Excelente!. Puedes continuar con el siguiente caso."
        return true;
    }

}
const verifyConfirm = (confirm,circle,iconFly,messageParagraph,moveX,index)=>{
    (confirm)
    ?showHtml(confirm,circle,iconFly,messageParagraph,moveX,index)
    :showHtml(confirm,circle,iconFly,messageParagraph,moveX,index)
}

//Function confirm eats available 
const VerifyEatsAvailable = (eatsAvailable,eatBeforeFlyingEnter) =>{
    console.log(eatBeforeFlyingEnter)
    if(eatBeforeFlyingEnter === "" || eatBeforeFlyingEnter == null ||
        eatBeforeFlyingEnter == undefined){
        console.log("Le tocara comprar algo en Medellín");
        return;
    }
    if(eatBeforeFlyingEnter === eatsAvailable[0].name){
        console.log("Le caerá mal porque lleva mucho en el stand!...");
        console.log(`Se ha descontado un total de $${eatsAvailable[0].price} a su dinero`);
        return payWork -= eatsAvailable[0].price;
    }
    if(eatBeforeFlyingEnter === eatsAvailable[1].name){
        console.log("Estará llenito y bien!...");
        console.log(`Se ha descontado un total de $${eatsAvailable[1].price} a su dinero`);
        return payWork-=eatsAvailable[1].price;
    } 
}
//Function show html eat available
const ShowEatAvailable = (eatsAvailable) =>{
    const modalParagraph = document.getElementById("modal-paragraph");
    console.log("Productos disponibles----------->");
    modalParagraph.textContent = `
    ${eatsAvailable[0].name} ${eatsAvailable[0].price}
    ${eatsAvailable[1].name} ${eatsAvailable[1].price}
    `
    return true;
}
const caseOne = (circles,iconFly,messageParagraph,moveX,nameUser,eatsAvailable,modal) =>{
    console.log(`Bienvenido ${nameUser}. Inicia el viaje... `)
    circles.forEach((circle,index)=>{
        circle.addEventListener("click", ()=>{
            if(index === 0){
                console.log("click")
                const dayUserConfirm = confirmDayUser();
                verifyConfirm(dayUserConfirm,circle,iconFly,messageParagraph,moveX,index);
            }
            if(index === 1){
                console.log("click")
                const aiport = "Aeropuerto el dorado";
                const airportUserConfirm = ConfirmAiportUser(aiport);
                verifyConfirm(airportUserConfirm,circle,iconFly,messageParagraph,moveX,index); 
            }
            if(index === 2){
                modal.classList.add("active"); //Add active to modal
                const eatAvailableShow = ShowEatAvailable(eatsAvailable,modal);
                verifyConfirm(eatAvailableShow,circle,iconFly,messageParagraph,moveX,index);
            }
            if(index === 3){
                const eatBeforeFlyingEnter = enterEatBeforeFlying();
                const obtainPriceRest = VerifyEatsAvailable(eatsAvailable,eatBeforeFlyingEnter);
                const confirmVerify = verifyConfirm(eatBeforeFlyingEnter,circle,iconFly,messageParagraph,moveX,index);
                if(confirmVerify){
                    window.location.href = "../index.html"; // Redirect to home
                }
                localStorage.setItem("payWork",obtainPriceRest.toString()); // Set obtainPriceRest /Pay work to localstorage
            }
        })
    })
}

caseOne(circles,iconFly,messageParagraph,moveX,nameUser,eatsAvailable,modal);
modal.addEventListener("click", ()=>{
    modal.classList.remove("active"); //Remove classlist of modal
});


