// Const api_key usando backend para ocultar la clave de la API
import dotenv from 'dotenv';
dotenv.config();

const api_key = process.env.API_KEY;


// Usar la clave de la API para hacer una solicitud a OpenWeatherMap
//const api_key = 'fec825c04b8ae3abcea44adf6e761f69';
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    const ciudad = document.getElementById('ciudadEntrada').value

    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){

}


fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => console.log(response))

