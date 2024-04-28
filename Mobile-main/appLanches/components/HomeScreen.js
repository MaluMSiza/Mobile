import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: 'red' }]}
        onPress={() => navigation.navigate('FormScreen')}
      >
        <MaterialIcons name="person-add" size={24} color="white" />
        <Text style={styles.buttonText}>Adicionar Estudante</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: 'orange' }]}
        onPress={() => navigation.navigate('ConsultaScreen')}
      >
        <MaterialIcons name="access-alarm" size={24} color="white" />
        <Text style={styles.buttonText}>Consultar Acessos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: 'orange' }]}
        onPress={() => navigation.navigate('LancheLibarationScreen')}
      >
        <MaterialIcons name="fastfood" size={24} color="white" />
        <Text style={styles.buttonText}>Liberar lanches</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 200,
  },
  buttonText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 18,
  },
});
