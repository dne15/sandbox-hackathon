
import { View, Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from './components/might_be_important/ParallaxScrollView';
import Header from './components/Header'
import InfoWidgetContainer from './components/InfoWidgetContainer'
import MapSearch from './components/MapSearch'
import GenerateButton from './components/GenerateButton'
import MapApi from './components/Api/MapApi'
// import PollutionRecs from './components/Recommendations/PollutionRecs';
// import CarbonRecs from './components/Recommendations/CarbonRecs';
import Recommendations from './components/Recommendations/Recommendations';
import WeatherApi from './components/Api/WeatherApi';

export default function HomeScreen() {
  return ( 
    <View style={styles.body}>
      <Header /> 
      <MapSearch />
      <InfoWidgetContainer />
      {/* <CarbonRecs />
      <PollutionRecs /> */}
      {/* <WeatherApi /> */}
      <Recommendations />
      <MapApi />
      <GenerateButton />
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
