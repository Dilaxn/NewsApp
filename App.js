// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/Screens/HomeScreen";
import GetNews from "./src/Screens/GetNews";
import WebViewComponent from "./src/Components/WebView";

import { Icon } from 'react-native-elements'
import {DrawerActions as navigation} from "@react-navigation/routers/src/DrawerRouter";
const Stack = createNativeStackNavigator();
const Drawer = createNativeStackNavigator();
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';



function Root() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={HomeScreen} />
            <Stack.Screen name="Settings" component={HomeScreen} />
        </Drawer.Navigator>
    );
}
function App(navigation) {
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
                          onPress={() =>navigation.toggleDrawer} />
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
                          onPress={() =>navigation.toggleDrawer}/>
                  </View>
              ),
          }} component={GetNews}/>
            <Stack.Screen name="WebSite" options={{
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