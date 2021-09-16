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
exports.moreData = moreData;
exports.socilaLinkData = socilaLinkData;