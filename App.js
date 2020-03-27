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

var BadgeData = require('./Badge.json');

var {width} = Dimensions.get('window');

var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;

export default class AHelloWorld extends Component {
  render() {
    return <View style={styles.container}>{this.renderAllBadge()}</View>;
  }

  renderAllBadge() {
    // 加子组件
    var allBadge = [];
    // 遍历json
    for (let index = 0; index < BadgeData.data.length; index++) {
      var badge = BadgeData.data[index];
      allBadge.push(
        <View key={index} style={styles.outViewStyle}>
          <Image source={{uri: badge.icon}} style={styles.imageStyle} />
          <Text style={styles.mainTitleStyle}>{badge.title}</Text>
        </View>,
      );
    }
    return allBadge;
  }
}

const styles = StyleSheet.create({
  container: {
    top: 44,
    backgroundColor: '#9999ff',
    //主轴的方向
    flexDirection: 'row',
    //换行
    flexWrap: 'wrap',
  },

  outViewStyle: {
    backgroundColor: 'red',
    //设置侧轴的对齐方式
    alignItems: 'center',
    width: boxW,
    height: boxW,
    marginLeft: vMargin,
    marginTop: hMargin,
  },

  imageStyle: {
    width: 80,
    height: 80,
  },

  mainTitleStyle: {},
});
