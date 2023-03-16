import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Title from '@components/Text';
import Text from '@components/Title';
import Providers from '@contexts/Providers';
import HomeScreen from '@screens/home/HomeScreen';
import Reference from '@screens/reference/Reference';

export default function App() {
  return (
    <Providers>
      <HomeScreen />
      <Reference />
    </Providers>
  );
}
