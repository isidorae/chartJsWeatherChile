import { cityWheater } from './api.js';

async function createTempArray() {
    const calamaData = await cityWheater('calama');
    const santiagoData = await cityWheater('santiago');
    const iquiqueData = await cityWheater('iquique');
    const concepcionData = await cityWheater('concepcion');
    const talcaData = await cityWheater('talca');
    const puertomonttData = await cityWheater('puerto+montt');
    const valdiviaData = await cityWheater('valdivia');
    const temucoData = await cityWheater('temuco');
    const valpoData = await cityWheater('valparaiso');
    const vinaData = await cityWheater('vina+del+mar');

    const chartClimasArray = [
        ...calamaData.cityWheaterArr,
        ...santiagoData.cityWheaterArr,
        ...iquiqueData.cityWheaterArr,
        ...concepcionData.cityWheaterArr,
        ...talcaData.cityWheaterArr,
        ...puertomonttData.cityWheaterArr,
        ...valdiviaData.cityWheaterArr,
        ...temucoData.cityWheaterArr,
        ...valpoData.cityWheaterArr,
        ...vinaData.cityWheaterArr,
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
        ...valpoData.name,
        ...vinaData.name,
    ]


    let filterTempBaja = await chartClimasArray.map(element => {
        if (element < 10) {
            return element
        }
    })

    let filterTempMedia = await chartClimasArray.map(element => {
        if (element >= 10 && element < 20) {
            return element
        }
    })

    let filterTempAlta = await chartClimasArray.map(element => {
        if (element >= 20) {
            return element
        }
    })

    //*** chart

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartNamesArray,
            datasets: [{
                label: 'Temp Todas las Ciudades',
                data: chartClimasArray,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                ],

                borderColor: [
                    'rgba(255, 206, 86, 1)',
                ],

                borderWidth: 1
            },
            {
                label: 'Temp° Baja (<10°)',
                data: filterTempBaja,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],

                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],

                borderWidth: 1
            },
            {
                label: 'Temp° Media (10 a 19°)',
                data: filterTempMedia,
                backgroundColor: [
                    'rgba(47, 152, 72, 0.2)',
                ],

                borderColor: [
                    'rgba(47, 152, 72, 1)',
                ],

                borderWidth: 1
            },
            {
                label: 'Temp° Alta (>20°)',
                data: filterTempAlta,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    //'rgba(255, 206, 86, 0.2)',
                    //'rgba(54, 162, 235, 0.2)',
                ],

                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    //'rgba(255, 206, 86, 1)',
                    //'rgba(54, 162, 235, 1)',
                ],

                borderWidth: 1
            }

            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Temperaturas por Ciudad'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + '°';
                            }
                            return label;
                        }
                    }
                }
            },
        },
    });

}

createTempArray()

const fechaActual = new Date()
console.log(fechaActual)
document.getElementById('date-now').innerHTML = `
Actualizado al día de hoy:
<br>
<i>${fechaActual}</i>`