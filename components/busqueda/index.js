import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import { Lupa } from '../../img';

const Busqueda = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.Lupa} source ={{uri: 'https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png'}}/>
      <TextInput
        placeholderTextColor="white"
        placeholder="What do you want to eat?"
      />
      <Image style={styles.Lupa} source ={{uri: 'https://icones.pro/wp-content/uploads/2021/12/icone-de-microphone-gris.png'}}/>
    </View>
  );
};

export default Busqueda;