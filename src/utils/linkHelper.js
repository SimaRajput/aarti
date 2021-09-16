import React from 'react';
import { Linking } from 'react-native';

export const openUrl = (url) => {
    Linking.canOpenURL(url)
        .then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        })
        .catch(err => {
            console.error('An error occurred', err)
        });
}

export const openFacebookUrl = (USERNAME) => {
    Linking.canOpenURL(USERNAME)
        .then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + USERNAME);
                return Linking.openURL(`https://facebook.com/${USERNAME}`);
            } else {
                Linking.openURL(`facebook://user?screen_name=${USERNAME}`).catch(error => {
                    Linking.openURL(`https://facebook.com/${USERNAME}`)
                });
            }
        })
        .catch(err => {
            console.error('An error occurred', err)
        });
}

export const openTwitterUrl = (USERNAME) => {
    Linking.canOpenURL(USERNAME)
        .then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + USERNAME);
                return Linking.openURL(`https://twitter.com/${USERNAME}`);
            } else {
                Linking.openURL(`twitter://user?screen_name=${USERNAME}`).catch(error => {
                    Linking.openURL(`https://twitter.com/${USERNAME}`)
                });
            }
        })
        .catch(err => {
            console.error('An error occurred', err)
        });
}



export const openInstagramUrl = (USERNAME) => {
    Linking.canOpenURL(USERNAME)
        .then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + USERNAME);
                return Linking.openURL(`http://instagram.com/_u/${USERNAME}/`);
            } else {
                return Linking.openURL(`instagram://user?username=${USERNAME}`).catch(error => {
                    Linking.openURL(`http://instagram.com/_u/${USERNAME}/`);
                });
            }
        })
        .catch(err => {
            console.error('An error occurred', USERNAME)
        });
}
