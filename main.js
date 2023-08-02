import { cityWheater } from './api.js';
/**
 *  ********* Dashboard ********* 
 * 
 *  1.- Realiza una petición a la API de OpenWeatherMap para obtener el clima de las ciudades de Chile.
 *  2.- Crea un nuevo array con las temperaturas de las ciudades.
 *  3.- Crea un nuevo array con los nombres de las ciudades.
 *  4.- Retorna un objeto con los dos arrays nuevos.
 *  5.- Crea un gráfico de barras con Chart.js con los datos obtenidos.
 *  
 */



// ******************* Crear nuevo Array con t°s y otro con nombres ciudades *******************
async function createTempArray() {
    const calamaData = await cityWheater('calama');
    const santiagoData = await cityWheater('santiago');
    const iquiqueData = await cityWheater('iquique');
    const concepcionData = await cityWheater('concepcion');
    const talcaData = await cityWheater('talca');
    const puertomonttData = await cityWheater('puerto montt');
    const valdiviaData = await cityWheater('valdivia');
    const temucoData = await cityWheater('temuco');
    

    const chartClimasArray = [
        ...calamaData.cityWheaterArr,
        ...santiagoData.cityWheaterArr,
        ...iquiqueData.cityWheaterArr,
        ...concepcionData.cityWheaterArr,
        ...talcaData.cityWheaterArr,
        ...puertomonttData.cityWheaterArr,
        ...valdiviaData.cityWheaterArr,
        ...temucoData.cityWheaterArr,
    ]
    

    const chartNamesArray = [
        ...calamaData.name,
        ...santiagoData.name,
        ...iquiqueData.name,
        ...concepcionData.name,
        ...talcaData.name,
        ...puertomonttData.name,
        ...valdiviaData.name,
        ...temucoData.name,
    ]

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartNamesArray,
            datasets: [{
                label: 'Temperatura',
                data: chartClimasArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],

                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                ],

                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Grafico de Ciudades'
              }
            },
          },
    });
    
}

createTempArray()