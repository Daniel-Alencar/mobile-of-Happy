
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -7.5715255,
          longitude: -40.5214804,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}
      >
        <Marker 
          icon={mapMarker}
          coordinate={{
            latitude: -7.5715255,
            longitude: -40.5214804,
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
