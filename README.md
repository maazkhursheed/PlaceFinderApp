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
- Android Studio (for Android)  
- Xcode (for iOS)  
- Google Cloud account for API key  
- React Native CLI (not Expo)  

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
```

> ℹ️ Make sure you have an emulator/device running and the Google Maps API key is valid.

---

> **Note:** This app uses a **React Native CLI** setup — not Expo. Ensure Xcode and/or Android Studio are installed and configured correctly.

---

✅ Built with clean architecture, modular design, and production-ready practices.