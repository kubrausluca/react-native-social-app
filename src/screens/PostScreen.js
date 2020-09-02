import React from 'react';
import { Text, View, StyleSheet } from "react-native";

export default class PostScreen extends React.Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text>Post Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})