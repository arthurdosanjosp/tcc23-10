import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const AccountScreen = () => {
  const router = useRouter(); 
  const [isEditing, setIsEditing] = useState({
    fullName: false,
    publicName: false,
    email: false,
    password: false,
  });

  // Gerenciar os valores dos campos
  const [values, setValues] = useState({
    fullName: 'Helena da Silva',
    publicName: 'Helena',
    email: 'helenasilva@gmail.com',
    password: '•••••••••',
  });

  // Função para alternar o modo de edição
  const toggleEdit = (field) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Função para atualizar os valores
  const handleChange = (field, text) => {
    setValues((prev) => ({
      ...prev,
      [field]: text,
    }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon name="arrow-back" size={32} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Gerenciar Conta</Text>
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>H</Text>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{values.publicName}</Text>
          <Text style={styles.userEmail}>{values.email}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Informações</Text>

      {/* Informações Section */}
      <View style={styles.section}>
        {/* Nome Completo */}
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Nome Completo</Text>
            {isEditing.fullName ? (
              <TextInput
                style={styles.input}
                value={values.fullName}
                onChangeText={(text) => handleChange('fullName', text)}
                onBlur={() => toggleEdit('fullName')} // Sair do modo de edição ao perder o foco
              />
            ) : (
              <Text style={styles.infoValue}>{values.fullName}</Text>
            )}
          </View>
          <TouchableOpacity onPress={() => toggleEdit('fullName')}>
            <Icon name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Nome Público */}
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Nome Público</Text>
            {isEditing.publicName ? (
              <TextInput
                style={styles.input}
                value={values.publicName}
                onChangeText={(text) => handleChange('publicName', text)}
                onBlur={() => toggleEdit('publicName')}
              />
            ) : (
              <Text style={styles.infoValue}>{values.publicName}</Text>
            )}
          </View>
          <TouchableOpacity onPress={() => toggleEdit('publicName')}>
            <Icon name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Email */}
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Email</Text>
            {isEditing.email ? (
              <TextInput
                style={styles.input}
                value={values.email}
                onChangeText={(text) => handleChange('email', text)}
                onBlur={() => toggleEdit('email')}
              />
            ) : (
              <Text style={styles.infoValue}>{values.email}</Text>
            )}
          </View>
          <TouchableOpacity onPress={() => toggleEdit('email')}>
            <Icon name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Senha */}
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Senha</Text>
            {isEditing.password ? (
              <TextInput
                style={styles.input}
                value={values.password}
                onChangeText={(text) => handleChange('password', text)}
                onBlur={() => toggleEdit('password')}
                secureTextEntry
              />
            ) : (
              <Text style={styles.infoValue}>{values.password}</Text>
            )}
          </View>
          <TouchableOpacity onPress={() => toggleEdit('password')}>
            <Icon name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 15,
    top: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d0e0f0',
    padding: 20,
    height: 120,
    borderRadius: 1,
    marginBottom: 24,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: '#6699CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  avatarText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#4f7bbd',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#f4f4f4',
    padding: 20,
    borderRadius: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    color: '#555',
    fontSize: 16,
    marginBottom: 10,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 18,
    paddingVertical: 4,
  },
});

export default AccountScreen;
