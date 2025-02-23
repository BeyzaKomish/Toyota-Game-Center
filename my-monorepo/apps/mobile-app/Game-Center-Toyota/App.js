import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack'; 
import { AuthProvider } from './context/AuthContext';


export default function App()
{
    return(
        <AuthProvider>
       <NavigationContainer>
         <AuthStack />
       </NavigationContainer>
        </AuthProvider>
    );
}
