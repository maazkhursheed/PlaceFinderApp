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

2. Ensure `.env` is listed in `.gitignore` to keep your API key secure.

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

## 🧪 Run Tests

```bash
yarn test
```

Test coverage includes:

- ✅ `MapComponent`
- ✅ `HistoryList`
- ✅ `HomeScreen`

---

## 📁 Project Structure

```bash
PlaceFinderApp/
├── __tests__/
│   ├── HistoryList.test.tsx
│   ├── HomeScreen.test.tsx
│   └── MapComponent.test.tsx
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── HistoryList.tsx
│   │   ├── MapComponent.tsx
│   │   └── SearchBar.tsx
│   ├── navigation/
│   │   └── index.tsx
│   ├── screens/
│   │   └── HomeScreen.tsx
│   ├── services/
│   │   └── api.ts
│   ├── storage/
│   │   └── historyStorage.ts
│   ├── store/
│   │   └── historyStore.ts
│   └── utils/
│       └── debounce.ts
├── App.tsx
├── .env
├── .gitignore
├── babel.config.js
├── jest.config.js
├── package.json
└── README.md
```

---

> **Note:** This app uses a **React Native CLI** setup — not Expo. Ensure Xcode and/or Android Studio are installed and configured correctly.

---

✅ Built with clean architecture, modular design, and production-ready practices.