import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';

var BadgeData = require('./Badge.json');
var width = Dimensions.get('window');

var {width, height} = Dimensions.get('window');

var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;

export default class qqLogin extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* 头像 */}
        <Image source={{uri: 'kobe1'}} style={styles.iconStyle} />
        {/* 账号密码 */}
        <TextInput
          placeholder={'input username'}
          style={styles.textInpoutStyle}
        />
        <TextInput
          placeholder={'input password'}
          password={true}
          style={styles.textInpoutStyle}
        />
        {/* 登录 */}
        <View style={styles.loginButtonStyle}>
          <Text style={{color: 'white'}}>登录</Text>
        </View>
        {/* 设置 */}
        <View style={styles.settingStyle}>
          <Text>无法登录</Text>
          <Text>新用户</Text>
        </View>
        {/* 其他的登录方式 */}
        <View style={styles.otherLoginStyle}>
          <Text>其他登录方式</Text>
          <Image source={{uri: 'kobe2'}} style={styles.otherImageStyle} />
          <Image source={{uri: 'kobe3'}} style={styles.otherImageStyle} />
          <Image source={{uri: 'kobe4'}} style={styles.otherImageStyle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#dddddd',
  },
  iconStyle: {
    marginTop: 50,
    marginBottom: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: 'red',
  },
  textInpoutStyle: {
    height: 40,
    width: width * 0.8,
    backgroundColor: 'white',
    marginBottom: 1,
    textAlign: 'center',
  },
  loginButtonStyle: {
    height: 35,
    width: width * 0.8,
    backgroundColor: 'skyblue',
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,,
  },
  settingStyle: {
    flexDirection: 'row',
    // backgroundColor:'red',
    width: width * 0.8,
    justifyContent: 'space-between',
  },
  otherLoginStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 20,
  },

  otherImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 8,
  },
});

module.exports = qqLogin;
