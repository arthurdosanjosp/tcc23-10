import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert, Image, KeyboardAvoidingView, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebaseConfig";
import { useRouter } from 'expo-router';



const CriarContaScreen = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const router = useRouter();
    const cadastro = () => {
        if (email.trim() === '' || senha.trim() === '') {
            return Alert.alert('Por favor, preencha todos os campos.');
          }

        if (!email.includes('@')) {
            return Alert.alert('Por favor, insira um email válido.');
        }

        if (senha.length < 8) {
            return Alert.alert('A senha deve ter pelo menos 8 caracteres.');
        }

        createUserWithEmailAndPassword(auth, email, senha, nome)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Usuário criado:', user);
             
                setTimeout(() => {
                    router.push('/blocos/criarblocos');
                }, 100);
            })
            .catch((error) => {
                const errorMessage = error.message;
              
                console.log('Erro ao criar usuário:', errorMessage);
              
            });
    };
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      
    >
            <Pressable style={styles.backButton} onPress={() => router.back()}>
                <Icon name="arrowleft" size={30} color="black" />
            </Pressable>
            <Text style={styles.welcomeText}></Text>
            <Image style={styles.image} source={require('./img/bola6.png')} />
            <View style={styles.spacer} />
            <Text style={styles.title}>Criar Conta</Text>
            <View style={styles.spacer} />
            <View style={styles.spacer} />



            <View style={styles.inputContainer}>
                <Icon name="user" size={25} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="mail" size={25} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="lock" size={25} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={text => setSenha(text)}
                />
            </View>

            <Text style={styles.welcomeText}></Text>
            <View style={styles.spacer} />
            <View style={styles.buttonContainer}>
               
                
                        <Pressable onPress={cadastro} style={styles.button}>
                            <Text style={styles.buttonText}>CADASTRAR</Text>
                        </Pressable>
             
            </View>
            </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 20,
        zIndex: 1,
    },
    title: {
        fontSize: 63,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 100,
        top: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 30,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        color: '#000',
    },
    spacer: {
        height: 15,
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 40,
    },
    button: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 50,
        width: 260,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60,
    },
    buttonText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'black',
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: 'auto',
        top: '-6%',
    },
    welcomeText: {
        marginBottom: 90,
    }
});

export default CriarContaScreen;
