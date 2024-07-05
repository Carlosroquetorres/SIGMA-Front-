import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const BannerScreen = ({navigation }) => {
  return (  

    <View style={styles.header}>
        <View style={styles.container}>
        <Image source={require('../img/image.png')} style={styles.bannerImage} />
        <Image source={require('../img/Imagen1.png')} style={styles.logoImage} />
      </View>
      <View>
      <Image source={require('../img/image7.png')} style={styles.line} />
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({

  header:{
    
    width:'100%',
  },
    
    container: {
        position: 'relative',
        width: 200,
        height: 200,
      },
      bannerImage: {
        position: 'absolute',
        width: 1320,
        height: 150,
      },
      logoImage: {
        position: 'absolute',
        top: 25,
        left: 500,
        width: 270,
        height: 100,
      },
      line: {
        position: 'relative',
        width: 1330,
        height: 60,
        marginTop: -50,
        
      },
  });
  
export default BannerScreen;