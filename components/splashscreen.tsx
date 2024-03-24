import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen: React.FC = ( {navigation} : any ) => {
  useEffect(() => {
    const timer = setTimeout(() => {navigation.replace("Login");}, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACM Test Quiz app</Text>
      <Text style={styles.subText}>by dv</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1434A4', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'white'
  },
  subText:{
    fontSize:16,
    color:'white'
  }
});

export default SplashScreen;
