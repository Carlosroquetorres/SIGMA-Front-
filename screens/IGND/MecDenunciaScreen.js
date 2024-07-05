import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import HeaderScreen from '../comp/HeaderScreen';
import Banner from '../comp/BannerScreen';
import Banner2 from '../comp/Banner2Screen';
import Footer from '../comp/FooterScreen';


const MecDenunciaScreen = ({ navigation  }) => {
  
    
    
  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation}/>

      <Banner />

      <Banner2 navigation={navigation}/>

     
     <View style={styles.container2}>

        <Animatable.View animation="bounceInLeft" style={styles.container3}>
        <TouchableOpacity onPress={() => navigation.navigate('DenAco')}>
        <Image style={styles.imag} source={require('../img/image33.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DenNorm')}>
        <Image style={styles.imag} source={require('../img/image20.png')} />
        </TouchableOpacity>
        </Animatable.View>

     </View>
   

<Footer />
    </ScrollView>

   
  );
};

const styles = StyleSheet.create({

    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 200,
        
      },
      imag:{
        width: 190,
        height: 190,
        marginLeft: 15,
        marginRight: 15,
    },
    back:{
      backgroundColor: '#ffff',
    },
    container2: {
        
        marginTop: 30,
        marginLeft: 70,
        marginRight: 70,
        
      },

});
  
export default MecDenunciaScreen;