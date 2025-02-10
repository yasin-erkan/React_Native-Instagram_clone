import {ScrollView, StyleSheet, View} from 'react-native';
import stories from '../../utils/stories';
import Story from './Story';
import React from 'react';

const Stories = () => {
  return (
    <View style={styles.stories}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((story, index) => (
          <Story key={index} story={story} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  stories: {
    paddingVertical: 10,
  },
});
