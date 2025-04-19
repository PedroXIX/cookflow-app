import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { UserIcon, BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/categories';

export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState('Beef');

  return (
    <View className='flex-1 bg-white'>
      <StatusBar style='dark' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className={'space-y-6 pt-14'}
      >
        {/* Avatar e icone do sino */}
        <View className='mx-4 flex-row justify-between items-center mb-2'>
          <UserIcon size={hp(4)} color='gray' />
          <BellIcon size={hp(4)} color='gray' />
        </View>

        {/* Agradecimentos e frase de efeito legal */}
        <View className='mx-4 space-y-2 mb-2'>
          <Text style={{fontSize: hp(1.7)}} className='text-neutral-600'>Olá, Fer!</Text>
          <View>
            <Text style={{fontSize: hp(3.8)}} className='font-semibold text-neutral-600'>Faça sua refeição de forma divertida,</Text>
          </View>
          <Text style={{fontSize: hp(3.8)}}>
            Sem sair de <Text className='text-amber-400'>casa</Text>
          </Text>
        </View>
            
        {/* Barra de pesquisa */}
        <View className='mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]'>
          <TextInput 
            placeholder='Pesquise uma receita'
            placeholderTextColor={'gray'}
            style={{fontSize: hp(1.7)}}
            className='flex-1 text-base mb-1 pl-3 tracking-wider'
          />
          <View className='bg-white rounded-full p-3'>
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color='gray' />
          </View>
        </View>

        {/* Categorias */}
        <View>
          <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        </View>
      </ScrollView>
    </View>
  );
}
