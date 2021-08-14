// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/Screens/HomeScreen";
import GetNews from "./src/Screens/GetNews";
import WebViewComponent from "./src/Components/WebView";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Trending" component={HomeScreen} />
          <Stack.Screen name="GetNews" component={GetNews}/>
            <Stack.Screen name="Name" options={{headerBackTitleVisible:false}} component={WebViewComponent} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;