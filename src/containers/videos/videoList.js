import React from 'react';
import { FlatList, View, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Header } from '../../components';
import Constants from '../../constants';
import StaticData from '../../utils/staticData';
import styles from './styles';

export default class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem({ item }) {
    const { navigation: { navigate } } = this.props;
    return (<TouchableOpacity
      onPress={() => navigate('VideoPlayer', { item })}
      style={styles.listItemView}>
      <Text style={{ fontSize: 16 }}>{item.title}</Text>
    </TouchableOpacity>)
  }

  render() {
    const { navigation: { navigate, goBack } } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header leftIcon={Constants.Images.Back} showLeftIcon={true} title='Videos' onPressLeft={() => goBack()} />
        <FlatList
          data={StaticData.videoList}
          renderItem={(item) => this.renderItem(item, { navigate })}
          keyExtractor={(item) => item.key}
        // extraData={selectedId}
        />
      </SafeAreaView>
    )
  }
}