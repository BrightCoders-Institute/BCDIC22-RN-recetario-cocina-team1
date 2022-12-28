import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Busqueda from '../../components/busqueda'
import Ctrending from '../../components/trending'
import Recent from '../../components/recent'

const MainPage = () => {

  return (
    <View style={styles.fondo}>
      <Busqueda />
      <Ctrending />
      <Recent />
      
    </View>
  )
}

export default MainPage
