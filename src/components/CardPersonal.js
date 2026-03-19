import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import people from "../../database.json"
import styles from "../styles/styles.js";
import peopleCrud from "../servers/peopleCrud.js"



function CardPersonal({ item, navigation, refresh }) {
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.name}>
                    {item.firstName} {item.lastName}
                </Text>

                <Text style={styles.name}>
                    {item.email}
                </Text>
            </View>

            <View>

                <Button title="Editar"
                    onPress={() => navigation.navigate("AddEdit", { person: item })}
                />

                <Button title="Deletar"
                    onPress={async () => {
                        await peopleCrud.deletePerson(item.id);
                        refresh();
                    }}
                />
            </View>

        </View>
    )
}

export default CardPersonal;