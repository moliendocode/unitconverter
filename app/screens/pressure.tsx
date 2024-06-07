// app/pressure.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function PressureScreen() {
  const [bar, setBar] = useState('');
  const [psi, setPsi] = useState('');

  const convertBarToPsi = () => {
    const psiValue = parseFloat(bar) * 14.5038;
    setPsi(psiValue.toFixed(2));
  };

  const convertPsiToBar = () => {
    const barValue = parseFloat(psi) / 14.5038;
    setBar(barValue.toFixed(2));
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Convert Pressure</ThemedText>
      <View style={styles.converter}>
        <Text style={styles.label}>Bar:</Text>
        <TextInput
          style={styles.input}
          value={bar}
          onChangeText={setBar}
          keyboardType="numeric"
        />
        <Button title="Covert to Psi" onPress={convertBarToPsi} />
        <ThemedText type="subtitle">Psi: {psi}</ThemedText>
      </View>
      <View style={styles.converter}>
        <Text style={styles.label}>Psi:</Text>
        <TextInput
          style={styles.input}
          value={psi}
          onChangeText={setPsi}
          keyboardType="numeric"
        />
        <Button title="Covert to Bar" onPress={convertPsiToBar} />
        <ThemedText type="subtitle">Bar: {bar}</ThemedText>
      </View>
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
  converter: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 16,
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
});
