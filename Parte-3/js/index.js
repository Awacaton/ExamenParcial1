
function ObtenerForma(){
    let input = document.getElementById("input");
    let userComment = document.getElementById("userComment");
    let submit = document.getElementById("submit");

    submit.addEventListener("click", (event) => {
        
        event.preventDefault();

        if(input.value === "" ){
            console.log("No hay nada");
        } else if ( userComment === ""){
            console.log("entro");
        } else{
            input.value.innerHTML += 
            userComment.value() +=

        };
       
    });

   


}

function init (){

    ObtenerForma();
}

init();