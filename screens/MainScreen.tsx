import {StackHeaderProps} from "@react-navigation/stack";
import {Button, StyleSheet, View} from "react-native";
import ProfileScreen, {user} from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import WeatherScreen from "./WeatherScreen";


export default function MainScreen({navigation}:StackHeaderProps){

    // const user = {
    //     id: 1,
    //     photo: 'https://microbewiki.kenyon.edu/images/thumb/9/98/PuppyDogEyes.jpg/200px-PuppyDogEyes.jpg',
    //     firstName: 'Andy',
    //     lastName: 'Hilton',
    //     age: 35,
    // };

    return(
        <View style={styles.container}>
            <Button
                title="Profile"
                onPress={() => navigation.navigate('ProfileScreen', {user})}
            />
            <Button
                title="Settings"
                onPress={() => navigation.navigate('SettingsScreen')}
            />
            <Button
                title="Calculator"
                onPress={() => navigation.navigate('CalculatorScreen')}
            />
            <Button
                title="Weather"
                onPress={() => navigation.navigate('WeatherScreen')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});