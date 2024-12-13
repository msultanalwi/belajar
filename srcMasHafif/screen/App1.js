// 1.   Props dan Components

import React from "react"
import {View, Text} from "react-native"
import Car from "../component/Car"

const App = () => {
    return (
        <View>
            <Car />
            <Car tulis={"Drive Mode On"} />
        </View>
    )
}

export default App