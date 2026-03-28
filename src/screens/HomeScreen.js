import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

import styles from "../styles/styles.js";

import peopleCrud from "../servers/peopleCrud.js";
import CardPersonal from "../components/CardPersonal.js";
import SearchBar from "../components/SearchBar.js";

export default function HomeScreen({ navigation }) {
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState("");

    async function loadPeople() {
        const data = await peopleCrud.getPeople();

        setPeople(data);
    }

    // function searchPeople() {
    //     const filtered = people.filter(person => {
    //     const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
    //     return fullName.includes(search.toLowerCase());
    // });

    const filtered = people.filter(person => {
        const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
        return fullName.includes(search.toLowerCase());
    });
    

    useFocusEffect(
        useCallback(() => {
            loadPeople();
        }, [])
    );

    return (
        <View style={styles.container}>

            

            <Text style={styles.title}>Pessoas</Text>

            <SearchBar value={search} onChangeText={setSearch} />

            <Button title="Adicionar Pessoa"
                onPress={() => navigation.navigate("AddEditScreen")} />

            <FlatList
                data={filtered}
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