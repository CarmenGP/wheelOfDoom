const initialList = [];
const deletedList = [];
initialList.push("Camila", "Sierri", "Alesia", "Carmen", "Beatriz");
console.log(initialList);

function removeElementFromList() {
    const length = initialList.length;
    const elementToDelete = (Math.random() * length);
    const deleted = initialList.splice(elementToDelete, 1);
    deletedList.unshift(deleted[0])
    console.log(initialList)
    console.log(deletedList)
    console.log("-------------------------------------------------")
    if (length == 1) {
        document.getElementById("titulo").innerHTML= "Fin Del Juego";
        document.getElementById("boton").disabled = true;
        document.getElementById("nuevoJuego").disabled = false;        
        } 
}
const players = document.getElementById('list1');

function addPlayer(){
    document.getElementById("list1").innerHTML = "";
    /*players.innerHTML = ``;*/
    initialList.forEach(jugador =>{    
    players.innerHTML += `
        <div>${jugador}</div>`
    })
    
}



const removed = document.getElementById('list2');

function deletePlayer(jugadorEliminado){
    removed.innerHTML +=`
    <div>${jugadorEliminado}`

}

addPlayer()

deletePlayer(deletedList[0])

movimientopaisaje()

function activarBoton(){
    removeElementFromList();
    addPlayer();
    deletePlayer(); 
    eventoTransicionCss();   
}