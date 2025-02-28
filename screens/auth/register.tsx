import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Dashboard from '../Dashboard/Dashboard';
const LoginScreen = () => {
  const navigation= useNavigation();
  const router= useRoute()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>English</Text>
      <Text style={styles.subtitle}>Aegis</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Phone number, Email or username"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate(Dashboard)}}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      
      <TouchableOpacity >
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.signUp}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 10,
  },
  signUp: {
    color: 'blue',
  },
});

export default LoginScreen;