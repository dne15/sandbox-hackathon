
import { View, Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from './components/might_be_important/ParallaxScrollView';
import Header from './components/Header'
import InfoWidgetContainer from './components/InfoWidgetContainer'
import MapSearch from './components/MapSearch'
import GenerateButton from './components/GenerateButton'
import WeatherApi from './components/Api/WeatherApi';
import CarbonApi from './components/Api/CarbonApi'
import MapApi from './components/Api/MapApi'
import PollutionApi from './components/Api/PollutionApi'

export default function HomeScreen() {
  return ( 
    <View style={styles.body}>
      <Header></Header> 
      <MapSearch></MapSearch>
      <InfoWidgetContainer></InfoWidgetContainer>
      <WeatherApi/>
      <CarbonApi />
      <PollutionApi />
      <MapApi />
      <GenerateButton></GenerateButton>
    </View>
  )
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f4f1de",
    height: "100%",
    overflow: "scroll"
  }
  
});
