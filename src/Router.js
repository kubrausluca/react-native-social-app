import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCWLi2mh8zPBeTPC4_lMQ2Hgnl4a9EcX2o",
  authDomain: "socialapp-75dc5.firebaseapp.com",
  databaseURL: "https://socialapp-75dc5.firebaseio.com",
  projectId: "socialapp-75dc5",
  storageBucket: "socialapp-75dc5.appspot.com",
  messagingSenderId: "348349265828",
  appId: "1:348349265828:web:85c728eeabca432d727331"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Register: RegisterScreen,
  Login: LoginScreen,
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)