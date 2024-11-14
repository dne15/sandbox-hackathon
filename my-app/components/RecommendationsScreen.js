import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import InfoWidgetContainer from './InfoWidgetContainer';

function RecommendationsScreen({ route, navigation }) {
  const { weatherData, carbonIntensity, airRecommendation, airQuality } = route.params || {};
  
  // For animation
  const fadeIn = new Animated.Value(0); // Fade-in animation for section
  const scaleButton = new Animated.Value(1); // Scale button animation
  
  // Start fade-in animation
  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  
  // Recommendations data
  const recommendations = [
    { icon: '🌳', text: 'Take a refreshing walk in nearby park to enjoy nature and improve your mental well-being.' },
    { icon: '☀️', text: 'Harness natural light instead of artificial lighting to reduce energy consumption and enhance mood.' },
    { icon: '🚲', text: 'Consider cycling to work to reduce carbon emissions and improve your physical health.' },
    { icon: '🌱', text: 'Start a small herb garden on your windowsill to promote biodiversity and enjoy fresh, organic herbs.' },
    { icon: '💧', text: 'Reduce water usage by taking shorter showers and fixing any leaks in your home.' },
    { icon: '♻️', text: 'Implement a household recycling system to minimize waste and support circular economy.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeIn }]}>
        <View style={styles.headingSection}>
          <Text style={styles.title}>Eco Recommendations</Text>
          <Text style={styles.subtitle}>Quantum-powered, tailored eco-solutions</Text>
        </View>

        <Text style={styles.quantumExplanation}>
          Our quantum algorithm analyzes real-time environmental data, offering eco-conscious recommendations with precision.
        </Text>

        <InfoWidgetContainer weatherData={weatherData} airQualityData={airQuality} carbonIntensity={carbonIntensity} />
        
        <View style={styles.recommendationsContainer}>
          {recommendations.map((rec, index) => (
            <Animated.View
              key={index}
              style={[styles.recommendationItem, { opacity: fadeIn }]}>
              <Text style={styles.recommendationIcon}>{rec.icon}</Text>
              <Text style={styles.recommendationText}>{rec.text}</Text>
              <Text style={styles.recommendationArrow}>→</Text>
            </Animated.View>
          ))}
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Animated.View
            style={[styles.generateButton, { transform: [{ scale: scaleButton }] }]}
          >
            <TouchableOpacity onPress={() => Animated.spring(scaleButton, { toValue: 1.1, friction: 3, useNativeDriver: true }).start()}>
              <Text style={styles.generateButtonText}>🔄 New Recommendations</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FDF4', // Subtle green background
  },
  content: {
    padding: 20,
    backgroundColor: '#E7F6E7', // Soft greenish background with a natural look
    margin: 10,
    borderRadius: 15,
    shadowColor: "#3B6A4D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  headingSection: {
    backgroundColor: '#4CAF50', // Strong green background for emphasis
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: '700', // Stronger weight for impact
    color: '#FFFFFF', // White text for high contrast
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#E7F6E7', // Subtle light green to complement the dark heading
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Light',
  },
  quantumExplanation: {
    fontSize: 14,
    color: '#5C6E60', // Natural, earthy gray
    textAlign: 'left',
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
    fontStyle: 'italic', // Adds emphasis and character
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    backgroundColor: '#E2F4E2', // Very light green
    padding: 12,
    borderRadius: 8,
    width: '22%',
    borderWidth: 0.5,
    borderColor: '#D1E5D0',
    shadowColor: '#A8D3A3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  statTitle: {
    fontSize: 10,
    color: '#A8BFA4', // Subtle grayish green
    fontFamily: 'Poppins-Light',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C6D4B', // Deeper green
    fontFamily: 'Poppins',
  },
  recommendationsContainer: {
    marginBottom: 20,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9F6E9', // Light green background
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50', // Deeper green for emphasis
    shadowColor: '#82B27C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  recommendationIcon: {
    fontSize: 26,
    marginRight: 15,
  },
  recommendationText: {
    flex: 1,
    fontSize: 16,
    color: '#3C763D',
    fontFamily: 'Poppins-Regular',
  },
  recommendationArrow: {
    fontSize: 22,
    color: '#A0CBB2', // Light greenish gray
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  backButton: {
    padding: 12,
    backgroundColor: '#7BBF66',
    borderRadius: 25,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  generateButton: {
    padding: 12,
    backgroundColor: '#A1D89D',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6B9F77',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  generateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },
});

export default RecommendationsScreen;
