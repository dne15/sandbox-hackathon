import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>ClimaBuddy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: "50px",
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#42628A'
  },
  headerText: {
    fontSize: 20,
    color: '#f4f1de',
    fontWeight: 'bold',
  },
});

export default Header;
