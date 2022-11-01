import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, Center } from "native-base";

import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';


export default function App() {
  
  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor="gray.900" >
        <Loading />
        <Text color="white" fontSize={24}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}

