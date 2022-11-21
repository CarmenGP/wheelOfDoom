const initialList = [];
const deletedList = [];


function removeElementFromList() {
    const length = initialList.length;
    const elementToDelete = (Math.random() * length);
    const deleted = initialList.splice(elementToDelete, 1);
    deletedList.unshift(deleted[0])
    /* console.log(initialList)
    console.log(deletedList) */
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


