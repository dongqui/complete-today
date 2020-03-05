import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { todayStyle } from './styles/index';

function TodayScreen() {
  const { container, contentContainer, welcomeContainer } = todayStyle;
  return (
    <View style={container}>
      <ScrollView style={container} contentContainerStyle={contentContainer}>
        <View style={welcomeContainer}>
          <Text> hi</Text>
        </View>
      </ScrollView>
    </View>
  );
}