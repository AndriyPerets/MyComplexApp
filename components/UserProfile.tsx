import {Image, StyleSheet, Text, View} from "react-native";

export interface User{
    id:number,
    photo:string,
    firstName:string,
    lastName:string,
    age:number
}

export default function userProfile ({photo, firstName, lastName, age}:User){
    return(
        <View style={styles.container}>
            <Image source={{uri:photo}} style={styles.photo}/>
            <Text style={styles.name}>{firstName} {lastName}</Text>
            <Text style={styles.age}>{age} years old</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        padding:16,
    },
    photo:{
        width:100,
        height:100,
        borderRadius:10,
        marginBottom:16,
    },
    name:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:8,
    },
    age:{
        fontSize: 18,
        color: "#666"
    }
})