//Obtain the id the document HTML
const boxParagraph = document.querySelectorAll(".first-link");
const mainModal = document.getElementById("main-modal");
const modalParagraph = document.getElementById("modal-paragraph");

//Runs boxparagraph and obtain every element box - case 1-2-3-4-5-6-7. Also redirect the fill
boxParagraph.forEach(paragraph=>{
    paragraph.addEventListener("click", ()=>{
        mainModal.classList.toggle("active");
        if(paragraph.innerHTML === "Caso 1"){
            modalParagraph.innerHTML = "Seleccionaste el caso 1...";
            setTimeout(()=>{
                window.location.href = "/taller-5-js/views/caseOne.html";
            }, 500)
            return;
        }
        if(paragraph.innerHTML === "Caso 2"){
            modalParagraph.innerHTML = "Seleccionaste el caso 2...";
            setTimeout(()=>{
                window.location.href = "/taller-5-js/views/caseTwo.html";
            }, 500)
            return;
        } 
        if(paragraph.innerHTML === "Caso 3"){
            modalParagraph.innerHTML = "Seleccionaste el caso 3...";
            setTimeout(()=>{
                window.location.href = "/taller-5-js/views/caseThree.html";
            }, 500)
            return;
        } 
        if(paragraph.innerHTML === "Caso 4"){
            modalParagraph.innerHTML = "Seleccionaste el caso 4...";
            setTimeout(()=>{
                window.location.href = "/taller-5-js/views/caseFour.html";
            }, 500)
            return;
        } 
        if(paragraph.innerHTML === "Caso 5"){
            modalParagraph.innerHTML = "Seleccionaste el caso 5...";
            setTimeout(()=>{
                window.location.href = "/taller-5-js/views/caseFive.html";
            }, 500)
            return
        } 
        if(paragraph.innerHTML === "Caso 6"){
            modalParagraph.innerHTML = "Seleccionaste el caso 6...";
            setTimeout(()=>{
                window.location.href = "/taller-5-js/views/caseSix.html";
            }, 500)
            return;
        } 
    })
})
