import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, Text, View } from 'react-native';
import { InputDate } from '../components/ui/InputDate';
import { useState } from 'react';
import { Card, CardContent, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Header } from '../components/ui/Header';
import { SpendingGetAll } from '../Storage/Spending/spendingGetAll';
import { SpendingCreate } from '../Storage/Spending/spendingCreate';
import { Button } from '../components/ui/Button';

export default function App() {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [purchaseDate, setPurchaseDate] = useState('');
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  
  async function handleAddSpending() {
    const data = {
      description,
      amount,
      purchaseDate,
      category,
      location,
    }

    if (description === "" || amount === "" || purchaseDate === "" || category === "" || location === "") {
      SpendingGetAll();
      return Alert.alert('Campos vazios.', 'Favor preencher campos vazios!');
    };

    await SpendingCreate(data);

    Alert.alert('Cadastro','Cadastrado com sucesso!');
    setDescription('');
    setAmount('');
    setPurchaseDate('');
    setCategory('');
    setLocation('');
  }

  const placeholderTextColor = '#71717A'

  return (
    <>
      <View>
        <Header title='Controle de Gastos'/>
      </View>
      <View className='flex-1 p-5 bg-bg'>
        <ScrollView>
          <Card>
            <CardTitle>Descrição</CardTitle>
            <CardContent>
              <Input
                placeholder='Ex: iPhone'
                placeholderTextColor={placeholderTextColor}
                value={description}
                onChangeText={value => setDescription(value)}
                />
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Valor (R$)</CardTitle>
            <CardContent>
              <Input
                placeholder='Ex: 3200,00'
                placeholderTextColor={placeholderTextColor}
                value={amount}
                onChangeText={value => setAmount(value)}
                keyboardType='decimal-pad'
                />
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Data</CardTitle>
            <CardContent>
              <InputDate
                placeholder='Ex: 22/02/2025'
                placeholderTextColor={placeholderTextColor}
                value={purchaseDate}
                onChangeText={value => setPurchaseDate(value)}
                keyboardType='number-pad'
                />
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Categoria</CardTitle>
            <CardContent>
              <Input
                placeholder='Ex: Celular'
                placeholderTextColor={placeholderTextColor}
                value={category}
                onChangeText={value => setCategory(value)}
                />
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Local</CardTitle>
            <CardContent>
              <Input
                placeholder='Ex: Loja da Apple'
                placeholderTextColor={placeholderTextColor}
                value={location}
                onChangeText={value => setLocation(value)}
                />
            </CardContent>
          </Card>
          <Button 
            title='Adicionar'
            onPress={handleAddSpending}
          />
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </>
  );
}
