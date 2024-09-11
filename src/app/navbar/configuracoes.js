import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router'; 

export default function Config() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/gradient.png')} style={styles.navbar}>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                    <Icon name="arrow-back" size={40} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.title}>Configurações</Text>
            </ImageBackground>

            <View style={styles.profileContainer}>
                <Icon name="account-circle" size={120} color="#4f7bbd" />
                <View style={styles.profileDetails}>
                    <Text style={styles.profileName}>Helena</Text>
                    <Text style={styles.profileEmail}>helenasilva@gmail.com</Text>
                    <TouchableOpacity onPress={() => router.push('/conta/gerenciar')}>
                        <Text style={styles.editText}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionItem} onPress={() => router.push('/conta/alterar')}>  
                    <Icon name="sync-alt" size={40} color="#424242" />
                    <Text style={styles.optionText}>Alternar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem} onPress={() => router.push('/conta/gerenciar')}>
                    <Icon name="manage-accounts" size={40} color="#424242" />
                    <Text style={styles.optionText}>Gerenciar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem} onPress={() => router.push('/conta/ajuda')}>
                    <Icon name="help-outline" size={40} color="#424242" />
                    <Text style={styles.optionText}>Ajuda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem} onPress={() => router.push('/logout')}>
                    <Icon name="logout" size={40} color="#424242" />
                    <Text style={styles.optionText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        height: 150,
        top: -49,
        paddingTop: StatusBar.currentHeight || 20,
    },
    iconButton: {
        padding: 10,
    },
    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    profileContainer: {
        flexDirection: 'row', // Align the circle and details horizontally
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 15,
        top: -15,
    },
    profileDetails: {
        marginLeft: 15, // Add space between the circle icon and text
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    profileEmail: {
        fontSize: 18,
        color: '#616161',
        marginVertical: 2,
    },
    editText: {
        fontSize: 14,
        color: '#1e88e5',
        marginTop: 5,
    },
    optionsContainer: {
        marginTop: 1,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingHorizontal: 20,
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20, // Increase padding for larger touch area
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    optionText: {
        fontSize: 22, // Increase font size
        marginLeft: 20, // Increase space between icon and text
        color: '#424242',
    },
});
