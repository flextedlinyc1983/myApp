import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    
   /*  * 讓 splash 畫面，一秒後直接換成 ListPage 的畫面。
     * replace(route) 表示用一個新的 route 替換當前的場景。
   */   
    
    setTimeout(() => {
      navigator.replace({
        id: 'ListPage',
      });
    }, 2000);
  }
  render() {
    return (
      <View style={styles.splashBg}>
        <Text style={styles.welcomeText}>React Nav Practice</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeText: {
    color: '#FFF'
  },
  splashBg: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

module.exports = SplashPage;