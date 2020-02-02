import React from 'react'
import {  createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import ScreenA from './Screens/ScreenA'
import ScreenB from './Screens/ScreenB'
import ScreenC from './Screens/ScreenC'

import BottomTabA from './Screens/ScreenBottomA'
import BottomTabB from './Screens/ScreenBottomB'
import BottomTabC from './Screens/ScreenBottomC'
import BottomTabD from './Screens/ScreenBottomD'
import BottomTabE from './Screens/ScreenBottomE'

import { Ionicons } from '@expo/vector-icons';


const tabNavigator = createBottomTabNavigator({
    TabA: createStackNavigator({
        TabA: BottomTabA,
        ScreenA: ScreenA
    }) ,

    TabB: createStackNavigator({
        TabB: BottomTabB,
    }),
    TabC: createStackNavigator({
        TabC: BottomTabC,
    }),
    TabD: createStackNavigator({
        TabB: BottomTabD,
    }),
    TabE: createStackNavigator({
        TabB: BottomTabE,
    }),

},
{
defaultNavigationOptions: ({navigation}) =>({
tabBarIcon: ({focused, horizontal,tintColor }) => {
    const {routeName} = navigation.state
    let IconComponent = Ionicons
    let iconName
    if (routeName === 'TabA'){
        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
    }else if (routeName === 'TabB'){
        iconName = focused ? 'ios-list-box' : 'ios-list'
    }

    return <IconComponent name = {iconName} size = {25} color = {tintColor}></IconComponent>
}
}),

tabBarOptions:{
    activeTintColor: '#fff',
    activeBackgroundColor: '#f4511e',

    keyboardHidesTabBar: false,
    tabStyle: {
        backgroundColor: '#f4511e'
    },

    labelStyle: {
        fontSize: 12,
    }
}
}
)


// const stackNavigator = createStackNavigator({
//   screenA: ScreenA,
//   screenB: ScreenB
// },
// {
//   initialRouteName: 'screenA',
//   defaultNavigationOptions:{
//     headerStyle:{
//       backgroundColor:'#f4511e'
//     },
//     headerTintColor:'#fff',
//     headerTitleStyle:{
//       fontWeight:'bold'
//     }
//   } 
// }
// )

// const RootStack = createStackNavigator({
//   Main: {
//     screen: stackNavigator
//   },
//   MyModal: {
//     screen:ScreenC
//   },
// },
// {
//   mode:'modal',
//   headerMode:'none'
// }
// )

const App = createAppContainer(tabNavigator)
export default App