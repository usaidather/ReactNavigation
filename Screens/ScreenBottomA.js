import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'


const ScreenBottomA = ({ navigation }) => {

    return (
        <View>
            <Text>Screen Bottom A</Text>
            <Button title = "Navigate To Screen A" onPress= {()=> {navigation.navigate('ScreenA')}}></Button>
        </View>
    )
}

export default ScreenBottomA