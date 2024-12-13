import React, {useState, useEffect} from "react"
import {View, Text, StatusBar, TextInput, Touchable, TouchableOpacity} from "react-native"

const App = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <View style={{flex: 1, backgroundColor: "gray", justifyContent: "center"}}>
    <Text style={{textAlign: "center", color: "#000000"}}>Sign In</Text>
      <StatusBar backgroundColor={"gray"} barStyle={"dark-content"} />
      <Text>{email}</Text>
      
      <Text style={{textAlign: "center"}}>
        silakan masukkan email dan password
      </Text>
      <TextInput 
      value={email}
        style={{
        backgroundColor: "#FFFFFF",
        elevation: 3,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 9,
      }} 
        placeholder="Masukkan Email "

        onChangeText={(text) => setEmail(text)}
      />
      <TextInput 
      value={password}
        style={{
        backgroundColor: "#FFFFFF",
        elevation: 3,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 9,
      }} 
        placeholder="Masukkan Password"

        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={{
        backgroundColor: "#007bff",
        borderRadius: 9,
        marginHorizontal:20,
        marginVertical: 20,
        paddingVertical : 15,
        elevation: 3
      }}>
        <Text style={{
          color: "#FFFFFF", textAlign: "center"
        }}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App