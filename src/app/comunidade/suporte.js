import React, { useState } from 'react';
import {
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const CustomScreen = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [description, setDescription] = useState('');

    return (
        <View>
            {/* ImageBackground on top */}
            <ImageBackground
                source={require('../img/gradient.png')}
                style={styles.navbar}
            >
                <View style={styles.navTop}>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => router.back()}
                    >
                        <Icon name="arrow-back" size={35} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.title1}>Suporte</Text>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="account-circle" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* Form content below the ImageBackground */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>
                    <Text style={styles.asterisk}>*</Text> Nome
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="#888"
                />
                
                <Text style={styles.label}>
                    <Text style={styles.asterisk}>*</Text> E-mail
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="#888"
                    keyboardType="email-address"
                />

                <Text style={styles.label}>
                    <Text style={styles.asterisk}>*</Text> Pergunta
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Pergunta"
                    value={question}
                    onChangeText={setQuestion}
                    placeholderTextColor="#888"
                />

                <Text style={styles.label}>
                    <Text style={styles.asterisk}>*</Text> Descrição
                </Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="Descrição"
                    value={description}
                    onChangeText={setDescription}
                    placeholderTextColor="#888"
                    multiline={true}
                    numberOfLines={4}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.cancelText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sendButton}>
                        <Text style={styles.sendText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 150, // Height of the ImageBackground
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight || 20,
        paddingHorizontal: 10,
    },
    navTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    iconButton: {
        padding: 15,
    },
    title1: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
    },
    formContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    asterisk: {
        color: 'red',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#f1f1f1',
    },
    textArea: {
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#f1f1f1',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        borderColor: '#4682B4',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    cancelText: {
        color: '#4682B4',
        fontWeight: 'bold',
    },
    sendButton: {
        backgroundColor: '#4682B4',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    sendText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CustomScreen;
