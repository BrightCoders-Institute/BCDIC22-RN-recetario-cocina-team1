import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';

const Recent = () => {
  return (
    <View style={styles.recent}>
      <View>
        <Text style={styles.recentTitle}>RECENT</Text>
      </View>
      <View style={styles.recentMenuContainer}>
        <View style={styles.recentFoodContainer}>
          <View style={styles.foodImg}>
          <Image style={{width: 220, height: 260, borderRadius: 15}} source={{ uri:"https://www.gannett-cdn.com/presto/2022/03/03/PPHX/70b52507-6680-44bb-9cd6-b5b769fe3e86-6EFAB62C-3622-4A90-B41C-06DC4DB4BFD3_1_201_a.jpeg?width=300&height=400&fit=crop&format=pjpg&auto=webp"}}/>
          </View>
          <View>
            <Text style={styles.textComida}>Pasta</Text>
          </View>
        </View>
        
      </View>
    </View>
  );
};

export default Recent;
