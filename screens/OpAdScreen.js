import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import HeaderScreen from './comp/HeaderScreen';
import Banner from './comp/BannerScreen';
import Footer from './comp/FooterScreen';


const OpAdScreen = ({ navigation  }) => {
  
    
    
  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation}/>

      <Banner />

      <View>
      <Image source={require('./img/image8.png')} style={styles.line} />
      <Text style={styles.text}>QUEJAS O SUGERENCIAS</Text>
      </View>

      <View>
      <Image source={require('./img/image8.png')} style={styles.line2} />
      <Text style={styles.text2}>ADMINISTRATIVO</Text>
      </View> 



      <Animatable.View animation="bounceIn" style={styles.container3}>
     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
     <Image source={require('./img/home.png')} style={styles.img} />
     </TouchableOpacity>
     <Text style={styles.b1}>-</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Quejas')}>
      <Text style={styles.b2}>QUEJAS O SUGERENCIAS</Text>
      </TouchableOpacity>
      <Text style={styles.b1}>-</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AdQue')}>
      <Text style={styles.b3}>ADMINISTRATIVO</Text>
      </TouchableOpacity>
     </Animatable.View>


        <Animatable.View animation="bounceInLeft" style={styles.container2}>
        <TouchableOpacity onPress={() => navigation.navigate('FormEst')}>
        <Image style={styles.imag} source={require('./img/image21.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AdmRev')}>
        <Image style={styles.imag} source={require('./img/image22.png')} />
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
        marginTop: 110,
        marginRight: 900,
        
      },
    
    imag:{
        width: 190,
        height: 190,
        marginLeft: 100,
        marginRight: 100,
        
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
        marginLeft: 480,
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
    },
    
});
  
export default OpAdScreen;