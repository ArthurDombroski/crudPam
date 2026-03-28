import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

import styles from "../styles/styles.js";

import peopleCrud from "../servers/peopleCrud.js";
import { TextInput } from "react-native";

export default function AddEditScreen({ route, navigation }) {

    const person = route.params?.person;

    const [firstName, setFirstName] = useState(person?.firstName || "");
    const [lastName, setLastName] = useState(person?.lastName || "");
    const [email, setEmail] = useState(person?.email || "");
    const [phone, setPhone] = useState(person?.phone || "");

    async function save() {

        const data = { firstName, lastName, email, phone };

        if (person) {
            await peopleCrud.putPerson(person.id, data);
        } else {
            await peopleCrud.postPerson(data);
        }

        navigation.goBack();
    }


    return (
        <View style={styles.container}>

            <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />

            <TextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
            />


            <Button
                title="Salvar"
                onPress={save}
            />

            <Button
                title="Cancelar"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}