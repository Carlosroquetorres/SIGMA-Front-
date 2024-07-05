import React, { useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ScrollView,  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import HeaderScreen from './comp/HeaderScreen';
import Banner from './comp/BannerScreen';
import Footer from './comp/FooterScreen';

const HomeScreen = ({ navigation }) => {
    const [modalVisible1, setModalVisible1] = useState(false); // Estado para controlar la visibilidad del pop-up
    const [modalVisible2, setModalVisible2] = useState(false); 
    const [modalVisible3, setModalVisible3] = useState(false); 
    const [modalVisible4, setModalVisible4] = useState(false); 

    const handleTextClick1 = () => {
      setModalVisible1(true); 
    };
    const handleTextClick2 = () => {
      setModalVisible2(true); 
    };
    const handleTextClick3 = () => {
      setModalVisible3(true); 
    };
    const handleTextClick4 = () => {
      setModalVisible4(true); 
    };


    
    
  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation} />

      <Banner />

        <Animatable.View animation="lightSpeedIn" style={styles.container}>
        <TouchableOpacity onPress={handleTextClick1}>
        <Text style={styles.text}>POLÍTICA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTextClick2}>
        <Text style={styles.text}>OBJETIVOS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTextClick3}>
        <Text style={styles.text}>ALCANCE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTextClick4}>
        <Text style={styles.text}>UNIDAD DIRECTIVO</Text>
        </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="bounceInLeft" style={styles.container2} >
        <TouchableOpacity onPress={() => navigation.navigate('Quejas')} >
        <Image style={styles.imag} source={require('./img/quejasysugerencias.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DocHome')}>
        <Image style={styles.imag} source={require('./img/sistemadecontroldedocumentos.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.imag} source={require('./img/sistemadeautorias.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.imag} source={require('./img/sistemadeaccionescorrectivas.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TramitesHome')}>
        <Image style={styles.imag} source={require('./img/institucionesdetramitesyservicios.png')} />
        </TouchableOpacity>
        </Animatable.View>

        
        <Modal 
          visible={modalVisible1} // modal de politica
          animationType="slide"
          transparent={true} 
          onRequestClose={() => {
            setModalVisible1(!modalVisible1);
          }}
           >

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible1(false)}>
                <Text style={styles.cerrar}>Cerrar</Text>
              </TouchableOpacity>
              <Text style={styles.titulo}>TITULO DE MUESTRA</Text>
              <Text style={styles.contenido}>Contenido del pop-up aquí (politica)</Text>
              
            </View>
          </View>
        </Modal>

        <Modal 
          visible={modalVisible2} // modal de objetivos
          animationType="slide"
          transparent={true} 
          onRequestClose={() => {
            setModalVisible2(!modalVisible2);
          }}
           >

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible2(false)}>
            <Text style={styles.cerrar}>Cerrar</Text>
              </TouchableOpacity>
              <Text style={styles.titulo}>TITULO DE MUESTRA</Text>
              <Text style={styles.contenido}>Contenido del pop-up aquí (objetivos)</Text>
              
            </View>
          </View>
        </Modal>

        <Modal 
          visible={modalVisible3} // modal de alcance
          animationType="slide"
          transparent={true} 
          onRequestClose={() => {
            setModalVisible3(!modalVisible3);
          }}
           >

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible3(false)}>
            <Text style={styles.cerrar}>Cerrar</Text>
              </TouchableOpacity>
              <Text style={styles.titulo}>TITULO DE MUESTRA</Text>
              <Text style={styles.contenido}>Contenido del pop-up aquí (alcance)</Text>
              
            </View>
          </View>
        </Modal>

        <Modal 
          visible={modalVisible4} // modal de unidad directiva
          animationType="slide"
          transparent={true} 
          onRequestClose={() => {
            setModalVisible4(!modalVisible4);
          }}
           >

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible4(false)}>
            <Text style={styles.cerrar}>Cerrar</Text>
              </TouchableOpacity>
              <Text style={styles.titulo}>TITULO DE MUESTRA</Text>
              <Text style={styles.contenido}>Contenido del pop-up aquí (unidad directiva)</Text>
              
            </View>
          </View>
        </Modal>
   

<Footer />
    </ScrollView>

   
  );
};

const styles = StyleSheet.create({
    back:{
      backgroundColor: '#ffff',
      
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        backgroundColor: '#ffff',
      },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 200,
        
      },
    text:{
        color: '#1F3D6D',
        fontWeight: 'bold',
        marginLeft: 50,
        marginRight: 80,
        fontSize: 23,
    },
    imag:{
        width: 190,
        height: 190,
        marginLeft: 15,
        marginRight: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo transparente grisáceo
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      cerrar:{
        marginLeft: 200,
        marginBottom: 5,
        color:'red',
      },
      titulo:{
        fontSize: 23,
        fontWeight: 'bold',
      },
      contenido:{
        marginTop: 5,
        fontSize: 15,
        textAlign: 'justify',
      },
    
    
});
  
export default HomeScreen;