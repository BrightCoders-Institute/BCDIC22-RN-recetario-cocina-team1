import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
//const image = {uri: 'https://dosilustrados.com/wp-content/uploads//RM_baner_home.jpg'};

export default function App() {
  return (
    // eslint-disable-next-line no-undef
  
    <View style={styles.container}>

      <Text>Aplicacion de Desarrollo</Text>
      <Text style={styles.Titulo}> Recetario de Cocina</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo: {
    fontSize: 40,
    color: '#000',
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '300px',
    width: '300px',
  },
});
