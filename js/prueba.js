
// Funcion para mostrar lod jugadores dentro de la tabla
const mostrarJugadores = (data) => {
    console.log(data)
    console.log(data.result[0].players.length)
    pos = 0;
    let nuevoJugador = "";
    for(let i=0; i<data.result[pos].players.length; i++){
        nuevoJugador+=`<tr><td>${data.result[pos].players[i].player_name}</td><td>${data.result[pos].players[i].player_age}</td><td>${data.result[pos].players[i].player_type}</td></tr>`
    }

    document.querySelector("#datos_jugadores").innerHTML=nuevoJugador;

}

// Funcion para buscar el equipo de acuerdo a IDeQUIPO 
const buccarLiga = (Id_liga) => {
    const url = `https://apiv2.allsportsapi.com/football/?met=Teams&teamId=${Id_liga}&APIkey=0d1b2d8720f8b84e3e21b3d77480dd5cf5c514afda600067292141e410d05e43`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        InformacionEquipo(data);
        mostrarJugadores(data);
        
        //console.log(data.result[0].team_name);
    })   
    .catch(error => console.log(error))
}


// Funcion para obtener Informacion del equipo
const InformacionEquipo = (data) => {
    console.log(data)
    pos = 0;
    var EquipoSele = `
    <div class="card" style="width: 18rem;">
        <img src="${data.result[pos].team_logo}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.result[pos].team_name}</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Numero Jugadores: ${data.result[pos].players.length}</li>
            <li class="list-group-item">Coach: ${data.result[pos].coaches[pos].coach_name}</li>
            </ul>
            
            </div>
    </div>`;
 

    document.querySelector("#mostrarE").innerHTML=EquipoSele;
}



// Funcion para definir el equipo que se ha seleccionado
const  Ligaseleccionada = () => {
    // Obtenemos la identificacion del elemento
    let item_Equipo = document.querySelector('#sel_Equipo');
    const indice = item_Equipo.selectedIndex;
    if(indice === -1) return;                               //Esto es cuando no hay elementos
    const opcionSeleccionada = item_Equipo.options[indice];
    console.log(opcionSeleccionada.value)
    let valor = parseInt(opcionSeleccionada.value)
    console.log(typeof(valor))

    // Se llama a la funcion Buscar Liga
    buccarLiga(valor)
    return valor; 
}


/**
 *   se ejecuta la primera Funcion
*/

Ligaseleccionada()

let table_jugadores = document.getElementById("table1")
table_jugadores.addEventListener("click", getData);

function getData(){
    let tds = event.path[1].children
    let datos = []
    for (let i = 0; i < tds.length; i++) {
        datos.push(tds[i].innerText)
    }
    nJugador = datos[0];
    console.log(datos[0]);
    // Esta Funcion permite buscar el jugador deacuerdo a su nombre
    buscarJugador(nJugador)
   
}



const buscarJugador = (nJugador) => {
    // Extraiemos el equipos al que pertenece el jugador segun el item select
    valor_select = document.querySelector('#sel_Equipo');
    const valorI = parseInt(valor_select.value);
    console.log(valorI);
    const url = `https://apiv2.allsportsapi.com/football/?met=Teams&teamId=${valorI}&APIkey=0d1b2d8720f8b84e3e21b3d77480dd5cf5c514afda600067292141e410d05e43`
    fetch(url)
    .then(response => response.json())
    .then(data => {
 
        console.log(data.result[0].players.length)
        const array_jugadores = data.result[0].players;
        console.log(array_jugadores)
  
        const Jug = array_jugadores.find(element => {
        return element.player_name == nJugador;
        
        });
        console.log(Jug);

        
        var JugadorSele = `
        <div class="card text-center aling-items-center" style="width: 18rem;">
            <img src="${Jug.player_image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${Jug.player_name}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Age: ${Jug.player_age}</li>
                <li class="list-group-item">T-shirt number: ${Jug.player_number}</li>
                <li class="list-group-item">Positon: ${Jug.player_type}</li>
                <li class="list-group-item">Number of Goals: ${Jug.player_goals}</li>
                </ul>
                </div>
        </div>`;
    

        document.querySelector("#con").innerHTML=JugadorSele;
          
    })
    

}

