import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const Banner2Screen = ({navigation }) => {
  return (  

    <View style={styles.header}>
        <View style={styles.container}>
        <Image source={require('../img/image30.png')} style={styles.bannerImage} />
       
      </View>

      <View  style={styles.container3}>
      <Image source={require('../img/image8.png')} style={styles.line} />

     <View style={styles.container2}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
     <Image source={require('../img/home.png')} style={styles.img} />
     </TouchableOpacity>
    
     <TouchableOpacity onPress={() => navigation.navigate('PolIG')}>
      <Text style={styles.b1}>Política</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SubEti')}>
      <Text style={styles.b2}>Subcomite de Ética y Prevención de Conflictos de Interés</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MecDen')}>
      <Text style={styles.b3}>Mecanismo de Denuncia</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Quejas')}>
      <Text style={styles.b4}>Protocolo de Actuación ante Situaciones de Acoso, Discriminacion y Violencia en el ITA</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Quejas')}>
      <Text style={styles.b5}>Plan de Trabajo Anual de SGIG del ITA</Text>
      </TouchableOpacity>


      </View>

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
      container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 50,
        
      },
      container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginRight: 1050,
        
      },
      bannerImage: {
        position: 'absolute',
        width: 1310,
        height: 160,
      },
      logoImage: {
        position: 'absolute',
        top: 25,
        left: 500,
        width: 270,
        height: 100,
      },
      img: {
        position: 'absolute',
        marginTop: -60,
        width: 50,
        height: 50,
        marginLeft: -110,
      },
      line: {
        position: 'absolute',
        width: 2360,
        height: 110,
        marginTop: -70,
        
      },
      b1: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'white', 
        fontSize: 25,
        marginTop: -50,
        marginLeft: -20,
      },
  
      b2: {
        position: 'absolute',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white', 
        fontSize: 17,
        width: 200,
        height: 200,
        marginTop: -60,
        marginLeft: 120,
      },

      b3: {
        position: 'absolute',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white', 
        fontSize: 19,
        width: 200,
        height: 200,
        marginTop: -60,
        marginLeft: 330,
      },
      b4: {
        position: 'absolute',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white', 
        fontSize: 18,
        width: 250,
        height: 250,
        marginTop: -80,
        marginLeft: 540,
      },

      b5: {
        position: 'absolute',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white', 
        fontSize: 20,
        width: 250,
        height: 250,
        marginTop: -70,
        marginLeft: 830,
      },
  });
  
export default Banner2Screen;