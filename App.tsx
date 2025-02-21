import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Routes } from './src/routes';
import './src/stylesheets/globals.css';

export default function App() {
  return (
    <View className='flex-1'>
      <Routes/>
    </View>
  );
}