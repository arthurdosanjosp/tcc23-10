import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, TextInput, StyleSheet, StatusBar, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Drawer from '../menu/Drawer2'; // Importe o componente Drawer aqui

const ScheduleHeader = () => {
    const [isDrawerVisible, setDrawerVisible] = useState(false); // Estado para controlar a visibilidade do Drawer

    return (
        <ImageBackground source={require('../img/gradient.png')} style={styles.navbar}>
            <View style={styles.navTop}>
                {/* Adicione o onPress para abrir o Drawer */}
                <TouchableOpacity style={styles.iconButton} onPress={() => setDrawerVisible(true)}>
                    <Icon name="menu" size={40} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.title1}>SCHEDULE</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="account-circle" size={40} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Pesquisar"
                    placeholderTextColor="#888"
                />
                <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
            </View>

            {/* Renderize o Drawer condicionalmente */}
            {isDrawerVisible && <Drawer onClose={() => setDrawerVisible(false)} />}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        height: 190,
        top: -49,
        paddingTop: StatusBar.currentHeight || 20,
    },
    navTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
    },
    iconButton: {
        padding: 10,
    },
    title1: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    searchContainer: {
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 10,
        position: 'relative',
    },
    searchBar: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 40,
        backgroundColor: '#fff',
        width: '100%',
    },
    searchIcon: {
        position: 'absolute',
        right: 20,
        top: 8,
    },
});

export default ScheduleHeader;
