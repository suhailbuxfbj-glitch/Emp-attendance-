import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AuditLogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Audit Log</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
});
