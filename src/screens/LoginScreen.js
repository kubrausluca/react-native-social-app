import React, {useState} from "react";
import styled from "styled-components";

import Text from '../components/Text';

export default LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    return (
        <Container>
            <Main>
                <Text title semi center>
                    Welcome back.
                </Text>
            </Main>

            <Auth>
                <AuthContainer>
                    <AuthTitle>Email Address</AuthTitle>
                    <AuthField 
                        autoCapitalize="none" 
                        autoCompleteType="email" 
                        autoCorrect={false} 
                        autoFocus={true}
                        keyboardType="email-address" 
                        onChangeText={email => setEmail(email.trim())}
                        value={email}
                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>Password</AuthTitle>
                    <AuthField 
                        autoCapitalize="none" 
                        autoCompleteType="password" 
                        autoCorrect={false} 
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password.trim())}
                        value={password}
                    />
                </AuthContainer>
            </Auth>

            <LoginContainer disabled={loading}>
                {loading ? (
                    <Loading />
                ) : (
                <Text bold center color="#ffffff">
                    Sign In
                </Text>
                )}
                
            </LoginContainer>

            <Login onPress={() => navigation.navigate("Register")}>
                <Text small center>New to SocialApp?{" "} 
                <Text bold color="#8022d9">
                    Sign Up
                </Text></Text>
            </Login>


            <HeaderGraphic>
                <RightCircle />
                <LeftCircle />
            </HeaderGraphic>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 192px;
`;

const Auth = styled.View`
    margin: 64px 32px 32px; 
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
`;

const LoginContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #8022d9;
    border-radius: 0px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
    color: "#ffffff",
    size: "small",
}))``;

const Login = styled.TouchableOpacity`
    margin-top: 16px;
`;

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

const RightCircle = styled.View`
    background-color: #8022d9;
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    right: -100px;
    top: -200px;
`;

const LeftCircle = styled.View`
    background-color: #23a6d5;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`;

const StatusBar = styled.StatusBar``;


// import React from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation } from 'react-native';
// import * as firebase from 'firebase';

// export default class LoginScreen extends React.Component {
//     static navigationOptions = {
//         headerShown: false,
//         // headerStyle: {
//         //     backgroundColor: 'transparent',
//         //     position: 'absolute',
//         //     height: 50,
//         //     borderBottomWidth: 0 // removes the border on the bottom
//         //   },
//     };

//     state = {
//         email: "",
//         password: "",
//         errorMessage: null
//     }

//     handleLogin = () => {
//         const {email, password} = this.state

//         firebase
//             .auth()
//             .signInWithEmailAndPassword(email, password)
//             .catch(error => this.setState({errorMessage: error.message}))
//     }

//     render() {
//         LayoutAnimation.easeInEaseOut();

//         return (
//             <View style={styles.container}>
//                 <StatusBar barStyle="dark-content" translucent backgroundColor="transparent"></StatusBar>
//                 <Image 
//                     source={require('../assets/authHeader2.png')} 
//                     style={{marginTop: -50, resizeMode: 'contain'}}
//                 ></Image>

//                 <Image 
//                     source={require('../assets/authHeader3.png')} 
//                     style={{position: 'absolute', bottom: -100, right: 0}}
//                 ></Image>

//                 {/* <Image 
//                     source={require('../assets/helloSlogan.png')} 
//                     style={{marginTop: -90, alignSelf: 'center'}}
//                 ></Image> */}
                
//                 <Text style={styles.greeting}>
//                     {'Hello again.\nWelcome back.'}
//                 </Text>

//                 <View style={styles.errorMessage}>
//                     {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
//                 </View>

//                 <View style={styles.form}>
//                     <View>
//                         <Text style={styles.inputTitle}>Email Address</Text>
//                         <TextInput 
//                             style={styles.input} 
//                             autoCapitalize="none" 
//                             keyboardType="email-address"
//                             onChangeText = { email => this.setState({ email })}
//                             value = {this.setState.email}
//                         ></TextInput>
//                     </View>

//                     <View style={{ marginTop: 32 }}>
//                         <Text style={styles.inputTitle}>Password</Text>
//                         <TextInput 
//                             style={styles.input} 
//                             secureTextEntry 
//                             autoCapitalize="none"
//                             onChangeText = { password => this.setState({ password }) }
//                             value = {this.setState.password}    
//                         ></TextInput>
//                     </View>
//                 </View>

//                 <TouchableOpacity style={styles.button} onPress = {this.handleLogin}>
//                     <Text style={{ color: "#fff", fontWeight: "500" }}>Sign In</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity 
//                     style={{ alignSelf: "center", marginTop: 32}}
//                     onPress = {() => this.props.navigation.navigate("Register")}
//                 >
//                     <Text style={{ color: '#414959', fontSize: 13}}>
//                         New to SocialApp? <Text style={{ fontWeight: '500', color: '#E9446A'}}>Sign Up</Text>
//                     </Text>
//                 </TouchableOpacity>

//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     greeting: {
//         marginTop: -32,
//         fontSize: 18,
//         fontWeight: 'bold',
//         textAlign: 'center',

//     },
//     errorMessage: {
//         height: 72,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginHorizontal: 30,
//     },
//     error: {
//         color: '#E9446A',
//         fontSize: 13,
//         fontWeight: '600',
//         textAlign: 'center',
//     },
//     form: {
//         marginBottom: 48,
//         marginHorizontal: 30,
//     },
//     inputTitle: {
//         color: "#8A8F9E",
//         fontSize: 10,
//         textTransform: "uppercase",
//     },
//     input: {
//         borderBottomColor: '#8A8F9E',
//         borderBottomWidth: StyleSheet.hairlineWidth,
//         height: 40,
//         fontSize: 15,
//         color: '#161F3D',
//     },
//     button: {
//         marginHorizontal: 30,
//         backgroundColor: '#E9446A',
//         borderRadius: 4,
//         height: 52,
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// })