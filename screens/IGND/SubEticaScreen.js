import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking  } from 'react-native';
import HeaderScreen from '../comp/HeaderScreen';
import Banner from '../comp/BannerScreen';
import Banner2 from '../comp/Banner2Screen';
import Footer from '../comp/FooterScreen';


const SubEticaScreen = ({ navigation  }) => {

  const proceso_integracion = () => {
    const url = 'https://drive.google.com/file/d/1u7IKXH4h7XriopZH8Z_acjR1QKZGf8HR/view';
    Linking.openURL(url);
  };
  const reglameto_operacion = () => {
    const url = 'https://drive.google.com/file/d/1u7IKXH4h7XriopZH8Z_acjR1QKZGf8HR/view';
    Linking.openURL(url);
  };
    
    
  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation}/>

      <Banner />

      <Banner2 navigation={navigation}/>

     
     <View style={styles.container2}>

        <Text style={styles.b1}>
        Subcomité de Ética y Prevención de Conflictos de Interés
        </Text>

        <Text style={styles.b1_5}>
        Objetivo del Subcomité
        </Text>

        <Image source={require('../img/image7.png')} style={styles.line} />


        <Text style={styles.b2}>
        El TecNM integra un Comité de Ética y de Prevención de Conflictos de Interés en oficinas 
        centrales que actúa a través de los subcomités instalados en cada uno de los Institutos 
        Tecnológico y Centros cuyas funciones primordiales son las siguientes:
        </Text>

        <Text style={styles.b2}>
        I. Formular observaciones y recomendaciones en el caso de denuncias 
        derivadas del incumplimiento de los Códigos de Ética y de Conducta, 
        que consistirán en un pronunciamiento imparcial no vinculatorio, y 
        que se harán del conocimiento del (la) servidor (a) o servidoras y 
        servidores públicos involucrados y de sus superiores jerárquicos. 
        </Text>

        <Text style={styles.b2}>
        II. Dar vista al Órgano Interno de Control de las conductas de 
        servidoras y servidores públicos que puedan constituir responsabilidad 
        administrativa en términos de la normatividad aplicable en la materia. III. 
        Vigilancia del desarrollo e implementación de 
        prácticas de igualdad laboral y no discriminación.
        </Text>

        <Text style={styles.b1_5}>
        Integrantes
        </Text>

        <Image source={require('../img/image7.png')} style={styles.line} />

        <Text style={styles.b1}>
        Subcomité de Ética y Prevención de Conflictos de Interés del Instituto Tecnológico de Aguascalientes
        </Text>


        <View style={styles.table}>
      {/* Primera fila */}
      <View style={styles.row1}>
        <Text style={styles.cell1}>PUESTO</Text>
        <Text style={styles.cell1}>FOTO</Text>
        <Text style={styles.cell1}>MIEMBROS PROPIETARIOS</Text>
        <Text style={styles.cell1}>FOTO</Text>
        <Text style={styles.cell1}>MIEMBROS SUPLENTES</Text>
      </View>
      {/* Resto de las filas */}
      <View style={styles.row}>
        <Text style={styles.cell2}>PRECIDENCIA</Text>
        <Text style={styles.cell}>FOTO</Text>
        <Text style={styles.cell}>BENITO SÁNCHEZ RAYA</Text>
        <Text style={styles.cell}>FOTO</Text>
        <Text style={styles.cell}>JOSAFAT GARCÍA SERVIN</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell2}>SECRETARÍA(RIO) EJECUTIVA(O)</Text>
        <Text style={styles.cell}>FOTO</Text>
        <Text style={styles.cell}>ILSE JUENUEN DE LUNA CABALLERO</Text>
        <Text style={styles.cell}>FOTO</Text>
        <Text style={styles.cell}>ALEXIS REYES GÓMEZ</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell2}>SECRETARÍA(RIO) TECNICA(O)</Text>
        <Text style={styles.cell}>FOTO</Text>
        <Text style={styles.cell}>HERIBERTO JUÁREZ VALLES</Text>
        <Text style={styles.cell}>FOTO</Text>
        <Text style={styles.cell}>MARTHA ANGÉLICA GÓMEZ GUARDADO</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell2}>MIEMBROS</Text>
        <Text style={styles.cell}>FOTO</Text>
        <Text style={styles.cell}>MIRIAM MALO TORRES, DULCE MARÍA HERNÁNDEZ DE LA ROSA, JESÚS ALBERTO GONZÁLEZ HERMOSILLO</Text>
        <Text style={styles.cell}>FOTO</Text>
        <Text style={styles.cell}>HÉCTOR JESÚS MACÍAS FIGUEROA</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell2}>PERSONA ASESORA/CONSEJERA</Text>
        <Text style={styles.cell}>FOTO</Text>
        <Text style={styles.cell}>ANTONIO SAMUEL OLGUIN GALICIA</Text>
        <Text style={styles.cell}>FOTO</Text>
        <Text style={styles.cell}>FLOR MORENO TORRES</Text>
      </View>
    </View>







        <Text style={styles.b1_5}>
        Enlaces de Interes
        </Text>

        <Image source={require('../img/image7.png')} style={styles.line} />

        <TouchableOpacity onPress={proceso_integracion}>
        <Text style={styles.b7}>
        Proceso de Integracion e Instalación del Subcomite
        </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={reglameto_operacion}>
        <Text style={styles.b7}>
        Reglamento de Operación del Subcomité del Instituto Tecnológico de Aguascalientes
        </Text>
        </TouchableOpacity>

     </View>



     

   

<Footer />
    </ScrollView>

   
  );
};

const styles = StyleSheet.create({
    back:{
      backgroundColor: '#ffff',
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
        padding: 10,
      },
      cell1: {
        flex: 1,
        borderWidth: 1,
        padding: 7,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFF',
        fontSize: 17,
        textDecorationLine: 'underline',
      },
      cell2: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        fontWeight: 'bold',
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
   
    b1: {
      position: 'relative',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#1F3D6D',
      fontSize: 30,
      marginTop: 20,
      marginLeft: 5,
      marginBottom: 10,
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
      marginTop: 40, 
      marginBottom: 20,
    },
    b3: {
      position: 'relative',
      textAlign: 'left',
      color: 'black',
      fontSize: 19,
    },
    b4: {
      position: 'relative',
      color: 'black',
      textAlign: 'justify',
      fontWeight: 'bold',
      fontSize: 19,
      
    },
    b5: {
      position: 'relative',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#478AC9',
      fontSize: 30,
      
    },
    b6: {
      position: 'relative',
      fontWeight: 'bold',
      textAlign: 'left',
      color: '#1F3D6D',
      fontSize: 30,
      marginTop: 20,
      marginLeft: 5,
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

    web:{
      position: 'relative',
      textAlign: 'center',
      width: 100,
      height: 100,
      marginTop: 20,
    },
 
});
  
export default SubEticaScreen;