import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

import LoginForm from './components/loginpage';
import HomePage from './components/homepage';
import SplashScreen from './components/splashscreen';
import QuizPage from './components/quizpage';

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Splash'>
        <stack.Screen name="Splash" component={SplashScreen} />   
        <stack.Screen name="Login" component={LoginForm} />   
        <stack.Screen name="Home" component={HomePage} />   
        <stack.Screen name="Quiz" component={QuizPage} /> 
      </stack.Navigator>
    </NavigationContainer>
  );
}
