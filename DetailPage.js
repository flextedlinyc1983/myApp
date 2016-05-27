import React, { Component } from 'react';

import {
  View,
  Text,
  Navigator,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

class DetailPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar
              style={
                {backgroundColor: '#246dd5'}
              }
              routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {    
    // ToastAndroid.show(this.props.name, ToastAndroid.SHORT);
    // ToastAndroid.show(route.animal, ToastAndroid.SHORT);
    // ToastAndroid.show('hello', ToastAndroid.SHORT);
    // console.log(route.passProps);
    return (
      <View style={
        {
          flex: 1,
          alignItems: 'center',
          justifyContent:'center'
        }
      }>
          <Text>DetailPage here</Text>
      </View>
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    ToastAndroid.show('DetailPage index:' + index, ToastAndroid.SHORT);
    return (
      <TouchableOpacity style={
        {flex: 1, justifyContent: 'center'}
        }
          onPress={() => navigator.parentNavigator.pop()}>
        <Text>
          返回
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={
        {
          flex: 1,
          justifyContent: 'center'
        }
      }>
        <Text>
          DetailPage
        </Text>
      </TouchableOpacity>
    );
  }
};


module.exports = DetailPage;