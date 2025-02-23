import React , {useContext} from 'react'
import AuthStack from './AuthStack'; 
import { View ,Text} from 'react-native';
import { ActivityIndicator } from 'react-native';
import { AuthContext } from '../../context/AuthContext'; 
import AppStack from './AppStack';  

const AppNav = () => {
  const {isLoading,userToken} = useContext(AuthContext);  

  if(isLoading) 
  {
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
      <ActivityIndicator size={'large'}></ActivityIndicator>
      <Text>Please Wait</Text>
    </View>
  }
  return (
    

    <>
    {userToken !== null? <AppStack /> :  <AuthStack /> }
    
     
    </>
         
  )

}

export default AppNav;