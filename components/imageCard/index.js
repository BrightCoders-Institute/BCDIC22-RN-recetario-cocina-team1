import { View, Image, Text, ImageBackground, Button } from 'react-native';
import React from 'react';
import styles from './style';

const image = { uri: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg'}
// const image = { uri: 'https://reactjs.org/logo-og.png'}

const ImageCard = () => {
    return(
        
        <View style={styles.container}>

            <ImageBackground source={image} resizeMode='cover' style={styles.image}>
                <View style={styles.containerInterno}>
                    <View style={styles.containerIconos}>
                        <Button title='X' style={styles.btnExit}/>
                        <Button title='Cora' />
                        <Button title='Compartir' />
                    </View>
                    <View style={styles.textoReceta}>
                        <Text style={styles.text}>Trending</Text>
                        <Text style={styles.textPlato}>Pizza Napolitana</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ImageCard;