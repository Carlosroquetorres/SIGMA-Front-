import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet,TouchableHighlight, ScrollView, Linking, Modal } from 'react-native';
import HeaderScreen from '../comp/HeaderScreen';
import Banner from '../comp/BannerScreen';
import Banner2 from '../comp/Banner2Screen';
import Footer from '../comp/FooterScreen';


const DenAcosoScreen = ({ navigation  }) => {

  const [modalVisible1, setModalVisible1] = useState(false);

  const handleTextClick1 = () => {
    setModalVisible1(true); 
  };

  const formato = () => {
    const url = 'https://docs.google.com/document/d/1BvKZaTFC9C8-Sw6gbhF0oO8sDHjJGIYF/edit';
    Linking.openURL(url);
  };

  const procedi = () => {
    const url = 'https://drive.google.com/file/d/1HoUG13IGpjyoyTtdFibG0CY_ZLHxz5Kw/view';
    Linking.openURL(url);
  };

  const correo = () => {
    const destinatario = 'subcomitedeeticaita@aguascalientes.tecnm.mx';
    const url = `mailto:${destinatario}`;
    Linking.openURL(url);
  };
    
  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation}/>

      <Banner />

      <Banner2 navigation={navigation}/>

     
     <View style={styles.container2}>

        <Text style={styles.b1}>
        Mecanismos de Denuncias sobre Acoso, Discriminación y Violencia en el ITA 
        </Text>

        <View style={styles.container1}>
      <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('FormDA')}>
        <Text style={styles.text}>PRELLENAR FORMATO DE DENUNCIA</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TouchableHighlight style={styles.button} onPress={formato}>
        <Text style={styles.text2}>DESCARGAR FORMATO DENUNCIA EDITABLE</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TouchableHighlight style={styles.button} onPress={handleTextClick1}>
        <Text style={styles.text}>CONTACTO PERSONA ASESORA</Text>
      </TouchableHighlight>
        </View>

        <Text style={styles.b2}>
        El tratamiento de tu denuncia se lleva a cabo de manera confidencial con base en 
        lo establecido en los estatutos del TecNM y en el Protocolo de Actuación Ante 
        Situaciones de Acoso, Discriminación y Violencia en el Instituto Tecnológico de Aguascalientes. 
        </Text>

        <Text style={styles.b2}>
        En caso de Prellenar tu Formato de Denuncia o Descargar dicho formato 
        deberás enviarlos a través del correo electrónico <TouchableOpacity onPress={correo}><Text style={styles.b3}>subcomitedeeticaita@aguascalientes.tecnm.mx </Text> </TouchableOpacity>
        para que tu denuncia sea procesada y evaluada por el Subcomité de Ética y Prevención de Conflictos 
        de Interés del Instituto Tecnológico de Aguascalientes.
        </Text>

        <Text style={styles.b1_5}>
        Enviar Denuncia
        </Text>

        <Image source={require('../img/image7.png')} style={styles.line} />

        <Image source={require('../img/outlook.png')} style={styles.line2} />

        <Text style={styles.b1_5}>
        Enlaces de Interés
        </Text>


        <TouchableOpacity onPress={procedi}>
        <Text style={styles.b7}>
        Procedimiento para la prevencion, atención y sanción del Hostigamiento Sexual y Acoso Sexual en el TecNM
        </Text>
        </TouchableOpacity>

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
              <Text style={styles.titulo}>CONTACTOS</Text>
              <Text style={styles.contenido}>Contenido del pop-up aquí (contactos)</Text>
              
            </View>
          </View>
        </Modal>


     </View>



<Footer />
    </ScrollView>

   
  );
};

const styles = StyleSheet.create({
    back:{
      backgroundColor: '#ffff',
    },
      button: {
        borderRadius: 40,
        backgroundColor: '#1F3D6D',
        padding: 35,
        height:150,
        width:250,
      },
      separator: {
        width: 10, // Ajusta el ancho del espaciado entre los botones
      },
      container1: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    container2: {
        
        marginTop: 70,
        marginBottom: 200,
        marginLeft: 70,
        marginRight: 70,
        
      },

      line: {
        position: 'relative',
        width: 370,
        height: 10,
        marginLeft: 400,
        marginRight: 400,
        
      },
      line2: {
        position: 'relative',
        marginTop: 30,
        width: 250,
        height: 250,
        marginLeft: 460,
        marginRight: 460,
        
      },
      text:{
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffff',
        fontSize: 20,
      },
      text2:{
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffff',
        fontSize: 18,
      },
   
    b1: {
      position: 'relative',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#1F3D6D',
      fontSize: 30,
      marginTop: 20,
      marginLeft: 5,
    },
    b1_5: {
        position: 'relative',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#9F1B3B',
        fontSize: 30,
        marginTop: 20,
        marginLeft: 5,
      },

    b2: {
      position: 'relative',
      color: 'black',
      textAlign: 'justify',
      fontSize: 19,
      marginTop: 30, 
      marginBottom: 20,
    },
    b3: {
        position: 'relative',
        textAlign: 'center',
        color: 'blue',
        fontSize: 19,
      },
    b7: {
        position: 'relative',
        textAlign: 'center',
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 5,
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
  
export default DenAcosoScreen;