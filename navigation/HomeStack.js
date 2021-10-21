import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";

import HomeScreen from "@views/Home/home";
import IndexScreen from "@views/Index/index";

import Firebase from "@database/firebase";
import {} from "firebase/firestore";
import { AuthenticatedUserContext } from "@navigation/AuthenticatedUserProvider";

const auth = Firebase.auth();
const db = Firebase.firestore();

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  console.log("Email: " + user.User.email);

  useEffect(() => {
    var docRef = db.collection("users").doc(user.User.email);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          var nivel = doc.data().nivel;
          console.log("Nivel: ", nivel);
          if (nivel === "") {
            setUser({ User: user.User, conNivel: false });
            
          }
        } else {
          console.log("No such document!");          
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
        setIsLoading(false);
      });
  }, []);

  //console.log("Tiene nivel: " + user.displayName);
  console.log("Con nivel: " + user.conNivel);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator headerMode="none">
      {!user.conNivel && (
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ headerShown: false }}
        />
      )}

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
