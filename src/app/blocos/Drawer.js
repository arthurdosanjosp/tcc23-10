import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = ({ onClose }) => {
    return (
        <View style={styles.drawer}>
            <View style={styles.header}>
                <Icon name="account-circle" size={65} color="#000" />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>Seu Nome</Text>
                    <Text style={styles.userEmail}>email@example.com</Text>
                </View>
            </View>         
            <View style={styles.items}></View>      
            <View style={styles.items}>  
                <TouchableOpacity onPress={onClose} style={styles.item}>
                    <Icon name="work" size={25} color="#696969" />
                    <Text style={styles.itemText}>Área de Trabalho</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.items}> 
                <Link href="/navbar/meusblocos" style={styles.item}>
                    <Icon name="view-quilt" size={25} color="#696969" />
                    <Text style={styles.itemText}>Meus Blocos</Text>
                </Link>
            </View>
            <View style={styles.items}>
                <Link href="/navbar/favoritos" style={styles.item}>
                    <Icon name="favorite" size={25} color="#696969" />
                    <Text style={styles.itemText}>Favoritos</Text>
                </Link>
            </View>
            <View style={styles.items}>
                <Link href="/navbar/configuracoes" style={styles.item}>
                    <Icon name="settings" size={25} color="#696969" />
                    <Text style={styles.itemText}>Configurações</Text>
                </Link>
            </View>
            <View style={styles.items}>
                <Link href="/ajuda" style={styles.item}>
                    <Icon name="help" size={25} color="#696969" />
                    <Text style={styles.itemText}>Ajuda</Text>
                </Link>
            </View>
            <View style={styles.items}>
                <TouchableOpacity onPress={onClose} style={styles.item}>
                    <Icon name="exit-to-app" size={30} color="#696969" />
                    <Text style={styles.itemText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    drawer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '80%',
        height: '100%',
        backgroundColor: 'white', 
        paddingTop: 50,
        zIndex: 1000,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 20,
    },
    userInfo: {
        marginLeft: 15,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 14,
        color: 'gray',
    },
    items: {
        paddingHorizontal: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#D3D3D3',
        marginBottom: 30,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: -10
    },
    itemText: {
        marginLeft: 10,
        fontSize: 17,
        color: 'gray',
    },
});

export default Drawer;

