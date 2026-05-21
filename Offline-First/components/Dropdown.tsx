import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function NoteActionMenu() {
  const handleAction = (id: number, item: any = {}) => {

  };

  return (
    <View className='relative top-0 left-3 w-52 h-52 bg-surface/10 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl z-10 items-center'>
      <View className='flex-col justify-center items-center w-full gap-2'>
        <View className='w-full items-center flex flex-row gap-2'>
          < Ionicons name='pin' color="#333" size={20} />
          <Text className='items-center font-bold text-white text-2xl'>this is one</Text>
        </View >

        <View className='w-full items-center flex flex-row gap-2'>
          < Ionicons name='pin' color="#333" size={20} />
          <Text className='items-center font-bold text-white text-2xl'>this is one</Text>
        </View >

        <View className='w-full items-center flex flex-row gap-2'>
          < Ionicons name='pin' color="#333" size={20} />
          <Text className='items-center font-bold text-white text-2xl'>this is one</Text>
        </View >


      </View >
    </View >
  );
}

// 've extracted the Tailwind CSS classes used for the glassmorphic dropdown menu in the "Deep Sentinel" design. The style relies on a combination of semi-transparent background colors, backdrop blurs, and subtle borders to achieve the frosted glass effect.
//
// Glassmorphic Dropdown Palette:
// Background: bg-surface/10 (or bg-white/10 with backdrop-blur-3xl)
// This provides the base transparency that allows background colors to bleed through.
// 
// Border/Stroke: border-white/10 or border-surface-bright/20
// A very thin, low-opacity white border defines the edges and creates the "specular" highlight typical of glass.
// Dividers: border-b border-white/5
// Subtle separators between menu items.
// Text (Standard): text-on-surface (High contrast white/off-white)
// Text (Destructive/Delete): text-error or text-red-400/90
// Iconography: text-on-surface-variant (Slightly dimmed for hierarchy)
// Hover/Active States: hover:bg-white/5 or active:bg-white/10
// Example Implementation:
// <!-- The Glass Container -->
// <div 
//   <!-- Menu Item -->
//   <button class="flex items-center px-4 py-3 text-on-surface hover:bg-white/5 transition-colors">
//     <span class="material-icons mr-3 text-on-surface-variant">edit</span>
//     <span>Edit</span>
//   </button>
// </div>
// Would you like me to apply these styles to any other components or adjust the transparency levels?
