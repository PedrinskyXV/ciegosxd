import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import { TextInput, Button, Chip } from "react-native-paper"; //Material UI
import { useForm } from "react-hook-form"; //Simple form validation with React Hook Form.
import { FormBuilder } from "react-native-paper-form-builder"; //Form builder

import s from "@assets/style/estilos";

import Firebase from "@database/firebase";
import {} from "firebase/firestore";
const auth = Firebase.auth();

const Login = (props) => {
  const [state, setState] = useState({
    esCorrecto: false,
    Mensaje: "",
  });

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      clave: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      await auth.signInWithEmailAndPassword(data.email, data.clave);
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/user-not-found":
          setState({
            esCorrecto: true,
            Mensaje: "No hay ninguna cuenta con ese email.",
          });
          break;
        case "auth/wrong-password":
          setState({
            esCorrecto: true,
            Mensaje: "La contraseña es incorrecta.",
          });
          break;
        default:
          setState({
            esCorrecto: true,
            Mensaje: "Ocurrio un error al iniciar sesión.",
          });
          break;
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
          icon="login-variant"
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          style={s.btnLogin}
        >
          Iniciar Sesión
        </Button>
      </View>

      <Text>{"\n"}</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>Únete</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      <Text>{"\n"}</Text>

      <View>
        <Button
          icon="open-in-new"
          mode="contained"
          onPress={() => {
            props.navigation.navigate("Signup");
          }}
          style={s.btnLogin}
        >
          Registrarse
        </Button>
      </View>
    </ScrollView>
  );
};

export default Login;
