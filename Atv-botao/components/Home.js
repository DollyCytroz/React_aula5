import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Home(props) {
  return (
    <ImageBackground
      source={require('../assets/ben100.jpg')}
      style={estilo.container}
      resizeMode="cover">
      <SafeAreaView style={estilo.container}>
        <View style={estilo.principal}>
          <Text style={estilo.titulo}>TOP 3 ALIENS</Text>
          <Text style={estilo.subtitulo}>Os três aliens mais incríveis do Ben 10</Text>
        </View>

        <View>
          <TouchableOpacity style={estilo.button} onPress={() => { props.navigation.navigate('feedback') }}>
            <Text style={estilo.textButton}>Feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilo.button} onPress={() => { props.navigation.navigate('xrl8') }}>
            <Text style={estilo.textButton}>XRL8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilo.button} onPress={() => { props.navigation.navigate('alienx') }}>
            <Text style={estilo.textButton}>AlienX</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
  },
  subtitulo: {
    fontSize: 20,
  },
  button: {
    margin: 10,
    padding: 5,
    backgroundColor: 'yellow',
    borderRadius: 50, 
    alignItems: 'center',
    borderColor: 'black', 
    borderWidth: 2, 
  },
  textButton: {
    fontSize: 20,
  },
  principal: {
    alignItems: 'center',
    marginBottom: 50,
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 50,
  }
});
