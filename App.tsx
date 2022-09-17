import { StatusBar } from 'react-native';
// recurso do react native que insere um loader na parte superior
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import theme from './src/theme';

import { Groups } from '@screens/Groups';
import { Loading } from '@components/Loading';

export default function App() {
  // usando um valor booleano para verificar se as fontes foram carregadas 
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontsLoaded ? <Groups /> : <Loading /> }
    </ThemeProvider>
  );
}
