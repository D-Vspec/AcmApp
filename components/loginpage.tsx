import React, { useState } from 'react'
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

const users = require('./users.json')

export default function LoginForm({ navigation } : any) {
    const [username,setUsername] : any =  useState("");
    const [password,setPassword] : any =  useState("");

    function login(username:any, password:any) {
      if(password===users[username]){
        navigation.navigate("Home", { user: username });
      } else {
        Alert.alert("Entered password is incorrect")
      }
    }

    function register(username:any, password:any){
      users[username] = password;
      Alert.alert(username, "has been added with password")
    }

    return (
    <SafeAreaView style={styles.container}>
        
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
        </View>

        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={() => login(username, password)}>
                <Text style={styles.buttonText}>   LOGIN   </Text>
            </Pressable>
        </View>

        <View style={styles.buttonView}>
        <Pressable style ={styles.button} onPress={() => register(username, password)}>
                <Text style={styles.buttonText}>   SIGN UP   </Text>
            </Pressable>
        </View>
        
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container : {
    alignItems : "center",
    paddingTop: 0,
  },
  title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 40,
    color : "#1434A4"
  },
  inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :5
  },
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "#1434A4",
    borderWidth : 1,
    borderRadius: 7
  },
  rememberView : {
    width : "100%",
    paddingHorizontal : 50,
    justifyContent: "space-between",
    alignItems : "center",
    flexDirection : "row",
    marginBottom : 8
  },
  rememberText : {
    fontSize: 13
  },
  forgetText : {
    fontSize : 11,
    color : "red"
  },
  button : {
    backgroundColor : "#1434A4",
    height : 45,
    borderColor : "black",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18
  }, 
  buttonView :{
    width :"100%",
    paddingHorizontal : 50,
    flexDirection : "row",
    justifyContent : "center",
    paddingTop: 20
  },
  optionsText : {
    textAlign : "center",
    paddingVertical : 10,
    color : "gray",
    fontSize : 13,
    marginBottom : 6
  },
  mediaIcons : {
    flexDirection : "row",
    gap : 15,
    alignItems: "center",
    justifyContent : "center",
    marginBottom : 23
  },
  icons : {
    width : 40,
    height: 40,
  },
  footerText : {
    textAlign: "center",
    color : "gray",
  },
  signup : {
    color : "red",
    fontSize : 13
  }
})