import React, { useState } from 'react';
import { View, TextInput, Picker, StyleSheet, Text, Button,Platform, Modal, Image  } from 'react-native';
import { RadioButton } from 'react-native-paper';

const FormDIMScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState('');
  const [id, setIdSeleccionado] = useState(null);
  const [folio, setFolio] = useState(null);
  const [date] = useState(getFechaActual());
  //datos del que denuncia
  const [vulnerabilidad, setVulnerabilidad] = useState('');
  const [name, setNombre] = useState('');
  const [lastname, setApellidos] = useState('');
  const [gendre1, setSelectedValue1] = useState('option1');
  const [phone, setTelefono] = useState('');
  const [mail, setCorreo] = useState('');
  const [puesto1, setPuesto1] = useState('');


  //datos del denunciado
  const [nameD, setNombreD] = useState('');
  const [lastnameD, setApellidosD] = useState('');
  const [gendre2, setSelectedValue2] = useState('option2');
  const [puesto2, setPuesto2] = useState('');
  const [entityD, setEntidadD] = useState('');

  //decripcion de los hechos
  //calendario
  const [dateH, setFechaSeleccionada] = useState('');

  const handleChangeFecha = (event) => {
    setFechaSeleccionada(event.target.value);
  };
  //hora
  const [hour, setHoraSeleccionada] = useState('');

  const handleChangeHora = (event) => {
    setHoraSeleccionada(event.target.value);
  };
  const [place, setLugar] = useState('');
  const [facts, setHechos] = useState('');
  const [descHechos, setDescHechos] = useState('');



  //datos del testigo
  const [nameT, setNombreT] = useState('');
  const [lastnameT, setApellidosT] = useState('');
  const [phoneT, setTelefonoT] = useState('');
  const [mailT, setCorreoT] = useState('');
  //datos extra del tesrigo
  const [checked, setChecked] = React.useState('first');
  const [entityT, setEntidadT] = useState('');
  const [puesto3, setPuesto3] = useState('');


  // Función para obtener la fecha actual en formato YYYY-MM-DD
  function getFechaActual() {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const day = String(fechaActual.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const toggleVisibility = () => {
    setChecked('second');
    setIsVisible(true); 
  };
  const toggleVisibility2 = () => {
  setChecked('first');
    setIsVisible(false); 
  };

  //validaciones
  const handleVulnerChange = (text) => {
    setVulnerabilidad(text);
  };
  const handleEmailChange = (text) => {
    setCorreo(text);
  };
  const handleNameChange = (text) => {
    setNombreD(text);
  };
  const handleLastnameChange = (text) => {
    setApellidosD(text);
  };
  const handlegenderChange = (text) => {
    setSelectedValue2(text);
  };
  const handlePositionChange = (text) => {
    setPuesto2(text);
  };
  const handleEntityChange = (text) => {
    setEntidadD(text);
  };
  const handleDateChange = (text) => {
    handleChangeFecha(text);
  };
  const handleHourChange = (text) => {
    handleChangeHora(text);
  };
  const handleFrequencyChange = (text) => {
    setHechos(text);
  };
  const handlePlaceChange = (text) => {
    setLugar(text);
  };
  const handleFactsChange = (text) => {
    setDescHechos(text);
  };

  const closeModalAndNavigate = () => {

    setModalVisible(false);
    navigation.navigate('DenAco'); // Cambia 'OtraPantalla' por el nombre de tu pantalla de destino
  };

  const handleFormSubmit2 = () => {
    if (!vulnerabilidad.trim() || !mail.trim() || !nameD.trim() || !lastnameD.trim() || !gendre2.trim() || !puesto2.trim() ||
        !entityD.trim() || !dateH.trim() || !hour.trim() || !place.trim() || !facts.trim() || !descHechos.trim()) {
      setError('Error , Por favor, complete todos los campos. (La vulnerabilidad, su corre electrónico y en el caso del denunciado (nombre, apellido, genero, cargo, entidad,fecha de lo ocurrido, hora, frecunecia, lugar y la descripcion de los hechos))');
      return;
    }
    if (!isValidEmail(mail)) {
      setError('Error, Por favor, ingrese un correo electrónico válido.');
      return;
    }
    if (descHechos.trim().length < 50) {
      setError('La descripcion de los hechos debe tener al menos 50 caracteres.');
      return;
    }

    if (descHechos.trim().length > 2000) {
      setError('La descripcion de los hechos no puede exceder los 1000 caracteres.');
      return;
    }




    const forme = { date, name, lastname, gendre1,phone:parseInt(phone), mail, puesto1,
      nameD, lastnameD, gendre2, puesto2, entityD,
      dateH, hour, place, facts, descHechos,
      checked,nameT, lastnameT, phoneT:parseInt(phone), mailT, entityT, puesto3};
  
    fetch('http://localhost:8085/saveFormAco', {
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
      fetch(`http://localhost:8085/generarDocumentoAco/`+id, {
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
        //setModalVisible(true); 
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

      <View style={styles.container1}>
      <View style={styles.container_ti}>
      <Text style={styles.title1}>
        Datos de la Persona que Presenta la Denuncia
        </Text>
        </View>
      <View style={styles.container}>
            <Text style={styles.text3_222}>
            Principio, Valor o Regia de Integridad
            </Text>
                <TextInput
                style={styles.input1_2}
                placeholder="Ingrese vulnerabilidad que denuncia*"
                value={vulnerabilidad}
                onChangeText={handleVulnerChange}
            />
            
          </View>
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
            <Text style={styles.text2_2}>
                Sexo
            </Text>
            <Picker style={styles.input}
              selectedValue={gendre1}
              onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
            >
              <Picker.Item label="Sin especificar" value="Sin especificar" />
              <Picker.Item label="Mujer" value="Mujer" />
              <Picker.Item label="Hombre" value="Hombre" />
            </Picker>
            
        </View>

        <View style={styles.container}>
            <Text style={styles.text4}>
                Telefono
            </Text>
                <TextInput
                style={styles.input}
                placeholder="Ingrese su Teléfono"
                value={phone}
                onChangeText={setTelefono}
            />
            <Text style={styles.text3}>
                Correo Electronico
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su Correo*"
                value={mail}
                onChangeText={handleEmailChange}
            />
        </View>

        <View style={styles.container}>
            <Text style={styles.text3_2}>
                Puesto o Area donde Labora
            </Text>
                <TextInput
                style={styles.input1_2}
                placeholder="Ingrese puesto"
                value={puesto1}
                onChangeText={setPuesto1}
            />
            
          </View>
      
          
      </View>

      <View style={styles.container2}>

      
        <View style={styles.container}>
          <Text style={styles.title2}>
          Datos del Servidor(a) Público(a) Contra quien se Presenta la Denuncia
          </Text>

            <Text style={styles.text1}>
                Nombre
            </Text>
                <TextInput
                
                style={styles.input}
                placeholder="Ingrese su(s) Nombre(s)*"
                value={nameD}
                onChangeText={handleNameChange}
            />
            <Text style={styles.text2}>
                Apellido
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese sus Apellidos*"
                value={lastnameD}
                onChangeText={handleLastnameChange}
            />
            <Text style={styles.text2_2}>
                Sexo
            </Text>
            <Picker style={styles.input}
              selectedValue={gendre2}
              onValueChange={(itemValue, itemIndex) => handlegenderChange(itemValue)}
            >
              <Picker.Item label="Hombre*" value="Hombre" />
              <Picker.Item label="Mujer*" value="Mujer" />
              
            </Picker>
            
        </View>

        <View style={styles.container}>
            <Text style={styles.text3_22}>
            Cargo o Puesto donde Labora
            </Text>
                <TextInput
                style={styles.input}
                placeholder="Ingrese Puesto*"
                value={puesto2}
                onChangeText={handlePositionChange}
            />
            <Text style={styles.text3_11}>
            Entidad o Dependencia
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese Entidad*"
                value={entityD}
                onChangeText={handleEntityChange}
            />
        </View>

      </View>

      <View style={styles.container3}>

      
        <View style={styles.container}>
          <Text style={styles.title3}>
          Declaración de los Hechos
          </Text>

            <Text style={styles.text1_1}>
            Fecha en la que ocurrio los hechos
            </Text>
            
            
          {Platform.OS === 'web' ? (
            <input
              type="date"
              value={dateH}
              onChange={handleDateChange}
              style={styles.input}/>
          ) : (
            <TextInput
              placeholder="Selecciona una fecha*"
              style={{ marginBottom: 20, paddingHorizontal: 10, paddingVertical: 8, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, width: 200 }}
              editable={false}
              value={datee}
            />
          )}

            <Text style={styles.text2_222}>
                
              Hora de los hechos
            </Text>
            
            {Platform.OS === 'web' ? (
        <input
          type="time"
          value={hour}
          onChange={handleHourChange}
          style={styles.input}/>
      ) : (
        <TextInput
          placeholder="Selecciona una hora*"
          style={{ marginBottom: 20, paddingHorizontal: 10, paddingVertical: 8, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, width: 200 }}
          editable={false}
          value={hour}
        />
      )}
        </View>

        <View style={styles.container}>
            <Text style={styles.text4_1}>
            Lugar
            </Text>
                <TextInput
                style={styles.input}
                placeholder="Ingrese lugar de los hechos*"
                value={place}
                onChangeText={handlePlaceChange}
            />
            <Text style={styles.text4_2}>
            Frecuencia de los hechos
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese frecuencia de los hechos*"
                value={facts}
                onChangeText={handleFrequencyChange}
            />
        </View>

        <View style={styles.container}>
            <Text style={styles.text8_1}>
            Descripcion de los hechos
            </Text>
          <TextInput
            style={styles.input2}
            placeholder="Ingrese aqui los hechos*"
            multiline
            numberOfLines={20}
            value={descHechos}
            onChangeText={handleFactsChange}
          />
          </View>

      </View>

      <View style={styles.container4}>

      
        <View style={styles.container}>
          <Text style={styles.title4}>
          Datos de una Persona que haya sido Testigo de los Hechos (Opcional)
          </Text>

            <Text style={styles.text1_11}>
                Nombre(s)
            </Text>
                <TextInput
                
                style={styles.input}
                placeholder="Ingrese su Nombre"
                value={nameT}
                onChangeText={setNombreT}
            />
            <Text style={styles.text1_22}>
                Apellidos
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese sus Apellidos"
                value={lastnameT}
                onChangeText={setApellidosT}
            />
            
        </View>

        <View style={styles.container}>
            <Text style={styles.text4}>
            Telefono
            </Text>
                <TextInput
                style={styles.input}
                placeholder="Ingrese su Teléfono"
                value={phoneT}
                onChangeText={setTelefonoT}
            />
            <Text style={styles.text3}>
            Correo Electronico
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su Correo *"
                value={mailT}
                onChangeText={setCorreoT}
            />
        </View>

        <View style={styles.container}>
            <Text style={styles.text4_3}>
            ¿Trabaja en la Administracion Publica?
            </Text>
            <Text>
              No
            </Text>
            <RadioButton
              value="NO"
              status={ checked === 'first' ? 'checked' : 'unchecked' }
              onPress={toggleVisibility2}
            />
            <Text>
              Si
            </Text>
            <RadioButton
              value="SI"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={toggleVisibility}
            />
        </View>

      </View>
      {isVisible && (
      <View style={styles.container5}>

      
        <View style={styles.container}>
          <Text style={styles.title5}>
          Si contesto "SI" las siguiente información es indispensable
          </Text>

            <Text style={styles.text1_111}>
            Entidad o dependencia
            </Text>
                <TextInput
                
                style={styles.input}
                placeholder="Ingrese la entidad"
                value={entityT}
                onChangeText={setEntidadT}
            />
            <Text style={styles.text1_1111}>
            Cargo o puesto
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese el cargo"
                value={puesto3}
                onChangeText={setPuesto3}
            />
            
        </View>

      </View>
      )}

       {/* Agrega el botón para enviar el formulario */}
    <View style={styles.buttonContainer}>
        <Button style={styles.button} title="CREAR DOCUMENTO" onPress={handleFormSubmit2} color="#1F3D6D"/>
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

    container_ti: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 10,
      width: 1000,
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
    input1_2: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      width: '100%',
      color: 'grey', 
    },
    input1_3: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      width: '100%',
      color: 'grey', 
    },

    input2: {
        height: 200,
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
      text1_11: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 920,
        
      },
      text1_22: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -70,
        
      },
      text1_1:{
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 750,
        
      },
      text1_111:{
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 835,
        
      },
      text1_1111:{
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -110,
        
      },
      text2: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 270,
        
      },
      text2_2: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -370,
        
      },
      text2_222: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -150,
        
      },
      text3: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -140,
        
      },
      text3_2: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 800,
        
      },
      text3_22: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 780,
        
      },
      text3_222: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 720,
        
      },
      text3_11: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -170,
        
      },
      text4: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 940,
        
      },
      text4_1: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: -50,
        
      },
      text4_2: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 815,
        
      },
      text4_3: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 90,
        marginRight: 730,
        
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
        marginBottom: 250,
        marginRight: 860,
        
      },
      text8_1: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 15,
        marginBottom: 250,
        marginRight: 810,
        
      },

      title1: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 25,
        marginBottom: 150,
       
        textAlign: 'center',
      },
      title2: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 25,
        marginBottom: 230,
        textAlign: 'center',
      },
      title3: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 25,
        marginBottom: 230,
        textAlign: 'center',
      },
      title4: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 25,
        marginBottom: 200,
        textAlign: 'center',
      },
      title5: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 25,
        marginBottom: 200,
        textAlign: 'center',
      },
      container2:{
        marginBottom: 100,
        marginTop: 100,
      },
      container4:{
        marginBottom: 50,
        marginTop: 70,
      },
      container5:{
        marginBottom: 50,
        marginTop: 40,
      },
      datePicker: {
        width: 500,
        marginBottom: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
        marginRight: 100,
        marginLeft: 100,
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
    img:{
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

export default FormDIMScreen;