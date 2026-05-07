// Const api_key usando backend para ocultar la clave de la API
/*
import dotenv from 'dotenv';
dotenv.config();

const api_key = process.env.API_KEY;
*/

// Usar la clave de la API para hacer una solicitud a OpenWeatherMap
const api_key = 'fec825c04b8ae3abcea44adf6e761f69';
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    const ciudad = document.getElementById('ciudadEntrada').value

    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ``

    const nombreCiudad = data.name
    const temperatura = (data.main.temp - difKelvin).toFixed(2)
    const descripcion = data.weather[0].description

    const cuidadTitulo = document.createElement('h2')
    cuidadTitulo.textContent = `Clima en ${nombreCiudad}`
    cuidadTitulo.style.color = '#ffffff'
    
    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `Temperatura: ${temperatura} °C`
    temperaturaInfo.style.color = '#ffffff'

    const descripcionInfo= document.createElement('p')
    descripcionInfo.textContent = `Descripción: ${descripcion}`
    descripcionInfo.style.color = '#ffffff'

    divDatosClima.appendChild(cuidadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
}