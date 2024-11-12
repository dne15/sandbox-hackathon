
import { View, Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from './components/might_be_important/ParallaxScrollView';
import UpStream from './components/upStream';


export default function HomeScreen() {
  return ( 
   
<View>
      <UpStream>
      </UpStream>
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
