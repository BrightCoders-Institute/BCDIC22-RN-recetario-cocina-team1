import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Busqueda from '../../components/busqueda'
import Ctrending from '../../components/trending'
import Recent from '../../components/recent'
import Info from '../../app.json'

const MainPage = ({ navigation }) => {

  return (
    <View style={styles.fondo}>
      <Busqueda/>
      <Ctrending navigation={navigation}/>
      <Recent/>
      
    </View>
  )
}

export default MainPage
