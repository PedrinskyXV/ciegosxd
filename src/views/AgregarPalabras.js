import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { Text, StyleSheet, TextInput, View, SafeAreaView } from "react-native";

import {colletion, addDoc} from 'firebase/firestore';
import Firebase from '@database/firebase';

export default function AgregarPalabras({navigation}) {
    const initalState = {
        palabra:"ALV",
    }

    const [state, setState] = useState(initalState);

    const handleChange = (name, value) => {
        setState({ ...state, [name]: value});
    };

    const savePhrase = async () => {
        await addDoc(colletion(db, "palabras"), {
            palabra: state.palabra,
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerIn}>
                    {<Text style={styles.titulo}> Agregar palabras </Text>}
                    <View style={styles.inputGroup}>
                        <TextInput
                            placeholder="Palabra nueva"
                            onChangeText={(value) => handleChange("palabra", value)}
                            value={state.nombrePlatillo}
                        />
                    </View>
                    <View>
                        <Pressable style={styles.button} onPress={() => savePhrase()}>
                            <Text style={styles.text}>AGREGAR</Text>
                        </Pressable>
                    </View>
                </View>
                <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerIn: {
        flex: 0.5,
        width: '80%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});