let nota1 = parseInt(prompt("Ingrese la primera nota"))
let nota2 = parseInt(prompt("Ingrese la segunda nota"))
let nota3 = parseInt(prompt("Ingrese la tercera nota"))

let promedio = parseInt((nota1 + nota2 + nota3)/ 3)

switch (true){
    case promedio == 1 || promedio <= 3:
        console.log ("Nota Insuficiente")
        break;
    case promedio == 4 || promedio == 5 :
        console.log ("Nota Regular")
        break;
    case promedio == 6 || promedio == 7:
        console.log ("Nota Buena")
        break;
    case promedio == 8 || promedio == 9:
        console.log ("Nota muy Buena")
        break;
    case promedio === 10:
        console.log ("Nota Sobresaliente")
        break;
    default:
        console.log("El valor ingresado no es válido")
}