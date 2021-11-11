import React, { useEffect } from "react";
import { useFonts } from "@use-expo/font";
import { View, ScrollView, Button } from "react-native";
import { Title, Text, TextInput, Caption } from "react-native-paper";
import s from "@assets/style/estilos";
import Firebase from "@database/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const db = Firebase.firestore();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const datos = [];

export default function Practice(props) {
  const [isLoaded] = useFonts({
    "Braille-Preview": require("@fonts/braille_preview.ttf"),
    "Braille-Esp": require("@fonts/braille_esp.ttf"),
  });

  const [word, setWord] = React.useState("");
  const [text, setText] = React.useState("");
  const [pos, setPost] = React.useState(0);
  const [reali, setReali] = React.useState(0);
  const notify = (tipo) => {
    if (tipo == "success") {
      toast.success("Bien Hecho, respuesta correcta", {
        theme: "dark",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (tipo == "warning") {
      toast.error("La respuesta correcta es: " + word[pos], {
        theme: "dark",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (tipo == "" || tipo == null) {
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
    if (valor == word[pos]) {
      setPost(getRandomInt(0, datos.length));
      notify("success");
      setText("");
    } else if (valor != word[pos] && valor != "" && valor != null) {
      notify("warning");
    } else {
      notify();
    }
    setReali(reali + 1);
  };
  useEffect(() => {
    db.collection("words")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          datos.push(doc.data().words.toUpperCase());
        });
        //console.log(datos);
        setPost(getRandomInt(0, datos.length));
        setWord(datos);
      });
  }, []);
  if (!isLoaded) {
    
    return (
      <View>
        <Text>ERROR AL CARGAR FONTS</Text>
      </View>
    );
  } else {
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
            Practica tus conocimientos:
          </Title>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Title>Traduzca la siguiente palabra</Title>
          <TextInput
            multiline
            left={<TextInput.Icon name="braille" />}
            mode="flat"
            style={{ fontSize: 38 }}
            value={word[pos]}
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
        <View>
          <Caption>{word[pos]}</Caption>
        </View>
        <View style={{ marginVertical: 20 }}>
          <TextInput
            left={<TextInput.Icon name="alphabetical" />}
            mode="outlined"
            label="Introduce una palabra o letra"
            multiline
            maxLength="20"
            value={text}
            onChangeText={(text) => setText(text.toUpperCase())}
          />
        </View>
        <View style={s.fixToText}>
          <Button
            title="Regresar"
            onPress={() => props.navigation.navigate("Home")}
          />
          <Button
            title="Verificar"
            color="#0CBA41"
            onPress={() => verficarSiguiente(text)}
          />
        </View>
      </ScrollView>
    );
  }
}
