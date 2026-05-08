import { Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AuthenticateWithBiometrix from '@/hooks/BiometrixAuth';

export default function AuthScreen() {

  return (
    // background-color: #131315
    <SafeAreaView className='bg-vault-black flex-1 items-center p-6 bg-black'>

      {/* Mesh Background Mimic (Top Glow) */}
      <View className="absolute top-0 left-0 right-0 h-96 opacity-20 bg-indigo-600 rounded-full blur-[100px] -translate-y-48" />
      <Text className='text-white text-4xl font-bold tracking-tight'>Secure Access</Text>

      <View className='flex flex-row gap-2 items-center border border-emerald-500/20 bg-emerald-500/10 mt-4 p-2 px-4 rounded-full'>
        <View className='bg-emerald-400 rounded-full w-2 h-2' />
        <Text className='text-emerald-400 text-xs font-medium uppercase tracking-widest'>System Armed & Encrypted</Text>
      </View>

      <View className='items-center mt-16'>
        <Text className='font-bold text-5xl text-white'>Identity</Text>
        <Text className='font-light text-5xl text-slate-400'>Verification</Text>
      </View>

      <Text className='text-slate-500 px-10 text-center mt-6 leading-6'>
        Unlock your digital vault using registered biometrics.
      </Text>

      <View className='flex-row mt-auto mb-10 gap-5'>

        {/* FaceID Card - The "Glass Vault" Style */}
        <Pressable className='glass-vault flex-1 bg-white/5 border border-white/10 p-6 items-center rounded-3xl shadow-2xl'

          onPress={() => AuthenticateWithBiometrix()}

        >
          <View className="bg-indigo-500/10 p-4 rounded-2xl mb-4">
            <MaterialCommunityIcons name="face-recognition" size={42} color="#818cf8" />
          </View>
          <Text className='text-white font-semibold text-lg'>FaceID</Text>
          <Text className='text-slate-500 text-xs mt-1'>Visual Scan</Text>
        </Pressable>

        {/* Fingerprint Card - The "Glass Vault" Style */}
        <Pressable className='glass-vault flex-1 bg-white/5 border border-white/10 p-6 items-center rounded-3xl shadow-2xl'>
          <View className="bg-indigo-500/10 p-4 rounded-2xl mb-4">
            <Ionicons name="finger-print-outline" size={42} color="#818cf8" />
          </View>
          <Text className='text-white font-semibold text-lg'>TouchID</Text>
          <Text className='text-slate-500 text-xs mt-1'>Biometric</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

