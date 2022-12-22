import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Ctrending = () => {
  return (
    <View style={styles.trending}>
        <View>
            <Text style={styles.titleTrending}>Trending</Text>
        </View>
        <View style={styles.menucontainer}>
            <View style={styles.foodContainer}>
                <View style={styles.foodimg}></View>
                <View>
                    <Text> Ramen</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Ctrending
