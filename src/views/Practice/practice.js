import React, { useEffect } from "react";
import { useFonts } from "@use-expo/font";
import { View, ScrollView, StyleSheet } from "react-native";
import { Title, Text, TextInput, Button, Chip } from "react-native-paper";
import s from "@assets/style/estilos";
import Firebase from "@database/firebase";
const db = Firebase.firestore();
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const datos = [];
const acertado = 0;
const realizadas = 0;

export default function Practice(props) {
  const [isLoaded] = useFonts({
    "Braille-Preview": require("@fonts/braille_preview.ttf"),
    "Braille-Esp": require("@fonts/braille_esp.ttf"),
  });
  const [word, setWord] = React.useState("");
  const [text, setText] = React.useState("");
  //const datos = [];
  const [pos, setPost] = React.useState(0);
  const [acer, setAcer] = React.useState(0);
  const [reali, setReali] = React.useState(0);
  const [state, setState] = React.useState({

    esCorrecto: false,

    Mensaje: "",

  });
  const verficarSiguiente = (valor) => {
    if (valor == word[pos]){
      setPost(getRandomInt(0,datos.length));
      setState({
        esCorrecto: false,
        Mensaje: null,
      });
      setText("");
      setAcer(acer + 1);
    } else {
      setState({
        esCorrecto: true,
        Mensaje: "La palabra correcta es: "+word[pos],
      });
    }
    setReali(reali + 1);
  }
  useEffect(() => {
    db.collection("words")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          datos.push(doc.data().words.toUpperCase());
        });
        console.log(datos);
        setPost(getRandomInt(0, datos.length));
        setWord(datos);
      });
  }, []);
  if (!isLoaded) {
    console.log("ERROR AL CARGAR FONTS");
    return (
      <View>
        <Text>ERROR AL CARGAR FONTS</Text>
      </View>
    );
  } else {
    return (
      <ScrollView style={s.container}>
        <View>
          <Title style={{textAlign: "justify"}}>
          Busca una palabra para ver su significado en braille a continuacion:
          </Title>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Title>Traduzca la siguiente palabra</Title>
          <TextInput
            multiline
            left={<TextInput.Icon name="braille" />}
            mode="flat"
            style={{fontSize: 38}}            
            value={word[pos]}
            editable="false"            
            numberOfLines="1"
            theme={
              {
                fonts: {
                  regular: {
                    fontFamily: 'Braille-Esp',
                    fontSize: 16
                  }
                }
              }
            }
          />
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
        <Text>{word[pos]}</Text>
        <Text>{acer}</Text>
        <Text>{reali}</Text>
        <View>
          <Button onPress={() => verficarSiguiente(text)} >ORALE PUTO</Button>
        </View>
        {state.esCorrecto ? (
            <Chip icon="alert-circle" style={s.bannerAlert} textStyle={s.bannerMsj}>
              {state.Mensaje}
            </Chip>
          ) : null}
      </ScrollView>
    );
  }
}
