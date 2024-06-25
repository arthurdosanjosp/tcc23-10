import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity, StatusBar, TextInput, PanResponder } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Drawer from './Drawer';

export default function Areadtrabalho() {
    const router = useRouter();
    const { blocks } = useLocalSearchParams();
    const parsedBlocks = JSON.parse(blocks || '[]');
    const [data, setData] = useState(parsedBlocks);
    const [isDrawerVisible, setDrawerVisible] = useState(false);

    const moveItem = (fromIndex, toIndex) => {
        const updatedData = [...data];
        const item = updatedData.splice(fromIndex, 1)[0];
        updatedData.splice(toIndex, 0, item);
        setData(updatedData);
    };

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            // Lógica para identificar o índice do item arrastado e o novo índice destino
        },
        onPanResponderRelease: (e, gestureState) => {
            // Lógica para finalizar a movimentação
        }
    });

    const renderItem = ({ item, index }) => (
        <View
            style={[styles.block, { backgroundColor: item.color }]}
            {...panResponder.panHandlers}
        >
            <Text style={styles.blockText}>{item.name}</Text>
            <View style={styles.blockFooter}>
                <TouchableOpacity style={styles.iconTouchable}>
                    <Icon name="favorite" size={15} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconTouchable}>
                    <Icon name="visibility" size={15} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconTouchable}>
                    <Icon name="delete" size={15} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View>
            <ImageBackground source={require('../img/gradient.png')} style={styles.navbar}>
                <View style={styles.navTop}>
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
            </ImageBackground>

            <View style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title2}>Área de Trabalho</Text>
                    <TouchableOpacity style={styles.addIcon}>
                        <Icon name="add" size={28} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.subtitle}>Meus Blocos</Text>
                <FlatList
                    data={data}
                    pagingEnabled
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={'start'}
                    scrollEventThrottle={16}
                    decelerationRate="fast"
                    horizontal
                    renderItem={renderItem}    
                />

                {/* Minhas Tarefas Section */}
                <View style={styles.taskFilterContainer}>
                    <View style={styles.taskFilterTitleContainer}>
                        <Text style={styles.taskFilterTitle}>Minhas Tarefas</Text>
                        <TouchableOpacity style={styles.addTaskIcon}>
                            <Icon name="add" size={28} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.taskFilterButtons}>
                        <TouchableOpacity style={styles.taskFilterButton}>
                            <Text style={styles.taskFilterButtonText}>Hoje</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.taskFilterButton}>
                            <Text style={styles.taskFilterButtonText}>Semana</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.taskFilterButton}>
                            <Text style={styles.taskFilterButtonText}>Mês</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {isDrawerVisible && <Drawer onClose={() => setDrawerVisible(false)} />}
        </View>
    );
}

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
    contentContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        top: -30
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title2: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E90FF',
        textAlign: 'left',
    },
    addIcon: {
        padding: 10,
    },
    subtitle: {
        fontSize: 14,
        color: 'black',
        marginBottom: 20,
    },
    block: {
        width: '100%',
        padding: 20,
        borderRadius: 20,
        marginBottom: 10,
        marginHorizontal: 10,
        height: 130,
        justifyContent: 'space-between',
    },
    blockFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
    },
    iconTouchable: {
        marginHorizontal: 3,
    },
    blockText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },
    taskFilterContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    taskFilterTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    taskFilterTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333',
        right: 17,
    },
    taskFilterButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    taskFilterButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    taskFilterButtonText: {
        fontSize: 16,
        color: '#888',
        top: -10,
    },
    addTaskIcon: {
        paddingVertical: 10,
        paddingHorizontal: -10,
        left: 10,
    },
});
