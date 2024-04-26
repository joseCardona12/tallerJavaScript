const payWorkObtain = localStorage.getItem("payWork"); //obtain pay work of localstorage
let payWorkToParseInt = parseInt(payWorkObtain);
const moneyTaxi = 300000;

const verifyOptionChooseTaxi = () =>{ //Function for verify option choose the Taxi
    const numberRandom = Math.floor(Math.random()*3);
    if(numberRandom === 0){
        return "Empatados. Ninguno de los dos paga!..";
    }

    if(numberRandom === 1){
        payWorkToParseInt-=moneyTaxi;
        localStorage.setItem("payWorkNew", payWorkToParseInt.toString()); //// Set payWorkToParseInt /Pay work to localstorage
        return`El taxista eligió papel. El gana!...
        Debes pagar un valor de ${moneyTaxi}.
        Tienes disponible ${payWorkToParseInt}`;
        
    }

    if(numberRandom === 2){
        return"El taxista perdió. Tu ganas!..."
    }

}
const optionChooseUserVerify = (element,optionChooseUser,modal,modalParagraph) =>{ //Function for verify option choose user
    if(optionChooseUser === 0){
        element.style.display = "none"; //Obtain element for change style -- display
        modal.classList.add("active");
        modalParagraph.innerHTML = "Elegiste piedra. La opción se ocultará!.";
        const optionChooseTaxiVerify = verifyOptionChooseTaxi();
        console.log(optionChooseTaxiVerify);
    }
    if(optionChooseUser === 1){
        element.style.display = "none";//Obtain element for change style -- display
        modal.classList.add("active");
        modalParagraph.innerHTML = "Elegiste papel. La opción se ocultará!.";
        const optionChooseTaxiVerify = verifyOptionChooseTaxi();
        console.log(optionChooseTaxiVerify);
    }
    if(optionChooseUser ===  2){
        element.style.display = "none";//Obtain element for change style -- display
        modal.classList.add("active");
        modalParagraph.innerHTML = "Elegiste tijeras. La opción se ocultará!.";
        const optionChooseTaxiVerify = verifyOptionChooseTaxi();
        console.log(optionChooseTaxiVerify);
    }

}
const caseFive = () =>{ //Function first 
    const options = document.querySelectorAll(".section-title");
    const modal = document.getElementById("main-modal");
    const modalParagraph = document.getElementById("modal-paragraph");
    options.forEach((element,index)=>{
        element.addEventListener("click", ()=>{
            const optionChooseUser = index;
            optionChooseUserVerify(element,optionChooseUser,modal,modalParagraph);
        })
    })
    modal.addEventListener("click", ()=>{ //Remove class with event click
        modal.classList.remove("active");
    })

}
const main = () =>{
    caseFive();
}

main();

