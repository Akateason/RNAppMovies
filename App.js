import React, {Component} from 'react';
import {Image, FlatList, StyleSheet, Text, View} from 'react-native';

export default class AHelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello</Text>

        <View style={styles.innerViewStyle}>
          <Text>777777abc</Text>
        </View>
        <View style={styles.innerViewStyle2}>
          <Text>33333as</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    top: 333,
    width: 300,
    height: 100,
    backgroundColor: 'red',
    // 改变主轴方向
    flexDirection: 'row',
  },
  innerViewStyle: {
    backgroundColor: 'green',
    width: 100,
  },
  innerViewStyle2: {
    backgroundColor: 'yellow',
    width: 100,
  },
});
