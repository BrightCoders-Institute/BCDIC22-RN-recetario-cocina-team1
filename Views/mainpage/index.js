import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Busqueda from '../../components/busqueda'
import Ctrending from '../../components/trending'

const MainPage = () => {

  return (
    <View style={styles.fondo}>
      <Busqueda />
      <Ctrending />
    </View>
  )
}

export default MainPage
