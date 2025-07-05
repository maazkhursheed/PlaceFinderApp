import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
import HistoryScreen from '../screens/HistoryScreen';
import { HeaderBackButton } from '@react-navigation/elements';
import { TouchableOpacity, View } from 'react-native';
import HistoryIcon from '../assets/icons/history.svg';

export type RootStackParamList = {
  Search: undefined;
  History: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#f5f5f5' },
          headerTintColor: '#6200ee',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={({ navigation }) => ({
            title: 'Place Search',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('History')} style={{ marginRight: 12 }}>
                <HistoryIcon width={24} height={24} fill="#6200ee" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            title: 'Search History',
            headerBackTitleVisible: false,
            headerLeft: (props) => (
              <View style={{ paddingLeft: 12 }}>
                <HeaderBackButton 
                {...props} 
                tintColor="#6200ee" 
                />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;