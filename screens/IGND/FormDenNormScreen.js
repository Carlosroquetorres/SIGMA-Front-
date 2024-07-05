import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, ScrollView} from 'react-native';
import HeaderScreen from '../comp/HeaderScreen';
import Banner from '../comp/BannerScreen';
import Banner2 from '../comp/Banner2Screen';
import Footer from '../comp/FooterScreen';
import FormIM from '../comp/FormDIMScreen';

const FormDenNormScreen = ({ navigation  }) => {
  
    
  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation}/>

      <Banner />
      <Banner2 navigation={navigation}/>

      <Text style={styles.text1}>
      INCUMPLIMIENTO DE LAS NORMAS ÉTICAS
      </Text>


    <Animatable.View animation="lightSpeedIn" style={styles.container2}>

        <FormIM />

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
       
        marginRight: 100,
        marginLeft: 100,
        
      },
    
      container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 110,
        marginRight: 900,
        
      },
    
    line: {
        position: 'absolute',
        width: 1330,
        height: 80,
      },
      line2: {
        position: 'absolute',
        width: 1330,
        height: 60,
        marginTop: 80,
        
      },

      text: {
        position: 'absolute',
        fontWeight: 'bold',
        color: '#ffff', 
        fontSize: 35,
        marginTop: 20,
        marginLeft: 430,

    },
    text2: {
        position: 'absolute',
        fontWeight: 'bold',
        color: '#ffff', 
        fontSize: 35,
        marginTop: 80,
        marginLeft: 510,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
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
      
      color: 'blue', 
      fontSize: 15,
      marginTop: 40,
      marginLeft: 10,
    },
    b3: {
        position: 'relative',
        fontWeight: 'bold',
        color: 'blue', 
        fontSize: 15,
        marginTop: 40,
        marginLeft: 10,
      },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
        marginRight: 100,
        marginLeft: 100,
    },
    text1:{
        textAlign: 'center',
        position: 'relative',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 35,
        marginTop: 100,
        marginBottom: 10,
       
    },

   
   

    
});


export default FormDenNormScreen;