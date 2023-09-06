import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Initial() {
    const navigation = useNavigation()
  
  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.gradientContainer}>
        <ImageBackground
          source={require('../Image/barbearia.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.gradient}>
        </View>
      </View>

      <TouchableOpacity 
      style={styles.btnContainer}
      onPress={() => { navigation.navigate('Register')}}
      >
        <Text style={{ color: 'black', textAlign: 'center', alignItems: 'center', justifyContent: 'center', 
        marginTop: '4.5%', fontWeight: 'bold', fontSize: 20 }}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.textoSuperior}>
        Na nossa barbearia, cada corte {"\n"}é uma nova descoberta.
      </Text>


      <Text style={styles.conectarText}>
        Já tem uma conta? 
        <Text
          style={{ color: '#F29D24', textDecorationLine: 'underline' }}
          onPress={() => {
            navigation.navigate('Login'); // Substitua 'Login' pelo nome da tela de login
          }}
        >
            Conecte-se
        </Text>
      </Text>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  gradientContainer: {
    flex: 1, 
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.9
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 535,
    bottom: 2,
    height: 290,
    backgroundColor: 'rgba(3, 0, 0, 0.9)',
    opacity: 0.9,
    borderRadius: 10
  },
  btnContainer: {
    marginTop: '160%',
    marginLeft: 30,
    overflow: 'hidden',
    borderRadius: 15,
    position: 'absolute',
    width: 330,
    height: 5,
    opacity: 1,
    backgroundColor: '#F29D24',
    borderColor: 'white',
    borderWidth: 1.5,
  },
  textoSuperior: {
    position: 'absolute',
    top: 550,
    left: 30,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  conectarText:{
    color: 'white',
    marginLeft: '25%',
    position: 'absolute',
    marginTop: '185%',
    zIndex: 5
  },
  cardInput1: {
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    borderWidth: 0.8,
    borderRadius: 20,
    borderColor: 'white',
  },
  cardInput2: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    borderWidth: 0.8,
    borderRadius: 20,
    borderColor: 'white',
  },
  textContainer: {
    position: 'absolute',
    top: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});