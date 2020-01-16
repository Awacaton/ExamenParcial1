
function ObtenerForma(){
    let input = document.getElementById("input");
    let userComment = document.getElementById("userComment");
    let submit = document.getElementById("submit");
    let seccionComments = document.getElementById("seccionComments");

    submit.addEventListener("click", (event) => {
        
        event.preventDefault();

        if(input.value === "" ){
            console.log("No hay nada");
        } else if ( userComment === ""){
            console.log("entro");
        } else{
            let inputValue = input.value;
            let inputValueComment = input.value;
            seccionComments.innerHTML += "<div id=estilo><div/>"+inputValue;
            //seccionComments.innerHTML += "<div> <div/>"+inputValueComment;

        };
       
    });

   


}

function init (){

    ObtenerForma();
}

init();