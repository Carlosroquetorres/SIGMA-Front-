import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import HeaderScreen from '../comp/HeaderScreen';
import Banner from '../comp/BannerScreen';
import Footer from '../comp/FooterScreen';


const DocumentoScreen2 = ({ navigation  }) => {
  
    
    
  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation}/>

      <Banner />

      <View>
      <Image source={require('../img/image8.png')} style={styles.line} />
      <Text style={styles.text}>CONTROL DE DOCUMENTOS</Text>
      </View>
      



     <Animatable.View animation="bounceIn" style={styles.container3}>
     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
     <Image source={require('../img/home.png')} style={styles.img} />
     </TouchableOpacity>
     <Text style={styles.b1}>-</Text>
     <TouchableOpacity onPress={() => navigation.navigate('DocHome')}>
      <Text style={styles.b2}>CONTROL DE DOCUMENTOS</Text>
      </TouchableOpacity>
     </Animatable.View>

     <Animatable.View animation="bounceInLeft" style={styles.container2}>
     <TouchableOpacity onPress={() => navigation.navigate('DocHome')} style={styles.button}>
        <Text style={styles.buttonText}>CARPETAS</Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('BuscDoc')} style={styles.button}>
        <Text style={styles.buttonText}>BUSCAR DOCUMENTO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EditHomeDoc')} style={styles.button}>
        <Text style={styles.buttonText}>EDITAR DOCUMENTO</Text>
      </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="bounceInLeft" style={styles.container4}>
        <Text style={styles.cell11}>DEPARTAMENTO: </Text>
        <View style={styles.table}>
      {/* Primera fila */}
      <View style={styles.row1}>
        <Text style={styles.cell1}>TIPO DE DOCUMENTO</Text>
        
      </View>
      {/* Resto de las filas */}
      <TouchableOpacity onPress={() => navigation.navigate('DocHome3')}>
      <View style={styles.row}>
        <Text style={styles.cell}>Instructivo de trabajo</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.cell}>Normatividad</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.cell}>Formato</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.cell}>Documentos externos</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.cell}>Documentos internos</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.cell}>Procedimiento</Text>
      </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 50,
        marginLeft:115,
        
      },
      container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginRight: 1000,
        
      },
      container4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
        marginRight: -25,
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
        marginLeft: 410,

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

    
    button: {
      backgroundColor: '#9F1B3B',
      borderRadius: 25,
      paddingVertical: 15,
      paddingHorizontal: 20,
      marginRight: 90,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },

    table: {
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
    },
    row1: {
      flexDirection: 'row',
      backgroundColor: '#1F3D6D',
      
    },
    cell: {
      flex: 1,
      borderWidth: 1,
      padding: 20,
      fontSize: 20,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
    },
    cell1: {
      flex: 1,
      borderWidth: 1,
      padding: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FFFF',
      fontSize: 20,
      
      width:700,
      backgroundColor: '#9F1B3B',
    },
    cell11: {
      flex: 1,
      
      padding: 10,
      fontWeight: 'bold',
      textAlign: 'left',
      color: 'BLACK',
      fontSize: 15,
      width:700,
      marginBottom:20,
      
    },
    
});
  
export default DocumentoScreen2;