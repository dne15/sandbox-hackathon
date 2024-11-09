
// export default function Header() {


//     return (
//         <>
//             <h1>EcoConscious</h1>
//         </>
//     )

// }

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Aura</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: "50px",
    paddingVertical: 15,
    backgroundColor: '#f4f1de',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#e07a5f',
    fontWeight: 'bold',
  },
});

export default Header;
