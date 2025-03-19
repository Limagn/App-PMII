import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, Text, View } from 'react-native';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function Search() {

  function handleSearch() {
    Alert.alert('Atenção','Esta função não está pronta!')
  }

  return (
    <>
      <View>
        <Header title='Pesquisa'/>
      </View>
      <View className='flex-1 bg-bg p-5'>
        <ScrollView>
        <Input/>
        <Button 
          title='Pesquisar'
          onPress={handleSearch}
          />
        </ScrollView>
      </View>
    </>
  );
}