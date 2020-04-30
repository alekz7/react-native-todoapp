import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native'

export default function AddTodo({submitHandler}){

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput 
                style={StyleSheet.input}
                placeholder="nueva tarea..."
                onChangeText={changeHandler}
                // onChangeText={(val)=>changeHandler(val)}
                // esto es equivalente a la linea de arriba, no es necesario pasar el valor ya que lo hace en automatico
            />
            <Button onPress={()=>submitHandler(text)} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',        
    }
})