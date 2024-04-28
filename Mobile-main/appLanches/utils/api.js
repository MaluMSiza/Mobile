// api.js
import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.109:3000';

export const autorizarAluno = async (alunoData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/aluno/autorizar`, alunoData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const consultarAlunosPorData = async (data) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/aluno/consultar/${data}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const consultarAlunos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/aluno/consulte`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
// Implement other API functions for ticket management if needed
