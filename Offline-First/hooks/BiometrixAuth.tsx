// first check if user device has biometrix 
// if user has provide teh biometrix if not let them now it's impossible to get it 
// 
//
//
//
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

const AuthenticateWithBiometrix = () => {
  const [biometricAvailable, setBiometricAvailable] = useState(false);
  const rnBiometrics = new ReactNativeBiometrics()


  useEffect(() => {
    checkBiometrixExists()
  }, [])

  const checkBiometrixExists = async () => {
    const { available, biometryType } = await rnBiometrics.isSensorAvailable();
    //
    // if (biometryType === BiometryTypes.FaceID) {
    //   console.log("FaceID authentication exists")
    // } else if (biometryType === BiometryTypes.TouchID) {
    //   console.log("touch authentication exists")
    // } else if (biometryType == BiometryTypes.Biometrics) {
    //   console.log("biometrix found for andriod")
    // } else {
    //   console.log("no biometrix authentication found")
    // }
    if (available) {
      setBiometricAvailable(true)
      console.log('Biometric sensor detected:', biometryType);
      authenticateWithBiometrics()
    }
  }
  const authenticateWithBiometrics = async () => {
    try {
      const { success } = await rnBiometrics.simplePrompt({ promptMessage: "Authenticate to continue" })

      if (success)
        Alert.alert('Welcome Back!', `Logged in as user`);

    } catch (error) {
      console.error('Biometric authentication error:', error);
    }

  }

  // const  AuthenticateWithFaceId = () => { }
  // const AuthenticateWithFingerprint = () => { }
}


export default AuthenticateWithBiometrix
