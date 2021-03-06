import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import { TextInput, Button, Banner, Chip } from "react-native-paper"; //Material UI
import { useForm } from "react-hook-form"; //Simple form validation with React Hook Form.
import { FormBuilder } from "react-native-paper-form-builder"; //Form builder

import s from "@assets/style/estilos";

import Firebase from "@database/firebase";

import {} from "firebase/firestore";

const auth = Firebase.auth();
const db = Firebase.firestore();

const Register = () => {
  const [state, setState] = useState({
    esCorrecto: false,
    Mensaje: "",
  });

  const saveUser = async (data) => {
    await db
      .collection("users")
      .doc(data.email)
      .set({
        nivel: "",
        usuario: data.usuario,
      })
      .then(() => {
        console.log("Usuario guardado correctamente.");
      })
      .catch((error) => {
        console.error("Error al guardar usuario: ", error);
      });
  };

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      usuario: "",
      clave: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    if (data.clave !== data.clave2) {
      setState({ esCorrecto: true, Mensaje: "Las contraseñas no coinciden." });
    } else {
      try {
        await auth.createUserWithEmailAndPassword(data.email, data.clave);
        saveUser(data);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            setState({
              esCorrecto: true,
              Mensaje: "El email ya se encuentra registrado.",
            });
            break;
          default:
            setState({
              esCorrecto: true,
              Mensaje: "Ocurrio un error al registrarse.",
            });
            break;
        }

        console.log(error.code);
      }
    }
  };

  return (
    <ScrollView style={s.container}>
      <View style={s.logoContainer}>
        <Image
          style={s.logoImg}
          source={require("@images/logo_transparent.png")}
        />
      </View>

      <View>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
      </View>

      <FormBuilder
        control={control}
        setFocus={setFocus}
        formConfigArray={[
          {
            name: "email",
            type: "email",
            textInputProps: {
              label: "Email",
              left: <TextInput.Icon name={"email"} />,
            },
            rules: {
              required: {
                value: true,
                message: "Email es requerido.",
              },
              pattern: {
                value:
                  /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
                message: "Email es incorrecto.",
              },
            },
          },
          {
            type: "text",
            name: "usuario",
            textInputProps: {
              mode: "outlined",
              label: "Usuario",
              left: <TextInput.Icon name={"account-circle"} />,
            },
            rules: {
              required: {
                value: true,
                message: "Usuario es requerido.",
              },
            },
          },
          {
            type: "password",
            name: "clave",
            rules: {
              required: {
                value: true,
                message: "La contraseña es requerida",
              },
              minLength: {
                value: 8,
                message: "La contraseña debe contener minimo 8 caracteres.",
              },
              maxLength: {
                value: 30,
                message: "La contraseña debe contener maximo 30 caracteres.",
              },
            },
            textInputProps: {
              label: "Contraseña",
              left: <TextInput.Icon name={"lock"} />,
            },
          },
          {
            type: "password",
            name: "clave2",
            rules: {
              required: {
                value: true,
                message: "La confirmacion de la contraseña es requerida",
              },
              minLength: {
                value: 8,
                message: "La contraseña debe contener minimo 8 caracteres.",
              },
              maxLength: {
                value: 30,
                message: "La contraseña debe contener maximo 30 caracteres.",
              },
            },
            textInputProps: {
              label: "Confirmar Contraseña",
              left: <TextInput.Icon name={"lock"} />,
            },
          },
        ]}
      />

      <Text>{"\n"}</Text>

      {state.esCorrecto ? (
        <Chip icon="alert-circle" style={s.bannerAlert} textStyle={s.bannerMsj}>
          {state.Mensaje}
        </Chip>
      ) : null}

      <Text>
        {"\n"}
        {"\n"}
      </Text>

      <View>
        <Button
          icon="open-in-new"
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          style={s.btnLogin}
        >
          Registrarse
        </Button>
      </View>

      <Text>{"\n"}</Text>
    </ScrollView>
  );
};

export default Register;
