import React from 'react';
import Constants from '../constants';

const playlist = [
  {
    key: 1,
    image: Constants.Images.soundImage,
    title: 'title1',
    text: 'title1Text',
  },
  {
    key: 2,
    image: Constants.Images.soundImage,
    title: 'title2',
    text: 'title2Text',
  },
  {
    key: 3,
    image: Constants.Images.soundImage2,
    title: 'title3',
    text: 'title3Text',
  }
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
    key: 'Share',
    icon: require('../assets/images/share.png'),
    title: 'Share'
  }

]


exports.playlist = playlist;
exports.videoList = videoList;
exports.moreData = moreData;