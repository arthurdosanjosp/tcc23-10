import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

const CriarContaScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}></Text>
            <Image style={styles.image} source={require('./img/bola6.png')} />
            <View style={styles.spacer} />
            <Text style={styles.title}>Criar Conta</Text>
            <View style={styles.spacer} />
            <View style={styles.spacer} />



            <View style={styles.inputContainer}>
                <Icon name="user" size={25} color="gray" />
                <TextInput style={styles.input} placeholder="Nome" />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="mail" size={25} color="gray" />
                <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="lock" size={25} color="gray" />
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
            </View>

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
