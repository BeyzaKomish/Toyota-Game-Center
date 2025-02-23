import React ,{useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const AppStack = ({ navigation }) => {
    const { logout } = useContext(AuthContext); 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Center Toyota</Text>
            <Button
                title="Start Game"
                onPress={() => navigation.navigate('GameScreen')}
            />
            <Button
                title="Settings"
                onPress={() => navigation.navigate('SettingsScreen')}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate('ProfileScreen')}
            />
              <Button
                title="Logout"
                onPress={logout()}
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default AppStack;