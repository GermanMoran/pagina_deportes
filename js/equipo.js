//https://countrystatecity.in/docs/api/all-countries/


//const url = 'https://apiv2.allsportsapi.com/football/?met=Teams&teamId=4&APIkey=0d1b2d8720f8b84e3e21b3d77480dd5cf5c514afda600067292141e410d05e43'



//fetch(url)
//.then(response => response.json())
//.then(data => mostrarJugadores(data))
//.catch(error => console.log(error))


const mostrarJugadores = (data) => {
    console.log(data)
    console.log(data.result[0].players.length)
    pos = 0;
    let nuevoJugador = "";
    for(let i=0; i<data.result[pos].players.length; i++){
        nuevoJugador+=`<tr onclick="document.querySelector('#con').innerHTML='Holamundo'"><td>${data.result[pos].players[i].player_name}</td><td>${data.result[pos].players[i].player_age}</td><td>${data.result[pos].players[i].player_type}</td></tr>`
    }

    document.querySelector("#datos_jugadores").innerHTML=nuevoJugador;

}




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



// Equipo Seleccionado
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



Ligaseleccionada()


/**
 *     for(let i=0; i<data.result[0].players.length;i++){
        nuevoJugador+=`<tr><td>${data.player[i].index}</td><td>${data.player[i].player_name}</td><td>${player_age}</td></tr>`
    }

    document.querySelector("#datos_jugadores").innerHTML=nuevoJugador;
 */

