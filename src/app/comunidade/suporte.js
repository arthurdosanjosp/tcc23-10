import React, { useState } from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const CustomScreen = () => {
    const [searchText, setSearchText] = useState('');
    const router = useRouter();

    return (
        <ImageBackground source={require('../img/gradient.png')} style={styles.navbar}>
            <View style={styles.navTop}>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                    <Icon name="arrow-back" size={35} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.title1}>Comunidade</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="account-circle" size={40} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Pesquisar"
                    placeholderTextColor="#888"
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                />
                <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
            </View>
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
        padding: 15,
        top: 10,
    },
    title1: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        right: 45,
        top: 10,
    },
    searchContainer: {
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    searchBar: {
        width: '100%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    searchIcon: {
        position: 'absolute',
        right: 20,
        top: 8,
    },
});

export default CustomScreen;
