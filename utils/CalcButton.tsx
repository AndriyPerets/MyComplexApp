import {TouchableOpacity,Text, StyleSheet} from "react-native";
import React from "react";

interface CalcButtonProps {
    title: string;
    onPress: () => void;
}

export default function CalcButton(props:CalcButtonProps){
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#2196f3",
        borderWidth:1,
        borderColor:"#ddd",
        borderRadius:5,
        paddingVertical:12,
        width:45
    },
    buttonText:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center"
    }
})