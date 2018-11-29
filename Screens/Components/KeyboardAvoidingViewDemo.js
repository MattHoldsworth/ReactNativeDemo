import React from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import logo from './logo.png'

const KeyboardAvoidingViewDemo = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1}} >
                <Image source={logo} style={styles.logo} />
            </View>
            <TextInput
                placeholder="Email"
                style={styles.input}
            />
            <TextInput
                placeholder="Username"
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                style={styles.input}
            />
            <TextInput
                placeholder="Confirm Password"
                style={styles.input}
            />
            <View style={{ height: 60 }} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
    },
    input: {
      margin: 20,
      marginBottom: 0,
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 4,
      borderColor: '#ccc',
      borderWidth: 1,
      fontSize: 16,
    },
    logo: {
        flex: 1,
        height: 200,
        width: 250,
    }
  });

export default KeyboardAvoidingViewDemo