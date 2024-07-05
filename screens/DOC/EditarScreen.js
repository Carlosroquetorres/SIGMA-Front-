import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Button, TextInput, Picker,Modal } from 'react-native';
import HeaderScreen from '../comp/HeaderScreen';
import Banner from '../comp/BannerScreen';
import Footer from '../comp/FooterScreen';
const EditarScreen = ({ navigation  }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [TipoDoc, setTipodoc] = useState('');
  const [count, setCount] = useState(0); // Valor inicial del contador
  const [DepDoc, setDepdoc] = useState('');
  const [user, setUser] = useState('');
  const [Descript, setDescript] = useState('');
  const [DescriptEdit, setDescriptEdit] = useState('');

  const increment = () => {
    setCount(count + 1); // Incrementar el contador en 1
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); // Reducir el contador en 1 si es mayor que cero
    }
  };
  const handleName = (text) => {
    setName(text);
  };
  const handleCode = (text) => {
    setCode(text);
  };
  const handleUser = (text) => {
    setUser(text);
  };
  const handleDescript = (text) => {
    setDescript(text);
  };
  const handleDescriptEdit = (text) => {
    setDescriptEdit(text);
  };

  const closeModalAndNavigate = () => {

    setModalVisible(false);
    navigation.navigate('EditarDoc'); // Cambiar si es necesario 
  };

  const handleFormSubmit2 = () => {

    if (!name.trim() || !code.trim() || !user.trim() || !Descript.trim() || !DescriptEdit.trim()) {
      setError('Error , Por favor, complete todos los campos del archivo. (nombre , codigo , usuario quien edita, descripcion del archivo y descripcion de la edicion)');
      return;
    }
    if (Descript.trim().length < 20) {
      setError('La descripcion del archivo debe tener al menos 20 caracteres.');
      return;
    }

    if (Descript.trim().length > 2000) {
      setError('La descripcion del archivo no puede exceder los 1000 caracteres.');
      return;
    }

    if (DescriptEdit.trim().length < 20) {
      setError('La descripcion de edicion debe tener al menos 20 caracteres.');
      return;
    }

    if (DescriptEdit.trim().length > 2000) {
      setError('La descripcion de edicion no puede exceder los 1000 caracteres.');
      return;
    }

    const forme = {name, code, TipoDoc,count:parseInt(count), DepDoc, user,
      Descript};
  
    fetch('http://localhost:8085/saveFormAco', {// la localizacion no es correcta cambiar
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(forme),
    })
    .then(response => {
      if (response.ok) {
        console.log('Archivo guardado correctamente');
        // Extraer el ID del formulario guardado
        return response.json();
      } else {
        console.error('Error al guardar archivo');
        throw new Error('Error al guardar archivo');
      }
    })
    .catch(error => {
      console.error('Error de red:', error);
    });
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
      <Text style={styles.text22}>EDITAR DOCUMENTO</Text>
      </View>  



     <Animatable.View animation="bounceIn" style={styles.container3}>
     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
     <Image source={require('../img/home.png')} style={styles.img} />
     </TouchableOpacity>
     <Text style={styles.b1}>-</Text>
     <TouchableOpacity onPress={() => navigation.navigate('DocHome')}>
      <Text style={styles.b2}>CONTROL DE DOCUMENTOS</Text>
      </TouchableOpacity>
      <Text style={styles.b1}>-</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EditHomeDoc')}>
      <Text style={styles.b3}>EDITAR DOCUMENTO</Text>
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

        <Animatable.View animation="bounceInLeft" style={styles.container5}>

          <View style={styles.table}>
        {/* Primera fila */}
        <View style={styles.row1}>
          <Text style={styles.cell1}>DESCARGAR</Text>
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

        </Animatable.View>

        <Animatable.View animation="bounceInLeft" style={styles.container6}>

          <View style={styles.table}>
        {/* Primera fila */}
        <View style={styles.row1}>
          <Text style={styles.cell1}>FICHA DE CREACION</Text>
          <Text style={styles.cell1}>USUARIO QUIEN LO CREO</Text>
          <Text style={styles.cell1}>ULTIMA FECHA DE ACTUALIZACION</Text>
          <Text style={styles.cell1}>USUARIO QUE LO MODIFICO</Text>
          <Text style={styles.cell1}>DESCRIPCION</Text>
          <Text style={styles.cell1}>DESCRIPCION DEL ULTIMO CAMBIO</Text>
        </View>
        {/* Resto de las filas */}
        <View style={styles.row}>
          <Text style={styles.cell2}>*</Text>
          <Text style={styles.cell}>--</Text>
          <Text style={styles.cell}>--</Text>
          <Text style={styles.cell}>--</Text>
          <Text style={styles.cell}>--</Text>
          <Text style={styles.cell}>--</Text>
        </View>
       
      </View>

        </Animatable.View>

        <Animatable.View animation="bounceInLeft" style={styles.container4}>
        
        <View style={styles.container1}>
            <Text style={styles.text1}>
                Nombre
            </Text>
                <TextInput
                
                style={styles.input}
                placeholder="Ingrese el Nombre"
                value={name}
                onChangeText={handleName}
            />
            <Text style={styles.text2}>
                Código
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese el codigo del documento"
                value={code}
                onChangeText={handleCode}
            />
            
        </View>
       
        <View style={styles.container}> 
            <Text style={styles.text5}>
                Tipo del document
            </Text>
        <Text style={styles.text6}>
                Revicion
            </Text>
          
        </View>
        <View style={styles.container}>
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
        <View style={styles.containerr}>
        <Button title="<" onPress={decrement} color="#9F1B3B"/>
        <Text style={styles.counter}>{count}</Text>
        <Button title=">" onPress={increment} color="#9F1B3B"/>
        </View>
          </View>
          <View style={styles.container}>
          <Text style={styles.text7}>
                Departamento del documento
            </Text>
            <Text style={styles.text8}>
                Usario quien edita
            </Text>
          </View>
          <View style={styles.container}>
          <Picker
            style={styles.input}
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
        <TextInput
                style={styles.input}
                placeholder="Ingrese nombre de quien edita"
                value={user}
                onChangeText={handleUser}
            />
          </View>
          <View style={styles.containerf}>
          <Text style={styles.text9}>
                  Descripcion del documento
              </Text>
            <TextInput
              style={styles.input3}
              placeholder="Ingrese la descripcion del documento"
              multiline
              numberOfLines={10}
              value={Descript}
              onChangeText={handleDescript}
            />
            
            <Text style={styles.text10}>
                  Subir documento
              </Text>
              <View style={styles.containerr}>
              <Button title="Subir" color="#9F1B3B"/>
              </View>
              
          </View>
          <View style={styles.containerf}>
            <Text style={styles.text9}>
                    Descripcion de la edicion
                </Text>
              <TextInput
                style={styles.input4}
                placeholder="Ingrese la descripcion de la edicion"
                multiline
                numberOfLines={10}
                value={DescriptEdit}
                onChangeText={handleDescriptEdit}
              />
          </View>
          <TouchableOpacity onPress={handleFormSubmit2} style={styles.buttonn}>
            <Text style={styles.buttonText}>Subir Documento</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¡El formulario se ha enviado correctamente!</Text>
            <Button title="OK" onPress={closeModalAndNavigate} />
          </View>
        </View>
      </Modal>

      <Modal 
          animationType="slide"
          transparent={true}
          visible={!!error} 
          onRequestClose={() => setError('')
          }>
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image source={require('../img/error.png')} style={styles.img2}/>
          <Text style={styles.modalText2}>{error}</Text>
          <Button title="Cerrar" onPress={() => setError('')} color="#1F3D6D"/>
        </View>
        </View>
      </Modal>
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
        marginBottom: 80,
        marginLeft:100,
        
      },
      container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 110,
        marginRight: 800,
        
      },
      container4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 315,
        marginRight: -25,
      },
      container5: {
        flex: 1,
        marginRight:50,
        marginLeft:50,
        marginBottom: -30,
        marginTop:-10,
      },
      container6: {
        flex: 1,
        marginRight:50,
        marginLeft:50,
        marginBottom: 80,
        marginTop:-50,
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
        marginLeft: 410,

    },
    text22: {
      position: 'absolute',
      fontWeight: 'bold',
      color: '#ffff', 
      fontSize: 35,
      marginTop: 80,
      marginLeft: 465,
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

    
    button: {
      backgroundColor: '#9F1B3B',
      borderRadius: 25,
      paddingVertical: 15,
      paddingHorizontal: 20,
      marginRight: 90,
    },
    buttonn: {
      backgroundColor: '#9F1B3B',
      
      paddingVertical: 15,
      paddingHorizontal: 20,
      width:300,
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
    container1: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
      width: 1000,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
      width: 1000,
    },
    containerf: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
      width: 1000,
      marginTop:-70,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      width: '80%',
      color: 'grey', 
    },
    input2: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      width: '50%',
      color: 'grey', 
      marginBottom: 10,
      marginTop:20,
      
    },
    input3: {
      height: 100,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      width: '50%',
      color: 'grey', 
      marginBottom: 10,
      marginTop:90,
      marginRight:50,
      
    },
    input4: {
      height: 100,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      width: '100%',
      color: 'grey', 
      marginBottom: 10,
      marginTop:90,
      
      
    },
    text1: {
      position: 'absolute',
      fontWeight: 'bold',
      color: 'black', 
      fontSize: 15,
      marginBottom: 90,
      marginRight: 940,
      
    },
    text2: {
      position: 'absolute',
      fontWeight: 'bold',
      color: 'black', 
      fontSize: 15,
      marginBottom: 90,
      marginRight: -60,
      
    },
    text3: {
      position: 'absolute',
      fontWeight: 'bold',
      color: 'black', 
      fontSize: 15,
      marginBottom: 90,
      marginLeft: -850,
      marginTop:50,
    },
    counter: {
      fontSize: 24,
      marginHorizontal: 10,
    },
    containerr: {
      flexDirection: 'row',
      marginTop: 20,
      padding:10,
      marginRight:400,
    },
    containerrf: {
      flexDirection: 'row',
      marginTop: 20,
    },
    checkboxRow: {
      position: 'absolute',
      width:"100%",
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginTop:60,
      marginRight: 40,
     
    },
    checkboxRow2: {
      position: 'absolute',
      width:"100%",
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginTop:60,
      marginLeft: 340,
     
    },
    checkboxRow3: {
      position: 'absolute',
      width:"100%",
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginTop:60,
      marginLeft: 750,
      
    },
    checkboxRow4: {
      position: 'absolute',
      width:"100%",
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginTop:60,
      marginLeft: 970,
    },
    checkboxRow5: {
      position: 'absolute',
      width:"20%",
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginTop:60,
      marginRight: -550,
    },
    checkboxRow6: {
      position: 'absolute',
      width:"100%",
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginTop:60,
      marginRight: -1630,
      
    },
    text4: {
      position: 'absolute',
      color: 'bkack', 
      fontSize: 17,
      marginRight: 50,
      marginLeft: 50,
      textAlign: 'center',
    },
    text5: {
      position: 'absolute',
      fontWeight: 'bold',
      color: 'black', 
      fontSize: 15,
      marginBottom: 90,
      marginLeft: -860,
      marginTop:150,
    },
    text6: {
      position: 'absolute',
      fontWeight: 'bold',
      color: 'black', 
      fontSize: 15,
      marginBottom: 90,
      marginLeft: 70,
      marginTop:150,
    },
    text7: {
      position: 'absolute',
      fontWeight: 'bold',
      color: 'black', 
      fontSize: 15,
     
      marginRight: 785,
     
    },
    text8: {
      position: 'absolute',
      fontWeight: 'bold',
      color: 'black', 
      fontSize: 15,
      
      marginRight: -130,
     
    },
    text9: {
      position: 'absolute',
      fontWeight: 'bold',
      color: 'black', 
      fontSize: 15,
      marginRight: 800,
      marginTop:-80,
    },
    text10: {
      position: 'absolute',
      fontWeight: 'bold',
      color: 'black', 
      fontSize: 15,
      marginLeft: 130,
      marginTop:-80,
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
      padding: 8,
    },
    cell1: {
      flex: 1,
      borderWidth: 1,
      padding: 10,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FFFF',
      fontSize: 17,
      textDecorationLine: 'underline',
    },
    cell2: {
      flex: 1,
      borderWidth: 1,
      padding: 8,
      fontWeight: 'bold',
    },
    //estilo modal
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    img2:{
      position: 'relative',
      width: 90,
      height: 90,
      marginBottom: 10,

    },
    modalText2: {
      marginBottom: 15,
      textAlign: 'center',
      color: 'red',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      width:250,
    },
    
    
});
  
export default EditarScreen;