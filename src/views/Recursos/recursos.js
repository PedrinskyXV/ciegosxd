import React from "react";
import { useFonts } from "@use-expo/font";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import {
  BottomNavigation,
  Title,
  DataTable,
  Paragraph,
  Text,
} from "react-native-paper";
import s from "@assets/style/estilos";

//#region Comenzar routes
const StartRoute = () => {
  return (
    <ScrollView style={s.container}>
      <View>
        <Title style={styles.subheader}>{textoTitulo}</Title>
      </View>
      <View>
        <Paragraph style={styles.p}>{textoIntroduccion}</Paragraph>
      </View>

      <View>
        <Paragraph style={styles.p}>
          Se trata de un sistema que parte de seis puntos que se ubican y
          numeran de la siguiente forma:
        </Paragraph>
      </View>

      <View>
        <DataTable style={{ alignItems: "center" }}>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>
                Signo generador
              </Text>
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Row style={{ padding: 5 }}>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              1
            </DataTable.Cell>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              4
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={{ padding: 5 }}>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              2
            </DataTable.Cell>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              5
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={{ padding: 5 }}>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              3
            </DataTable.Cell>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              6
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <View>
        <Paragraph style={styles.p}>{textoFinal}</Paragraph>
      </View>
    </ScrollView>
  );
};
//#endregion

//#region Abecedario routes
const AbcRoute = () => {
  return (
    <ScrollView style={s.container}>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>VOCALES</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            {vocales.map((v) => (
              <DataTable.Cell key={v}>
                <View>
                  <Text style={styles.abc}>{v}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>

          <DataTable.Header>
            <DataTable.Title>CONSONANTES</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            {consonantes.map((c) => (
              <DataTable.Cell key={c}>
                <View>
                  <Text style={styles.abc}>{c}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>

          <DataTable.Row>
            {consonantes2.map((c) => (
              <DataTable.Cell key={c}>
                <View>
                  <Text style={styles.abc}>{c}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>

          <DataTable.Row>
            {consonantes3.map((c) => (
              <DataTable.Cell key={c}>
                <View>
                  <Text style={styles.abc}>{c}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>

          <DataTable.Row>
            {consonantes4.map((c) => (
              <DataTable.Cell key={c}>
                <View>
                  <Text style={styles.abc}>{c}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        </DataTable>
      </View>

      <View>
        <Paragraph
          style={{
            fontFamily: "sans-serif",
            margin: 20,
            textAlign: "justify",
          }}
        >
          {textoNota}
        </Paragraph>
      </View>

      <View>
        <Title style={styles.subheader}>May??sculas en braille</Title>
      </View>

      <View>
        <Paragraph style={{ fontFamily: "sans-serif", textAlign: "justify" }}>
          {textoMayusculas}
        </Paragraph>
      </View>

      <View>
        <DataTable style={{ alignItems: "center" }}>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>
                Signo para may??sculas
              </Text>
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Row style={{ padding: 5 }}>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              1
            </DataTable.Cell>
            <DataTable.Cell numeric style={styles.puntoRelleno}>
              <Text style={styles.textoRelleno}>4</Text>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={{ padding: 5 }}>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              2
            </DataTable.Cell>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              5
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={{ padding: 5 }}>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              3
            </DataTable.Cell>
            <DataTable.Cell numeric style={styles.puntoRelleno}>
              <Text style={styles.textoRelleno}>6</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <View>
        <Paragraph>Ejemplo:</Paragraph>
        <Image
          source={require("@images/mayusculasBraille.png")}
          style={{
            width: 350,
            height: 120,
            resizeMode: "contain",
            margin: 6,
          }}
        ></Image>
      </View>
    </ScrollView>
  );
};
//#endregion

//#region Numeros routes
const NumbersRoute = () => {
  return (
    <ScrollView style={s.container}>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Numeros</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            {numeros.map((n) => (
              <DataTable.Cell key={n}>
                <View>
                  <Text style={styles.txt}>{n}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>

          <DataTable.Row>
            {numeros.map((n) => (
              <DataTable.Cell key={n}>
                <View>
                  <Text style={styles.num}>{n}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>

          <DataTable.Row>
            {numeros2.map((n) => (
              <DataTable.Cell key={n}>
                <View>
                  <Text style={styles.txt}>{n}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>

          <DataTable.Row>
            {numeros2.map((n) => (
              <DataTable.Cell key={n}>
                <View>
                  <Text style={styles.num}>{n}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        </DataTable>
      </View>
      <View>
        <Paragraph
          style={{
            fontFamily: "sans-serif",
            margin: 20,
            textAlign: "justify",
          }}
        >
          Nota: {textoNumero}
        </Paragraph>
      </View>

      <View>
        <Title style={styles.subheader}>N??meros en braille</Title>
      </View>

      <View>
        <Paragraph style={{ fontFamily: "sans-serif", textAlign: "justify" }}>
          {textoNumero}
        </Paragraph>
      </View>

      <View>
        <DataTable style={{ alignItems: "center" }}>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>
                Signo para n??meros
              </Text>
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Row style={{ padding: 5 }}>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              1
            </DataTable.Cell>
            <DataTable.Cell numeric style={styles.puntoRelleno}>
              <Text style={styles.textoRelleno}>4</Text>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={{ padding: 5 }}>
            <DataTable.Cell numeric style={styles.puntoVacio}>
              2
            </DataTable.Cell>
            <DataTable.Cell numeric style={styles.puntoRelleno}>
              <Text style={styles.textoRelleno}>5</Text>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={{ padding: 5 }}>
            <DataTable.Cell numeric style={styles.puntoRelleno}>
              <Text style={styles.textoRelleno}>3</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric style={styles.puntoRelleno}>
              <Text style={styles.textoRelleno}>6</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <View>
        <Paragraph>Ejemplo:</Paragraph>
        <Image
          source={require("@images/numeroBraille.png")}
          style={{
            width: 350,
            height: 120,
            resizeMode: "contain",
            margin: 6,
          }}
        ></Image>
      </View>

      <View>
        <Title style={styles.subheader}>Mayusculas y N??meros en braille</Title>
      </View>
      <View>
        <Paragraph>Ejemplo:</Paragraph>
        <Image
          source={require("@images/finalEjemplo.png")}
          style={{
            width: 350,
            height: 350,
            resizeMode: "contain",
          }}
        ></Image>
      </View>
    </ScrollView>
  );
};
//#endregion

//#region Puntuaci??n Routes
const SymbolsRoute = () => {
  return (
    <ScrollView style={s.container}>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Signos de puntuaci??n</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row style={{ backgroundColor: "#f3f3f3" }}>
            {simbolos.map((s, i) => (
              <DataTable.Cell style={styles.celda} key={i}>
                <View>
                  <Text style={styles.txt}>{s}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>
          <DataTable.Row style={{ backgroundColor: "#ebebeb" }}>
            {simbolos.map((s, i) => (
              <DataTable.Cell style={styles.celda} key={i}>
                <View>
                  <Text style={styles.sym}>{s}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>

          <DataTable.Row style={{ backgroundColor: "#f3f3f3" }}>
            {simbolos2.map((s, i) => (
              <DataTable.Cell style={styles.celda} key={i}>
                <View>
                  <Text style={styles.txt}>{s}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>

          <DataTable.Row style={{ backgroundColor: "#ebebeb" }}>
            {simbolos2.map((s, i) => (
              <DataTable.Cell style={styles.celda} key={i}>
                <View>
                  <Text style={styles.sym}>{s}</Text>
                </View>
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        </DataTable>
      </View>
    </ScrollView>
  );
};
//#endregion

//#region constantes variables
const optionsPerPage = [2, 3, 4];
const vocales = ["A", "E", "I", "O", "U"];
const consonantes = ["b", "c", "d", "f", "g", "h"];
const consonantes2 = ["j", "k", "l", "m", "n", "]"];
const consonantes3 = ["p", "q", "r", "s", "t", "v"];
const consonantes4 = ["w", "x", "y", "z"];
const numeros = [0, "1", "2", "3", "4"];
const numeros2 = ["5", "6", 7, 8, 9];
const simbolos = [".", ",", ";", ":", "-", "??", "?"];
const simbolos2 = ["??", "!", '"', '"', "(", ")"];
//#endregion

//#region constantes texto
const textoTitulo = ["El Braille: lectura, aprendizaje, alfabeto y signos"];

const textoIntroduccion = [
  "En 1825, Luis Braille ide?? su sistema de puntos en relieve: el sistema braille, tambi??n conocido como cecograf??a, aporta a las personas ciegas una herramienta v??lida y eficaz para leer, escribir, acceder a la educaci??n, a la cultura y a la informaci??n sin necesidad de ver, gui??ndose solo por el tacto.",
];

const textoMayusculas = [
  "Para representar algunos signos es preciso utilizar m??s de un car??cter braille, es por eso que para representar las letras may??sculas se antepone el car??cter braille formado por los puntos 4 y 6:",
];

const textoNota = [
  "Nota: la letra '??' en nuestro idioma se representa tambien con el simbolo corchete cerrado (']').",
];

const textoNumero = [
  "Los n??meros se hacen con el prefijo formado por los puntos 3, 4, 5 y 6 antes de las diez primeras letras. De este modo se indica que es un n??mero en vez de una letra:",
];

const textoFinal = [
  "La combinaci??n de los seis puntos permite obtener 64 combinaciones diferentes, incluyendo la que no tiene ning??n punto, que se utiliza como espacio en blanco para separar palabras, n??meros, etc. La presencia o ausencia de puntos determina de qu?? letra se trata.",
];
//#endregion

export default function Diccionario() {
  const [isLoaded] = useFonts({
    "Braille-Bold": require("@fonts/braille_bold.ttf"),
    "Braille-Preview": require("@fonts/braille_preview.ttf"),
    "Braille-Simple": require("@fonts/braille_simple.ttf"),
    "Braille-Esp": require("@fonts/braille_esp.ttf"),
    "SansForgetica-Regular": require("@fonts/sansforgetica_regular.otf"),
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "start", title: "Para comenzar", icon: "ray-start-arrow" },
    {
      key: "abecedario",
      title: "Abecedario",
      icon: "format-letter-starts-with",
    },
    { key: "numeros", title: "Numeros", icon: "numeric" },
    { key: "simbolos", title: "Simbolos", icon: "not-equal" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    start: StartRoute,
    abecedario: AbcRoute,
    numeros: NumbersRoute,
    simbolos: SymbolsRoute,
  });

  if (!isLoaded) {
    
    return (
      <View>
        <Text>ERROR AL CARGAR FONT</Text>
      </View>
    );
  } else {
    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: "#e84444" }}
      ></BottomNavigation>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 48,
    fontFamily: "sans-serif",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  abc: {
    fontSize: 48,
    fontFamily: "Braille-Preview",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  sym: {
    fontSize: 48,
    fontFamily: "Braille-Esp",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  num: {
    fontSize: 48,
    fontFamily: "Braille-Bold",
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
    fontFamily: "Braille-Bold",
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
    textAlign: "center",
    marginVertical: 15,
  },
  textoRelleno: {
    color: "#FFF",
    fontWeight: "600",
  },
  p: {
    textAlign: "justify",
    marginVertical: 15,
  },
  celda: {
    justifyContent: "center",
    alignContent: "center",
  },
});
