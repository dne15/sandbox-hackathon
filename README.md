# EcoSage 🌿  
EcoSage is a React Native application designed to empower individuals with real-time environmental data and personalized recommendations. By leveraging weather, air quality, and carbon intensity insights, EcoSage helps users make eco-friendly choices and stay safe in their environment.  

---

## 🛠 Problem Statement  
Many people are unaware of how their daily choices impact climate change. From transportation habits to energy use, small actions can contribute significantly to greenhouse gas emissions. This lack of awareness can lead to inaction, hindering the adoption of sustainable practices.  

---

## 🌟 Solution  
EcoSage addresses this issue by delivering real-time, location-based environmental insights. The app provides actionable recommendations to help users reduce their carbon footprint and contribute to a sustainable future.  

---

## 🌍 Key Features  
- **Weather Recommendations**: Personalized tips based on current temperature and conditions.  
- **Air Quality Insights**: Guidance to stay safe and reduce pollution exposure.  
- **Carbon Intensity Advice**: Suggestions for reducing your carbon footprint.  
- **Location-Based Data**: Fetches environmental details for your current location or a searched city.  
- **Interactive Map**: Displays environmental data with dynamic updates for your location.  

---

## 🤔 Tech Decision  

### **React Native**  
- **Why**: Ideal for building a mobile app and learning React Native.  
- **Tradeoffs**: Testing was challenging on the web due to Maps API integration, requiring deployment on mobile devices.  

### **JavaScript**  
- **Why**: Familiarity with JavaScript allowed for faster development.  
- **Tradeoffs**: We prioritized rapid iteration over the added type safety of TypeScript.  

### **Expo Go**  
- **Why**: Simplified deployment during development with hot reload.  
- **Tradeoffs**: Limited advanced features compared to standalone builds.  

---

## 📚 Key Learnings  
1. **React Native Basics**: Transitioning from JavaScript to React Native was straightforward.  
2. **Communication**: Clear collaboration was essential for API integration and debugging.  
3. **Debugging**: Testing directly on mobile devices improved issue resolution.  
4. **API Setup**: Understanding unique configurations for APIs was crucial.  
5. **AI Challenges**: AI tools had limitations when navigating React Native's nuances.  

---

## 🚀 Future Roadmap  

### **MVP 2**  
- AI-driven recommendations for hyper-personalized insights.  
- Region-specific carbon intensity data.  
- Dynamic map updates based on user movement.  

### **MVP 3**  
- Color overlays for pollution and weather visualization.  
- Eco-friendly transport routes to promote sustainable travel.  

### **The Ultimate Vision**  
Leverage **quantum computing** to process massive datasets, enabling real-time global insights into environmental patterns and trends.  

---

## 🔌 APIs Used  
- **[OpenWeatherMap API](https://openweathermap.org/api)**: Fetch weather data.  
- **[Google Air Quality API](https://developers.google.com/maps/documentation/airquality)**: Provide air quality insights.  
- **[Carbon Intensity API](https://carbon-intensity.github.io/api-definitions/#carbon-intensity-api-v2-0-0)**: Retrieve carbon intensity data.  
- **[Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding)**: Power geolocation features.  

---

## 🌱 Why EcoSage?  
EcoSage is more than an app—it’s a step toward a sustainable future. By empowering users with data and actionable insights, EcoSage helps foster environmental awareness and drive change, one decision at a time.  

---

## 🎯 Get Started  
Clone the repository, install dependencies, and launch the app using Expo Go!  

```bash
git clone https://github.com/your-repo/eco-sage.git  
cd eco-sage  
npm install  
expo start  
