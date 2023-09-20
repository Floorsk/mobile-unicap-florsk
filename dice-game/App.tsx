import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Medieval': require('./src/fonts/MedievalSharp.ttf'),
    'MedievalBold': require('./src/fonts/MedievalSharp-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <StatusBar />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


