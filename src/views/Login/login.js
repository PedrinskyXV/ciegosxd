import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import { TextInput, Button, Checkbox, HelperText } from "react-native-paper"; //Material UI
import { useForm } from "react-hook-form"; //Simple form validation with React Hook Form.
import { FormBuilder } from "react-native-paper-form-builder"; //Form builder

import s from "@assets/style/estilos";
//import db from "../../../database/firebase";

const Login = (props) => {
  const [state, setState] = useState({
    usuario: "",
    clave: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      usuario: "",
      clave: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);
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
        ]}
      />

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

      <Text>
        {"\n"}        
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>Unete</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      <Text>
        {"\n"}        
      </Text>

      <View>
        <Button
          icon="open-in-new"
          mode="contained"
          onPress={() => {props.navigation.navigate('Register')}}
          style={s.btnLogin}
        >
          Registrarse
        </Button>
      </View>

    </ScrollView>
  );
};

export default Login;
