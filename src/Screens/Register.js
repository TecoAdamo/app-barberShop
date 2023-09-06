import React from 'react';
import { TextInput, Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useFonts, Belleza_400Regular } from "@expo-google-fonts/belleza";
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const navigation = useNavigation()

  const [fontLoaded] = useFonts({
    Belleza_400Regular
  });

  if (!fontLoaded) {
    return null
  }
  
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.cardInput}>
    <Text style={styles.title} >Comece criando sua conta!</Text>

        <Text style={styles.TextUser} >Seu nome</Text>
        <TextInput style={styles.inputUser}
        placeholder='Username:'
        placeholderTextColor='white'
        />

        <Text style={styles.TextPassword} >Sua senha</Text>
        <TextInput style={styles.inputPassword}
        placeholder='Password:'
        placeholderTextColor='white'
        secureTextEntry={true} 
        
        />
        
    </View>

    <TouchableOpacity style={styles.btnCadastro}>
        <Text 
        style={{ color: 'black', textAlign: 'center', alignItems: 'center', justifyContent: 'center', 
        marginTop: '4.5%', fontWeight: 'bold', fontSize: 20 }}
        onPress={() => {
          navigation.navigate('Login'); // Substitua 'Login' pelo nome da tela de login
        }}
        >C A D A S T R A R</Text>
    </TouchableOpacity>

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
  cardInput:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    padding: 100,
    paddingTop: 40,
  },
  title:{
    color: 'white',
    textAlign: 'justify',
    marginLeft: -105,
    fontSize: 25,
    paddingBottom: 120,

  },
  TextUser:{
    color: 'white',
    right: 130,
    marginBottom: 5,
    fontSize: 18,
  },
  TextPassword:{
    color: 'white',
    right: 130,
    marginBottom: 5,
    fontSize: 18
  },
  inputUser: {
    borderWidth: 0.8,
    backgroundColor: 'grey',
    padding: 10,
    marginBottom: 30,
    width: 360,
    borderRadius: 15,
    color: 'white',
    paddingLeft: 8
  },
  inputPassword: {
    borderWidth: 0.8,
    backgroundColor: 'grey',
    padding: 10,
    marginBottom: 30,
    width: 360,
    borderRadius: 15,
    color: 'white',
    paddingLeft: 8
  },
  btnCadastro: {
    marginTop: '130%',
    marginLeft: 30,
    overflow: 'hidden',
    borderRadius: 15,
    position: 'absolute',
    width: 330,
    height: 15,
    opacity: 1,
    backgroundColor: '#F29D24',
    borderColor: 'white',
    borderWidth: 1.5,
  },
  conectarText:{
    color: 'white',
    marginLeft: '25%',
    position: 'absolute',
    marginTop: '160%',
    zIndex: 5
  },

});