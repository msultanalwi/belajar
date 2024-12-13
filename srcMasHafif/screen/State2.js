// 2.   State

import React, {useState} from "react"
import {View, Text, Button, Pressable, Touchable, Alert, StyleSheet, TouchableOpacity} from "react-native"

const State = () => {

    // Lamp 
    const [car, setCar] = useState (false)

    handlerCar = () => {
        setCar(!car)
    }
   

    // Button Lamp
    const [ lamp, setLamp] = useState (false)

    const handlerLamp = () => {
        if ( lamp === false) {
            setLamp(true)
        } else {
            setLamp(false)
        }
    }
    
    
    
    return (
    <View style={{flex: 1, backgroundColor: "black",}}>
        <View style={{width: "100%",
        alignItems: "center"}}>
            <View
            style={{
                backgroundcolo : car ? "blue" : "purple",
                width: 100,
                height: 100,
                borderRadius: 50,
                justifyContent: "center"
            }}>
                <Button onPress= {() => handlerCar()} title="Car Mode" />
                <Text style={{ textAlign: "center",
                    color: car ? "green" : "red"
                }}>{car ? "Drive Mode" : "Parked"}</Text>
            </View>
            </View>


          <TouchableOpacity onPress= {() => handlerLamp()}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}>
            <View style={{
                marginTop: 20,
                width: 100,
                height: 50,
                backgroundColor: "gray",
                borderRadius: 50,
                justifyContent: "center",
                alignItems : lamp ? "flex-end" : "flex-start"
                }}>
                <View style={{
                    width: 70,
                    height: 70,
                    backgroundColor: lamp ? "yellow" : "#E0BC00" ,
                    borderRadius: 35,
                    
                }}>
                </View>
            </View>  
          </TouchableOpacity>
          <Text style={{
                color: lamp ?  "yellow" : "#E0BC00",
                fontSize: 20,
                marginTop: 10,
                textAlign: "center"
            }}>{lamp ? "lamp is turn-on" : "Lamp is turn-off"}</Text>
    </View>
    )
}
export default State