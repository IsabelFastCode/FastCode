import axios from 'axios';

const API_URL = "http://localhost:8080/api";

const apiService = {
  addExpense: (expenseData) => {
    return axios.post(`${API_URL}/expenses/add`, expenseData);
  },
  getGroupExpenses: (groupId) => {
    return axios.get(`${API_URL}/expenses/group/${groupId}`);
  }
};

export default apiService;
