import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

import styles from "../styles/styles.js";

import { getPeople, deletePerson } from "../servers/peopleCrud.js";
import CardPersonal from "../components/CardPersonal.js";

export default function HomeScreen({ navigation }) {
    const [people, setPeople] = useState([]);

    async function loadPeople() {
        const data = await getPeople();

        setPeople(data);
    }

    useEffect(() => {
        loadPeople();
    }, []);

    return (
        <View style={styles.container}>

            <Text style={style.title}>Pessoas</Text>

            <Button title="Adicionar Pessoa"
                onPress={() => navigation.navigate("AddEdit")} />

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