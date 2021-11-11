import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";

import HomeScreen from "@views/Home/home";
import IndexScreen from "@views/Index/index";
import DiccionarioScreen from "@views/Diccionario/diccionario";
import RecursosScreen from "@views/Recursos/recursos";
import PerfilScreen from "@views/Perfil/perfil";
import PracticeScreen from "@views/Practice/practice";
import Phase1Screen from "@views/Advance/phase1";
import Phase2Screen from "@views/Advance/phase2";
import Phase3Screen from "@views/Advance/phase3";

import Firebase from "@database/firebase";
import {} from "firebase/firestore";
import { AuthenticatedUserContext } from "@navigation/AuthenticatedUserProvider";

const auth = Firebase.auth();
const db = Firebase.firestore();

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  //console.log("Email: " + user.User.email);

  useEffect(() => {
    var docRef = db.collection("users").doc(user.User.email);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          var nivel = doc.data().nivel;
          //console.log("Nivel: ", nivel);
          if (nivel !== "") {
            setUser({ User: user.User, conNivel: true, Nivel: nivel });
          }
        } else {
          console.log("No se encontro el nivel");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error al obtener el documento: ", error);
        setIsLoading(false);
      });
  }, []);

  //console.log("Tiene nivel: " + user.displayName);
  //console.log("Con nivel: " + user.conNivel);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator headerMode="none">
      {/* {!user.conNivel && (
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ headerShown: false }}
        />
      )} */}
      <Stack.Screen
        name="Phase1"
        component={Phase1Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Practice"
        component={PracticeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
{/*
      <Stack.Screen
        name="Diccionario"
        component={DiccionarioScreen}
        options={{
          title: "Aprende con el Diccionario",
          headerStyle: { backgroundColor: "#e84444" },
          headerTintColor: "#f8f8ff",
          headerTitleStyle: {
            fontWeight: "600",
            fontFamily: "sans-serif",
          },
        }}
      />

      <Stack.Screen
        name="Recursos"
        component={RecursosScreen}
        options={{
          title: "Recursos para aprender",
          headerStyle: { backgroundColor: "#e84444" },
          headerTintColor: "#f8f8ff",
          headerTitleStyle: {
            fontWeight: "600",
            fontFamily: "sans-serif",
          },
        }}
      />

      <Stack.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          title: "Mi perfil",
          headerStyle: { backgroundColor: "#e84444" },
          headerTintColor: "#f8f8ff",
          headerTitleStyle: {
            fontWeight: "600",
            fontFamily: "sans-serif",
          },
        }}
      /> */}
    </Stack.Navigator>
  );
}
