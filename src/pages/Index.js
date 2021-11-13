import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import { main } from '../styles/index'

export default function Index (props) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={main.background}>
        <View style={main.buttonArea}>
          <TouchableOpacity style={main.button} onPress = {() => props.test()}>
            <Text style={main.buttonText}>Testar notificação</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
