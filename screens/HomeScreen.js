import * as React from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { homeStyle } from './styles/index';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  const { container, contentContainer, welcomeContainer } = homeStyle;
  return (
    <View style={container}>
      <ScrollView style={container} contentContainerStyle={contentContainer}>
        <View style={welcomeContainer}>
          <Text> Hello</Text>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


