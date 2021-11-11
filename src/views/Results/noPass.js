import React, { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  Title,
  Button,
  Paragraph,
} from "react-native-paper";
import s from "@assets/style/estilos";

import { AuthenticatedUserContext } from "@navigation/AuthenticatedUserProvider";

export default function noPass() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [value, setValue] = React.useState(user.Nivel);
  return (
    <ScrollView style={s.container}>
      <Card>
        <Card.Content>
          <Title style={styles.Title}>Sigue intentando</Title>
          <Paragraph style={styles.Resultados}>
            Vamos supera la fase: {value}
          </Paragraph>
        </Card.Content>
        <Card.Cover
          resizeMethod="scale"
          source={{
            uri: "https://images.unsplash.com/photo-1621410153570-9c55676b0157?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
          }}
        />
        <Card.Actions>
          <Button onPress={() => props.navigation.navigate("Home")}>
            Aceptar
          </Button>
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
