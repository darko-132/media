var checkpro= document.getElementById("promedio");
var checkmedia= document.getElementById("media")
var checkmoda= document.getElementById("moda")

function promedio(){
   //Trae el array del input
   var datos= document.getElementById("datos").value; //valor del input
   var divi= datos.split(','); //separa el string en array
   var splitter =divi.length;  // cuenta el los valores el array 
   //Trae el array del input
    var resPromedio = document.getElementById("resPromedio");
    var inputProm= document.getElementById("inputProm")
    //sacar promedio
    if (checkpro.checked===true){
        inputProm.style.visibility = 'visible';
        let total = divi.reduce((a, b) => a*1 + b*1, 0);
        let prome =total/splitter;
        resPromedio.value =prome;
    }else{
        inputProm.style.visibility = 'hidden';
    }
}

function media(){
    //Trae el array del input
    var datos= document.getElementById("datos").value; //valor del input
    var divi= datos.split(','); //separa el string en array
    var splitter =divi.length;  // cuenta el los valores el array 
    //Trae el array del input
    var inputMedia = document.getElementById("inputMediana")
    var resMediana = document.getElementById("resMediana")
    var ordenMedia = document.getElementById("ordenMedia")
    //sacar media
    if (checkmedia.checked===true){
        inputMedia.style.visibility = 'visible';
        let nuevoOrden = divi.sort((a, b) => a - b);
        let valor1 = Math.floor(splitter/2);
        if(splitter % 2 ===0 /* sea par */){
        let position1 = parseInt(nuevoOrden[valor1]);
        let position2 = parseInt(nuevoOrden[valor1-1]);
        let media = (position1+position2)/2
        ordenMedia.value = nuevoOrden;
        resMediana.value= media;
        console.log(position1, position2)
        }
        // en caso de que sea impar
    else{
            ordenMedia.value = nuevoOrden;
            postion = nuevoOrden[valor1];
            resMediana.value= postion;
        }
    }else{
        inputMediana.style.visibility = 'hidden';
    }    

}
function moda(){
    //Trae el array del input
    var datos= document.getElementById("datos").value; //valor del input
    var divi= datos.split(','); //separa el string en array
    var splitter =divi.length;  // cuenta el los valores el array 
    //Trae el array del input
    var inputMediana= document.getElementById("inputModa")
    if (checkmoda.checked===true){
        const lista1Count = {};
        
        divi.map(
            function(elemento){
                if(lista1Count[elemento]){
                lista1Count[elemento]+=1;
                }else{
                lista1Count[elemento]=1
                }
            }
        )
        let nuevoOrden = Object.entries(lista1Count).sort((a, b) => a[1] - b[1]);
        let moda = nuevoOrden[nuevoOrden.length -1]
        console.log(moda)
            console.log(nuevoOrden)
        document.getElementById("resModa").value=`${moda[0]} se repite ${moda[1]} `
        inputModa.style.visibility = 'visible';
    }else{
        inputModa.style.visibility = 'hidden';
    }    

}
function calculo(){
    promedio()
    media()
    moda()
}

