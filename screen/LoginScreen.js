import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import loginScreenStyle from '../styles/loginScreenStyle';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setErrorMessage('Please enter both email and password');
    } else if (email !== 'example@gmail.com' || password !== 'password') {
      setErrorMessage('Invalid email or password');
    } else {
      setErrorMessage(''); 
      alert('Login Successful!');
    }
  };
  return (
    <View style={loginScreenStyle.container}>
      <Text style={loginScreenStyle.title}>Login</Text>
      <TextInput
        style={loginScreenStyle.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={loginScreenStyle.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errorMessage ? <Text style={loginScreenStyle.errorMessage}>{errorMessage}</Text> : null}
      <TouchableOpacity style={loginScreenStyle.button} onPress={handleLogin}>
        <Text style={loginScreenStyle.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};


export default LoginScreen;
