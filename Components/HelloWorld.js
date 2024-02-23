import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.--uJ_zdFg8bOP7MzDuG6egHaJ4?rs=1&pid=ImgDetMain' }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HelloWorld;
