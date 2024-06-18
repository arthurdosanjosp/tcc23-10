import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import {Link} from 'expo-router'

const EntrarScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageTop} source={require('./img/bola3.jpeg')} />
            <Text style={styles.forgotPasswordText}></Text>
            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.welcomeText}>Bem-Vindo de Volta!</Text>
            <Image style={styles.imageBottom} source={require('./img/bola2.jpeg')} />
            <TextInput style={styles.input} placeholder="             Email" keyboardType="email-address" /> 
            <Icon style={styles.icon} name='mail' size={25} color='gray'/>
                  
            <TextInput style={styles.input} placeholder="             Senha" secureTextEntry={true} />
            <Icon style={styles.icon} name='lock' size={25} color='gray'/>
                  
            <Text style={styles.forgotPasswordText}>Esqueci senha</Text>
            <View style={styles.buttonContainer}>
            <Link href="/blocos/criarblocos" asChild>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Entrar')}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </Link>
            </View>
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 69,
        fontWeight: 'bold',
        right: 47,
        marginBottom: 10,
    },
    welcomeText: {
        fontSize: 18,
        color: 'black',
        right: 56,
        marginBottom: 260,
    },
    input: {
        width: '80%',
        height: 55,
        borderRadius: 25,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 0,
        
    },
    forgotPasswordText: {
        fontSize: 12,
        right: 117,
        color: '#0000CD',
        marginTop: 10,
        textDecorationLine: 'underline',
        marginBottom: 80,
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 50,
        width: 260,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'black',
    },
    imageTop: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: '25%',
        top: -60,
        right: -20,
        left: 150,
        margin: 10,
        marginBottom: 200,
    },
    imageTop: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
        top: -110,
        right: -219,
        bottom: '83%',
        left: 0,
        margin: 20,
    },
    imageBottom: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
        bottom: -400,
        left: -80,
        right: '-6%',
        margin: 0,
    },
    icon:{
        top: -39,
        right: '32%'
    }
});

export default EntrarScreen;