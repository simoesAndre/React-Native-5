import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { header } from '../styles/index'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Header2 extends Component {
  render () {
    return (
      <View style={header.background}>
        <View style={header.areaMenu}>
          <View style={{ flex: 1 }}>
            <Icon style={header.iconMenu} name='menu' size={32} color='white' />
          </View>
          <View style={{ flex: 7 }}>
            <Text style={header.title}>Meal Delivery</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Icon style={header.iconSearch} name='search' size={32} color='white' />
          </View>
        </View>
      </View>
    )
  }
}
