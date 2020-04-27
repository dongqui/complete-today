import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/shared/TabBarIcon';
import TodayScreen from '../screens/TodayScreen';
import ListScreen from '../screens/ListScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Today';

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          title: 'Today',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-checkmark" />,
        }}
      />
      <BottomTab.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'List',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-list" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

