import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ data }) => {
    const navigation = useNavigation();
  
    const goToDetails = () => {
      navigation.navigate('DetailsTramite', { data }); // Cambia 'Detalles' por el nombre de tu pantalla de detalles
    };
  
    return (
        <TouchableOpacity onPress={goToDetails}>
            <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text>{data.title}</Text>
          <View style={styles.view}>
          <Text style={styles.name}>Nombre del tramite</Text>
          </View>
          <View style={styles.view2}>
          <Text style={styles.desc}>Descripcion del tramite </Text>
          </View>
          <View style={styles.view3}>
          <Text style={styles.mod}>Modalidad: En Linea</Text>
          </View>
          <View style={styles.view4}>
          <Text style={styles.user}>Usuario: Docentes</Text>
          </View>
          {/* Otros datos de la tarjeta */}
        </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  const styles = {
    card: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        
        width: 1000,
        height: 250,
        position: 'relative',
    },
    cardContainer: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 0,
            borderRadius: 20,
            marginBottom: 10,
      },
    name: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 35,
        marginRight:0,
        marginTop:0,
        width:1000,
    },
    desc: {
        position: 'absolute',
        color: 'black', 
        fontSize: 18,
        width:950,
        marginTop:40,
    },
    mod: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'blue', 
        fontSize: 18,
        width:250,
        marginTop:-140,
    },
    user: {
        fontWeight: 'bold',
        color: 'green', 
        fontSize: 18,
        marginTop:-180  ,
        position: 'absolute',
        width:180,
    },
    view:{
      position: 'relative',
      flex:1,
      marginRight:930,
      marginTop:30,
    },
    view2:{
      position: 'relative',
      flex:1,
      marginRight:930,
      
    },
    view3:{
      position: 'relative',
      flex:1,
      marginLeft:150,
      
    },
    view4:{
      position: 'relative',
      flex:1,
      marginLeft:620,
    },
    
  };
  
  export default Card;
  