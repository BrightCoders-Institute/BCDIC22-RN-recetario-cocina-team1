import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';

const Ingredientes = () => {
    return(
        // <View style={styles.container}>
        <View style={styles.container }>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Ingredients</Text>
                <Text style={styles.subTitulo}>for 3 servings</Text>
            </View>
            <View style={styles.containerItems}>
                <Text style={styles.item}>puff pastry</Text>
                <View style={styles.border}></View>
                <Text style={styles.item}>peperoni</Text>
                <View style={styles.border}></View>
                <Text style={styles.item}>marinada sauce</Text>
                <View style={styles.border}></View>
                <Text style={styles.item}>sherdded mozzarella chese</Text>
                <View style={styles.border}></View>
                <Text style={styles.item}>egg for egg wash</Text>
                <View style={styles.border}></View>
            </View>
        </View>
    );
};

export default Ingredientes;