import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles/todayStyle';

function TodayScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text> hi</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default TodayScreen;