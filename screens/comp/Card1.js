import React from 'react';
import { View, Text } from 'react-native';


const Card1 = ({  }) => {
    return (
            <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.name}>Requizitos para realizar el tramite</Text>
          <View style={styles.view1}>
          <Text style={styles.desc}>Decripcion del tramite</Text>
          </View>
        </View>
        </View>
      
    );
  };
  
  const styles = {
    card: {
      flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        backgroundColor: '#9F1B3B',
        width: 350,
        height: 400,
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
        color: '#FFFF', 
        fontSize: 25,
        marginRight:10,
        marginTop:-250,
        textAlign: 'center',
      
    },
    desc: {
        textAlign: 'Left',
        position: 'absolute',
        color: '#FFFF', 
        fontSize: 17,
        width:320,
        marginTop:-70,
    },
    mod: {
        fontWeight: 'bold',
        color: 'blue', 
        fontSize: 18,
        marginLeft:400,
        padding:5,
        position: 'absolute',
    },
    user: {
        fontWeight: 'bold',
        color: 'green', 
        fontSize: 18,
        marginLeft:800,
        padding:5,
        position: 'absolute',
    },
    view1:{
        
      position: 'relative',
      flex:1,
      justifyContent: 'center',
    },
    
  };
  
  export default Card1;
  