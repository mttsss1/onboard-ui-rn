import { useFonts } from 'expo-font';
import { 
    OpenSans_700Bold,
    OpenSans_400Regular,
    OpenSans_600SemiBold
  } from '@expo-google-fonts/open-sans';

import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    OpenSans_600SemiBold,
    OpenSans_400Regular
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <Routes/>
  )
}