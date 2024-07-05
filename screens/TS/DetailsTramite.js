import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, Button, Picker} from 'react-native';
import HeaderScreen from '../comp/HeaderScreen';
import Banner from '../comp/BannerScreen';
import Footer from '../comp/FooterScreen';
import Card1 from '../comp/Card1';
import Card2 from '../comp/Card2';
import Card3 from '../comp/Card3';

const DetailsTramite= ({ navigation  }) => {
  const abrirEnlace = () => {
    Linking.openURL(url);
  };
    
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

     

        <Animatable.View animation="bounceInLeft" style={styles.container6}>
        <View style={styles.view1}>
        <Text style={styles.text20}>
            Nombre del tramite
        </Text>
        </View>
        <Text style={styles.text21}>
            Subdireccion del tramite 
        </Text>
        <View style={styles.view1}>
          <Text style={styles.textt3}>
                Texto de pruebaTexto de prueba
          </Text>
          </View>
        <Text style={styles.text22}>
            Area/Departamento/Coordinacion 
        </Text>
        <View style={styles.view1}>
          <Text style={styles.textt4}>
                Texto de pruebaTexto de prueba
          </Text>
          </View>
        <Text style={styles.text23}>
            Usuario
        </Text>
        <View style={styles.view1}>
          <Text style={styles.textt1}>
                Texto de pruebaTexto de prueba
          </Text>
          </View>
        <Text style={styles.text24}>
            Modalidad
        </Text>
        <View style={styles.view1}>
          <Text style={styles.textt2}>
                Texto de pruebaTexto de prueba
          </Text>
          </View>
        </Animatable.View>


        <Animatable.View animation="bounceInLeft" style={styles.container2}>
        <Text style={styles.text30}>
            Descripcion del tramite
        </Text>
        <Image source={require('../img/image7.png')} style={styles.bar1}/>
        <View style={styles.view1}>
          <Text style={styles.texttt1}>
              ejemplo
          </Text> 
        </View>
        
        <Text style={styles.text31}>
            ¿Quien puede realizarlo?
        </Text>
        <Image source={require('../img/image7.png')} style={styles.bar2}/>
        <View style={styles.view1}>
          <Text style={styles.texttt2}>
              ejemplo
          </Text> 
        </View> 
           <Text style={styles.text32}>
            ¿En donde se realiza?
        </Text>
        <Image source={require('../img/image7.png')} style={styles.bar3}/>
        <View style={styles.view1}>
          <Text style={styles.texttt3}>
              ejemplo
          </Text> 
        </View> 
        </Animatable.View>

        <Animatable.View animation="bounceInLeft" style={styles.container222}>
        <Text style={styles.text40}>
            Tiempo de respuesta
        </Text>
        <View style={styles.view2}>
        <Image source={require('../img/tiempo.png')} style={styles.img1}/>
        <Text style={styles.textttt1}>
            Tiempo de respuesta
        </Text>
        </View>
           <Text style={styles.text41}>
            Costo
        </Text>
        <View style={styles.view3}>
        <Image source={require('../img/costo.png')} style={styles.img1}/>
        <Text style={styles.textttt2}>
            ejemplo costo
        </Text>
        </View>
        <Text style={styles.text42}>
            Dias y Horas de atencion
        </Text>
        <View style={styles.view4}>
        <Image source={require('../img/dia.png')} style={styles.img2}/>
        <Text style={styles.textttt3}>
            ejemplo dia y hora
        </Text>
        </View>
        <Text style={styles.text43}>
            Que se obtiene
        </Text>
        <View style={styles.view5}>
        <Image source={require('../img/obtiene.png')} style={styles.img2}/>
        <Text style={styles.textttt4}>
            ejemplo obtiene
        </Text>
        </View>
        <Text style={styles.text44}>
            Vigencia de lo que se obtiene
        </Text>
        <View style={styles.view6}>
        <Image source={require('../img/vigencia.png')} style={styles.img3}/>
        <Text style={styles.textttt5}>
            ejemplo vigencia
        </Text>
        </View>
        
        </Animatable.View>

        <Animatable.View animation="bounceInLeft" style={styles.container22}>
        
            <Card1 />
            <Card2 />
            <Card3 />
          
        </Animatable.View>

        <Animatable.View animation="bounceInLeft" style={styles.container2}>
        <Text style={styles.text12}>
            En caso de ser en linea, link del tramite
        </Text>
        <View style={styles.view7}>
        <TouchableOpacity onPress={abrirEnlace}>
        <Text style={styles.textttt6}>
            Ejemplo enlace
        </Text>
        </TouchableOpacity>
        </View>
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
        marginBottom: 230,
        
      },
      container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginRight: 900,
        
      },
      container22: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 400,
        marginBottom: 20,
        
      },
      container222: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 250,
        
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
      text20: {
        fontStyle: 'italic',
        textAlign: 'center',
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 40,
        marginBottom: 20,
        marginTop:20,
        width:530,
       marginLeft:380,
      },
      text21: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 20,
        marginBottom: 20,
        marginTop:20,
       marginLeft:990,
      },
      text22: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 20,
        marginBottom: 20,
        marginTop:100,
       marginLeft:950,
      },
      text23: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 20,
        marginBottom: 20,
        marginTop:20,
       marginLeft:120,
      },
      text24: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 20,
        marginBottom: 20,
        marginTop:100,
       marginLeft:100,
      },
      text30: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 30,
        marginBottom: 20,
        marginTop:300,
        marginRight: 800,
      },
      text31: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 30,
        marginBottom: 20,
        marginTop:600 ,
        marginRight: 800,
      },
      text32: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 30,
        marginBottom: 20,
        marginTop:900 ,
        marginRight: 850,
      },
      text40: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 25,
        marginBottom: 20,
        marginTop:600 ,
        marginRight:400,
      },
      text41: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 25,
        marginBottom: 20,
        marginTop:600 ,
        marginLeft: 350,
      },
      text42: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 25,
        marginBottom: 20,
        marginTop:850 ,
        marginRight: 400,
      },
      text43: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 25,
        marginBottom: 20,
        marginTop:850 ,
        marginLeft: 350,
      },
      text44: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 25,
        marginBottom: 20,
        marginTop:1090 ,
        marginRight: 0,
      },
      bar1:{
        position: 'absolute',
        marginTop:330,
        marginRight:30,
        height:10,
        width:1100,
      },
      bar2:{
        position: 'absolute',
        marginTop:640,
        marginRight:30,
        height:10,
        width:1100,
      },
      bar3:{
        position: 'absolute',
        marginTop:930,
        marginRight:30,
        height:10,
        width:1100,
      },
      textt1: {
        textAlign: 'center',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginBottom: 20,
        marginTop:50,
       marginLeft:55,
       width:200,
      },
      textt2: {
        textAlign: 'center',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginBottom: 20,
        marginTop:130,
       marginLeft:55,
       width:200,
      },
      textt3: {
       
        textAlign: 'center',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginBottom: 20,
        marginTop:50,
        marginLeft:1010,
        width:200,
      },
      textt4: {
        textAlign: 'center',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginBottom: 20,
        marginTop:130,
       marginLeft:1010,
       width:200,
      },
      texttt1: {
        textAlign: 'Left',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginTop:170,
        width:1130,
        height:300,
      },
      texttt2: {
        textAlign: 'Left',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginTop:320,
        width:1130,
        height:300,
      },
      texttt3: {
        textAlign: 'Left',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginTop:470,
        width:1130,
        height:300,
      },
      view1:{
        
        position: 'relative',
        flex:1,
        marginRight:1130,
      },
      view2:{
        position: 'relative',
        flex:1,
        marginRight:680,
      },
      view3:{
        position: 'relative',
        flex:1,
        marginRight:-150,
      },
      view4:{
        position: 'relative',
        flex:1,
        marginRight:680,
      },
      view5:{
        position: 'relative',
        flex:1,
        marginRight:-150,
      },
      view6:{
        position: 'relative',
        flex:1,
        marginRight:250,
      },
      view7:{
        position: 'relative',
        flex:1,
        marginRight:500,
        marginTop:70,
      },
      img1:{
        position: 'absolute',
        height:70,
        width:70,
        marginTop:320,
      },
      img2:{
        position: 'absolute',
        height:70,
        width:70,
        marginTop:440,
      },
      img3:{
        position: 'absolute',
        height:70,
        width:70,
        marginTop:555,
      },
      textttt1: {
        textAlign: 'center',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginTop:320,
        marginLeft:75,
        width:200,
      },
      textttt2: {
        textAlign: 'center',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginTop:320,
        marginLeft:40,
        width:200,
      },
      textttt3: {
        textAlign: 'center',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginTop:440,
        marginLeft:75,
        width:200,
      },
      textttt4: {
        textAlign: 'center',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginTop:440,
        marginLeft:75,
        width:200,
      },
      textttt5: {
        textAlign: 'center',
        position: 'absolute',
        color: 'black', 
        fontSize: 20,
        marginTop:560,
        marginLeft:75,
        width:200,
      },
      textttt6: {
        textAlign: 'center',
        position: 'absolute', 
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 20,
        width:500,
      },
    
});
  
export default DetailsTramite;