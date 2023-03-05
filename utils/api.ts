import {WeatherData} from "../components/Weather";


export class WeatherError extends Error{
    constructor(message: string){
        super(message);
        this.name = "WeatherError";
    }
}

export async function fetchWeatherData(cityName:string, apiKey:string):Promise<WeatherData>{
    try{
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
        );
        const data = await response.json();
        return {
            temperature:data.current.temp_c,
            humidity:data.current.humidity,
            windSpeed:data.current.wind_kph,
            cityName:data.location.name,
        }
    }catch(error){
        throw new WeatherError((error as WeatherError).message)
    }
}