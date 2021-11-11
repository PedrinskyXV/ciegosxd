import React, { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  Title,
  Button,
  Card,
  Paragraph,
} from "react-native-paper";
import s from "@assets/style/estilos";
import Firebase from "@database/firebase";
import { AuthenticatedUserContext } from "@navigation/AuthenticatedUserProvider";

const db = Firebase.firestore();

export default function Pass(props) {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [value, setValue] = React.useState(user.Nivel);
  const [change, setChange] = React.useState(0);
  const saveNivel = async (newNivel) => {
    
    await db
      .collection("users")
      .doc(user.User.email)
      .update({
        nivel: newNivel,
      })
      .then(() => {
        console.log("Nivel actualizado.");
        setUser({ User: user.User, conNivel: true, Nivel: newNivel });
        props.navigation.navigate("Home");
      })
      .catch((error) => {
        console.error("Error al actualizar el nivel: ", error);
      });
  };
  const avanzar = (valor) => {
    //console.log(change);
    if (valor == "Ninguno" && change == 0) {
      setChange(change + 1);
      saveNivel("Poco");
    }
    //console.log(change);
    if (valor == "Poco" && change == 0) {
      setChange(change + 1);
      saveNivel("Suficiente");
    }
    props.navigation.navigate("Home");
  };
  return (
    <ScrollView style={s.container}>
      <Card>
        <Card.Content>
          <Title style={styles.Title}>Has aumentado tu conocimiento !!!</Title>
          <Paragraph style={styles.Resultados}>
            Superaste la fase: {value}
          </Paragraph>
        </Card.Content>
        <Card.Cover
          resizeMethod="scale"
          source={{
            uri: "https://cdn.pixabay.com/photo/2021/09/25/15/46/step-by-step-6655274_960_720.jpg",
          }}
        />
        <Card.Actions>
          <Button onPress={() => avanzar(value)}>Aceptar</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Title: {
    fontSize: 18,
    fontFamily: "sans-serif",
    marginVertical: 15,
    fontWeight: "600",
  },
  Resultados: {
    fontSize: 14,
    fontFamily: "sans-serif",
    marginVertical: 15,
    fontWeight: "300",
  },
});
