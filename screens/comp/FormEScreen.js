import React, { useState } from 'react';
import { View, TextInput, Picker, StyleSheet, Text, Button, Modal, Image} from 'react-native';

const FormEScreen = ({ navigation  }) => {

  const [id, setIdSeleccionado] = useState(null);
  const [folio, setFolio] = useState(null);
  const [name, setNombre] = useState('');
  const [lastname, setApellidos] = useState('');
  const [mail, setCorreo] = useState('');
  const [phone, setTelefono] = useState('');
  const [ncontrol, setNumControl] = useState('');
  const [career, setCarrera] = useState('');
  const [semester, setSemestre] = useState('');
  const [complaint, setQuejaSugerencia] = useState('');

  const [type] = useState('Queja o Sugerencia');
  const [date] = useState(getFechaActual());
  const [department] = useState('Administracion');
  const [status] = useState('No definido');
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');

  // Función para obtener la fecha actual en formato YYYY-MM-DD
  function getFechaActual() {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const day = String(fechaActual.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleEmailChange = (text) => {
    setCorreo(text);
  };

  const handleQuejaSugerenciaChange = (text) => {
    setQuejaSugerencia(text);
  };


  const closeModalAndNavigate = () => {
    setModalVisible(false);
    navigation.navigate('Quejas'); // Cambia 'OtraPantalla' por el nombre de tu pantalla de destino
  };

  const handleFormSubmit2 = () => {

    if (!mail.trim() || !complaint.trim()) {
      setError('Error , Por favor, complete todos los campos. (Corre electrónico y Queja son Obligatorios)');
      return;
    }

    if (!isValidEmail(mail)) {
      setError('Error, Por favor, ingrese un correo electrónico válido.');
      return;
    }

    if (complaint.trim().length < 50) {
      setError('El texto debe tener al menos 50 caracteres.');
      return;
    }

    if (complaint.trim().length > 2000) {
      setError('El texto no puede exceder los 1000 caracteres.');
      return;
    }

    

    const forme = { name, lastname, mail, phone:parseInt(phone), ncontrol, career, 
      semester, complaint, type, date, department, status  };
  
    fetch('http://localhost:8085/saveForme', {
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
    .then(data => {
      // Utilizar el ID para generar el documento
      const id = data.id; // Suponiendo que el ID devuelto se encuentra en la propiedad 'id' del objeto JSON
      const folio = data.folio;
      fetch(`http://localhost:8085/generarDocumentoe/`+id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.blob())
      .then(blob => {
        // Crear un objeto URL para el blob
        const url = URL.createObjectURL(blob);
        // Descargar el archivo
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', folio+'.docx');
        document.body.appendChild(link);
        link.click();
        setModalVisible(true); 
      })
      .catch(error => {
        console.error('Error al generar el documento:', error);
      });
    })
    .catch(error => {
      console.error('Error de red:', error);
    });
  };

  const isValidEmail = (mail) => {
    // Expresión regular para validar el formato del correo electrónico
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(mail);
  };
  

  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.text1}>
                Nombre
            </Text>
                <TextInput
                
                style={styles.input}
                placeholder="Ingrese su(s) Nombre(s)"
                value={name}
                onChangeText={setNombre}
            />
            <Text style={styles.text2}>
                Apellido
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese sus Apellidos"
                value={lastname}
                onChangeText={setApellidos}
            />
            <Text style={styles.text3}>
                Correo Electrónico
            </Text>
            <TextInput
                
                style={styles.input}
                placeholder="Ingrese su Correo*"
                keyboardType="email-address"
                value={mail}
                autoCapitalize="none"
                onChangeText={handleEmailChange}
            />
        </View>

        <View style={styles.container}>
            <Text style={styles.text4}>
                Teléfono
            </Text>
                <TextInput
                style={styles.input}
                placeholder="Ingrese su Teléfono"
                value={phone}
                onChangeText={setTelefono}
            />
            <Text style={styles.text5}>
                Núm.Control
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su Número de control"
                value={ncontrol}
                onChangeText={setNumControl}
            />

        </View>
      
      <View style={styles.container}>
            <Text style={styles.text6}>
                Carrera
            </Text>
        <Picker
            style={styles.input}
            selectedValue={career}
            onValueChange={(itemValue) => setCarrera(itemValue)}
        >
            <Picker.Item label="Ninguno" value="Ninguno" />
            <Picker.Item label="Licenciatura en Administración de Empresas" value="Licenciatura en Administración de Empresas" />
            <Picker.Item label="Ingeniería Eléctrica" value="Ingeniería Eléctrica" />
            <Picker.Item label="Ingeniería Electrónica" value="Ingeniería Electrónica" />
            <Picker.Item label="Ingeniería en Gestión Empresarial" value="Ingeniería en Gestión Empresarial" />
            <Picker.Item label="Ingeniería Industrial" value="Ingeniería Industrial" />
            <Picker.Item label="Ingeniería en Materiales" value="Ingeniería en Materiales" />
            <Picker.Item label="Ingeniería Mecánica" value="Ingeniería Mecánica" />
            <Picker.Item label="Ingeniería Química" value="Ingeniería Química" />
            <Picker.Item label="Ingeniería en Tecnologías de la Información y Comunicaciones" value="Ingeniería en Tecnologías de la Información y Comunicaciones" />
            
        </Picker>
        <Text style={styles.text7}>
                Semestre
            </Text>
        <Picker
            style={styles.input}
            selectedValue={semester}
            onValueChange={(itemValue) => setSemestre(itemValue)}
        >
            <Picker.Item label="Ninguno" value="Ninguno" />
            <Picker.Item label="1 Semestre" value="1" />
            <Picker.Item label="2 Semestre" value="2" />
            <Picker.Item label="3 Semestre" value="3" />
            <Picker.Item label="4 Semestre" value="4" />
            <Picker.Item label="5 Semestre" value="5" />
            <Picker.Item label="6 Semestre" value="6" />
            <Picker.Item label="7 Semestre" value="7" />
            <Picker.Item label="8 Semestre" value="8" />
            <Picker.Item label="9 Semestre" value="9" />
            <Picker.Item label="10 Semestre" value="10" />
            <Picker.Item label="11 Semestre" value="11" />
            <Picker.Item label="12 Semestre" value="12" />
            <Picker.Item label="13 Semestre" value="13" />
           
        </Picker>


      </View>
      
      <View style={styles.container}>
        <Text style={styles.text8}>
            Queja o Sugerencia
        </Text>
      <TextInput
        style={styles.input2}
        placeholder="Ingrese aqui la Queja o sugerencia*"
        multiline
        numberOfLines={20}
        value={complaint}
        onChangeText={handleQuejaSugerenciaChange}
      />

      </View>

      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Enviar" onPress={handleFormSubmit2} color="#1F3D6D"/>
        
      </View>

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
          <Image source={require('../img/error.png')} style={styles.img}/>
          <Text style={styles.modalText2}>{error}</Text>
          <Button title="Cerrar" onPress={() => setError('')} color="#1F3D6D"/>
        </View>
        </View>
      </Modal>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
      width: 1000,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100,
      marginRight: 100,
      marginLeft: 100,
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
        height: 300,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: 'grey', 
        
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
        marginRight: 270,
        
      },
      text3: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -470,
        
      },
      text4: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 940,
        
      },
      text5: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -100,
        
      },
      text6: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 950,
        
      },
      text7: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -70,
        
      },
      text8: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 350,
        marginRight: 860    ,
        
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
      img:{
        position: 'relative',
        width: 90,
        height: 90,
        marginBottom: 10,

      },
        
     
  });

export default FormEScreen;