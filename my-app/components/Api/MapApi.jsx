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
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region || defaultRegion}
        region={region}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 200,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});