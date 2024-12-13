import React, {useState} from 'react';
import {View, Text} from "react-native"

const Show = () => {

    const [show, setShow] = useState(false);
    const handlerShow = () => {
       if (show == false) {
        setShow(true)
       }else (
        setShow(false)
       )
    }

    
    return (
        <View style={{
            flex: 1,
            backgroundColor: "gray",
            alignItems: "flex-end",
        }}>
            <View style={{
                height: 50,
          width: '100%',
          backgroundColor: 'gray',
          elevation: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
            }}><Text style={{fontSize: 20, color: "white"}}>Check Deskription on right side</Text>
             <Text style={{ 
                color: show ? "red" : "#45e761"
                 }} onPress={() => handlerShow()}>
            {show ? "close" : "Breakdown"}
             </Text>
            </View>
            {show == true && ( <View style={{
                elevation: 30,
                backgroundColor: "white",
                width: '100%',
                height: '30%',
                justifyContent: "center",
                borderRadius: 70
               
                
            }}
            >
                <Text style={{
                    color: "gray", textAlign: "center", padding: 10
                }}>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
             </View>  )}
             
        </View>
    )
}

export default Show;