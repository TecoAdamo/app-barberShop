import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Principal() {
  const services = ['Cabelo', 'Barba', 'Corte Infantil', 'Cabelo e Barba', 'Sobrancelha', 'Limpeza Facial', 'Luzes'];
  const [selectedServices, setSelectedServices] = useState([]);
  const [servicePrices] = useState({
    'Cabelo': 35,
    'Barba': 30,
    'Corte Infantil': 40,
    'Cabelo e Barba': 70,
    'Sobrancelha': 20,
    'Limpeza Facial': 60,
    'Luzes': 80,
  });

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service)); // Deselect service
    } else {
      setSelectedServices([...selectedServices, service]); // Select service
    }
  };

  // Função para calcular o preço total
  const calculateTotalPrice = () => {
    let total = 0;
    for (const service of selectedServices) {
      total += servicePrices[service];
    }
    return total;
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, marginLeft: 10, marginTop: 50 }}> Faça sua escolha e agende{"\n"} seu horário ! </Text>

      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 10, marginTop: 50 }}>Nossos serviços:</Text>

      <View style={styles.viewPrincipal}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.serviceButton,
                selectedServices.includes(service) && styles.selectedService,
                (service === 'Corte Infantil' || service === 'Limpeza Facial') && styles.centeredText,
              ]}
              onPress={() => toggleService(service)}
            >
              <Text style={{ color: 'white', textAlign: 'center', marginTop: 0 }}>
                {service}
              </Text>
              {selectedServices.includes(service) && (
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    R$ {servicePrices[service]}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 10, marginTop: 20 }}>
         {selectedServices.join(', ')}
      </Text>
      {selectedServices.length > 0 && (
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
          Preço total:  
          <Text 
          style={{ color: '#F29D24', fontWeight: 'bold', fontSize: 20, marginLeft: 10,
           marginTop: 30, }}
          > R$ {calculateTotalPrice()}</Text>
        </Text>   
        
      )}
          <TouchableOpacity 
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '35%',
            right: 0,
            borderRadius: 50,
            backgroundColor: '#F29D24',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            borderWidth: 2,
            borderColor: 'white',
            width: 120
            
          }}>
            <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>AGENDAR</Text>
          </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  viewPrincipal: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 40,
  },
  serviceButton: {
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 20,
    height: 55,
    width: 70,
    borderColor: '#F29D24',
    alignItems: 'center', // Centraliza verticalmente
    justifyContent: 'center', // Centraliza horizontalmente
  },
  selectedService: {
    backgroundColor: '#F29D24',
  },
  hair: {
    color: 'white'
  },
  beard: {
    color: 'white'
  },
  btnHair: {
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 20,
    height: 55,
    width: 70,
    borderColor: '#F29D24'
  },
  btnBeard: {
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 20,
    height: 55,
    width: 70,
    borderColor: '#F29D24'
  },
  btnKids: {
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 20,
    height: 55,
    width: 70,
    borderColor: '#F29D24'
  },
  btnHairBeard: {
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 20,
    padding: 2,
    height: 65,
    width: 75,
    borderColor: '#F29D24'
  },


});