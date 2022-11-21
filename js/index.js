const initialList = [];
const deletedList = [];
function removeElementFromList() {
    const length = initialList.length;
    const elementToDelete = (Math.random() * length);
    const deleted = initialList.splice(elementToDelete, 1);
    deletedList.unshift(deleted[0])
    if (length == 1) {
        document.getElementById("titulo").innerHTML= "Fin Del Juego";
        document.getElementById("boton").disabled = true;
        document.getElementById("nuevoJuego").disabled = false;        
        } 
        renderList();
}
    function init () {
        initialList.push("Adriana","Alba","Alesia","Ana","Bea","Camila","CarmenC","CarmenG","Elena","Esther","Flor","Himo","Leidy","LolaG","LoalaN","Sierri","Natalia","Noa","PalomaB","PalomaR","Paula","Raquel","Sandra","VeroF","VeroK");
        renderList()
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
    init();


