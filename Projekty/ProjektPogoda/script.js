const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

// https://openweathermap.org/
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL

const API_LINK = 'https://api.openweathermap.org/data/2.5/forecast?q=';
const API_KEY='&appid=092ef35cd8493d447db75bab312af188';
const API_UNITS='&units=metric';
const API_LANG='&lang-pl';








const getWe = () => {
    const city = input.value || 'Pcim'
    const URL=API_LINK+city+API_KEY+API_UNITS
    axios.get(URL).then(res => {
         console.log(res.data.list[39].main.temp)  // sprawdzamy co tam jest 
         console.log(res.data.list[39].dt_txt)  // sprawdzamy co tam jest 
        console.log(res.data);
        //  const temp = res.data.main.temp
         const humi = res.data.list[39].main.humidity
        //  // dane z HTML !
        
        //let d = list.keys()
        //for(let i =0; i<40 ; i++){
        //    d = d + i;
        //}
        const list = (res.data.list[0]);
        list.forEach(element =>console.log(element));
        
        

        //const iterator = list.keys();
        //for (const key of iterator) {
        //console.log(`${key}: ${list[key]}`);

        
        

         cityName.textContent = res.data.city.name
         temperature.textContent = (res.data.list[0].main.temp) + ' C';
         temperature.textContent = Math.floor((res.data.list[0].main.temp)) + '°C';
        humidity.textContent = humi+' %'
        //  //  sprawdzamy id ikonki
        console.log(res.data.list[39].weather.id);
        //weather.textContent = (res.data.list[39].weather[0].main);
        weather.textContent = (res.data.list[0].dt_txt);
         
        
    })

}


// Uwaga : sprawdzamy czy jest axios lub pobierz axios !

getWe()
button.addEventListener('click', getWe);
