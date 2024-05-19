let listaTareas = [];
let accionUsuario;

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
    tareaAModificar = prompt("¿Qué tarea desea modificar de la lista? " + listaTareas);
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
    tareaAEliminar = prompt("¿Qué tarea desea eliminar de la lista? " + listaTareas);
    iTareaAEliminar = listaTareas.indexOf(tareaAEliminar);
    if (iTareaAEliminar === -1) {
        alert("ERROR: La tarea ingresada no existe.");
    }
    else {
        listaTareas.splice(iTareaAEliminar, 1);
        alert("Se eliminó exitosamente la tarea.");
    }
}

do {
    accionUsuario = parseInt(prompt("Seleccione qué quiere hacer: 1-Agregar Tarea 2-Listar Tareas 3-Editar Tarea 4-Eliminar Tarea 5-Salir"));

    switch (accionUsuario) {
        case 1:
            tareaAgr();
            break;
        case 2:
            alert("Sus tareas guardadas son: " + listaTareas);
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