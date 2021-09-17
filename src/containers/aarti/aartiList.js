import React from 'react';
import { FlatList, View, TouchableOpacity, Text, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { Header } from '../../components';
import Constants from '../../constants';
import StaticData from '../../utils/staticData';

export default class AartiList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem({ item }) {
    const { navigation: { navigate } } = this.props;
    return (<TouchableOpacity
      onPress={() => navigate('AudioPlayer', { item })}
      style={styles.listItemView}>
      <Text>{item.title}</Text>
    </TouchableOpacity>)
  }

  render() {
    const { navigation: { navigate, goBack } } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header leftIcon={Constants.Images.Back} showLeftIcon={true} title='Aartis' onPressLeft={() => goBack()} />
        <FlatList
          data={StaticData.playlist}
          renderItem={(item) => this.renderItem(item, { navigate })}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.subContainer}
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
  subContainer: {
    top: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 3,
  },
  listItemView: {
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 6,
    backgroundColor: Constants.Colors.SECONDARY_COLOR,
    width: Constants.BaseStyle.DEVICE_WIDTH,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4,
    marginBottom: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4
  }
})