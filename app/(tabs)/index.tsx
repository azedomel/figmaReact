//pagina menu
import { Link, router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const onPress = () => {
  router.push("/(tabs)")
}

export default function HomeScreen() {
  return (
  <>
      <SafeAreaView style={styles.container}>
        <Image style={styles.bannerImg} source={require('@/assets/images/bannerMenu.png')}/>
    <Text style={styles.tt}>API RICK AND MORTY</Text>
    <Text style={styles.p}>Aplicação web desenvolvida para consumir a API pública de Rick and Morty, exibindo dados detalhados dos personagens da série.</Text>
      <Image style={styles.img} source={require('@/assets/images/iconMorty.png')}/>
      <Image style={styles.img}  source={require('@/assets/images/iconRick.png')}/>
  <View>  
    <Link style={styles.btn} onPress={onPress} href={"/explore"} >ENTRAR</Link>
  </View>
  </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
    backgroundColor: '#0D2538'  
  },
  bannerImg: {
    marginTop: 80,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    marginRight: 30,
    marginLeft: 30,
    width: 330,
    borderRadius: 10
  },
  img: {
   backgroundColor: 'black',
    width: 100,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  tt: {
    color: '#A1DAA1',
    fontWeight: 900,
    fontSize: 30,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    color: 'white',
    fontWeight: 800,
    fontSize: 18,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 30
  },

  btn: {
    backgroundColor: '#99CBFA',
    color: '#3E6483',
    fontWeight: 600,
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
  }
});