import React, { useContext } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  Image,
} from "react-native";

import { Appbar, Title } from 'react-native-paper';
import s from "@assets/style/estilos";

import Firebase from "@database/firebase";
import { AuthenticatedUserContext } from "@navigation/AuthenticatedUserProvider";

const auth = Firebase.auth();

export default function Home({ navigation, route }) {
  //const {nivel} = route.params;
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  const { user } = useContext(AuthenticatedUserContext);
  const showToast = () => {
    ToastAndroid.show("nivel", ToastAndroid.SHORT);
  };
  return (
    
    <ScrollView>
      {/* <Button title="Toggle Toast" onPress={() => showToast()} /> */}
      
      <Appbar.Header style={s.navbar}>
      
      <Appbar.Content title="Bienvenido" subtitle={user.User.email} />
      <Appbar.Action icon="logout" onPress={handleSignOut} />
      <Appbar.Action icon="dots-vertical" onPress={handleSignOut} />
    </Appbar.Header>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate("Diccionario", {
              nivel: "Nada",
            })
          }
        >
          <Image
            style={styles.opcLogo}
            source={require("../../../assets/images/dictionary.png")}
          />
          <Text style={styles.opcTxt}>Diccionario</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate("Practica", {
              nivel: "Nada",
            })
          }
        >
          <Image
            style={styles.opcLogo}
            source={require("../../../assets/images/learning.png")}
          />
          <Text style={styles.opcTxt}>Practica</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate("Home", {
              nivel: "Nada",
            })
          }
        >
          <Image
            style={styles.opcLogo}
            source={require("../../../assets/images/test.png")}
          />
          <Text style={styles.opcTxt}>Desafio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate("Home", {
              nivel: "Nada",
            })
          }
        >
          <Image
            style={styles.opcLogo}
            source={require("../../../assets/images/advance.png")}
          />
          <Text style={styles.opcTxt}>Ver Avance</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF1F4",
    alignContent: "space-around",
    justifyContent: "center",
    fontFamily: "sans-serif",
    alignItems: "center",
  },
  btn: {
    width: 150,
    height: 150,
    backgroundColor: "#FF704D",
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  opcLogo: {
    width: 75,
    height: 75,
    marginBottom: 10,
  },
  opcTxt: {
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textTransform: "uppercase",
  },
});
