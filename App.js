import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StackActions} from '@react-navigation/native';
import {Icon} from "react-native-elements";
import GetNews from "./src/Screens/GetNews";
import WebViewComponent from "./src/Components/WebView";
import HomeScreen from "./src/Screens/HomeScreen";

const Stack = createNativeStackNavigator();
import Avatar from "./src/Images/Avatar.png"
import Provinces from "./src/Components/Provinces";
import GetProvince from "./src/Screens/GetProvince";
import Profile from "./src/Components/Profile";
import LocalNews from "./src/Components/LocalNews";
import MyInterests from "./src/Components/MyInterests";
import Interest from "./src/Components/Interest";
import Channels from "./src/Components/Channels";


import {useEffect} from "react";





function Feed({navigation}) {


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Notifications Screen</Text>
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 2}} alignItems="center">
                    <Image
                        style={{
                            width: 80,
                            height: 80,

                            borderWidth: 0,
                            borderRadius: 75
                        }}
                        source={Avatar}
                        resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
                    />
                </View>
                <View style={{flex: 3}} alignItems="left" align='center'>
                    <Text style={{margin: 5, fontSize: 18, fontWeight: 'bold', paddingTop: '10%'}}>
                        Dilaxn
                    </Text>
                    <Text style={{marginLeft: 5, fontSize: 14}}>
                        dilaxn@gmail.com
                    </Text>
                </View>
            </View>
            <DrawerItemList    {...props} />
            {/*<DrawerItem*/}
            {/*    label="C"*/}
            {/*    labelStyle={{fontSize:20}}*/}
            {/*    onPress={() => props.navigation.dispatch(Notifications)}*/}
            {/*/>*/}

            {/*<DrawerItem*/}
            {/*    label="Toggle drawer"*/}
            {/*    labelStyle={{fontSize:20}}*/}
            {/*    onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}*/}
            {/*/>*/}
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            activeTintColor: 'red'
        }}
                          drawerContent={(props) => <CustomDrawerContent labelStyle={{fontSize: 20}} {...props} />}
        >
            <Drawer.Screen name="My Interests" component={Interest}/>
            <Drawer.Screen name="WorldNews"  component={StachNav}/>
            <Drawer.Screen name="LocalNews" component={StachNav} />
            <Drawer.Screen name="Interest" component={MyInterest} />
            <Drawer.Screen name="Provinces" component={ProvinceScreen} />
            <Drawer.Screen name="Channels" component={Channels} />

            <Drawer.Screen name="Profile" component={ProfileScreen}/>
            <Drawer.Screen name="Feedback" component={Provinces}/>
            <Drawer.Screen name="Contact Us" component={Provinces}/>
        </Drawer.Navigator>
    );
}

function StachNav(props) {
    console.log(props.route.name)
    let x=props.route.name;
    return (
        <Stack.Navigator>

            <Stack.Screen name='Trends' options={{
                headerLeft: () => (
                    <View style={{paddingRight: 5}}>
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#000'
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                    </View>
                ),
            }} component={HomeScreen} initialParams={{ itemId: x }}/>
            <Stack.Screen name="GetNews" options={{
                headerRight: () => (
                    <View style={{paddingRight: 5}}>
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#000'
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                    </View>
                ),
            }} component={GetNews}/>

            <Stack.Screen name="GetProvince" options={{
                headerRight: () => (
                    <View style={{paddingRight: 5}}>
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#000'
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                    </View>
                ),
            }} component={GetProvince}/>
            <Stack.Screen name="WebSite" options={{
                headerRight: () => (
                    <View style={{paddingRight: 5}}>
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#000'
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                    </View>
                ),
            }} component={WebViewComponent}/>


            <Stack.Screen name='Province' options={{
                headerLeft: () => (
                    <View style={{paddingRight: 5}}>
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#000'
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                    </View>
                ),
            }} component={Provinces}/>

        </Stack.Navigator>
    )
        ;
}

//Province Screen
function ProvinceScreen(props) {
    console.log(props.route.name)
    let x=props.route.name;
    return (
        <Stack.Navigator>

            <Stack.Screen name={x} options={{
                headerLeft: () => (
                    <View style={{paddingRight: 5}}>
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#000'
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                    </View>
                ),
            }} component={Provinces} initialParams={{ itemId: x }}/>


        </Stack.Navigator>
    )
        ;
}

//Profile Screen
function ProfileScreen(props) {
    console.log(props.route.name)
    let x=props.route.name;
    return (
        <Stack.Navigator>

            <Stack.Screen name='Profile' options={{
                headerLeft: () => (
                    <View style={{paddingRight: 5}}>
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#000'
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                    </View>
                ),
            }} component={Profile} initialParams={{ itemId: x }}/>


        </Stack.Navigator>
    )
        ;
}

//Interests Screen
function MyInterest(props) {
    console.log(props.route.name)
    let x=props.route.name;
    return (
        <Stack.Navigator>

            <Stack.Screen name='Interests' options={{
                headerLeft: () => (
                    <View style={{paddingRight: 5}}>
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#000'
                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                    </View>
                ),
            }} component={MyInterests} initialParams={{ itemId: x }}/>


        </Stack.Navigator>
    )
        ;
}

export default function App() {

    return (
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    );
}