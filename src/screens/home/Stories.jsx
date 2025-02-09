import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Story from '../../components/home/Story';
import stories from '../../utils/stories';

const Stories = () => {
  return (
    <View style={styles.stories}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

{stories.map((story) => (
<Story key={story.id}  story={story}/>
))};

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
