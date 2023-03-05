import {QueryClient, QueryClientProvider} from "react-query";
import {SafeAreaView} from "react-native";
import Weather from "../components/Weather";


const queryClient = new QueryClient();

export default function WeatherScreen(){
    return(
        <QueryClientProvider client={queryClient}>
            <SafeAreaView>
                <Weather/>
            </SafeAreaView>
        </QueryClientProvider>
    );
}