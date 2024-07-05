import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, Button, Picker} from 'react-native';
import HeaderScreen from '../comp/HeaderScreen';
import Banner from '../comp/BannerScreen';
import Footer from '../comp/FooterScreen';

const DocumentoScreen = ({ navigation  }) => {
  const [buscarNom, setBuscarnom] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [TipoDoc, setTipodoc] = useState('');
  const [DepDoc, setDepdoc] = useState('');


  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation}/>

      <Banner />

      <View>
      <Image source={require('../img/image8.png')} style={styles.line} />
      <Text style={styles.text}>CONTROL DE DOCUMENTOS</Text>
      </View>
      <View>
      <Image source={require('../img/image8.png')} style={styles.line2} />
      <Text style={styles.text2}>BUSCAR DOCUMENTO</Text>
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

          <View>
          <Image source={require('../img/image8.png')} style={styles.line3} />
          <Text style={styles.text1}>
                Buscar
            </Text>
          <Text style={styles.text11}>
                Por nombre del documento
            </Text>
                <TextInput
                
                style={styles.input}
                placeholder="Ingrese nombre o codigo del documento"
                value={buscarNom}
                onChangeText={setBuscarnom}
            />
            <View style={styles.buttonContainer}>
            <Button style={styles.button} title="Buscar" color="#1F3D6D"/>
            </View>
            <TouchableOpacity onPress={toggleVisibility}>
            <Text style={styles.text111}>
                Busqueda avanzada
            </Text>
            </TouchableOpacity>
          </View>
        
        </Animatable.View>

        {isVisible && (
        <Animatable.View animation="bounceInLeft" style={styles.container5}>

          <View>
          <Image source={require('../img/image8.png')} style={styles.line4} />
          <Text style={styles.text3}>
                Tipo de documentos
            </Text>
          
            <Picker
            style={styles.input2}
            selectedValue={TipoDoc}
            onValueChange={(itemValue) => setTipodoc(itemValue)}
        >
            <Picker.Item label="Ninguno" value="Ninguno" />
            <Picker.Item label="Instructivo de trabajo" value="Instructivo de trabajo" />
            <Picker.Item label="Normatividad" value="Normatividad" />
            <Picker.Item label="Formato" value="Formato" />
            <Picker.Item label="Documentos externos" value="Documentos externos" />
            <Picker.Item label="Documentos internos" value="Documentos internos" />
            <Picker.Item label="Procedimiento" value="Procedimiento" />
            
           
        </Picker> 
            <Text style={styles.text5}>
                Area
            </Text>
            <Picker
            style={styles.input3}
            selectedValue={DepDoc}
            onValueChange={(itemValue) => setDepdoc(itemValue)}
        >
            <Picker.Item label="Ninguno" value="Ninguno" />
            <Picker.Item label="Direccion" value="Direccion" />
            <Picker.Item label="Coordinación de innovación, equidad y calidad" value="Coordinación de innovación, equidad y calidad" />
            <Picker.Item label="Subdireccion academica" value="Subdireccion academica" />
            <Picker.Item label="Subdireccion de planeacion y vinculacion" value="Subdireccion de planeacion y vinculacion" />
            <Picker.Item label="Subdireccion de servicios administrativos" value="Subdireccion de servicios administrativos" />
            <Picker.Item label="Departamento de estudios profesionales" value="Departamento de estudios profesionales" />
            <Picker.Item label="Departamento de desarrollo academico" value="Departamento de desarrollo academico" />
            <Picker.Item label="Departamento de ciencias basicas" value="Departamento de ciencias basicas" />
            <Picker.Item label="Departamento de ciencias economicas-administrativas" value="Departamento de ciencias economicas-administrativas" />
            <Picker.Item label="Departamento de ing. en sistemas y computo" value="Departamento de ing. en sistemas y computo" />
            <Picker.Item label="Departamento de ing. industrial" value="Departamento de ing. industrial" />
            <Picker.Item label="Departamento de ing. metal-mecanica" value="Departamento de ing. metal-mecanica" />
            <Picker.Item label="Departamento de ing. quimica y bioquimica" value="Departamento de ing. quimica y bioquimica" />
            <Picker.Item label="Departamento de ing. electrica y electronica" value="Departamento de ing. electrica y electronica" />
            <Picker.Item label="Departamento de estudios de posgrado e investigacion" value="Departamento de estudios de posgrado e investigacion" />
            <Picker.Item label="Coordinación de lengua extgranjera" value="Coordinación de lengua extgranjera" />
            <Picker.Item label="Coordinación de educasion a distancia" value="Coordinación de educasion a distancia" />
            <Picker.Item label="Departamento de planeacion, programacion y prespupuestacion" value="Departamento de planeacion, programacion y prespupuestacion" />
            <Picker.Item label="Departamento de servicios escolares" value="Departamento de servicios escolares" />
            <Picker.Item label="Departamento de comunicasion y difucion" value="Departamento de comunicasion y difucion" />
            <Picker.Item label="Departamento de gestion tecnologica y vinculacion" value="Departamento de gestion tecnologica y vinculacion" />
            <Picker.Item label="Departamento de informacion" value="Departamento de informacion" />
            <Picker.Item label="Departamento de actividades extraescolares" value="Departamento de actividades extraescolares" />
            <Picker.Item label="Departamento de recursos humanos" value="Departamento de recursos humanos" />
            <Picker.Item label="Departamento de mantenimiento de equipo" value="Departamento de mantenimiento de equipo" />
            <Picker.Item label="Departamento de recursos materiales y servicios" value="Departamento de recursos materiales y servicios" />
            <Picker.Item label="Departamento de centro de computo" value="Departamento de centro de computo" />
            <Picker.Item label="Departamento de recursos financieros" value="Departamento de recursos financieros" />
        </Picker>

            <View style={styles.buttonContainer2}>
            <Button style={styles.button} title="Buscar" color="#1F3D6D"/>
            </View>
            
          </View>

        </Animatable.View>
        )}
       
       <View style={styles.tablee}>
       <View style={styles.table}>
          {/* Primera fila */}
          <View style={styles.row1}>
            <Text style={styles.cell1}>DESCARGA</Text>
            <Text style={styles.cell1}>CODIGO</Text>
            <Text style={styles.cell1}>NOMBRE DEL DOCUMENTO</Text>
            <Text style={styles.cell1}>REVICION</Text>
            <Text style={styles.cell1}>AREA</Text>
            <Text style={styles.cell1}>DEPARTAMENTO</Text>
            <Text style={styles.cell1}>PROCESO O SERVICIO</Text>
          </View>
          {/* Resto de las filas */}
          <View style={styles.row}>
            <Text style={styles.cell2}>*</Text>
            <Text style={styles.cell}>--</Text>
            <Text style={styles.cell}>--</Text>
            <Text style={styles.cell}>--</Text>
            <Text style={styles.cell}>--</Text>
            <Text style={styles.cell}>--</Text>
            <Text style={styles.cell}>--</Text>
          </View>
          
          </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 50,
        marginLeft:145,
        
      },
      container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 110,
        marginRight: 950,
        
      },
      container4: {
        flex: 1,
        marginBottom: 250,
        marginTop:20,
        
      },
      container5: {
        flex: 1,
        marginTop:20,
        marginBottom:400,
        
      },
      line3: {
        position: 'absolute',
        width: 1000,
        height: 250,
        marginRight:100,
        marginLeft:170,
        
      },
      line4: {
        position: 'absolute',
        width: 1000,
        height: 400,
        marginRight:100,
        marginLeft:170,
        
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
    text2: {
      position: 'absolute',
      fontWeight: 'bold',
      color: '#ffff', 
      fontSize: 35,
      marginTop: 80,
      marginLeft: 460,
      fontStyle: 'italic',
      textDecorationLine: 'underline',
  },
  line2: {
    position: 'absolute',
    width: 1330,
    height: 60,
    marginTop: 80,
    
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
    tablee: {
   
      height:1000,
      width:1000,
      marginLeft:170,
      marginRight:170,
      marginBottom:-750,
      marginTop:50,
    },

    table: {
      flexDirection: 'column',
      marginTop:100,
      marginBottom:100,
      
    },
    row: {
      flexDirection: 'row',
    },
    row1: {
      flexDirection: 'row',
      backgroundColor: '#9F1B3B',
      
    },
    cell: {
      flex: 1,
      borderWidth: 1,
      padding: 20,
      fontSize: 20,
      textAlign: 'center',
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
    text1: {
      position: 'absolute',
      fontWeight: 'bold',
      color: '#ffff', 
      fontSize: 25,
      marginBottom: 20,
      marginTop:20,
      marginRight: 600,
      marginLeft:600,
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
    text111: {
      position: 'absolute',
      fontSize: 19,
      width:"100%",
      marginBottom: 200,
      marginTop:200,
      marginRight: 950,
      marginLeft:950,
      color: 'blue',
      textDecorationLine: 'underline',
    },
    text3: {
      position: 'absolute',
      fontWeight: 'bold',
      color: '#ffff', 
      fontSize: 25,
      width:"100%",
      marginBottom: 20,
      marginTop:20,
      marginRight: 530,
      marginLeft:530,
    },
    text33: {
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
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 90,
      marginTop:90,
      marginLeft:550,
      marginRight:550,
      paddingHorizontal: 10,
      width: 500,
      color: 'grey',
      backgroundColor: '#ffff', 
    },
    buttonContainer: {
      position: 'absolute',
      flexDirection: 'row',
      marginBottom: 100,
      marginTop:100,
      marginRight: 1080,
      marginLeft: 1080,
      
  },
  checkboxRow: {
    position: 'absolute',
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginTop:100,
    marginRight: 200,
    marginLeft: 200,
  },
  checkboxRow2: {
    position: 'absolute',
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginTop:100,
    marginRight: 400,
    marginLeft: 400,
  },
  checkboxRow3: {
    position: 'absolute',
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginTop:100,
    marginRight: 620,
    marginLeft: 620,
  },
  checkboxRow4: {
    position: 'absolute',
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginTop:100,
    marginRight: 730,
    marginLeft: 730,
  },
  checkboxRow5: {
    position: 'absolute',
    width:"20%",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginTop:100,
    marginRight: 930,
    marginLeft: 930,
  },
  checkboxRow6: {
    position: 'absolute',
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginTop:150,
    marginRight: 200,
    marginLeft: 200,
  },
  text4: {
    position: 'absolute',
    fontWeight: 'bold',
    color: '#ffff', 
    fontSize: 17,
    marginRight: 50,
    marginLeft: 50,
    textAlign: 'center',
  },
  text5: {
    position: 'absolute',
    fontWeight: 'bold',
    color: '#ffff', 
    fontSize: 25,
    width:"100%",
    marginTop:200,
    marginRight: 610,
    marginLeft:610,
  },
  text6: {
    position: 'absolute',
    fontWeight: 'bold',
    color: '#ffff', 
    fontSize: 15,
    marginRight: 50,
    marginLeft: 50,
    textAlign: 'center',
    
  },
  checkboxRow11: {
    position: 'absolute',
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 250,
    marginTop:250,
    marginRight: 200,
    marginLeft: 200,
  },
  checkboxRow22: {
    position: 'absolute',
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 250,
    marginTop:250,
    marginRight: 440,
    marginLeft: 440,
  },
  checkboxRow33: {
    position: 'absolute',
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 250,
    marginTop:250,
    marginRight: 820,
    marginLeft: 820,
  },
  buttonContainer2: {
    position: 'absolute',
    flexDirection: 'row',
    marginBottom: 330,
    marginTop:330,
    marginRight: 610,
    marginLeft: 610,
    
    },
    table: {
      flexDirection: 'column',
      
    },
    row: {
      flexDirection: 'row',
    },
    row1: {
      flexDirection: 'row',
      backgroundColor: '#9F1B3B',
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
    input2: {
      position: 'absolute',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      width: '50%',
      color: 'grey',
      marginLeft:330,
      marginBottom: 10,
      marginTop:90,
      
    },
    input3: {
      position: 'absolute',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop:250,
      marginBottom: 10,
      marginLeft:330,
      paddingHorizontal: 10,
      width: '50%',
      color: 'grey', 
    },
    
});
  
export default DocumentoScreen;