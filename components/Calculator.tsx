import {Text, View, StyleSheet, TextInput} from "react-native";
import CalcButton from "../utils/CalcButton";
import {useState} from "react";


export default function Calculator(){
    const[num1, setNum1] = useState<string>(" ");
    const[num2, setNum2] = useState<string>(" ");
    const [res, setRes] = useState<number|undefined>(undefined);
    const [selectedOperation, setSelectedOperation] = useState<string|undefined>(undefined)

    const addNum1 = (value:string)=>{
        if(!selectedOperation) {
            setNum1((prevNum)=>{
                if(value==="." && !prevNum.includes(".")){
                    return prevNum+".";
                }else {
                    return prevNum+value;
                }
            });
        }else {
            setNum2((prevNum)=>{
                if(value==="." && !prevNum.includes(".")){
                    return prevNum+".";
                }else{
                    return prevNum+value;
                }
            });
        }
        setRes(undefined)
    }

    const add = ()=>{
        setRes(parseFloat(num1)+parseFloat(num2))
        setSelectedOperation("+")
    }

    const subtract = ()=>{
        setRes(parseFloat(num1)-parseFloat(num2))
        setSelectedOperation("-")
    }

    const multiply = ()=>{
        setRes(parseFloat(num1)*parseFloat(num2))
        setSelectedOperation("*")
    }

    const divide = ()=>{
        setRes(parseFloat(num1)/parseFloat(num2))
        setSelectedOperation("/")
    }

    const clear = ()=>{
        setNum1(" ")
        setNum2(" ")
        setRes(undefined)
        setSelectedOperation(undefined)
    }

    const deleteInt = ()=>{
        setNum2(" ")
        setRes(undefined)
    }

    const equal = ()=>{
        switch (selectedOperation){
            case "+":
                setRes(parseFloat(num1)+parseFloat(num2));
                break;
            case "-":
                setRes(parseFloat(num1)-parseFloat(num2));
                break;
            case "*":
                setRes(parseFloat(num1)*parseFloat(num2));
                break;
            case "/":
                setRes(parseFloat(num1)/parseFloat(num2));
                break;
            default:
                setRes(undefined);
        }
    }

    const log = () => {
        if (!selectedOperation) {
            setRes(Math.log(parseFloat(num1)));
        }
    }


    const toggleSign = ()=>{
        if(!selectedOperation){
            setNum1((-num1).toString())
        }else {
            setNum2((-num2).toString())
        }
    }

    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.input}>{!isNaN(res as number) ? res : ''}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNum1}
                    value={num1}
                />
                <Text style={styles.input}>{selectedOperation}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNum2}
                    value={num2}
                />
            </View>
            <View style={styles.buttons}>
                <View style={styles.row}>
                    <CalcButton title={"1"} onPress={()=>addNum1("1")}/>
                    <CalcButton title={"2"} onPress={()=>addNum1("2")}/>
                    <CalcButton title={"3"} onPress={()=>addNum1("3")}/>
                    <CalcButton title={"4"} onPress={()=>addNum1("4")}/>
                    <CalcButton title={"+"} onPress={add}/>
                </View>
                <View style={styles.row}>
                    <CalcButton title={"5"} onPress={()=>addNum1("5")}/>
                    <CalcButton title={"6"} onPress={()=>addNum1("6")}/>
                    <CalcButton title={"7"} onPress={()=>addNum1("7")}/>
                    <CalcButton title={"8"} onPress={()=>addNum1("8")}/>
                    <CalcButton title={"-"} onPress={subtract}/>
                </View>
                <View style={styles.row}>
                    <CalcButton title={"C"} onPress={clear}/>
                    <CalcButton title={"9"} onPress={()=>addNum1("9")}/>
                    <CalcButton title={"0"} onPress={()=>addNum1("0")}/>
                    <CalcButton title={"."} onPress={()=>addNum1(".")}/>
                    <CalcButton title={"/"} onPress={divide}/>

                </View>
                <View style={styles.row}>
                    <CalcButton title={"="} onPress={equal}/>
                    <CalcButton title={"+/-"} onPress={toggleSign}/>
                    <CalcButton title={"ln"} onPress={log}/>
                    <CalcButton title={"DEL"} onPress={deleteInt}/>
                    <CalcButton title={"*"} onPress={multiply}/>

                </View>
            </View>
        </View>
    )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    row:{
        flexDirection:"row"
    },
    buttons:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    input: {
        alignItems:"center",
        justifyContent:"center",
        width: '80%',
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        textAlign: 'right',
        // writingDirection: 'rtl',
    },
})
