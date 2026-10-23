import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from './react-native-lite';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🚀 Lite Native Engine</Text>
        <Text style={styles.subtitle}>شغال مية مية ومن غير جراجات ولا تعقيد!</Text>
        
        <Text style={styles.counterText}>{count}</Text>

        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>اضغط يا برنس</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100vh',
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 24,
    textAlign: 'center',
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#0284c7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
