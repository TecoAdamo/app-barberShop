import React from 'react';
import { TextInput, Text, StyleSheet, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts, Belleza_400Regular } from "@expo-google-fonts/belleza";
import { useNavigation } from '@react-navigation/native';

export default function Login() {
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
    <Text style={styles.title} >Conecte-se a sua conta!</Text>

        <Text style={styles.TextUser} >Insira seu nome</Text>
        <TextInput style={styles.inputUser}
        placeholder='Username:'
        placeholderTextColor='white'
        />

        <Text style={styles.TextPassword} >Insira sua senha</Text>
        <TextInput style={styles.inputPassword}
        placeholder='Password:'
        placeholderTextColor='white'
        secureTextEntry={true}
        
        />


        <TouchableOpacity style={styles.forgotPass}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline', textAlign: 'center' }}>
            Esqueceu sua senha?
        </Text>
        </TouchableOpacity>
        
    </View>

        <TouchableOpacity 
        style={styles.btnLogin}
        >

        <Text style={{ color: 'black', textAlign: 'center', alignItems: 'center', justifyContent: 'center', 
        marginTop: '3.8%', fontWeight: 'bold', fontSize: 20 }}
        onPress={() => {navigation.navigate('Principal');}}>L O G I N</Text>
        </TouchableOpacity>

        <Text style={styles.conectarText}>
        Você não tem uma conta? 
        <Text
          style={{ color: '#F29D24', textDecorationLine: 'underline', textAlign: 'center' }}
          onPress={() => {
            navigation.navigate('Register'); 
          }}
        >
            Criar conta
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
    marginLeft: -80,
    fontSize: 25,
    paddingBottom: 120,

  },
  TextUser:{
    color: 'white',
    right: 100,
    marginBottom: 5,
    fontSize: 18,
  },
  TextPassword:{
    color: 'white',
    right: 100,
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
  btnLogin: {
    marginTop: '130%',
    marginLeft: 35,
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
    marginLeft: '20%',
    position: 'absolute',
    marginTop: '160%',
    zIndex: 5
  },

});