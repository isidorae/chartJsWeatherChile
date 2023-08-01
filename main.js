import { calama,
arica,
iquique,
antofagasta,
concepcion,
valparaiso,
laSerena,
vinaMar,
santiago
} from './data.js'

// import { cityClima } from './function.js';


//******************* Variables globales ********************/
var calamaClimaArrChart = [];
var aricaClimaArrChart = [];
var iquiqueClimaArrChart = [];
var antofaClimaArrChart = [];
var conceClimaArrChart = [];
var valpClimaArrChart = [];

var calamaName = [];
var aricaName = [];
var iquiqueName = [];
var antofaName = [];
var conceName = [];
var valpName = [];

//**** Arrays clima y ciudades
var chartClimasArray = [];
var chartNamesArray = [];


// ******************* FETCH DATA (clima actual ciudad +nombre ciudad) *******************
const calamaClima = async () => {

    const response = await fetch(calama)
    const objData = await response.json()

   const climaArr = await [Math.floor(objData.main.temp)]
   const name = await[objData.name]

    calamaClimaArrChart = climaArr
    calamaName = name
  
}

calamaClima()

const aricaClima = async () => {

    const response = await fetch(arica)
    const objData = await response.json()

    const climaArr = await [Math.floor(objData.main.temp)]
    const name = await[objData.name]
 
    aricaClimaArrChart = climaArr;
    aricaName = name
}

aricaClima()

const iquiqueClima = async () => {

    const response = await fetch(iquique)
    const objData = await response.json()

    const climaArr = await [Math.floor(objData.main.temp)]
    const name = await[objData.name]

    iquiqueClimaArrChart = climaArr;
    iquiqueName = name


}

iquiqueClima()

const antofaClima = async () => {

    const response = await fetch(antofagasta)
    const objData = await response.json()

    const ClimaArr = await [Math.floor(objData.main.temp)]
    const name = await[objData.name]

    antofaClimaArrChart = ClimaArr;
    antofaName  = name


}

antofaClima()

const conceClima = async () => {

    const response = await fetch(concepcion)
    const objData = await response.json()

    const ClimaArr = await [Math.floor(objData.main.temp)]
    const name = await[objData.name]

    conceClimaArrChart = ClimaArr;
    conceName  = name


}

conceClima()

const valpClima = async () => {

    const response = await fetch(valparaiso)
    const objData = await response.json()

    const ClimaArr = await [Math.floor(objData.main.temp)]
    const name = await[objData.name]

    valpClimaArrChart = ClimaArr;
    valpName  = name


}

valpClima()

// async function fetchData() {

//     await cityClima(antofagasta, antofaClimaArrChart, antofaName)


// }

// fetchData()


// ******************* Crear nuevo Array con t°s y otro con nombres ciudades *******************
async function createTempArray() {
    await iquiqueClima()
    await aricaClima()
    await calamaClima()
    await antofaClima()
    await conceClima()
    await valpClima()

    const climasArray = [...calamaClimaArrChart, ...aricaClimaArrChart, ...iquiqueClimaArrChart, ...antofaClimaArrChart, ...conceClimaArrChart, ...valpClimaArrChart]
    chartClimasArray = climasArray

    const namesArray = [...calamaName, ...aricaName, ...iquiqueName, ...antofaName, ...conceName, ...valpName]
    chartNamesArray = namesArray

    console.log(chartClimasArray)
    console.log(chartNamesArray)
    
}

createTempArray()

//*******************  CHART JS ******************* 

async function tempChart() {

    //esperar a que obtengamos datos de API REST 
    await createTempArray()

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartNamesArray,
      datasets: [{
        label: 'Clima actual',
        data: chartClimasArray,
        borderWidth: 0.5
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}
tempChart()





