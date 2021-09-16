import React from 'react';
import { FlatList, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { Header } from '../../components';
import Constants from '../../constants';
import StaticData from '../../utils/staticData';
import styles from './aartiListStyles'

export default class AartiList extends React.Component {
  constructor(props) {
    super(props);
  }

  onPress  ()  {
    const { navigation: { navigate }} = this.props;
    navigate('Home')
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
        <Header leftIcon={Constants.Images.Back} showLeftIcon={true} title='Aartis' onPressLeft={()=>goBack()}  />
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
