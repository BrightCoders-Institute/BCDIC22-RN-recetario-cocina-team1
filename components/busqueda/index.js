import {StyleSheet, View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';

const Busqueda = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="what do you want eat" />
    </View>
  );
};

export default Busqueda;

