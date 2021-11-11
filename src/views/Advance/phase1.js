import React, { useEffect } from "react";
import { useFonts } from "@use-expo/font";
import { View, ScrollView, StyleSheet } from "react-native";
import { Title, Text, TextInput, Button, Chip } from "react-native-paper";
import s from "@assets/style/estilos";
import Firebase from "@database/firebase";
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
  const [state, setState] = React.useState({

    esCorrecto: false,

    Mensaje: "",

  });
  const verficarSiguiente = (valor) => {
    if (valor == letter){
      setLetter(getRandomLetter());
      setState({
        esCorrecto: false,
        Mensaje: null,
      });
      setText("");
      setAcer(acer + 1);
      setReali(reali + 1);
    } else if(valor != letter && valor !=""){
      setState({
        esCorrecto: true,
        Mensaje: "La letra correcta es: "+letter,
      });
      setReali(reali + 1);
    }

    //AQUIIIIIIIIIIIIIIIIII HIDALGOOOOOOOOOOOOOOOOOOO AQUIIIIIIIIIIIIIIIIIIII

    else if(valor == "" || valor == null){
      alert('Campo vacio');
    }
    if (reali == 5) {
      props.navigation.navigate("Home");
  }
  }

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
        <View>
          <Title style={{textAlign: "justify"}}>
          Busca una letra para ver su significado en braille a continuacion:
          </Title>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Title>Traduzca la siguiente letra</Title>
          <TextInput
            multiline
            left={<TextInput.Icon name="braille" />}
            mode="flat"
            style={{fontSize: 38}}            
            value={letter}
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
            label="Introduce una letra"
            maxLength="1"
            value={text}
            onChangeText={(text) => setText(text.toUpperCase())}
          />
        </View>
        <Text>{letter}</Text>
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
