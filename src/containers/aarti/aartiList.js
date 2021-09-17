import React from 'react';
import { FlatList, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { Header } from '../../components';
import Constants from '../../constants';
import StaticData from '../../utils/staticData';
import styles from './styles'

export default class AartiList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem({ item }) {
    const { navigation: { navigate } } = this.props;
    return (<TouchableOpacity
      onPress={() => navigate('AudioPlayer', { item })}
      style={styles.listItemView}>
      <Text style={{ fontSize: 16 }}>{item.title}</Text>
    </TouchableOpacity>)
  }

  render() {
    const { navigation: { navigate, goBack } } = this.props;
    const  title  = this?.props?.route?.params?.title;
    return (
      <SafeAreaView style={styles.container}>
        <Header leftIcon={Constants.Images.Back} showLeftIcon={true} title={title} onPressLeft={() => goBack()} />
        <FlatList
          data={title === 'Aartis' ? StaticData.playlist : StaticData.meditationlist}
          renderItem={(item) => this.renderItem(item, { navigate })}
          keyExtractor={(item) => item.id}
        // extraData={selectedId}
        />
      </SafeAreaView>
    )
  }
}
