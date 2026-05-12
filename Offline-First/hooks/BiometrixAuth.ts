import { router } from 'expo-router';
import { Alert } from 'react-native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthenticateWithBiometrix = async () => {
  const rnBiometrics = new ReactNativeBiometrics()
  const { available, biometryType } = await rnBiometrics.isSensorAvailable();

  const authenticateWithBiometrics = async () => {
    try {
      const { success } = await rnBiometrics.simplePrompt({ promptMessage: "Authenticate to continue" })
      if (success) {
        Alert.alert('Welcome Back!', `Logged in as user`);
        AsyncStorage.setItem("userLoggedIn", "true")
        router.replace("/(tabs)");

      }
    } catch (error) {
      Alert.alert('biometrix failed to Authenticate');
      AsyncStorage.setItem("userLoggedIn", "true")
      console.error('Biometric authentication error:', error);
    }
  }

  if (available && biometryType === BiometryTypes.FaceID || BiometryTypes.TouchID) {
    console.log('Biometric sensor detected:', biometryType);
    authenticateWithBiometrics()
  } else {
    console.log("no biometrix authentication found")
  }
}


export default AuthenticateWithBiometrix
