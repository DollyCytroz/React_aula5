import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function feedback() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Feedback</Text>
        <Image style={styles.img} source={require('../assets/feedback.png')} />
        <Text style={styles.conteudo}>
          O Feedback é outro dos alienígenas de Ben Tennyson no universo Ben 10, que faz parte da série Ben 10: Omniverse.
          Ele é uma forma alienígena que mistura características biológicas e tecnológicas. O Feedback é um híbrido de ser
          orgânico e cybernético, com um design baseado em um ser de energia elétrica.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50', 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,  
    paddingBottom: 20, 
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase', 
  },
  img: {
    height: 250,
    width: 250,
    marginBottom: 30,
    borderRadius: 20, 
    borderWidth: 5,
    borderColor: '#fff', 
  },
  conteudo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24, 
    textAlign: 'justify',
    paddingHorizontal: 20,
    fontFamily: 'Roboto', 
    marginBottom: 20,
  },
});
