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
    backgroundColor: '#F2F4F8'
  },
  headerText: {
    fontSize: 20,
    color: '#0B6F5D',
    fontWeight: 'bold',
  },
});

export default Header;
