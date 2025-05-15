import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Essa tela não existe.</Text>
        <Text style={styles.title}>404 NOT FOUND</Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.btn}>Volta pra home!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5f8a70',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  title: {
    color: 'white',
    fontSize: 27
  },
  btn:{
    padding: 5,
    borderRadius: 6,
    color: 'white',
    backgroundColor: '#184229',
    fontSize: 17
  }
});