import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'


const ScreenB = ({ navigation }) => {


    return (
        <View>
            <Text>Screen B</Text>
            <Text>ID: {JSON.stringify(navigation.getParam('itemID'))}</Text>
            <Text>Param: {JSON.stringify(navigation.getParam('otherParams'))}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()}></Button>

        </View>
    )
}

ScreenB.navigationOptions = () => {
    return {
        title: 'Screen B',
        headerRight: () => (
            <Button title='Info'
                onPress={() => alert('Info')} />
        ),

        headerStyle: {
            backgroundColor: '#4E204F'
        },
        headerTintColor: '#fee074'
    }
}

export default ScreenB