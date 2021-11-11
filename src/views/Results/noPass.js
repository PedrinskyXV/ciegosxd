import React, { useEffect, useState, useContext } from "react";
import { View, ScrollView, StyleSheet, useColorScheme } from "react-native";
import { Title, Text, TextInput, Button, Chip , Card, Paragraph} from "react-native-paper";
import s from "@assets/style/estilos";
import Firebase from "@database/firebase";
import { useLinkProps } from "@react-navigation/native";
import { AuthenticatedUserContext } from "@navigation/AuthenticatedUserProvider";

const db = Firebase.firestore();
const auth = Firebase.auth();

export default function noPass(){
    const { user, setUser } = useContext(AuthenticatedUserContext);
  const [value, setValue] = React.useState(user.Nivel);
    return (
        <ScrollView style={s.container}>
          <Card>
            <Card.Content>
              <Title style={styles.Title}>Sigue intentando</Title>
              <Paragraph style={styles.Resultados}>Vamos supera la fase: {value}</Paragraph>
            </Card.Content>
            <Card.Cover resizeMethod="scale" source={{ uri: "https://images.unsplash.com/photo-1621410153570-9c55676b0157?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" }} />
            <Card.Actions>
              <Button onPress={() => props.navigation.navigate("Home")}>Aceptar</Button>
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