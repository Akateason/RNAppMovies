import React, {Component} from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
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

export default class qqLogin extends Component {
  render() {
    return  (
        <View style={styles.container}>
            {/* 头像 */}
            <Image source={require('kobe1')} />
            {/* 账号密码 */}
            <TextInput />
            <TextInput />
            {/* 登录 */}
            <View>
                <Text>登录</Text>
            </View>
            {/* 设置 */}
            <View>
                <Text>无法登录</Text>
                <Text>新用户</Text>
            </View>
            {/* 其他的登录方式 */}
            <View>
                <Text>其他登录方式</Text>
                <Image />
                <Image />
                <Image />
            </View>

        </View>;
    )
    
    
  }
}
  

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#dddddd',
  },


  
});


module.exports = qqLogin;