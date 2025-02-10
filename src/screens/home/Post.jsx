import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Bookmark, Comment, Heart, Share, Dots} from '../../utils/Icons';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';

const Post = ({post}) => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image source={{uri: post.user.avatar}} style={styles.avatar} />
          <Text style={styles.title}>{post.user.name}</Text>
        </View>
        <Dots />
      </View>

      <FitImage src={post.image} />
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Heart size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Comment size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Share size={24} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.actionButton}>
            <Bookmark size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.likes}> {post.likes} likes</Text>
      </View>

      <View style={{flex: 1, marginHorizontal: 5}}>
        <Text style={styles.user}> {post?.user.name}</Text>
        <ReadMore
          numberOfLines={2}
          seeLessStyle={{color: '#999'}}
          seeLessText="see less"
          seeMoreText="see more"
          seeMoreStyle={{color: '#999'}}>
          <Text> {post.description} </Text>
        </ReadMore>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  leftActions: {
    flexDirection: 'row',
  },
  action: {
    marginRight: 14,
  },
  actionButton: {
    marginRight: 10,
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 5,
  },
  user: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 5,
    color: '#33',
    fontWeight: '700',
  },
});
