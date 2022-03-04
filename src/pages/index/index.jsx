/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-03-03 15:07:36
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-03-03 16:02:31
 */
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import PageCard from './components/PageCard'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='app-container'>
        <View className="today-header">
          <Text className='mini-text'>3月3日 星期四</Text>
          <View className='lg-text'>Today</View>
        </View>
        <PageCard />
      </View>
    )
  }
}
