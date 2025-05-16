//pagina api
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Header } from '@/components/header';
import { api } from '@/constants/api';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  location: {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location"
      };
  image: string;
};

const TabTwoScreen = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get('/character')
      .then(res => setCharacters(res.data.results))
      .catch(console.log);
  }, []);

  // O TypeScript quer saber qual é a estrutura do item.
  const renderItem = ({ item }: {item: Character}) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 8 }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>Status: {item.status}</Text>
      <Text>Espécie: {item.species}</Text>
      <Text>Localização: {item.location.name}</Text>

    </View>
  );

  return (
    <>
      <Header />

      <View style={styles.container}>
        {/* FlatList exibe listas */}
        <FlatList
        // array de dados
          data={characters}
        //Toda lista precisa de uma chave única pra cada item (como um id).
        // Aqui você está dizendo que a chave de cada item será item.id, convertido para string.
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TabTwoScreen;