//Definición de variables principales
let listaTareas = [];
let accionUsuario;

// Definición de Funciones
function tareaAgr(tareaNew) {
    tareaNew = prompt("¿Qué tarea desea agregar?");
    if (tareaNew.trim() !== tareaNew) {
        alert("ERROR: Evita los espacios al inicio o al final de la tarea.");
    }
    else if (tareaNew === "" || tareaNew === null) {
        alert("ERROR: No puede ingresar un espacio vacío.");
    }
    else {
        listaTareas.push(tareaNew);
        alert("Se añadió " + tareaNew + " a su lista de tareas con éxito.");
    }
}

function tareaEdit(tareaAModificar, iTareaAModificar, tareaModificada) {
    tareaAModificar = prompt("¿Qué tarea desea modificar de la lista? \n" + listaTareas);
    iTareaAModificar = listaTareas.indexOf(tareaAModificar);
    if (iTareaAModificar === -1) {
        alert("ERROR: La tarea ingresada no existe.");
    }
    else {
        tareaModificada = prompt("¿Cuál será el nuevo nombre de la tarea seleccionada?");
        if (tareaModificada.trim() !== tareaModificada) {
            alert("ERROR: Evita los espacios al inicio o al final de la tarea.");
        }
        else if (tareaModificada === "" || tareaModificada === null) {
            alert("ERROR:: No puede ingresar un espacio vacío.");
        }
        else {
            listaTareas.splice(iTareaAModificar, 1, tareaModificada);
            alert("Se modificó correctamente la tarea.");
        }
    }
}

function tareaElim(tareaAEliminar, iTareaAEliminar) {
    tareaAEliminar = prompt("¿Qué tarea desea eliminar de la lista? \n" + listaTareas);
    iTareaAEliminar = listaTareas.indexOf(tareaAEliminar);
    if (iTareaAEliminar === -1) {
        alert("ERROR: La tarea ingresada no existe.");
    }
    else {
        listaTareas.splice(iTareaAEliminar, 1);
        alert("Se eliminó exitosamente la tarea.");
    }
}

//Bucle de interaccion del usuario
do {
    accionUsuario = parseFloat(prompt("Seleccione qué quiere hacer: \n1-Agregar Tarea \n2-Listar Tareas \n3-Editar Tarea \n4-Eliminar Tarea \n5-Salir"));

    switch (accionUsuario) {
        case 1:
            tareaAgr();
            break;
        case 2:
            alert("Sus tareas guardadas son: \n" + listaTareas);
            break;
        case 3:
            tareaEdit();
            break;
        case 4:
            tareaElim();
            break;
        case 5:
            alert("Usted salió del programa.");
            break;
        default:
            alert("ERROR: Valor no válido.");
            break;
    }
} while (accionUsuario !== 5);