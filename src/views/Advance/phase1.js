import React, { useEffect } from "react";
import { useFonts } from "@use-expo/font";
import { View, ScrollView, Button } from "react-native";
import { Title, Text, TextInput, Chip } from "react-native-paper";
import s from "@assets/style/estilos";
import Firebase from "@database/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const db = Firebase.firestore();
function getRandomLetter() {
  var n = 0;
  var letra = "";
  n = Math.floor(Math.random() * (90 - 65)) + 65;
  //Pasar n letra
  letra = String.fromCharCode(n);
  // console.log(letra);
  return letra;
}
const datos = [];
const acertado = 0;
const realizadas = 0;

export default function Phase1(props) {
  const [isLoaded] = useFonts({
    "Braille-Preview": require("@fonts/braille_preview.ttf"),
    "Braille-Esp": require("@fonts/braille_esp.ttf"),
  });
  const [letter, setLetter] = React.useState("");
  const [text, setText] = React.useState("");
  //const datos = [];
  //const [pos, setLetter] = React.useState(0);
  const [acer, setAcer] = React.useState(0);
  const [reali, setReali] = React.useState(0);
  const notify = (tipo) => {
    if (tipo == "resultado") {
      toast.success("A", {
        theme: "dark",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("No ha ingresado datos", {
        theme: "dark",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const verficarSiguiente = (valor) => {
    if (valor == letter) {
      setLetter(getRandomLetter());
      setText("");
      setAcer(acer + 1);
      setReali(reali + 1);
    } else if (valor != letter && valor != "" && valor != null) {
      setReali(reali + 1);
    } else if (valor == "" || valor == null) {
      notify();
    }
    if (reali == 5) {
      if (acer == 5) {
        props.navigation.navigate("Pass");
      } else {
        props.navigation.navigate("noPass");
      }
    }
  };

  useEffect(() => {
    setLetter(getRandomLetter());
    //setLetter(letter);
  }, []);
  if (!isLoaded) {
    console.log("ERROR AL CARGAR FONTS");
    return (
      <View>
        <Text>ERROR AL CARGAR FONTS</Text>
      </View>
    );
  } else {
    //setLetter(getRandomLetter());
    return (
      <ScrollView style={s.container}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <View>
          <Title style={{ textAlign: "justify" }}>
            Prueba tus conocimientos!!
          </Title>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Title>Traduzca la siguiente letra</Title>
          <TextInput
            multiline
            left={<TextInput.Icon name="braille" />}
            mode="flat"
            style={{ fontSize: 38 }}
            value={letter}
            editable="false"
            numberOfLines="1"
            theme={{
              fonts: {
                regular: {
                  fontFamily: "Braille-Esp",
                  fontSize: 16,
                },
              },
            }}
          />
        </View>
        <View style={{ marginVertical: 20 }}>
          <TextInput
            left={<TextInput.Icon name="alphabetical" />}
            mode="outlined"
            label="Introduce una letra"
            maxLength="1"
            value={text}
            onChangeText={(text) => setText(text.toUpperCase())}
          />
          <View style={s.fixToText}>
            <Button
              title="Cancelar"
              onPress={() => props.navigation.navigate("Home")}
            />
            <Button
              title="Verificar"
              color="#0CBA41"
              onPress={() => verficarSiguiente(text)}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
