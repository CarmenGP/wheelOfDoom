const initialList = [];
const deletedList = [];
initialList.push("camila", "sierri", "alesia", "carmen", "beatriz");
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

