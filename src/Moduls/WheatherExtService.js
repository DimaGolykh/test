const axios = require('axios');
const getWeatherServiceUrl = () => {return 'https://api.darksky.net/forecast';};
const getApiKey = () => {return 'f79522d053ece9ec8e3754744eff140d';}; //42.3601,-71.0589
const weatherUrl = getWeatherServiceUrl();
const apiKey = getApiKey();

const weather = (clientX, clientY, clientId) => {
    // console.log('query = ' + query);
    console.log('url = ' + weatherUrl + '/' + apiKey + '/' + clientX + ',' + clientY);
    const res = axios.get(weatherUrl + '/' + apiKey + '/' + clientX + ',' + clientY).then(response => response.data).catch(error => { console.log('caught', err.message)});
    console.log('res = ' + res);
    console.log(res);
    return res;
};

exports.weather = weather;