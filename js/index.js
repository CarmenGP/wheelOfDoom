const initialList = [];
const deletedList = [];


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
        renderList();
}
    function init () {
        initialList.push("camila", "sierri", "alesia", "carmen", "beatriz");
        renderLists()
    }
​
    function renderLists() {
        document.getElementById("list1").innerHTML = ""
        document.getElementById("list2").innerHTML = ""
        initialList.forEach(name => {
            const divName = document.createElement("div");
            divName.id = name;
            divName.innerText = name;
            divName.className = "names";
            document.getElementById("list1").append(divName);
        })
​
        deletedList.forEach(name => {
            const divName = document.createElement("div");
            divName.id = name;
            divName.innerText = name;
            divName.className = "names";
            document.getElementById("list2").append(divName);
        })
    }
​
    init();


/*




const players = document.getElementById('list1');

function addPlayer(){
    document.getElementById("list1").innerHTML ="";
    initialList.forEach(jugador =>{    
    players.innerHTML +=`
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

/*movimientopaisaje()

function activarBoton(){
    removeElementFromList();
    addPlayer();
    deletePlayer(); 
    
}

printList()
function init(){
    initialList.push("camila","bea","sandra")
    printList()
}
function printList() {
    document.getElementById("list1").innerHTML ="";
    document.getElementById("list2").innerHTML ="";
    initialList.forEach(name =>{
        let divName = document.createElement('div')
        divName.id = name
        divName.innerHTML = name
        document.getElementById("list1")append(divName)
    })
}
init()
*/
