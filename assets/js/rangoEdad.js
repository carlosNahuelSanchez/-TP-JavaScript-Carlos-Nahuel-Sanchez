let edad = prompt("Ingrese su edad")

if(edad>=0 && edad<=12){
    console.log("Usted es un niño")
}
else if (edad>=13 && edad<=19){
    console.log("Usted es un adolecente")
}
else if (edad>=20 && edad<=59){
    console.log("Usted es un adulto")
}
else if (edad>=60){
    console.log("Usted es un adulto mayor")
}