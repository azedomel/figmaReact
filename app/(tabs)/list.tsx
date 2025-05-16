//pagina cards livre
import { Header } from '@react-navigation/elements';
import { StyleSheet, FlatList, SafeAreaView} from 'react-native';
import data from '@/constants/data';
import { Item } from '@/components/item';

export default function List() {
  return (
  <>
  <Header headerStyle={styles.header} headerTitleStyle={styles.header} title={'ÁLBUM CHICO DE HOLLANDA (1966)'}></Header>
   <SafeAreaView>
    <FlatList data={data} renderItem={({item}) => (
      <Item name={item.nome} date={item.data} image={item.imagem}/>
    )} keyExtractor={(item) => item.id}>
    </FlatList>
   </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  },
  back:{
    paddingHorizontal: 20
  },
  header: {
    backgroundColor: 'black',
    color: 'white',
    position: 'relative',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
