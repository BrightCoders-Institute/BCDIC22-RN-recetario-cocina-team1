import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import ImageCard from '../../components/imageCard'  
import Ingredientes from '../../components/ingredientes';
import Info from '../../app.json'

const PageInfo = ({route, navigation}) => {
    const { infoPlatillo } = route.params

    return (
        <View>
            {/* <Text style={styles.titulo}>HOla mundo</Text> */}
            <ImageCard dataJson ={infoPlatillo}/>
            <Ingredientes dataJson ={infoPlatillo}/>
        </View>
    );
};

export default PageInfo;