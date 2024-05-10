let cantArt = parseInt(prompt("Cuantos productos lleva"))
let precTotal = parseInt(prompt("Cuanto es el precio total"))
let precDesc = parseInt(precTotal - (precTotal * 0.15))

if(precTotal < 1 || cantArt < 1 || isNaN(precTotal) || isNaN(cantArt) ){
    alert ("Sus valores no son válidos")
}
else if(cantArt >= 10 && precTotal >= 20000){
    alert("Su precio total es " + precDesc)
}
else{
    alert("Su precio total es " + precTotal)
}



