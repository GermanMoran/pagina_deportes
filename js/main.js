const url = 'https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=0d1b2d8720f8b84e3e21b3d77480dd5cf5c514afda600067292141e410d05e43'

const  img2 = document.querySelector('#estadios');

fetch(url)
.then(response => response.json())
.then(data => {
    

    for (let i=0; i<10; i++){
        //console.log(data.result[i])
        var contenido=`
        <div class="card" style="width: 18rem;">
            <img src="${data.result[i].league_logo}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${data.result[i].league_name}</p>
            </div>
            <a class="btn btn-primary" href="#" role="button">Mas</a>
        </div>
        `
    
        $('#pintar').append(contenido) 
    }
   
})



// Defino el arreglo donde estan alamacenadas todas las imagenes que mediante el uso de Java Script se realiza las interaccioens
const imgCarrusel = ['img/wp1.jpg','img/wp2.jpg','img/wp3.jpg','img/wp4.jpg','img/wp5.jpg','img/wp6.jpg']

// Contadores para controlar  cuando las imagenes van adelante o atras en el carrusel de imagenes
cont = 0;
cont1 = 0;

// Variables donde se van a colocar  el carrusel de imagenes mediante Java Script 

let contenedorCarrusel = document.querySelector('.carrusel');
let atras = document.querySelector('.atras');
let adelante = document.querySelector('.adelante');
let imagenCarrusel = document.querySelector('.carrusel_image');



// Este bloque de codigo permite  mostrar imagenes , deacuerdo al evento click
// Si se digita el boton atras  se ejecuta la funcion
atras.addEventListener('click', () => {
    //console.log("Funciono atras")
    if (cont > 0){
     imagenCarrusel.src = imgCarrusel[cont-1];
     cont = cont-1
     console.log(cont)
    }
    else{
      imagenCarrusel.src = imgCarrusel[imgCarrusel.length-1];
      cont = imgCarrusel.length -1;
    }
    
  });
  
  
  // Este bloque permite mostar imagenes, deacuero al evento click
  // si se digita el boton adelante se ejecuta la funcion 
  adelante.addEventListener('click', () => {
    //console.log("Funciono adelante")
  
    if (cont1 < imgCarrusel.length-1){
     imagenCarrusel.src = imgCarrusel[cont1+1];
     cont1 = cont1+1
     console.log(cont1)
    }
    else{
      imagenCarrusel.src = imgCarrusel[0];
      cont1 = 0;
    }
     
  });