const initialList = [];
const deletedList = [];
document.getElementById("boton").disabled = true;

function agregarjugadores(){
    const input = document.getElementById("nombre")
    initialList.push(input.value)
    document.getElementById ("nombre").value= "";
    document.getElementById("boton").disabled = false;
    renderList();
}

function removeElementFromList() {
    const length = initialList.length;
    const elementToDelete = (Math.random() * length);
    const deleted = initialList.splice(elementToDelete, 1);
    deletedList.unshift(deleted[0])
    if (length == 1) {
        document.getElementById("titulo").innerHTML= "Fin del Juego";
        document.getElementById("boton").disabled = true;
        document.getElementById("nuevoJuego").disabled = false;       
        } 
        renderList();
}
    function renderList() {
        document.getElementById("list1").innerHTML = ""
        document.getElementById("list2").innerHTML = ""
        initialList.forEach(name => {
            const divName = document.createElement("div");
            divName.id = name;
            divName.innerText = name;
            divName.className = "names";
            document.getElementById("list1").append(divName);
        })
        deletedList.forEach(name => {
            const divName = document.createElement("div");
            divName.id = name;
            divName.innerText = name;
            divName.className = "names";
            document.getElementById("list2").append(divName);
        })
    }

    const playSound = function() {
        document.getElementById('sonidolaser').play();
        document.removeEventListener('click', playSound);
    }
    document.addEventListener('click', playSound);

