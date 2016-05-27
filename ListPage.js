import React, { Component } from 'react';

import {
  View,
  Text,
  Navigator,
  TouchableOpacity,  
} from 'react-native';

class ListPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={
            this.renderScene.bind(this)
          }
          navigationBar={
            <Navigator.NavigationBar
              style={
                {backgroundColor: 'orange'}
              }
              routeMapper={NavigationBarRouteMapper} />
          } 
      />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <TouchableOpacity
            onPress={this.navigateNext.bind(this)}>
          <Text>
            這裡是 list page, 點我到下一頁
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  navigateNext() {
    this.props.navigator.push({
      id: 'DetailPage'
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={
        {flex: 1, justifyContent: 'center'}
      }>
        <Text>
          you are at List page 
        </Text>
      </TouchableOpacity>
    );
  }
};
module.exports = ListPage;