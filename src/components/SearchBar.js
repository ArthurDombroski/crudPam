import React from "react";
import { TextInput } from "react-native";
import styles from "../styles/styles.js";

export default function SearchBar({ value, onChangeText }) {
    return (
        <TextInput
            placeholder="Buscar pessoa..."
            value={value}
            onChangeText={onChangeText}
            style={styles.input}
        />
    );
}