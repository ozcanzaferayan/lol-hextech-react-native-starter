// @ts-nocheck
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

const FontProvider = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'Beaufort-Regular': require('@assets/app/fonts/BeaufortforLOL-Regular.otf'),
    'Beaufort-Bold': require('@assets/app/fonts/BeaufortforLOL-Bold.otf'),
    'Beaufort-Medium': require('@assets/app/fonts/BeaufortforLOL-Medium.otf'),
    'Spiegel-Regular': require('@assets/app/fonts/Spiegel-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      {children}
    </View>
  );
};

export default FontProvider;
