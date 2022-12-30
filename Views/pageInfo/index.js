import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import ImageCard from '../../components/imageCard'  
import Ingredientes from '../../components/ingredientes';

const PageInfo = () => {
    return (
        <View>
            {/* <Text style={styles.titulo}>HOla mundo</Text> */}
            <ImageCard/>
            <Ingredientes />
        </View>
    );
};

export default PageInfo;