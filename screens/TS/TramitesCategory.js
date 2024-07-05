import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, Button, Picker} from 'react-native';
import HeaderScreen from '../comp/HeaderScreen';
import Banner from '../comp/BannerScreen';
import Footer from '../comp/FooterScreen';
import Card from '../comp/Card';

const TramitesCategory= ({ navigation  }) => {
  
    const [buscarNom, setBuscarnom] = useState('');
    const data = [
        { id: 1, title: 'Tarjeta 1' },
        { id: 2, title: 'Tarjeta 2' },
        
        // Agrega más datos de tarjetas según sea necesario
      ];
    
  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation}/>

      <Banner />

      <View>
      <Image source={require('../img/image8.png')} style={styles.line} />
      <Text style={styles.text}>TRAMITES Y SERVICIOS</Text>
      </View> 



     <Animatable.View animation="bounceIn" style={styles.container3}>
     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
     <Image source={require('../img/home.png')} style={styles.img} />
     </TouchableOpacity>
     <Text style={styles.b1}>-</Text>
     <TouchableOpacity onPress={() => navigation.navigate('TramitesHome')}>
      <Text style={styles.b2}>TRAMITES Y SERVICIOS</Text>
      </TouchableOpacity>
      <Text style={styles.b1}>-</Text>
      <TouchableOpacity onPress={() => navigation.navigate('TramitesCategory')}>
      <Text style={styles.b3}>CATEGORIA</Text>
      </TouchableOpacity>
     </Animatable.View>

     <Animatable.View animation="bounceInLeft" style={styles.container5}>

        <View>
        
        <Text style={styles.text1}>
            Buscar Tramite
        </Text>
            <TextInput
            
            style={styles.input}
            placeholder="Ingrese nombre del tramite"
            value={buscarNom}
            onChangeText={setBuscarnom}
        />
        <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Buscar" color="#1F3D6D"/>
        </View>
        </View>

        </Animatable.View>

        <Animatable.View animation="bounceInLeft" style={styles.container6}>
        <Text style={styles.text12}>
            Tramites
        </Text>
        </Animatable.View>


        <Animatable.View animation="bounceInLeft" style={styles.container2}>
        
            {data.map(item => (
            <Card key={item.id} data={item} />
            ))}
      
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
        flexDirection: 'column',
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
        marginRight: 900,
        
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
    b3: {
      position: 'relative',
     
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
    container5: {
        flex: 1,
        marginBottom: 100,
        marginTop:20,
        marginLeft:450,
        
      },
      container6: {
        flex: 1,
        marginBottom: 50,
        marginTop:20,
        
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
    text1: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 20,
        marginLeft: 410,
       
      },
      text12: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 30,
        marginBottom: 20,
        marginTop:20,
        marginRight: 150,
       marginLeft:150,
      },
      text11: {
        position: 'absolute',
        fontWeight: 'bold',
        color: '#ffff', 
        fontSize: 19,
        marginBottom: 100,
        marginTop:100,
        marginRight: 250,
        marginLeft:250,
        
      },
      input: {
        position: 'absolute',
        height: 50,
        borderRadius: 25,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 90,
        marginTop:40,
        marginLeft:400,
        marginRight:550,
        paddingHorizontal: 10,
        width: 350,
        color: 'grey',
        backgroundColor: '#ffff', 
      },
      buttonContainer: {
        
        position: 'absolute',
        flexDirection: 'row',
        marginBottom: 100,
        marginTop:46,
        marginRight: 600,
        marginLeft: 760,
        
    },
    line3: {
        position: 'absolute',
        width: 800,
        height: 250,
        marginRight:100,
        marginLeft:250,
        borderRadius: 25,
      },

      
    
});
  
export default TramitesCategory;