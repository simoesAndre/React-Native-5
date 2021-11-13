import React, {Component} from 'react'
import {notificationManager} from './src/services/NotificationManager'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Index from './src/pages/Index'
import Mock from './src/pages/Mock'

const Stack = createStackNavigator()
const notificador = notificationManager

export default class App extends Component {
  componentDidMount() {
    notificador.configure()
    notificador.createChannel()
    notificador.scheduleNotifications()
  }

  onPressSendNotification = () => {
    notificador.showNotification(
      1,
      "Primeira notificação",
      "Está é a primeira notificação do app de pedido e entrega de refeições",
      {}, // data
      {} // options
    )
  }

  render() {    
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home'>
            {({navigation}) => {notificador.setNavegador(navigation); return(<Index test={this.onPressSendNotification} />)}}
          </Stack.Screen>
          <Stack.Screen name='Mock'>
            {() => {return(<Mock />)}}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
