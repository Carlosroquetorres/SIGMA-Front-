import React, { useState,useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, Picker, ScrollView, FlatList, Modal, TextInput} from 'react-native';
import HeaderScreen from './comp/HeaderScreen';
import Banner from './comp/BannerScreen';
import Footer from './comp/FooterScreen';
import Form from './comp/FormEScreen';

const AdminSerAdminScreen = ({ navigation  }) => {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [nameAd, setNameAd] = useState('');
  const [answerAd, setAnswerAd] = useState('');
  const [department, setDepartment] = useState('');
  const [statuss, setStatuss] = useState('');
  const [folio, setIdSeleccionado] = useState(null);

  const [datos, setDatos] = useState([]);

    useEffect(() => {
    obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
      try {
        const response = await fetch('http://localhost:8085/findAllForme');
        const data = await response.json();
        data.sort((a, b) => a.folio - b.folio);
        setDatos(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    const renderItem = ({ item }) => (
      
    <View style={styles.row}>
    <View style={styles.cella}><Text style={styles.tx}>{item.type}</Text></View>
    <View style={styles.cell}><Text style={styles.tx}>{item.date}</Text></View>
    <View style={styles.cell}><Text style={styles.tx}>{item.folio}</Text></View>
    <View style={styles.cell}><Text style={styles.tx}>{item.department}</Text></View>
    <View style={styles.cell}><Text style={styles.tx}>{item.status}</Text></View>
     
      <View style={styles.cell2}> <Button style={styles.button} title="Notificar"  onPress={() => abrirModal2(item.folio,item.department,item.status)} color="#1F3D6D" /></View>
      <View style={styles.cell2}> <Button style={styles.button} title="Descargar"  color="#1F3D6D" /></View>
    </View>
      
    );

    const abrirModal1 = (folio,department,statuss) => {
      setIdSeleccionado(folio);
      setDepartment(department);
      setStatuss(statuss);
      setModalVisible1(true);
    };

    const abrirModal2 = (folio,department,statuss) => {
      setIdSeleccionado(folio);
      setDepartment(department);
      setStatuss(statuss);
      setModalVisible2(true);
    };

    //actualiza datos de departamneto y estatus de queja
    const actualizarDato1 = async () => {
  try {
    // Construir el objeto con los datos actualizados
    const datosActualizados = {
      folio: folio, // Usar el ID seleccionado
      department: department, 
      status: statuss,
    };

    // Enviar la solicitud POST al backend
    const response = await fetch('http://localhost:8085/updateForme/'+folio, {
      
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosActualizados),
    });

    // Verificar si la solicitud fue exitosa
    if (response.ok) {
      console.log('Dato actualizado correctamente');
      window.location.reload();
    } else {
      console.error('Error al actualizar el dato:', response.status);
    }
  } catch (error) {
    console.error('Error al actualizar el dato:', error);
  } finally {
    // Cerrar el modal después de actualizar el dato
    setModalVisible1(false);
  }
};
//actualiza datos de nombre del que revisa la queja y su respuesta
const actualizarDato2 = async () => {
  try {
    // Construir el objeto con los datos actualizados
    const datosActualizados = {
      folio: folio, // Usar el ID seleccionado
      department: department, 
      status: statuss,
    };

    // Enviar la solicitud POST al backend
    const response = await fetch('http://localhost:8085/updateForme/'+folio, {
      
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosActualizados),
    });

    // Verificar si la solicitud fue exitosa
    if (response.ok) {
      console.log('Dato actualizado correctamente');
      window.location.reload();
    } else {
      console.error('Error al actualizar el dato:', response.status);
    }
  } catch (error) {
    console.error('Error al actualizar el dato:', error);
  } finally {
    // Cerrar el modal después de actualizar el dato
    setModalVisible2(false);
  }
};
  return (
    <ScrollView scrollEnabled={false} style={styles.back}  >
      <HeaderScreen navigation={navigation}/>

      <Banner />

      <View >
      <Image source={require('./img/image8.png')} style={styles.line} />
      <Text style={styles.text}>QUEJAS O SUGERENCIAS</Text>
      </View> 

      <View>
      <Image source={require('./img/image8.png')} style={styles.line2} />
      <Text style={styles.text2}>SERVICIOS ADMINISTRATIVOS</Text>
      </View> 



     <Animatable.View animation="bounceIn" style={styles.container3}>
     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
     <Image source={require('./img/home.png')} style={styles.img} />
     </TouchableOpacity>
     <Text style={styles.b1}>-</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Quejas')}>
      <Text style={styles.b2}>QUEJAS O SUGERENCIAS</Text>
      </TouchableOpacity>
      <Text style={styles.b1}>-</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AdQue')}>
      <Text style={styles.b2}>ADMINISTRATIVO</Text>
      </TouchableOpacity>
      <Text style={styles.b1}>-</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AdminSerAdmin')}>
      <Text style={styles.b3}>REVISIÓN DE QUEJAS</Text>
      </TouchableOpacity>
     </Animatable.View>

     <Modal //modal de de actualizar departamneto y estatus de queja
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Departamento:</Text>
            {/* Input para ingresar el nuevo dato */}
            <Picker style={styles.input}
              selectedValue={department}
              onValueChange={(itemValue) => setDepartment(itemValue)}
            >
              <Picker.Item label="No Definido" value="No Definido" />
              <Picker.Item label="Subdireccion Academica" value="Subdireccion Academica" />
              <Picker.Item label="Subdireccion de Servicios Administrativos" value="Subdireccion de Servicios Administrativos" />
              <Picker.Item label="Subdireccion de Planeacion y Vinculacion" value="Subdireccion de Planeacion y Vinculacion" />
            </Picker>
            <Text>Estado de la queja:</Text>
            <Picker style={styles.input}
              selectedValue={statuss}
              onValueChange={(itemValue) => setStatuss(itemValue)}
            >
              <Picker.Item label="Pendiente" value="Pendiente" />
              <Picker.Item label="Aceptado I" value="Aceptado I" />
              <Picker.Item label="Rechazado" value="Rechazado" />
            </Picker>
          <View style={{marginBottom:10}}>
            {/* Botón para confirmar la actualización */}
            <Button title="Actualizar" onPress={actualizarDato1} color="#1F3D6D"/>
            </View>
            {/* Botón para cancelar la actualización */}
            <Button title="Cancelar" onPress={() => setModalVisible1(false)} color="#1F3D6D"/>
          </View>
        </View>
      </Modal>

      <Modal //modal de de actualizar nombre quien reviso la queja y la respuesta del mismo
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Nombre de quien revisa la Queja:</Text>
            {/* Input para ingresar el nuevo dato */}
            <TextInput
                style={styles.input}
                placeholder="Ingrese su Nombre"
                value={nameAd}
                onChangeText={setNameAd}
            />
            <Text>Respuesta sobre la Queja:</Text>
            <TextInput
              style={styles.input2}
              placeholder="Ingrese aqui la respuesta de la queja"
              multiline
              numberOfLines={20}
              value={answerAd}
              onChangeText={setAnswerAd}
            />
          <View style={{marginBottom:10}}>
            {/* Botón para confirmar la actualización */}
            <Button title="Actualizar" onPress={actualizarDato2} color="#1F3D6D"/>
            </View>
            {/* Botón para cancelar la actualización */}
            <Button title="Cancelar" onPress={() => setModalVisible2(false)} color="#1F3D6D"/>
          </View>
        </View>
      </Modal>

     
    <Animatable.View animation="lightSpeedIn" style={styles.container2}>

    <View style={styles.table}>
      {/* Primera fila */}
      <View style={styles.row1}>
        <Text style={styles.cell1}>TIPO DE QUEJA</Text>
        <Text style={styles.cell1}>FECHA</Text>
        <Text style={styles.cell1}>FOLIO</Text>
        <Text style={styles.cell1}>DEPARTAMENTO</Text>
        <Text style={styles.cell1}>ESTATUS</Text>
       
        <Text style={styles.cell1}>NOTIFICAR</Text>
        <Text style={styles.cell1}>DESCARGAR</Text>
      </View>

      <FlatList
    
        data={datos}
        renderItem={renderItem}
        keyExtractor={item => item.folio.toString()}
        initialNumToRender={5}
      />
      
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
        marginTop: 70,
       marginBottom:200,
        marginRight: 100,
        marginLeft: 100,
        
      },
    
      container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 110,
        marginRight: 700,
        
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
        marginLeft: 430,

    },
    text2: {
        position: 'absolute',
        fontWeight: 'bold',
        color: '#ffff', 
        fontSize: 35,
        marginTop: 80,
        marginLeft: 380,
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
      
      color: 'blue', 
      fontSize: 15,
      marginTop: 40,
      marginLeft: 10,
    },
    b3: {
        position: 'relative',
        fontWeight: 'bold',
        color: 'blue', 
        fontSize: 15,
        marginTop: 40,
        marginLeft: 10,
      },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
        marginRight: 100,
        marginLeft: 100,
    },
    table: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
        height:'100%',
        width:'100%',
      },
      row1: {
        flexDirection: 'row',
        backgroundColor: '#1F3D6D',
        height:'100%',
        width:'100%',
      },
      cell: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
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
      button:{
        borderRadius: 25,
        width: 100,
        height: 100,
        color:'#1F3D6D',
      },
      cell2: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
 
      },
      tx:{
        padding: 10,
        fontSize: 17,
        textAlign: 'center',
      },
      cella: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#E9F2FA',
      },
      input: {
        height: 'auto',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        width: '100%',
        color: 'grey', 
        fontSize: 15,
      },
      input2: {
        height: 300,
        width: 400,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        color: 'grey', 
        fontSize: 15,
      },
      
    
});


export default AdminSerAdminScreen;