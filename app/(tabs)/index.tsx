//pagina menu
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TextInput } from 'react-native';

const onPress = () => {
  router.push("/(tabs)")
}

export default function HomeScreen() {
  return (
  <>
  <Image source={require('@/assets/images/bannerMenu.png')}/>
   <Text>API RICK AND MORTY</Text>
   <Text>Aplicação web desenvolvida para consumir a API pública de Rick and Morty, exibindo dados detalhados dos personagens da série.</Text>
  <Image source={require('@/assets/images/iconMorty.png')}/>
  <Image source={require('@/assets/images/iconRick.png')}/>
  <TextInput onPress={onPress}>Entrar</TextInput>
  </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});