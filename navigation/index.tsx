import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome, Entypo} from "@expo/vector-icons";
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CalculatorScreen from "../screens/CalculatorScreen";
import WeatherScreen from "../screens/WeatherScreen";


const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}


function RootNavigator(){
    return(
        <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen
                name="MainScreen"
                component={BottomTabNavigator}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{title:"Profile"}}
            />
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{title:"Settings"}}
            />
            <Stack.Screen
                name="CalculatorScreen"
                component={CalculatorScreen}
                options={{title:"Calculator"}}
            />
            <Stack.Screen
                name="WeatherScreen"
                component={WeatherScreen}
                options={{title:"Weather"}}
            />
        </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator(){
    return(
        <BottomTab.Navigator initialRouteName="Main">
            <BottomTab.Screen
                name="Main"
                component={MainScreen}
                options={{
                    tabBarIcon:({color, size})=>
                        <FontAwesome
                            name="home"
                            size={size}
                            color={color}
                        />
                }}
            />
            <BottomTab.Screen
                name="Calculator"
                component={CalculatorScreen}
                options={{
                    tabBarIcon:({color, size})=>
                        <FontAwesome
                            name="home"
                            size={size}
                            color={color}
                        />
                }}
            />
            <BottomTab.Screen
                name="Weather"
                component={WeatherScreen}
                options={{
                    tabBarIcon:({color, size})=>
                        <FontAwesome
                            name="home"
                            size={size}
                            color={color}
                        />
                }}
            />
        </BottomTab.Navigator>
    )
}