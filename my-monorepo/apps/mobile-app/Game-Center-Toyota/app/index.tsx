import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AuthProvider} from '../context/AuthContext';
import AppNav from '../src/navigation/AppNav';

export default function App()
{
    return(
        <AuthProvider>
        <AppNav />
      
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
});
