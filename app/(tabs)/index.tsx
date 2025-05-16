//pagina menu
import { Link, router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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
  <View>  
    <Link onPress={onPress} href={"/explore"} >Entrar</Link>
  </View>
  </>
  );
}

const styles = StyleSheet.create({
  
});