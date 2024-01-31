import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, TouchableOpacityComponent, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
      <TextInput style={styles.input}
      defaultValue='Digite o texto aqui'/>
      <TouchableOpacity style={styles.botao}>Botao</TouchableOpacity>
      <Image style={styles.Logo} source={require('./src/assets/Logo.png')} />
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
color: 'white',
fontSize: 50,
fontWeight: '500',


  },
input: {
width: '90%',
borderWidth: 2,
height: 40,
color: 'grey',
padding: 10,
},
Logo: {height:50,
width: 50,
},
botao: {
width: '80%',
height: 40,
color: 'red',
borderColor: 'black',
borderWidth: 1,
justifyContent: 'center',
alignItems: 'center',
borderRadius: 8,
marginTop: 10,
},
});
