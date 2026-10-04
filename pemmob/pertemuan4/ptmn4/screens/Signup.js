import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Sign Up</Text>
      <Button 
        title="Kembali ke Login" 
        // Menggunakan navigation.goBack() untuk membuang tumpukan layar saat ini
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(254, 254, 255)' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});