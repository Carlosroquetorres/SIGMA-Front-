import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import HeaderScreen from '../comp/HeaderScreen';
import Banner from '../comp/BannerScreen';
import Banner2 from '../comp/Banner2Screen';
import Footer from '../comp/FooterScreen';


const PoliticIguaScreen = ({ navigation  }) => {
  
  const Certificado = () => {
    const url = 'https://drive.google.com/file/d/1u7IKXH4h7XriopZH8Z_acjR1QKZGf8HR/view';
    Linking.openURL(url);
  };

  const Codigo_etica = () => {
    const url = 'https://drive.google.com/file/d/1jDqV226YmbZtxJAjXQ8LxFJW41SAaD8Q/view';
    Linking.openURL(url);
  };

  const sistema_gestion = () => {
    const url = 'https://www.tecnm.mx/?vista=Sistema_Gestion_Igualdad';
    Linking.openURL(url);
  };

  const norma_mexicana = () => {
    const url = 'https://www.gob.mx/inmujeres/acciones-y-programas/norma-mexicana-nmx-r-025-scfi-2015-en-igualdad-laboral-y-no-discriminacion';
    Linking.openURL(url);
  };

  const prontuario = () => {
    const url = 'https://www.tecnm.mx/archivos/anexos/PRONTUARIO%20-%20Difusion%20Digital.pdf?pdf=224253';
    Linking.openURL(url);
  };
    
  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation}/>

      <Banner />

      <Banner2 navigation={navigation}/>

     
     <View style={styles.container2}>

        <Text style={styles.b1}>
        PolÍtica de Igualdad de Género y no Discriminación del TecNM
        </Text>

        <Text style={styles.b2}>
        El Tecnológico Nacional de México a través de su Director General, 
        manifiesta su compromiso con la defensa de los derechos humanos, 
        por lo que en la esfera de su competencia garantizará el principio de 
        igualdad sustantiva entre mujeres y hombres en el ejercicio de sus derechos 
        laborales, así como el derecho fundamental a la no discriminación en los procesos de ingreso, 
        formación y promoción profesional, además de sus condiciones de trabajo,
        quedando prohibido el maltrato, violencia y segregación de las autoridades hacia el 
        personal y entre el personal en materia de cualquier forma de distinción exclusión o 
        restricción basada en el origen étnico o nacional, apariencia física, cultura, sexo, 
        género, edad, discapacidad, condición social o económica, condiciones de salud, embarazo, 
        lengua, religión, opiniones, preferencias sexuales, estado civil, situación migratoria o cualquier 
        otra, que tenga por efecto impedir o anular el reconocimiento o el ejercicio de los derechos y la 
        igualdad real de oportunidades.
        </Text>

        <Text style={styles.b1}>
        Certificado del Sistema de Gestión a nivel TecNM
        </Text>

        <TouchableOpacity onPress={Certificado}>
        <Text style={styles.b8}>
        Certificado del Sistema de Gestión a nivel TecNM
        </Text>
        </TouchableOpacity>

        <Text style={styles.b1}>
        Cero Tolerancia
        </Text>

        <Text style={styles.b2}>
        El Tecnológico Nacional de México declara  «CERO TOLERANCIA» a las conductas de hostigamiento 
        sexual y acoso sexual, cometidas por servidoras y servidores públicos que laboran en 
        esta institución educativa nacional, sus institutos, centros o unidades. 
        Ante la comisión de una conducta de hostigamiento y acoso sexual , cualquier 
        personal podrá presentar su denuncia ante el Comité de Ética y Prevención de Conflictos de
         Interés del Tecnológico Nacional de México (TecNM), así como sus subcomités que se conformaran 
         en cada plantel de conformidad con el procedimiento para la  prevención, atención y sanción del 
         hostigamiento sexual y acoso sexual del Tecnológico  Nacional de México , así como el procedimiento 
         para la prevención, atención de denuncias sobre actos u omisiones cometidos por servidoras  y 
         servidores públicos  en contra de las normas éticas que rigen su actuación en el Tecnológico 
         Nacional de México que para el efecto se aprueben.
        </Text>

        <Text style={styles.b1}>
        Normas del Ética y Conducta de los Servidores Públicos del 
        TecNM - ITA
        </Text>

        <Text style={styles.b2}>
        A todo el personal del TecNM le corresponde la misión de impulsar con responsabilidad, honradez y honestidad establecida en la Política de Igualdad Laboral y No Discriminación del Tecnológico Nacional de México, actuando con apego a los 
        <Text style={styles.b4}> PRINCIPIOS CONSTITUCIONALES </Text>que toda y todo servidor público debe observar en el desempeño de su empleo, cargo, comisión o función que a continuación se describen: 
        </Text>

<Text style={styles.b3}>
•Legalidad
</Text>
<Text style={styles.b3}>
•Honradez
</Text>
<Text style={styles.b3}>
•Lealtad
</Text>
<Text style={styles.b3}>
•Imparcialidad
</Text>
<Text style={styles.b3}>
•Eficiencia
</Text> 

<Text style={styles.b2}>
Valores que toda y todo servidor público debe anteponer en el desempeño de su empleo, cargo, 
comisión o funciones: 
</Text>

<Text style={styles.b3}>
1.Interés Público
</Text>
<Text style={styles.b3}>
2.Respeto
</Text>
<Text style={styles.b3}>
3.Respeto a los Derechos Humanos
</Text>
<Text style={styles.b3}>
4.Igualdad y No Discriminación
</Text>
<Text style={styles.b3}>
5.Equidad de Género
</Text>
<Text style={styles.b3}>
6.Entorno cultural y Ecológico
</Text>
<Text style={styles.b3}>
7.Integridad
</Text>
<Text style={styles.b3}>
8.Cooperación
</Text>
<Text style={styles.b3}>
9.Liderazgo
</Text>
<Text style={styles.b3}>
10.Transparencia
</Text>
<Text style={styles.b3}>
11.Rendición de cuentas 
</Text>

<Text style={styles.b2}>
Las y los servidores públicos  que integran el TecNM tienen la obligación de conocer, 
cumplir y conducirse en su actuación diaria, conforme a las normas establecidas en el 
Código de Ética de los Servidores Públicos del Gobierno Federal, las Reglas de  Integridad 
para el ejercicio de la función pública, así como los Códigos de Ética y de Conducta del 
Tecnológico Nacional de México.
</Text>

        <TouchableOpacity onPress={Codigo_etica}>
        <Text style={styles.b5}>
            Código de Ética y de Conducta de Servidoras y Servidores Público Federal del Tecnológico Nacional de México
        </Text>
        </TouchableOpacity>



        <Text style={styles.b6}>
        Otros Enlaces de Interés
        </Text>

        <Image source={require('../img/image7.png')} style={styles.line} />

        <TouchableOpacity onPress={sistema_gestion}>
        <Text style={styles.b7}>
        Sistema de Gestion de Igualdad de Género y No Discriminación (SGIG) TecNM
        </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={norma_mexicana}>
        <Text style={styles.b7}>
        Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación
        </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={prontuario}>
        <Text style={styles.b7}>
        Prontuario de Lenguaje Incluyente
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
    
    container2: {
        
        marginTop: 70,
        marginBottom: 200,
        marginLeft: 70,
        marginRight: 70,
        
      },

      line: {
        position: 'relative',
        width: 500,
        height: 10,
        marginLeft: 5,
        
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
      textAlign: 'left',
      color: 'blue',
      textDecorationLine: 'underline',
      fontSize: 20,
      marginTop: 20,
      marginLeft: 5,
    },
    b8: {
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
  
export default PoliticIguaScreen;