import React, {Component} from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaViewBase,
  Dimensions,
} from 'react-native';

var QQLogin = require('./qqLogin');

var BadgeData = require('./Badge.json');

var {width} = Dimensions.get('window');

var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;

export default class AHelloWorld extends Component {
  render() {
    return <QQLogin />;
  }
}
