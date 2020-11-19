/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Onboarding, DestinationDetail } from './screens/'
import { COLORS, icons, SIZES } from './constants';
import Tabs from './navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Onboarding'}>
      <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white
                        },
                        headerLeft: null,
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Pressed")}
                            >
                                <Image
                                    source={icons.barMenu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />
    
      <Stack.Screen name="Home"
        component={Tabs}
        options={{
          title: null,
          headerStyle: {
            backgroundColor: COLORS.white
          },
          headerLeft: ({ onPress }) => (
            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{marginRight: SIZES.padding}}
            onPress={() => console.log("Menu")}>
               <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                      width: 25,
                      height: 25,
                  }}
              />

            </TouchableOpacity>
          ),
        }} 
        />
      </Stack.Navigator>

      
    </NavigationContainer>
      
    </>
  );
};


export default () => {
  return <App />;
};
