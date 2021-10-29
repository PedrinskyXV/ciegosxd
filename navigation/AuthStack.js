import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Componentes del proyecto
import Login from "@views/Login/login";
import Register from "@views/Register/register";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Bienvenido a EduBraille",
          headerStyle: { backgroundColor: "#e84444" },
          headerTintColor: "#f8f8ff",
          headerTitleStyle: {
            fontWeight: "600",
            fontFamily: "sans-serif",
          },
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Register}
        options={{
          title: "Registrate en EduBraille",
          headerStyle: { backgroundColor: "#e84444" },
          headerTintColor: "#f8f8ff",
          headerTitleStyle: {
            fontWeight: "600",
            fontFamily: "sans-serif",
          },
        }}
      />
    </Stack.Navigator>
  );
}
