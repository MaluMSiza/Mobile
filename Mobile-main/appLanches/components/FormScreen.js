import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Importar o DatePicker

import { autorizarAluno } from '../utils/api';

export default function FormScreen() {
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [dataLiberacaoLanche, setDataLiberacaoLanche] = useState(new Date()); // Definir o estado inicial como a data atual
  const [qtdeLanches, setQtdeLanches] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false); // Estado para controlar a exibição do DatePicker

  const handleSubmit = async () => {
    try {
      // Validar quantidade de lanches
      if (parseInt(qtdeLanches) > 3) {
        setError('A quantidade de lanches não pode ser maior que 3.');
        return;
      }

      // Validar data de liberação do lanche
      const today = new Date();
      if (dataLiberacaoLanche.getTime() > today.getTime()) {
        setError('A data de liberação do lanche não pode estar no futuro.');
        return;
      }

      // Enviar formulário se todas as validações passarem
      await autorizarAluno({ codigo, nome, dataLiberacaoLanche, qtdeLanches });
      setModalVisible(true); // Exibir modal em caso de envio bem-sucedido
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário</Text>
      <TextInput
        style={styles.input}
        placeholder="Código do Aluno"
        value={codigo}
        onChangeText={setCodigo}
        keyboardType="numeric" // Teclado numérico para o código do aluno
        maxLength={5} // Limitar o número máximo de caracteres para 5
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <View style={styles.input}>
          <Text>Data de Liberação do Lanche:</Text>
          <Text>{dataLiberacaoLanche.toDateString()}</Text>
        </View>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Quantidade de Lanches"
        value={qtdeLanches}
        onChangeText={text => {
          // Limitar a quantidade de lanches a 3
          if (parseInt(text) <= 3) {
            setQtdeLanches(text);
          }
        }}
        keyboardType="numeric" // Teclado numérico para a quantidade de lanches
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Enviar" onPress={handleSubmit} />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Formulário enviado com sucesso!</Text>
          <Button title="OK" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      {showDatePicker && (
        <DateTimePicker
          value={dataLiberacaoLanche}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setDataLiberacaoLanche(selectedDate);
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
});
