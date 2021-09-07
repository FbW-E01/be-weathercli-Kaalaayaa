import axios from "axios"
import process  from "process"

let city = process.argv[2]

axios
    .get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=48b9846e86558f4ae3b11d3a54cca594")
    .then((response) => {
        const tempC = response.data.main.temp - 273.15
        const tempF = (response.data.main.temp * 9) / 5 - 459.67
        const city = response.data.name
        const country = response.data.sys.country
        const condition = response.data.weather[0].description

        console.log("It is now " +tempC.toFixed(2)+ "°C / "+tempF.toFixed(2)+ "°F in " + city + ", " + country + ". The current weather conditions are: " + condition)
    })
    .catch(err => console.error("oh no couldn't find this city", err))

axios
    .get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=48b9846e86558f4ae3b11d3a54cca594")
    .then((response) => {
        

        console.log(response.data)
    })
    .catch(err => console.error("oh no couldn't find this city", err))