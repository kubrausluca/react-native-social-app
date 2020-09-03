import React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Contants from 'constants';
import * as Permissions from 'react-native-permissions';
// import Fire from '../Fire';

export default class PostScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent"></StatusBar>
                
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name='arrow-left' size={24} color='#D8D9D8'></Icon>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ fontWeight: "500" }}>Post</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Image source={require("../assets/avatar.jpg")} style={styles.avatar} ></Image>

                    <TextInput
                        autoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        style={{ flex:1 }}
                        placeholder="Want to share something?"
                    ></TextInput>

                </View>

                <TouchableOpacity style={styles.photo}>
                    <Icon name="camera" size={32} color='#D8D9D8'></Icon>
                </TouchableOpacity>
                
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D8D9D8',
    },
    inputContainer: {
        margin: 32,
        flexDirection: "row",
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16,
        // resizeMode: 'contain'
    },
    photo: {
        alignItems: 'flex-end',
        marginHorizontal: 32
    }
})