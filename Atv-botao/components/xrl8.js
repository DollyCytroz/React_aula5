import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function xrl8() {
  return (
    <View style={styles.container}>
    <StatusBar style="light" />
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Xrl8</Text>
      <Image style={styles.img} source={require('../assets/xrl8.png')} />
      <Text style={styles.conteudo}>
      O XLR8 (pronunciado "Accelerate") é uma das formas alienígenas mais rápidas do Omnitrix no universo Ben 10. Ele é um ser da raça Kineceleran, conhecida por sua incrível velocidade, e aparece em várias versões da série. 
      </Text>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#53a8b8', 
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