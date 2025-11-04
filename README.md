# 📍 PlaceFinderApp

A professional React Native application that enables users to search for locations using the **Google Maps Places API**, visualize them on a map, and maintain a history of searched places locally.

---

## ✨ Features

- 🔎 Real-time place search with autocomplete using Google Places API  
- 🗺️ Location display on map with place name and address  
- 📜 Search history stored locally using `AsyncStorage`  
- 🔁 Ability to reselect from history and update the map  
- 💾 Data persistence across sessions  
- 📱 Smooth UI/UX and responsive performance  
- 🧪 Unit tests for key components  

---
## 📸 Screenshots

| Search History | Map View | Search Place | Empty History |
|--------------|----------|----------------|------------------|
| ![Search](./src/assets/screenshots/Screenshot%201.png) | ![Map](./src/assets/screenshots/Screenshot%202.png) | ![History](./src/assets/screenshots/Screenshot%203.png) | ![Current Location](./src/assets/screenshots/Screenshot%204.png) |

---

## ⚙️ Requirements

- Node.js ≥ 16.x  
- Google Cloud account for API key  
- For **React Native CLI** native builds:
  - Android Studio (for Android)
  - Xcode (for iOS / macOS)
- For **Expo** workflow:
  - Expo CLI (`npm install -g expo-cli`) and/or EAS CLI (optional)
  - Expo Go app on device or simulator (for quick testing) 

---

## 🧪 APIs to Enable

You must enable the following APIs in your [Google Cloud Console](https://console.cloud.google.com):

- **Places API**  
- **Maps SDK for Android**  
- **Maps SDK for iOS**  

---

## 🔐 Setup Environment Variables

1. Create a `.env` file in the root directory:
   ```env
   GOOGLE_MAPS_API_KEY=your_google_api_key_here
   ```
   
---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/PlaceFinderApp.git
cd PlaceFinderApp

# Install dependencies
yarn install

# Start Metro
yarn start

# Run on Android
yarn android

# Run on iOS
yarn ios

# Expo (if using Expo workflow)
# Start Expo dev tools
expo start
# Run on a connected Android device/emulator
expo run:android
# Run on a connected iOS device/simulator (macOS + Xcode)
expo run:ios
```

> ℹ️ Make sure you have an emulator/device running and the Google Maps API key is valid.

---

> **Note:** This app uses **React Native CLI** setup — and **Expo** both. Ensure Xcode and/or Android Studio are installed and configured correctly. If you use Expo, you can run quickly with expo start and test in Expo Go; some Google Maps native integrations may require the bare Expo workflow or EAS build for full native SDK support.

---

✅ Built with clean architecture, modular design, and production-ready practices.