import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import HeaderScreen from './comp/HeaderScreen';
import Banner from './comp/BannerScreen';
import Footer from './comp/FooterScreen';


const QuejaScreen = ({ navigation  }) => {
  
    
    
  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation}/>

      <Banner />

      <View>
      <Image source={require('./img/image8.png')} style={styles.line} />
      <Text style={styles.text}>QUEJAS O SUGERENCIAS</Text>
      </View> 



     <Animatable.View animation="bounceIn" style={styles.container3}>
     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
     <Image source={require('./img/home.png')} style={styles.img} />
     </TouchableOpacity>
     <Text style={styles.b1}>-</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Quejas')}>
      <Text style={styles.b2}>QUEJAS O SUGERENCIAS</Text>
      </TouchableOpacity>
     </Animatable.View>

     <View style={styles.container4}>
     <TouchableOpacity onPress={() => navigation.navigate('AdQue')} style={styles.button}>
        <Text style={styles.buttonText}>MENU ADMINISTRATIVO</Text>
      </TouchableOpacity>
     </View>



        <Animatable.View animation="bounceInLeft" style={styles.container2}>
        <TouchableOpacity onPress={() => navigation.navigate('FormEst')}>
        <Image style={styles.imag} source={require('./img/image13.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FormAdm')}>
        <Image style={styles.imag} source={require('./img/image27.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FormOtr')}>
        <Image style={styles.imag} source={require('./img/image39.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PolIG')}>
        <Image style={styles.imag} source={require('./img/image38.png')} />
        </TouchableOpacity>
        </Animatable.View>

   

<Footer />
    </ScrollView>

   
  );
};

const styles = StyleSheet.create({
    back:{
      backgroundColor: '#ffff',
    },
    
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 200,
        
      },
      container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginRight: 1050,
        
      },
    
    imag:{
        width: 190,
        height: 190,
        marginLeft: 15,
        marginRight: 15,
    },
    line: {
        position: 'absolute',
        width: 1330,
        height: 80,
      },

      text: {
        position: 'absolute',
        fontWeight: 'bold',
        color: '#ffff', 
        fontSize: 35,
        marginTop: 20,
        marginLeft: 430,

    },

    img: {
      position: 'relative',
      marginTop: 40,
      width: 35,
      height: 35,
      
    },
    b1: {
      position: 'relative',
      fontWeight: 'bold',
      fontSize: 30,
      marginTop: 40,
      marginLeft: 5,
    },

    b2: {
      position: 'relative',
      fontWeight: 'bold',
      color: 'blue', 
      fontSize: 15,
      marginTop: 40,
      marginLeft: 10,
    },

    container4: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 1050,
    },
    button: {
      backgroundColor: '#9F1B3B',
      borderRadius: 25,
      paddingVertical: 15,
      paddingHorizontal: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    
});
  
export default QuejaScreen;