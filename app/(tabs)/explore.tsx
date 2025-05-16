//pagina api
import  { useEffect, useState } from 'react';
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
      <Text style={styles.textcard}>• {item.status}</Text>
      <Text style={styles.textcard}>• {item.species}</Text>
      <Text style={styles.textcard}>• {item.location.name}</Text>
    </View>
  );

  return (
    <>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={characters}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#629C9E',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#0D2538',
    width: 270,
    height: 400
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20
  },
  textcard: {
    color: 'white',
    fontSize: 17,
    
  }
});

export default TabTwoScreen;