let listaTareas = []
let accionUsuario

function tareaAgr(tareaNew) {
    tareaNew = prompt("¿Que tarea desea agregar?")
    listaTareas.push(tareaNew)
    alert("Se añadio " + tareaNew + " a su lista de tareas con exito")
}

function tareaEdit(tareaAModificar, iTareaAModificar, tareaModificada) {
    tareaAModificar = prompt("¿Que tarea desea modificar de la lista? " + listaTareas)
    iTareaAModificar = listaTareas.indexOf(tareaAModificar)
    tareaModificada = prompt("¿Cual sera el nuevo nombre de la tarea seleccionada?")
    listaTareas.splice(iTareaAModificar, 1, tareaModificada)
    alert("Se modifico correctamente la tarea")
}

function tareaElim(tareaAEliminar, iTareaAEliminar) {
    tareaAEliminar = prompt("¿Que tarea desea eliminar de la lista? " + listaTareas)
    iTareaAEliminar = listaTareas.indexOf(tareaAEliminar)
    listaTareas.splice(iTareaAEliminar, 1)
    alert("Se elimino exitosamente la tarea")
}

do {
    accionUsuario = parseInt(prompt("Seleccione que quiere hacer 1-Agregar Tarea 2-Listar Tareas 3-Editar Tarea 4-Eliminar Tarea  5-Salir"))
    
    switch (accionUsuario) {
        case 1:
            tareaAgr()
        break;
        case 2:
            alert("Sus tareas guardadas son: " + listaTareas)
        break;
        case 3:
            tareaEdit()
        break;
        case 4:
            tareaElim()
        break;
        case 5:
            alert("Usted ha salido")
        break;
        default:
            alert("Valor no valido")      
        break;
    }
} while (accionUsuario !== 5)


    