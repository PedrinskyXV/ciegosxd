import React from "react";
import { useFonts } from "@use-expo/font";
import { View, ScrollView, StyleSheet } from "react-native";
import { Title, Text, TextInput } from "react-native-paper";
import s from "@assets/style/estilos";

export default function Diccionario() {
  const [isLoaded] = useFonts({
    "Braille-Preview": require("@fonts/braille_preview.ttf"),
    "Braille-Esp": require("@fonts/braille_esp.ttf"),
  });

  const [text, setText] = React.useState("");

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
          <Title style={{ textAlign: "justify" }}>
            Busca una palabra para ver su significado en braille a continuacion:
          </Title>
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
        <View style={{ marginVertical: 20 }}>
          <Title>En braille:</Title>
          <TextInput
            multiline
            left={<TextInput.Icon name="braille" />}
            mode="flat"
            style={{ fontSize: 38 }}
            value={text}
            editable="false"
            numberOfLines="3"
            theme={{
              fonts: {
                regular: {
                  fontFamily: "Braille-Preview",
                  fontSize: 16,
                },
              },
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  abc: {
    fontSize: 16,
    //fontFamily: "Braille-Preview",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  sym: {
    fontSize: 48,
    fontFamily: "Braille-Esp",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  title: {
    fontFamily: "sans-serif",
    fontSize: 48,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  subTitle: {
    fontFamily: "Braille-600",
    fontSize: 38,
    textTransform: "uppercase",
    fontWeight: "100",
  },
  puntoVacio: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 750,
  },
  puntoRelleno: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 750,
    backgroundColor: "#000",
  },
  subheader: {
    fontFamily: "sans-serif",
    fontWeight: "600",
    fontSize: 24,
    margin: 25,
  },
  textoRelleno: {
    color: "#FFF",
    fontWeight: "600",
  },
});
