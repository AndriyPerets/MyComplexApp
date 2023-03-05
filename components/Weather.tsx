import {View,StyleSheet, Button, Text, TextInput} from "react-native";
import {useEffect, useRef, useState} from "react";
import {fetchWeatherData, WeatherError} from "../utils/api";



// интерфейс для типа данных, содержащих погодную информацию
export interface WeatherData{
    temperature:number;
    humidity:number;
    windSpeed:number;
    cityName:string;
};

const defaultCityName = "London";

export default function Weather(){
    // хук состояния для имени города, введенного пользователем
    const [cityName, setCityName] = useState(defaultCityName)
    // хук состояния для информации о погоде
    const [weatherData, setWeatherData] = useState<WeatherData|null>(null)
    // хук состояния для ошибки, которая может возникнуть при получении данных о погоде
    const [errorMessage, setErrorMessage] = useState<string|null>(null)
    //хук для хранения TextInput для фокусировки при нажатии кнопки
    const inputRef = useRef<TextInput>(null)
    // функция изменения имени города вручную
    const handleCityNameChange = (value:string) =>{
        setCityName(value)
    };
    // функция нажатия на кнопку "Check Forecast"
    const handleCheckForecastClick = async ()=>{
        try {
            // получение данных о погоде
            const data = await fetchWeatherData(
                cityName,
                "f41ec08d60a84999880103744230203"
            );
            setWeatherData(data); // сохранение данных о погоде
            setCityName(""); // сброс значения имени города
            setErrorMessage(null); // сброс ошибки
            inputRef.current?.focus(); // сделать инпут активным
        }catch (error){
            if(error instanceof WeatherError){
                setErrorMessage(error.message); // сохранение сообщения об ошибке
            }else {
                setErrorMessage("Unknown"); // установка значения для неизвестной ошибки
            }
        }
    };
    //функция нажатия кнопки "Check Forecast" при первой загрузке
    useEffect(()=>{
        handleCheckForecastClick();
    },[]);

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={cityName}
                    onChangeText={handleCityNameChange} //когда пользователь вводит текст, обновляем состояние с помощью функции handleCityNameChange
                    placeholder={"enter city name"}
                    autoFocus={true} //активный инпут
                    ref={inputRef} // сохраняем ссылку на элемент TextInput
                    onSubmitEditing={handleCheckForecastClick} // вызываем функцию handleCheckForecastClick при нажатии на клавишу "Enter"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Check Forecast'
                    onPress={handleCheckForecastClick} //когда пользователь нажимает на кнопку, запускаем функцию handleCheckForecastClick
                />
            </View>
            {errorMessage && <Text>{errorMessage}</Text>}
            <View style={styles.weatherContainer}>
                {weatherData && (
                    <Text>
                        Temperature:{weatherData.temperature} °C{"\n"}
                        Humidity:{weatherData.humidity} %{"\n"}
                        Wind Speed:{weatherData.windSpeed} km/h{"\n"}
                        City Name:{weatherData.cityName}
                    </Text>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        marginTop:200,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        alignSelf:"center",
        padding: 10,
        borderWidth: 1,
        borderRadius:5,
        margin: 10,
    },
    buttonContainer: {
        alignSelf:"center",
        margin: 10,
    },
    weatherContainer: {
        alignSelf:"center",
        borderWidth: 1,
        borderRadius:5,
        margin: 10,
        padding:10,
    },
});