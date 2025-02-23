import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function List() {
  return (
    <View className='flex-1 justify-center bg-bg'>
      <Text className='text-center color-foreground'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}