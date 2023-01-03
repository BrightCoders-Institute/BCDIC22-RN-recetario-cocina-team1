import { View, Text, Image, ScrollView, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles'

const Ctrending = ({navigation}) => {
  return (
    <View style={styles.trending}>
    <View>
        <Text style={styles.titleTrending}>TRENDING </Text>
            </View>
            <ScrollView horizontal={true}>
            <View style={styles.menucontainer}>

                <TouchableOpacity onPress={()=>navigation.navigate('Info')}>
                    <View style={styles.foodContainer}>
                        <View style={styles.foodimg}>
                            <Image style={{width: 160, height: 150, borderRadius: 15}} source={{ uri: "https://laroussecocina.mx/wp-content/uploads/2019/08/S050419-30-RAMEL-0614-1.jpg.webp" }}/>
                        </View>
                    <View>
                            <Text style={styles.letraComida}>Ramen</Text>
                    </View>
                </View>
                </TouchableOpacity>
                

                <TouchableOpacity onPress={()=>navigation.navigate('Info')}>
                <View style={styles.foodContainer}>
                    <View style={ styles.foodimg}>
                        <Image style={{width: 160, height: 150, borderRadius: 15}} source ={{ uri: "https://assets.unileversolutions.com/recipes-v2/109068.jpg"}}/>
                    </View>
                <View>
                        <Text style={styles.letraComida}>Carne Asada</Text>
                </View>
                    
                </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>navigation.navigate('Info')}>
                <View style={styles.foodContainer}>
                    <View style={ styles.foodimg}>
                        <Image style={{width: 160, height: 150, borderRadius: 15}} source ={{ uri: "https://t2.rg.ltmcdn.com/es/posts/1/9/3/pizza_casera_31391_orig.jpg"}}/>
                    </View>
                    <View>
                        <Text style={styles.letraComida} >Pizza</Text>
                    </View>
                </View>
                </TouchableOpacity>


            </View>
            </ScrollView>
    </View>
  )
}

export default Ctrending;
