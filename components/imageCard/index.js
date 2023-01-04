import { View, Image, Text, ImageBackground, Button, TextInput } from 'react-native';
import React from 'react';
import styles from './style';

const ImageCard = (props) => {
    return(
        
        <View style={styles.container}>

            <ImageBackground source={{uri:props.dataJson.imagen}} resizeMode='cover' style={styles.image}>
                <View style={styles.containerInterno}>
                 


                <View style={styles.container2}>

                    <Image style={styles.containerIconos} source ={{uri: 'https://cdn-icons-png.flaticon.com/512/535/535183.png'}}/>
              
                    <Image style={styles.containerIconos} source ={{uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828874.png'}}/>
                </View>
                
                    <View style={styles.textoReceta}>
                        <Text style={styles.text}>Trending</Text>
                        <Text style={styles.textPlato}>{props.dataJson.nombre}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ImageCard;