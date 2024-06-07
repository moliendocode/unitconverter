// app/temperature.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TemperatureScreen() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToFahrenheit = () => {
    const fahr = (parseFloat(celsius) * 9/5) + 32;
    setFahrenheit(fahr.toFixed(2));
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Covert Temperature</ThemedText>
      <Text style={styles.label}>Celsius:</Text>
      <TextInput
        style={styles.input}
        value={celsius}
        onChangeText={setCelsius}
        keyboardType="numeric"
      />
      <Button title="Covert to Fahrenheit" onPress={convertToFahrenheit} />
      <ThemedText type="subtitle">Fahrenheit: {fahrenheit}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
  result: {
    fontSize: 18,
    marginTop: 12,
  },
});
