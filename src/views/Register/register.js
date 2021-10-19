import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import {
  TextInput,
  Button,
  Checkbox,
  HelperText,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper"; //Material UI
import { useForm } from "react-hook-form"; //Simple form validation with React Hook Form.
import { FormBuilder } from "react-native-paper-form-builder"; //Form builder

import s from "@assets/style/estilos";

import Firebase from '../../../database/firebase';
const auth = Firebase.auth();


const Register = (props) => {
  
  const [state, setState] = useState({
    esCorrecto: false,
    msj: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
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
    try {
      console.log(data);
      await auth.createUserWithEmailAndPassword(data.email, data.clave);
    } catch (error) {
      setState({esCorrecto: true, msj: error})
      console.log(error)
    }
  }

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

      <HelperText type="error" visible={state.esCorrecto}>
        Las contraseñas no coinciden.
      </HelperText>

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
