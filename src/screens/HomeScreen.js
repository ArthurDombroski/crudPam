import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

import styles from "../styles/styles.js";

import peopleCrud from "../servers/peopleCrud.js";
import CardPersonal from "../components/CardPersonal.js";

export default function HomeScreen({ navigation }) {
    const [people, setPeople] = useState([]);

    async function loadPeople() {
        const data = await peopleCrud.getPeople();

        setPeople(data);
    }

    useFocusEffect(
        useCallback(() => {
            loadPeople();
        }, [])
    );

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Pessoas</Text>

            <Button title="Adicionar Pessoa"
                onPress={() => navigation.navigate("AddEditScreen")} />

            <FlatList
                data={people}
                keyExtractor={(item) => item.id.toString()}

                renderItem={({ item }) => (
                    <CardPersonal
                        item={item}
                        navigation={navigation}
                        refresh={loadPeople}
                    />
                )}
            />


        </View>
    )
}