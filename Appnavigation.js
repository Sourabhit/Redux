import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Myproducts from './Myproducts';
import MyCart from './MyCart';

const Appnavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Myproducts"
          component={Myproducts}
        />
        <Stack.Screen name="Mycart" component={MyCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigation;
