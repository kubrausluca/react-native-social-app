import React, {useState} from "react";
import { Image, Platform } from "react-native";
import styled from "styled-components";
import Icon from 'react-native-vector-icons/FontAwesome5';

import Text from '../components/Text';

export default RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState();

    // const getPermissions = async () => {
    //     if (Platform.OS !== 'web') {
    //         const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)

    //         return status;
    //     }
    // }

    // const pickImage = async () => {
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 400,
    //         cropping: true,
    //       }).then(image => {
    //         console.log(image);
    //     });
    // }

    // const addProfilePhoto = async () => {
    //     // const status = await getPermissions();

    //     // alert("Status: ", status);

    //     pickImage();
    // };


    return (
        <Container>
            <Main>
                <Text title semi center>
                    Sign up to get started.
                </Text>
            </Main>

            {/* <ProfilePhotoContainer onPress={addProfilePhoto}>
                {profilePhoto ? (
                    <ProfilePhoto source={{uri: profilePhoto}} />
                ) : (
                    <DefaultProfilePhoto>
                        <Icon 
                            name = "plus" 
                            size={24} 
                            color='#fff'
                        ></Icon>
                    </DefaultProfilePhoto>
                )}
            </ProfilePhotoContainer> */}

            <ProfilePhotoContainer>
                
                <DefaultProfilePhoto>
                    <Icon 
                        name = "plus" 
                        size={24} 
                        color='#fff'
                    ></Icon>
                </DefaultProfilePhoto>
                
            </ProfilePhotoContainer>

            <Auth>
                <AuthContainer>
                    <AuthTitle>Username</AuthTitle>
                    <AuthField 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        autoFocus={true}
                        onChangeText={username => setEmail(username.trim())}
                        value={username}
                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>Email Address</AuthTitle>
                    <AuthField 
                        autoCapitalize="none" 
                        autoCompleteType="email" 
                        autoCorrect={false} 
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

            <RegisterContainer disabled={loading}>
                {loading ? (
                    <Loading />
                ) : (
                <Text bold center color="#ffffff">
                    Sign Up
                </Text>
                )}
                
            </RegisterContainer>

            <Register onPress={() => navigation.navigate("Register")}>
                <Text small center>Already have an account?{" "} 
                <Text bold color="#8022d9">
                    Sign In
                </Text></Text>
            </Register>


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
    margin-top: 160px;
`;

const ProfilePhotoContainer = styled.TouchableOpacity`
    background-color: #e1e2e6;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    align-self: center;
    margin-top: 16px;
    overflow: hidden;
`;

const DefaultProfilePhoto = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const ProfilePhoto = styled.Image`
    flex: 1;
`;

const Auth = styled.View`
    margin: 16px 32px 32px; 
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

const RegisterContainer = styled.TouchableOpacity`
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

const Register = styled.TouchableOpacity`
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
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
// import * as firebase from 'firebase';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// export default class RegisterScreen extends React.Component {
//     static navigationOptions = {
//         headerShown: false,
//     };

//     state = {
//         name: "",
//         email: "",
//         password: "",
//         errorMessage: null
//     }

//     handleSignUp = () => {
//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(this.state.email, this.state.password)
//             .then(userCredentials => {
//                 return userCredentials.user.updateProfile({
//                     displayName: this.state.name
//                 });
//             })
//             .catch(error => this.setState({ errorMessage: error.message }))
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <StatusBar barStyle='dark-content' translucent backgroundColor='transparent'></StatusBar>
                
//                 <Image 
//                     source={require('../assets/authHeader2.png')} 
//                     style={{marginTop: -25, resizeMode: 'contain'}} 
//                 ></Image>

//                 <Image 
//                     source={require('../assets/authHeader3.png')} 
//                     style={{position: 'absolute', bottom: -100, right: 0}}
//                 ></Image>

//                 <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('Login')}>
//                     <Icon name='arrow-left' size={25} color='#fff'></Icon>
//                 </TouchableOpacity>

//                 <View style={{position:'absolute', top: 100, alignItems: 'center', width: "100%"}}>
//                     <Text style={styles.greeting}>
//                         {'Hello!\nSign up to get started.'}
//                     </Text>
//                     <TouchableOpacity style={styles.avatar}>
//                         <Icon 
//                             name = "plus" 
//                             size={32} 
//                             color='#fff'
//                             style={{marginTop:6, marginLeft: 2}}
//                         ></Icon>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.errorMessage}>
//                     {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
//                 </View>

//                 <View style={styles.form}>
//                     <View>
//                         <Text style={styles.inputTitle}>Full Name</Text>
//                         <TextInput 
//                             style={styles.input} 
//                             autoCapitalize="none" 
//                             keyboardType = 'default'
//                             onChangeText = { name => this.setState({ name })}
//                             value = {this.state.name}
//                         ></TextInput>
//                     </View>

//                     <View style={{ marginTop: 32 }}>
//                         <Text style={styles.inputTitle}>Email Address</Text>
//                         <TextInput 
//                             style={styles.input} 
//                             autoCapitalize="none" 
//                             keyboardType="email-address"
//                             onChangeText = { email => this.setState({ email })}
//                             value = {this.state.email}
//                         ></TextInput>
//                     </View>

//                     <View style={{ marginTop: 32 }}>
//                         <Text style={styles.inputTitle}>Password</Text>
//                         <TextInput 
//                             style={styles.input} 
//                             secureTextEntry 
//                             autoCapitalize="none"
//                             onChangeText = { password => this.setState({ password }) }
//                             value = {this.state.password}    
//                         ></TextInput>
//                     </View>
//                 </View>

//                 <TouchableOpacity 
//                     style={styles.button} 
//                     onPress = {this.handleSignUp}
//                 >
//                     <Text style={{ color: "#fff", fontWeight: "500" }}>Sign up</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity 
//                     style={{ alignSelf: "center", marginTop: 32}} 
//                     onPress = {() => this.props.navigation.navigate('Login')}
//                 >
//                     <Text style={{ color: '#414959', fontSize: 13}}>
//                         New to SocialApp? <Text style={{ fontWeight: '500', color: '#E9446A'}}>Login</Text>
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
//         fontWeight: '400',
//         textAlign: 'center',
//         color: '#fff',
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
//     },
//     back: {
//         position: 'absolute',
//         top: 48,
//         left: 32,
//         width: 32,
//         height: 32,
//         borderRadius: 16,
//         backgroundColor: "rgba(21, 22, 48, 0.1)",
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     avatar: {
//         width: 80,
//         height: 80,
//         borderRadius: 50,
//         backgroundColor: '#E1E2E6',
//         marginTop: 48,
//         justifyContent: "center",
//         alignItems: "center",
//     }
// })