import {View, StyleSheet} from "react-native";
import {StackHeaderProps} from "@react-navigation/stack";
import UserProfile, {User} from "../components/UserProfile"

export const user = {
    id: 1,
    photo: 'https://microbewiki.kenyon.edu/images/thumb/9/98/PuppyDogEyes.jpg/200px-PuppyDogEyes.jpg',
    firstName: 'Andy',
    lastName: 'Hilton',
    age: 35,
};
// export default function ProfileScreen({ route }: NativeStackHeaderProps) {
export default function ProfileScreen({}: StackHeaderProps) {

    // const {user} = route.params as { user: User };


    return(
        <View style={styles.container}>
            <UserProfile{...user}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent:"center"
    }
});