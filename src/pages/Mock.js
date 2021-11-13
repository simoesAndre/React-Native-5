import React from 'react'
import { View, Text } from 'react-native'
import Header2 from '../components/Header2'
import { main } from '../styles/index'

export default function Mock () {
  return (
    <View style={{ flex: 1 }}>
      <Header2 />
      <View style={{ flex: 11 }}>
        <Text style={main.description}>Tela destino da notificação</Text>
      </View>
    </View>
  )
}
