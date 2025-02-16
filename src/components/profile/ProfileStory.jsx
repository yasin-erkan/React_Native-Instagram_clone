import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../theme/color';
import React from 'react';

const ProfileStory = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}>
      <TouchableOpacity>
        <View style={styles.story}>
          <View style={styles.store}>
            <Image
              source={{
                uri: 'https://picsum.photos/1080/607?random=8',
              }}
              style={styles.storyImage}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.story}>
          <View style={styles.store}>
            <Image
              source={{
                uri: 'https://picsum.photos/1080/607?random=12',
              }}
              style={styles.storyImage}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.story}>
          <View style={styles.storys}>
            <Image
              source={{
                uri: 'https://picsum.photos/1080/607?random=20',
              }}
              style={styles.storyImage}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.story}>
          <View style={styles.store}>
            <Image
              source={{
                uri: 'https://picsum.photos/1080/607?random=40',
              }}
              style={styles.storyImage}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.story}>
        <View style={styles.store}>
          <TouchableOpacity style={styles.newStoryButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileStory;

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
  },
  story: {
    marginRight: 15,
    alignItems: 'center',
  },
  store: {
    borderColor: COLORS.GRAY2,
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  newStoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    fontSize: 30,
  },
});
