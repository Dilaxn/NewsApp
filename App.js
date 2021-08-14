// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/Screens/HomeScreen";
import GetNews from "./src/Screens/GetNews";
import WebViewComponent from "./src/Components/WebView";
import { Icon } from 'react-native-elements'
const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Trending" options={{
              headerLeft: () => (
                  <View style={{paddingLeft:5}}>
                      <Icon
                          name='bars'
                          type='font-awesome'
                          color='#000'
                          onPress={() => console.log('hello')} />
                  </View>
              ),
          }} component={HomeScreen} />
          <Stack.Screen name="GetNews" options={{
              headerRight: () => (
                  <View style={{paddingRight:5}}>
                      <Icon
                          name='bars'
                          type='font-awesome'
                          color='#000'
                          onPress={() => console.log('hello')} />
                  </View>
              ),
          }} component={GetNews}/>
            <Stack.Screen name="Name" options={{
                headerRight: () => (
                    <View style={{paddingRight:5}}>
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#000'
                            onPress={() => console.log('hello')} />
                    </View>
                ),
            }}  component={WebViewComponent} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;