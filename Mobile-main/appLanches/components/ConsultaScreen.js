import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { consultarAlunosPorData } from '../utils/api'; 

export default function ConsultaScreen() {
    const [alunos, setAlunos] = useState([]);
    const [dataConsulta, setDataConsulta] = useState('');
    const [consultaRealizada, setConsultaRealizada] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
  
    // Função para realizar a consulta
    const handleConsultar = async () => {
      try {
        let response;
        if (dataConsulta) {
          response = await consultarAlunosPorData(dataConsulta);
        } 
        setAlunos(response);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

  const fetchAlunosPorData = async (data) => {
    try {
      const response = await consultarAlunosPorData(data);
      setAlunos(response);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text>{item.codigo}</Text>
      <Text>{item.nome}</Text>
      <Text>{item.dataLiberacaoLanche}</Text>
      <Text>{item.qtdeLanches}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Alunos</Text>
      <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateText}>{dataConsulta || 'Selecionar Data'}</Text>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <Button title="Consultar Por Data" onPress={handleConsultar} />
      </View>
      <FlatList
        data={alunos}
        keyExtractor={(item) => item._id}
        renderItem={renderCard}
      />
      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setDataConsulta(selectedDate.toISOString().split('T')[0]);
            }
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});
