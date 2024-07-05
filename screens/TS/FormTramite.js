import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, Button, Picker, Platform, Modal} from 'react-native';
import HeaderScreen from '../comp/HeaderScreen';
import Banner from '../comp/BannerScreen';
import Footer from '../comp/FooterScreen';


const FormTramite = ({ navigation  }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [descript, setDesc] = useState('');
    const [usuario, setUsuario] = useState('');
    const [modalidad, setModalidad] = useState('');
    const [subdireccion, setSubdirect] = useState('');
    const [area, setArea] = useState('');
    const [QRealizarlo, setQRealizarlo] = useState('');
    const [DRealizar, setDRealizar] = useState('');
    const [TRespuesta, setTRespuesta] = useState('');
    const [costo, setCosto] = useState('');
    const [dia1, setDia1] = useState('');
    const [dia2, setDia2] = useState('');
    const [hour1, setHour1] = useState('');
    const [hour2, setHour2] = useState('');
    const [obtener, setObtener] = useState('');
    const [vigencia, setVigencia] = useState('');
    const [ReTramite, setReTramite] = useState('');
    const [CriTramite, setCriTramite] = useState('');
    const [InsTramite, setInsTramite] = useState('');
    const [EnlaceTram, setEnlaceTram] = useState('');

    const handleName = (text) => {
      setName(text);
    };
    const handleDesc= (text) => {
      setDesc(text);
    };
    const handleCosto= (text) => {
      setCosto(text);
    };
    const handleObtener= (text) => {
      setObtener(text);
    };
    const handleVigencia= (text) => {
      setVigencia(text);
    };
    const handleQRealizarloChange = (text) => {
      setQRealizarlo(text);
    };
    const handleDRealizarChange = (text) => {
      setDRealizar(text);
    };
    const handleReTramiteChange = (text) => {
      setReTramite(text);
    };
    const handleCriTramiteChange = (text) => {
      setCriTramite(text);
    };
    const handleInsTramiteChange = (text) => {
      setInsTramite(text);
    };
    const handleChangeHora1 = (event) => {
      setHour1(event.target.value);
    };
    const handleChangeHora2 = (event) => {
      setHour2(event.target.value);
    };
    const handleHourChange1 = (text) => {
      handleChangeHora1(text);
    };
    const handleHourChange2 = (text) => {
      handleChangeHora2(text);
    };

    const closeModalAndNavigate = () => {
      setModalVisible(false);
      navigation.navigate('TramitesHome'); // Cambia 'OtraPantalla' por el nombre de tu pantalla de destino
    };

    const handleFormSubmit2 = () => {

      if (!name.trim() || !descript.trim() || !QRealizarlo.trim() || !DRealizar.trim() || !costo.trim() || !obtener.trim()
      || !hour1.trim() || !hour2.trim() || !vigencia.trim() || !ReTramite.trim() || !CriTramite.trim() || !InsTramite.trim()) {
        setError('Error , Por favor, complete todos los campos del Tramite. (Nombre, Descripcion, Quien puede realizarlo, Donde se puede realizar, Costo, Que se obtiene del tramite, Hora del tramite, Vigencia del tramite, Requisito del tramite, Criterio del tramite y Instrucciones de tramite)');
        return;
      }
  
      if (descript.trim().length < 25) {
        setError('La descripcion debe tener al menos 50 caracteres.');
        return;
      }
  
      if (descript.trim().length > 2000) {
        setError('La descripcion  no puede exceder los 1000 caracteres.');
        return;
      }

      const forme = {name, descript, usuario, modalidad, subdireccion,
        area, QRealizarlo, DRealizar, TRespuesta, costo,
        dia1, dia2, hour1, hour2, obtener,
        vigencia,ReTramite, CriTramite, InsTramite, EnlaceTram};
    
      fetch('http://localhost:8085/saveFormAco', {// cambiar link del proceso
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(forme),
      })
      .then(response => {
        if (response.ok) {
          console.log('Formulario guardado correctamente');
          // Extraer el ID del formulario guardado
          return response.json();
        } else {
          console.error('Error al guardar formulario');
          throw new Error('Error al guardar formulario');
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
      <Text style={styles.text}>TRAMITES Y SERVICIOS (UP)</Text>
      </View> 



     <Animatable.View animation="bounceIn" style={styles.container3}>
     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
     <Image source={require('../img/home.png')} style={styles.img} />
     </TouchableOpacity>
     <Text style={styles.b1}>-</Text>
     <TouchableOpacity onPress={() => navigation.navigate('TramitesHome')}>
      <Text style={styles.b2}>TRAMITES Y SERVICIOS</Text>
      </TouchableOpacity>
     </Animatable.View>

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


        <Animatable.View animation="bounceInLeft" style={styles.container}>
<View>
        <View style={styles.container1}>
            <Text style={styles.text1}>
                Nombre del Tramite
            </Text>
                <TextInput
                
                style={styles.input}
                placeholder="Ingrese el Nombre del Tramite"
                value={name}
                onChangeText={handleName}
            />
            
            <Text style={styles.text3}>
                Usuario del Tramite
            </Text>
            <Picker
            style={styles.input}
            selectedValue={usuario}
            onValueChange={(itemValue) => setUsuario(itemValue)}
          >
              <Picker.Item label="No Definido" value="No Definido" />
              <Picker.Item label="Estudiantes" value="Estudiantes" />
              <Picker.Item label="Docentes" value="Docentes" />
              <Picker.Item label="Adminstradores" value="Adminstradores" />
              <Picker.Item label="Externos" value="Externos" />
            
          </Picker>
        </View>
        <View style={styles.container1}>
        <Text style={styles.text2}>
                Descripcion
            </Text>
            <TextInput
                style={styles.input2}
                placeholder="Ingrese el Descripcion del tramite"
                multiline
                numberOfLines={20}
                value={descript}
                onChangeText={handleDesc}
            />

        </View>

        <View style={styles.container1}>
            <Text style={styles.text4}>
                Modalidad del Tramite
            </Text>
            <Picker
            style={styles.input}
            selectedValue={modalidad}
            onValueChange={(itemValue) => setModalidad(itemValue)}
              >
                  <Picker.Item label="No Definido" value="No Definido" />
                  <Picker.Item label="Presencial" value="Presencial" />
                  <Picker.Item label="En Linea" value="En Linea" />
                  <Picker.Item label="Hibrido" value="Hibrido" />
                
              </Picker>
            <Text style={styles.text5}>
                Subdireccion del Tramite
            </Text>
            <Picker
              style={styles.input}
              selectedValue={subdireccion}
              onValueChange={(itemValue) => setSubdirect(itemValue)}
                >
                    <Picker.Item label="No Definido" value="No Definido" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                  
                </Picker>
                <Text style={styles.text6}>
                Area del Tramite
                </Text>
                <Picker
                  style={styles.input}
                  selectedValue={area}
                  onValueChange={(itemValue) => setArea(itemValue)}
                    >
                    <Picker.Item label="No Definido" value="No Definido" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                  
                </Picker>

        </View>
        <View style={styles.container1}>

        <Text style={styles.text7}>
                ¿Quien puede Realizar el tramite (el intersado o otros)?
            </Text>
            <TextInput
              style={styles.input2}
              placeholder="Ingrese aqui quien puede realizar el tramite"
              multiline
              numberOfLines={20}
              value={QRealizarlo}
              onChangeText={handleQRealizarloChange}
            />
        </View>

        <View style={styles.container1}>

        <Text style={styles.text8}>
                ¿Donde se puede realizar?
            </Text>
            <TextInput
              style={styles.input2}
              placeholder="Ingrese aqui donde se puede realizar"
              multiline
              numberOfLines={20}
              value={DRealizar}
              onChangeText={handleDRealizarChange}
            />
        </View>
        <View style={styles.container1}>
              <Text style={styles.text9}>
                Tiempo de Respuesta
                </Text>
                <Picker
                  style={styles.input}
                  selectedValue={TRespuesta}
                  onValueChange={(itemValue) => setTRespuesta(itemValue)}
                    >
                    <Picker.Item label="No Definido" value="No Definido" />
                    <Picker.Item label="10 min" value="10 min" />
                    <Picker.Item label="30 min " value="30 min" />
                    <Picker.Item label="1 Hora" value="1 Hora" />
                    <Picker.Item label="Mas de 1 Hora" value="Mas de 1 Hora" />
                    <Picker.Item label="1 Dia" value="1 Dia" />
                    <Picker.Item label="Varios dias" value="Varios dias" />
                  
                </Picker>
                <Text style={styles.text10}>
                Costo
            </Text>
                <TextInput
                
                style={styles.input}
                placeholder="Ingrese el Costo"
                value={costo}
                onChangeText={handleCosto}
            />

        </View>
        <View style={styles.container1}>
          <Text style={styles.text11}>
                Dia disponible del tramite
                </Text>
                <Picker
                  style={styles.input}
                  selectedValue={dia1}
                  onValueChange={(itemValue) => setDia1(itemValue)}
                    >
                    <Picker.Item label="No Definido" value="No Definido" />
                    <Picker.Item label="Lunes" value="Lunes" />
                    <Picker.Item label="Martes" value="Martes" />
                    <Picker.Item label="Miercoles" value="Miercoles" />
                    <Picker.Item label="Jueves" value="Jueves" />
                    <Picker.Item label="Viernes" value="Viernes" />
                    <Picker.Item label="Sabado" value="Sabado" />
                    <Picker.Item label="Domingo" value="Domingo" />
                  
                </Picker>
                <Text style={styles.text11_1}>
                al
                </Text>
                <Picker
                  style={styles.input}
                  selectedValue={dia2}
                  onValueChange={(itemValue) => setDia2(itemValue)}
                    >
                    <Picker.Item label="No Definido" value="No Definido" />
                    <Picker.Item label="Lunes" value="Lunes" />
                    <Picker.Item label="Martes" value="Martes" />
                    <Picker.Item label="Miercoles" value="Miercoles" />
                    <Picker.Item label="Jueves" value="Jueves" />
                    <Picker.Item label="Viernes" value="Viernes" />
                    <Picker.Item label="Sabado" value="Sabado" />
                    <Picker.Item label="Domingo" value="Domingo" />
                  
                </Picker>
              

        </View>
        <View style={styles.container1}>
        <Text style={styles.text12}>
                Hora
                </Text>
                {Platform.OS === 'web' ? (
                  <input
                    type="time"
                    value={hour1}
                    onChange={handleHourChange1}
                    style={styles.input}/>
                ) : (
                  <TextInput
                    placeholder="Selecciona una hora*"
                    style={styles.input}
                    editable={false}
                    value={hour1}
                  />
                )}
                
                <Text style={styles.text11_1}>
                al
                </Text>
                {Platform.OS === 'web' ? (
                  <input
                    type="time"
                    value={hour2}
                    onChange={handleHourChange2}
                    style={styles.input}/>
                ) : (
                  <TextInput
                    placeholder="Selecciona una hora*"
                    style={styles.input}
                    editable={false}
                    value={hour2}
                  />
                )}

        </View>
        <View style={styles.container1}>
        <Text style={styles.text13}>
                ¿Que se obtiene del tramite?
            </Text>
                <TextInput
                
                style={styles.input}
                placeholder="Ingrese lo que se obtiene del Tramite"
                value={obtener}
                onChangeText={handleObtener}
            />
            <Text style={styles.text14}>
                Vigencia del tramite
            </Text>
                <TextInput
                
                style={styles.input}
                placeholder="Ingrese el Nombre del Tramite"
                value={vigencia}
                onChangeText={handleVigencia}
            />

        </View>
        <View style={styles.container1}>
          <Text style={styles.text15}>
                Requisitos del Tramite
            </Text>
            <TextInput
              style={styles.input2}
              placeholder="Ingrese aqui los requisitos del tramite"
              multiline
              numberOfLines={20}
              value={ReTramite}
              onChangeText={handleReTramiteChange}
            />

        </View>
        <View style={styles.container1}>
          <Text style={styles.text16}>
                Criterios del Tramite
            </Text>
            <TextInput
              style={styles.input2}
              placeholder="Ingrese aqui los criterios del tramite"
              multiline
              numberOfLines={20}
              value={CriTramite}
              onChangeText={handleCriTramiteChange}
            />

        </View>
        <View style={styles.container1}>
          <Text style={styles.text17}>
                Instrucciones del Tramite
            </Text>
            <TextInput
              style={styles.input2}
              placeholder="Ingrese aqui las instrucciones del tramite"
              multiline
              numberOfLines={20}
              value={InsTramite}
              onChangeText={handleInsTramiteChange}
            />

        </View>
        <View style={styles.container1}>
            <Text style={styles.text18}>
               Enlace en el caso de que sea en linea
            </Text>
                <TextInput
                
                style={styles.input3}
                placeholder="Ingrese el enlace del Tramite"
                value={EnlaceTram}
                onChangeText={setEnlaceTram}
            />
        </View>

        <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Subir" onPress={handleFormSubmit2} color="#1F3D6D"/>
        
        </View>

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
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 70,
      marginBottom: 100,
      
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        width: 1000,
      },
    
      container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginRight: 1050,
        
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

    container4: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 1050,
    },
    container5: {
        flex: 1,
        marginBottom: 250,
        marginTop:20,
        
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
      fontSize: 15,
      marginBottom: 90,
      marginRight: 855,
      
      },
      text2: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 150,
        marginRight: 920,
        
      },
      text3: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -150,
        
      },
      text4: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 840,
        
      },
      text5: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 150,
        
      },
      text6: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -450,
        
      },
      text7: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:-60,
        marginRight: 610,
        
      },
      text8: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:-60,
        marginRight: 810,
        
      },
      text9: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:0,
        marginRight: 845,
        
      },
      text10: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:0,
        marginRight: -50,
        
      },
      text11: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:0,
        marginRight: 810,
        
      },
      text11_1: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:0,
        marginRight: 0,
        
      },
      text12: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:0,
        marginRight: 960,
      },
      text13: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:0,
        marginRight: 795,
      },
      text14: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:0,
        marginRight: -150,
      },
      text15: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:-60,
        marginRight: 840,
      },
      text16: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:-60,
        marginRight: 850,
      },
      text17: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:-60,
        marginRight: 820,
      },
      text18: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginTop:0,
        marginRight: 740,
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
        height: 100,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: 'grey', 
        
      },
      input3: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
        color: 'grey', 
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 100,
        marginLeft: 100,
    },
    line3: {
        position: 'absolute',
        width: 800,
        height: 250,
        marginRight:100,
        marginLeft:250,
        borderRadius: 25,
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
    modalText2: {
      marginBottom: 15,
      textAlign: 'center',
      color: 'red',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      width:250,
    },
    img2:{
      position: 'relative',
      width: 90,
      height: 90,
      marginBottom: 10,

    },
      
      
    
});
  
export default FormTramite;