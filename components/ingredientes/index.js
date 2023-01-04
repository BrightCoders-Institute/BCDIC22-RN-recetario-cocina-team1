import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from './style';
import infoIngred from '../../app.json'

const Ingredientes = (props) => {
    return(
        // <View style={styles.container}>
        <View style={styles.container }>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Ingredientes</Text>
                <Text style={styles.subTitulo}>Para 1 Porcion</Text>
            </View>
            <ScrollView>
            <View style={styles.containerItems}>
                <Text style={styles.item}>{`${props.dataJson.ingredientes[0].cantidad} ${props.dataJson.ingredientes[0].nombre}`}</Text>
                <View style={styles.border}></View>
                <Text style={styles.item}>{`${props.dataJson.ingredientes[1].cantidad} ${props.dataJson.ingredientes[1].nombre}`}</Text>
                <View style={styles.border}></View>
                <Text style={styles.item}>{`${props.dataJson.ingredientes[2].cantidad} ${props.dataJson.ingredientes[2].nombre}`}</Text>
                <View style={styles.border}></View>
                <Text style={styles.item}>{`${props.dataJson.ingredientes[3].cantidad} ${props.dataJson.ingredientes[3].nombre}`}</Text>
                <View style={styles.border}></View>
                <Text style={styles.item}>{`${props.dataJson.ingredientes[4].cantidad} ${props.dataJson.ingredientes[4].nombre}`}</Text>
                <View style={styles.border}></View>

            </View>
            </ScrollView>
        </View>
    );
};

export default Ingredientes;