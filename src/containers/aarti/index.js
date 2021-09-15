import React from 'react';
import { FlatList, View, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Header } from '../../components';
import Constants from '../../constants';
import StaticData from '../../utils/staticData';

export default class Aarti extends React.Component {

  renderItem({ item }) {
    return <TouchableOpacity style={styles.listItemView}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header leftIcon={Constants.Images.More} showLeftIcon={true} title='Aartis' />
        <FlatList
          data={StaticData.playlist}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.key}
        // extraData={selectedId}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItemView: {
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 10,
    backgroundColor: Constants.Colors.SECONDARY_COLOR,
    width: Constants.BaseStyle.DEVICE_WIDTH,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4,
    marginBottom: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4
  }
})