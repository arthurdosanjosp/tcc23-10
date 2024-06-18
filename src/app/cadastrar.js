import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { useRouter } from 'expo-router';
import {Link} from 'expo-router'


const CriarContaScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}></Text>
            <Image style={styles.imageTop} source={require('./img/bola5.png')} />
            <View style={styles.spacer} />
            <Text style={styles.title}>Criar Conta</Text>
            <TextInput style={styles.input} placeholder="             Nome" />
            <Icon style={styles.icon} name='user' size={25} color='gray' />
            <TextInput style={styles.input} placeholder="             Email" keyboardType="email-address" />
            <Icon style={styles.icon} name='mail' size={25} color='gray' />
            <TextInput style={styles.input} placeholder="             Senha" secureTextEntry={true} />
            <Icon style={styles.icon} name='lock' size={25} color='gray' />
            <Image
                style={styles.image}
                source={require('./img/bola41.png')}
            />
            <Text style={styles.welcomeText}></Text>
            <View style={styles.spacer} />
            <View style={styles.buttonContainer}>

                <Link href="/blocos/criarblocos" asChild>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('Entrar')}>
                        <Text style={styles.buttonText}>CADASTRAR</Text>
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
        backgroundColor: '#DCDCDC',
    },
    title: {
        fontSize: 63,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 100,
        top: -15,
    },
    input: {
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
        marginBottom: 10,
    },
    spacer: {
        height: 15,
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
        marginBottom: 60,

    },
    buttonText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'black',


    },
    image: {
        position: 'absolute',
        top: '76%',
        left: 0,
        right: 0,
        height: '30%',
        width: '100%',
    },
    imageTop: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: '28%',
        top: 0,
        right: -0,
        left: 0,


    },
    welcomeText: {
        marginBottom: 90,
    },
    icon: {
        top: -48,
        right: '32%'
    }
});

export default CriarContaScreen;