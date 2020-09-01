import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import * as firebae from 'firebase';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    
    state = {
        email: "",
        displayName: ""
    }

    componentDidMount() {
        const {email, displayName} = firebae.auth().currentUser;

        this.setState({email, displayName});
    }

    signOutUser = () => {
        firebae.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle = "light-content" backgroundColor = "white"></StatusBar>
                <Text>Hi {this.state.displayName}!</Text>

                <TouchableOpacity style={{marginTop: 32}} onPress = {this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})