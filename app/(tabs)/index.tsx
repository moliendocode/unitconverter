import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome5 } from '@expo/vector-icons';

const units = [
  { name: 'Temperatura', image: "temperature-high", path: '../screens/temperature' },
  { name: 'Presión', image: "car-brake-low-pressure", path: '../screens/pressure' },
  { name: 'Área', image: "temperature-high", path: '/area' },
  { name: 'Volumen', image: "volume-down", path: '/volume' },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Welcome to Unit Converter!</ThemedText>
        {units.map((unit, index) => (
          <Link key={index} href={unit.path} style={styles.box}>
            <FontAwesome5 name={unit.image} size={24} color="black" />
            <ThemedText type="defaultSemiBold" style={styles.text}>{unit.name}</ThemedText>
          </Link>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  box: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
