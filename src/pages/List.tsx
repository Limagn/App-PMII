import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Alert } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import { Card, CardDescription, CardHeader, CardFooter, CardTitle, CardContent, CardFooterText } from '../components/ui/Card';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { SpendingGetAll } from '../Storage/Spending/spendingGetAll';
import { SpendingStorageDTO } from '../Storage/Spending/spendingStorageDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


export default function List() {
  const [spendingList, setSpendingList] = useState<SpendingStorageDTO[]>();

  // const fetchSpendings = useCallback(async () => {
  //   const data = await SpendingGetAll();
  //   setSpendingList(data)
  // }, []);
  
  // useEffect(() => {
  //   fetchSpendings();
  // }, [])

  // function handleListSpendings() {
  //   fetchSpendings();
  // }

  async function loadDataSpendig() {
    const data = await SpendingGetAll();
    setSpendingList(data)
  } 

  useFocusEffect(useCallback(() => {
    loadDataSpendig()
  }, []))

  function handleListSpendings() {
    loadDataSpendig();
  }
  
  function deleteAll() {
    Alert.alert(
      'Atenção',
      'Tem certeza que deseja deletar todos os registros?',
      [
        {
          text: 'Sim',
          onPress: () => {
            AsyncStorage.clear()
            loadDataSpendig()
            console.log('Deletado')
            Alert.alert('Registros deletados com sucesso!')
          }
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
  }
  
  return (
    <>
      <View>
        <Header title='Listagem'/>
      </View>
      <View className='flex-1 bg-bg p-5'>
        <View className="flex-1 p-5 mb-5 border border-border">
          <FlatList
            className=''
            data={spendingList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Card>
                <CardHeader>
                  <CardTitle className='text-3xl'>
                    {item.description} 
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-green-700'>
                    R$ {item.amount}
                  </CardDescription>
                  <CardDescription>
                    {item.location}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <CardDescription>
                    {item.category}
                  </CardDescription>
                  <CardDescription>
                    {item.purchaseDate}
                  </CardDescription>
                </CardFooter>
              </Card>
            )}
            // renderItem={({item})=>(
            //   <Card>
            //     <CardContent className='flex-1 flex-col flex'>
            //       <CardTitle className='text-3xl'>
            //         Descrição: {item.description}
            //       </CardTitle>
            //       <CardTitle className='text-3xl'>
            //         Data: {item.purchaseDate}
            //       </CardTitle>
            //       <CardTitle className='text-3xl'>
            //         Valor: {item.amount}
            //       </CardTitle>
            //       <CardTitle className='text-3xl'>
            //         Categoria: {item.category}
            //       </CardTitle>
            //       <CardTitle className='text-3xl'>
            //         Local: {item.location}
            //       </CardTitle>
            //     </CardContent>
            //   </Card>
            // )}
            ListEmptyComponent={() => (
              <Text className='text-xl text-white text-center'>
                Não há nenhum registro. Favor cadastrar.
              </Text>
            )}
          />
        </View>
        <Button 
          title='Atualizar lista'
          onPress={handleListSpendings}
        />
        <Button 
          style={{backgroundColor:'red'}}
          title='Apagar todos os registros'
          onPress={deleteAll}
        />
      </View>
    </>
  );
}