import React, {useState} from "react"
import {View, Text, TextInput, Button, TouchableOpacity} from  "react-native"

const Login = () => {

    const [username, setUsername] = useState ('')
    const [password, setPassword] = ('') 


    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <TextInput
            placeholder = "Username"
            placeholderTextColor={"gray"}
            style={{color: "black"}}
            value={username}
            onChangeText={setUsername} />
            <TextInput 
            placeholder = "Password"
            placeholderTextColor={"gray"}
            style={{color: "black"}}
            value={password}
            onChangeText={setPassword}
            />
            <Button title = "login" disabled={username == ''  || password == ''}/>
            <TouchableOpacity disabled={username == '' || password == ''}
            style={{
                height: 40,
                width: '100%',
                backgroundColor: username == '' || password == '' ? 'gray' : 'black',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 16, fontWeight: 500, color: 'white'
                }}>Login</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default Login;  //export the component