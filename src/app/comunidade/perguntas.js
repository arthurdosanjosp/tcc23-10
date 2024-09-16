import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router'; 

const PerguntasFrequentes = () => {
  const router = useRouter(); 

  const perguntas = [
    'Como deletar conta?',
    'Como criar uma ficha?',
    'Como definir um dia de entrega em uma ficha?',
    'Como trocar imagem de perfil?',
    'Como alterar o meu e-mail?',
    'Como trocar senha?',
    'Como criar uma tarefa?',
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground 
    source={require('../img/gradient (6).jpeg')} 
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons 
          name="arrow-back" 
          size={26} 
          color="white" 
          onPress={() => router.back()} 
        />
        <Text style={styles.title}>Perguntas frequentes</Text>
      </View>

      <FlatList
        data={perguntas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    left: 10
   
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    width: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  list: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    marginTop: 70,
    width: '85%',
    left: 30,
    
  },
  button: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
  },
});

export default PerguntasFrequentes;
