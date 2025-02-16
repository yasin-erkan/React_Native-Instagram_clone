import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/color';
const ProfileBio = () => {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>Erkan Yasin</Text>
      <Text style={styles.description}>
        "🌟 Dream big, stay curious 🚀 | Exploring life one step at a time | 📸
        Capturing moments | 🎵 Music lover | 🌍 Adventure awaits!"
      </Text>
      <Text style={styles.link}>Link goes here</Text>
      <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.7}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileBio;

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  name: {
    fontWeight: '700',
    color: 'black',
  },
  description: {
    marginVertical: 5,
    color: COLORS.BLACK,
  },
  link: {
    fontWeight: '400',
    color: COLORS.BLUE,
    marginTop: 10,
  },
  editProfileButton: {
    borderColor: '#4A90E2',
    borderWidth: 2,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 12,
    backgroundColor: '#2C2C2E',
    alignSelf: 'center',
    minWidth: 120,
    maxWidth: 180,
  },
  editProfileText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
