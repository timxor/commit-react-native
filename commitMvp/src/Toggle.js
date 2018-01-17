import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';

const testIcon = require('./images/testIcon.png');

/**
    keep the state of the button when pressed.
**/
class MainApp extends Component {
  state = {
    liked: false,
  };

  _onPressBtn = () => {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const likedStyles = this.state.liked ? styles.liked : null;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this._onPressBtn}
          style={styles.btn}
          underlayColor="#fefefe"
        >

        <Image source={testIcon} style={[styles.icon, likedStyles]} />
        </TouchableHighlight>
        <Text style={styles.text}>Do you like this app?</Text>
        </View>
    );
  }
}

/**
    Styles
**/
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  btn: {
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    width: 180,
    height: 180,
    tintColor: '#f1f1f1',
  },
  liked: {
    tintColor: '#e74c3c',
  },
  text: {
    marginTop:20,
  },
});

/**
    Export
**/
export default MainApp;
