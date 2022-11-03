import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, Center } from "native-base";
import { Loading } from './src/components/Loading';
import { SingIn } from './src/screens/SingIn';

import { THEME } from './src/styles/theme';


export default function App() {
  const [fontsLoadead] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor="gray.900" >
        <StatusBar
          backgroundColor="transparent"
          translucent
        />

        {fontsLoadead ? <SingIn /> : <Loading />}
      </Center>
    </NativeBaseProvider>
  );
}

