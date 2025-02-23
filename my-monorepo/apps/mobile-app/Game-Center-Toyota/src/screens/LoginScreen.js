import React, { useContext } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
    },
});

const LoginScreen = ({}) => {
    const { login } = useContext(AuthContext); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text> 
            <TextInput 
                label="Email" 
                style={styles.input} 
            /> 
            <TextInput 
                label="Password" 
                style={styles.input} 
                secureTextEntry 
            />  
            <Button 
                mode="contained" 
                style={styles.button}
                onPress={login()} 
            >
                LOGIN
            </Button>
           
        </View>
        
    );
}


export default LoginScreen;