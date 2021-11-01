import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Componentes del proyecto
import Login from "./src/views/Login/login";
import Register from "./src/views/Register/register";
import Index from "./src/views/Index/index";
import Home from "./src/views/Home/home";
import Settings from "./src/views/Settings/settings";
import Phrases from "./src/views/Send/phrases";
import Words from "./src/views/Send/words";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            title: "Bienvenido a EduBraille",
            headerStyle: { backgroundColor: "#e84444",  },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: "sans-serif",
            }
          }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Words" component={Words} />
        <Stack.Screen name="Phrases" component={Phrases} />
        <Stack.Screen name="Bienvenido" options={{headerShown: false}} component={Index} />
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
