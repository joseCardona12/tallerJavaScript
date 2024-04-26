const expressedRegulations = /[aeou]/;
const sentenceUser = "Taxi me puede llevar al hotel mariposas amarillas";

const replaceLetterWithI = (expressedRegulations,sentenceUser) =>{
    let sentenceUserNew = "";
    for(let i = 0; i<sentenceUser.length; i++){
        if(sentenceUser[i].match(expressedRegulations)){
            sentenceUserNew+= "i"
        }else{
            sentenceUserNew+=sentenceUser[i];
        }
    }

    return sentenceUserNew;
}

const caseFour = (expressedRegulations,sentenceUser) =>{
    console.log("***Caso 4***");
    const paragraph = document.getElementById("paragraphThree"); //Paragraph for change for the new sentence
    const sentenceUserTraduction = replaceLetterWithI(expressedRegulations,sentenceUser);
    paragraph.textContent = sentenceUserTraduction; //Change the value.

    console.log(`Traducción de la oración ${sentenceUser} a --->
    ${sentenceUserTraduction}`)
}
caseFour(expressedRegulations,sentenceUser);