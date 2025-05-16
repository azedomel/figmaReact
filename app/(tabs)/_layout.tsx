import { Text } from '@react-navigation/elements';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <>
    <Tabs>
     <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () =>(<Text>MENU</Text>), tabBarStyle: { display: 'none' } }}></Tabs.Screen>
     <Tabs.Screen name='explore' options={{headerShown: false, tabBarIcon: () => (<Text>API</Text>)}}></Tabs.Screen>
     <Tabs.Screen name='list' options={{headerShown: false, tabBarIcon: () => (<Text>CARDS</Text>)}}></Tabs.Screen>
    </Tabs>
    </>
  );
}