import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';


const HeaderScreen = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../img/home.png')} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={require('../img/gobierno.png')} style={styles.headerImage} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../img/educacion.png')} style={styles.headerImage2} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../img/tec.jpg')} style={styles.tec} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../img/italogo.png')} style={styles.italog} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#ffff',
    width:'100%',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  imageContainer: {
    marginLeft: 10,
  },
  headerImage: {
    marginLeft: 510,
    width: 180,
    height: 50,
  },
  headerImage2: {
    width: 180,
    height: 50,
  },
  tec:{
    width: 170,
    height: 50,
    marginRight: 20,
    aspectRatio: 1,
  },
  italog:{
    width: 110,
    height: 70,
    marginRight: 50,
    aspectRatio: 1,
  },
});

export default HeaderScreen;