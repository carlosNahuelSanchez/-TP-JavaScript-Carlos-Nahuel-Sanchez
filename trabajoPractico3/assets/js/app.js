let listaTareas = []
let accionUsuario

do {
    accionUsuario = parseInt(prompt("Seleccione que quiere hacer 1-Agregar Tarea 2-Listar Tareas 3-Editar Tarea 4-Eliminar Tarea  5-Salir"))
    
    switch (accionUsuario) {
        case 1:
            
        break;
        case 2:

        break;
        case 3:
        
        break;
        case 4:
        
        break;
        case 5:
            alert("Usted ha salido")
        break;
        default:
            alert("Valor no valido")      
        break;
    }
} while (accionUsuario !== 5)
    