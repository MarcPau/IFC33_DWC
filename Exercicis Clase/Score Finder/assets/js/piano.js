var busquedanotas =[];
var resultado ="";




function Nota(nota,tipus){

    this.nota=nota;
    this.tipus=tipus;
}




function ADDCERCA(nota,tipus){
    busquedanotas.push(new Nota(nota,tipus));
   console.log(busquedanotas)

}


let partituras =[new Nota("Do","normal"),new Nota("Re","normal"),
    new Nota("Mi","normal"),new Nota("Fa","normal"),new Nota("Fa","normal"),
    new Nota("Sol","normal"),new Nota("Sol","normal"),new Nota("La","Sostenido"),new Nota("La","Sostenido")];

let partituras1 =[new Nota("Re","normal"),new Nota("Mi","normal"),
    new Nota("Fa","normal"),new Nota("Fa","normal"),new Nota("Fa","normal"),
    new Nota("Sol","normal"),new Nota("Sol","normal"),new Nota("La","Sostenido"),new Nota("La","Sostenido")];



function CERCADOR(array){


    let partituras =[new Nota("Do","normal"),new Nota("Re","normal"),
        new Nota("Mi","normal"),new Nota("Fa","normal"),new Nota("Fa","normal"),
        new Nota("Sol","normal"),new Nota("Sol","normal"),new Nota("La","Sostenido"),new Nota("La","Sostenido")];
    
    let partituras1 =[new Nota("Re","normal"),new Nota("Mi","normal"),
        new Nota("Fa","normal"),new Nota("Fa","normal"),new Nota("Fa","normal"),
        new Nota("Sol","normal"),new Nota("Sol","normal"),new Nota("La","Sostenido"),new Nota("La","Sostenido")];

    
    let listapartituras = [partituras,partituras1];

    let resultado ="";

    for (let index = 0; index < listapartituras.length; index++) {
        let numeronotas= 0;
        for (let i =0; i < listapartituras[index].length; i++){
            if (listapartituras[index][i].nota == array[numeronotas].nota && listapartituras[index][i].tipus == array[numeronotas].tipus) {
                
                numeronotas++;
                
            }else{
    
                numeronotas=0;
            }if (numeronotas==array.length) {
                
                switch (index) {
                    case 0:
                        resultado += "La Canción es la Balanguera\n";
                        break;
                    
                    case 1:
                        resultado += "La Canción es Sant Antoni ";
                        break;
                }
                break;
            }
        }   
    }   

    console.log(resultado);
}

ADDCERCA("Re","normal")
ADDCERCA("Mi","normal")
ADDCERCA("Fa","normal")

CERCADOR(busquedanotas)