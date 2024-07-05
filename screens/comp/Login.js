import React, { useState} from 'react';
import { View, Text, StyleSheet, Modal,TextInput, ScrollView,ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import HeaderScreen from './HeaderScreen';
import Banner from './BannerScreen';
import Footer from './FooterScreen';

const Login = ({ navigation }) => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
  return (
    <ScrollView scrollEnabled={false} style={styles.back}>
      <HeaderScreen navigation={navigation} />

      <Banner />

      <ImageBackground
        source={require('../img/aa.jpg')}
        style={styles.imageBackground}
      >
      
      

        <Animatable.View animation="bounceInLeft" style={styles.container2} >
            <View style={styles.cardContainer}>
            <View style={styles.card}>
            <View style={styles.view}>
            <Text style={styles.name}>INICIO DE SESIÓN </Text>
            </View>
            <View style={styles.view2}>
            <Text style={styles.desc}>Correo </Text>  
            </View>
            <TextInput
                    
                    style={styles.input}
                    placeholder="Ingrese su correo"
                    value={mail}
                    onChangeText={setMail}
                />
            <View style={styles.view3}>
            <Text style={styles.mod}>Contraseña</Text>
            </View>
            <TextInput
                    
                    style={styles.input2}
                    placeholder="Ingrese su contraseña"
                    value={pass}
                    onChangeText={setPass}
                />
            </View>
            </View>
        
        </Animatable.View>

        </ImageBackground>

<Footer />
    </ScrollView>

   
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      imageBackground: {
        flex: 1,
        resizeMode: 'cover', // Esto ajustará automáticamente la imagen al tamaño del contenedor
        justifyContent: 'center', // Esto centrará los contenidos dentro del ImageBackground
      },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 100,
        
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
      card: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#9F1B3B',
        padding: 16,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        width: 600,
        height: 400,
        position: 'relative',
    },
    cardContainer: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 0,
            borderRadius: 20,
            marginBottom: 50,
      },
    name: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'white', 
        fontSize: 35,
        marginRight:0,
        marginLeft:305,
        marginTop:-30,
        width:500,
    },
    desc: {
        position: 'absolute',
        color: 'white', 
        fontWeight: 'bold',
        fontSize: 18,
        width:950,
        marginTop:-30,
        marginLeft:240,
    },
    mod: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'white', 
        fontSize: 18,
        width:250,
        marginLeft:-300,
        marginTop:-30,
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
    input: {
        position: 'absolute',
        height: 40,
        width: 450,
        marginTop:150,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: 'grey', 
        backgroundColor: '#ffff',
      },
    input2: {
        position: 'absolute',
        height: 40,
        width: 450,
        marginTop:265,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: 'grey', 
        backgroundColor: '#ffff',
      },
    
    
    
});
  
export default Login;