//https://countrystatecity.in/docs/api/all-countries/


const url = 'https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=0d1b2d8720f8b84e3e21b3d77480dd5cf5c514afda600067292141e410d05e43'



fetch(url)
.then(response => response.json())
.then(data => {
    
    /**
     * Debido a que la API tiene mucha informacion se selecionan los paises mas importantes a nievl deportivo
     * España: 3
     * Alemania 4
     * Italia:5
     * Francia:6
     * Argentina:14
     * Inglaterra:44
     * Portugal:92
     * Holanda:82
     * Brazil:27
     * Colombia:34
     * 
     */
    paises = ["3","4","5","6","14","27","44","82","92"]
    console.log(paises[0])
    console.log(data.result)
    console.log(data.result[0].country_key)
    console.log(data.result.length)

    for(let i=0; i<data.result.length; i++){
        //console.log(data.result[i].country_key)
        if (data.result[i].country_key == paises[0] || data.result[i].country_key == paises[1] || data.result[i].country_key == paises[2]||
            data.result[i].country_key == paises[3] || data.result[i].country_key == paises[4] || data.result[i].country_key == paises[5]||
            data.result[i].country_key == paises[6] || data.result[i].country_key == paises[7] || data.result[i].country_key == paises[8]){
            
            var contenido=`
            <div class="col">
            <div class="card">
            <img src="${data.result[i].country_logo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.result[i].country_name}</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Mas</a>
            </div>
            </div>
            </div>
            `
            $('#pintar').append(contenido) 
        }
    }

})




