
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native-web';
import AppNavigator from './navigation/AppNavigator';




export default function App() {
  return (
    <View>
      <AppNavigator/>
      <StatusBar style="auto" />
    </View>
  );
}


