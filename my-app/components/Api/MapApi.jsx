import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapApi({ region }) {
  const defaultRegion = {
    latitude: 51.5072,
    longitude: -0.1,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={region || defaultRegion}
          region={region}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  container: {
    width: '95%',
    height: 500,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#E7F6E7',
    shadowColor: '#82B27C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});