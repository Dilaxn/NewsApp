import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackActions } from '@react-navigation/native';
import {Icon} from "react-native-elements";
import GetNews from "./src/Screens/GetNews";
import WebViewComponent from "./src/Components/WebView";

const Stack = createNativeStackNavigator();


function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
            <Button
                title="Open drawer"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
            <Button
                title="Toggle drawer"
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications Screen</Text>
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
    );
}

function StachNav() {
    return (
        <Stack.Navigator>

            <Stack.Screen name="Trending" options={{
                headerLeft: () => (
                    <View style={{paddingLeft:5}}>
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#000'
                            onPress={() =>
                                navigation.dispatch(DrawerActions.openDrawer())

                            } />
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
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}