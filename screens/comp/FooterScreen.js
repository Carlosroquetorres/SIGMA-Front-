import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

const FooterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.colorBox}>
            <Text style={styles.text}>Texto de prueba</Text>
        </View>
        
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      },

    colorBox: {
        position: 'absolute',
        width: 1310,
        height: 150,
        backgroundColor: '#333333', 
      },

    text: {
        position: 'absolute',
        color: '#ffff', 
        fontSize: 23,
        marginTop: 50,
        marginLeft: 550,

    },

});
  
export default FooterScreen;