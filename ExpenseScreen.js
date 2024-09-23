import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import apiService from './apiService';

export default function ExpenseScreen() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [groupId, setGroupId] = useState('');

  const addExpense = () => {
    const expenseData = { description, amount, groupId };
    apiService.addExpense(expenseData)
      .then(response => {
        console.log("Expense added", response.data);
      })
      .catch(error => {
        console.error("Error adding expense", error);
      });
  };

  return (
    <View>
      <Text>Add Expense</Text>
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} />
      <TextInput placeholder="Group ID" value={groupId} onChangeText={setGroupId} />
      <Button title="Add Expense" onPress={addExpense} />
    </View>
  );
}
