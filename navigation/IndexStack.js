import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IndexScreen from '@views/Index/index';
import HomeScreen from '@views/Home/home';

const Stack = createNativeStackNavigator();

export default function IndexStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Index' component={IndexScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}