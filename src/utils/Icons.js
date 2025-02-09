import React from 'react';
import {Image} from 'react-native';

const Logo = () => {
  return <Image source={require('../assets/logo.png')} />;
};

const Home = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/home.png')}
    />
  );
};

const HomeField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/home-field.png')}
    />
  );
};

const Search = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/search.png')}
    />
  );
};

const SearchField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/search-field.png')}
    />
  );
};

const Reel = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/reel.png')}
    />
  );
};

const ReelField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/reel-field.png')}
    />
  );
};

const Shop = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/shop.png')}
    />
  );
};

const ShopField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/shop-field.png')}
    />
  );
};

const Plus = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/plus.png')}
    />
  );
};

const Heart = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/heart.png')}
    />
  );
};

const Messenger = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/messenger.png')}
    />
  );
};

export {
  Logo,
  Home,
  HomeField,
  Search,
  SearchField,
  Reel,
  ReelField,
  Shop,
  ShopField,
  Plus,
  Heart,
  Messenger,
};
