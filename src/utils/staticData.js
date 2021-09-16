import React from 'react';
import Constants from '../constants';
import Sound from 'react-native-sound';

const playlist = [
  { 
    id:0,
    title: 'Emergence of Talents',
    url: 'track1.mp3',
    cover:
      'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
  },
  {
    id:1,
    title: 'Shippuden',
    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
    cover:
      'https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
  },
  {
    id:2,
    title: 'Rising Dragon',
    url: 'track3.mp3',
    cover:
      'https://images.unsplash.com/photo-1512036666432-2181c1f26420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  },
  {
    id:3,
    title: 'Risking it all',
    url: 'track4.mp3',
    cover:
      'https://images.unsplash.com/photo-1501761095094-94d36f57edbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80',
  },
  {
    id:4,
    title: 'Gekiha',
    url: 'track5.mp3',
    cover:
      'https://images.unsplash.com/photo-1471400974796-1c823d00a96f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  },
];

const videoList = [
  {
    key: 1,
    title: 'SampleText',
    video: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4'
  },
  {
    key: 2,
    title: "Peaceful Dawn",
    video: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4'
  },
  {
    key: 3,
    title: "Sample Text",
    video: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4'
  }
]

const moreData = [
  {
    id: 0,
    key: 'PrivacyPolicy',
    icon: require('../assets/images/privacy-policy.png'),
    title: 'Privcy Policy'
  },
  {
    id: 1,
    key: 'AboutUs',
    icon: require('../assets/images/aboutus.png'),
    title: 'About Us'
  },
  {
    id: 2,
    key: 'TermsCondition',
    icon: require('../assets/images/terms-and-conditions.png'),
    title: 'Terms Condition'
  },
  {
    id: 3,
    key: 'Share',
    icon: require('../assets/images/share.png'),
    title: 'Share'
  },


]

const socilaLinkData = [
  {
    id: 0,
    key: 'Facebook',
    icon: require('../assets/images/facebook.png'),
    title: 'Facebook'
  },
  {
    id: 1,
    key: 'Twitter',
    icon: require('../assets/images/twitter.png'),
    title: 'Twitter'
  },
  {
    id: 2,
    key: 'Instagram',
    icon: require('../assets/images/instagram.png'),
    title: 'Instagram'
  },


]


exports.playlist = playlist;
exports.videoList = videoList;
exports.moreData = moreData;
exports.socilaLinkData = socilaLinkData;
