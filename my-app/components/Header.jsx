import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

const Header = () => {
  return (
    <View style={styles.header}>
      <Ionicons name="leaf-outline" size={24} color="#4CAF50" style={styles.icon} />
      <Text style={styles.headerText}>ClimaBuddy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7F6E7',
    borderBottomWidth: 1,
    borderBottomColor: '#A8D3A3',
    shadowColor: '#82B27C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#2C6D4B',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
});

export default Header;