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


//******************* Variables globales ********************/
var calamaClimaArrChart = [];
var aricaClimaArrChart = [];
var iquiqueClimaArrChart = [];

var chartClimasArray = [];
var chartNamesArray = [];

var calamaName = [];
var aricaName = [];
var iquiqueName = [];



// ******************* FETCH DATA (clima actual ciudad +nombre ciudad) *******************
const calamaClima = async () => {

    const response = await fetch(calama)
    const objData = await response.json()

   const calamaClimaArr = await [Math.floor(objData.main.temp)]
   const name = await[objData.name]

    calamaClimaArrChart = calamaClimaArr
    calamaName = name
    // console.log(calamaClimaArr)
    // return calamaClimaArr
}

calamaClima()

const aricaClima = async () => {

    const response = await fetch(arica)
    const objData = await response.json()

    const aricaClimaArr = await [Math.floor(objData.main.temp)]
    const name = await[objData.name]
    // console.log(aricaClimaArr)
    // return aricaClimaArr
    aricaClimaArrChart = aricaClimaArr;
    aricaName = name
}

aricaClima()

const iquiqueClima = async () => {

    const response = await fetch(iquique)
    const objData = await response.json()

    const iquiqueClimaArr = await [Math.floor(objData.main.temp)]
    const name = await[objData.name]
//     console.log(iquiqueClimaArr)
//    return await iquiqueClimaArr

iquiqueClimaArrChart = iquiqueClimaArr;
iquiqueName = name


}

iquiqueClima()



// ******************* Crear nuevo Array con t°s y otro con nombres ciudades *******************
async function createTempArray() {
    await iquiqueClima()
    await aricaClima()
    await calamaClima()

    const climasArray = [...calamaClimaArrChart, ...aricaClimaArrChart, ...iquiqueClimaArrChart]
    chartClimasArray = climasArray

    const namesArray = [...calamaName, ...aricaName, ...iquiqueName]
    chartNamesArray = namesArray

    console.log(chartClimasArray)
    console.log(chartNamesArray)
    
}

createTempArray()




