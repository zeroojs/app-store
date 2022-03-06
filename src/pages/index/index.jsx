/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-03-03 15:07:36
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-03-06 23:54:55
 */
import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import PageCard from './components/PageCard'
import banner from '../../assets/banner_card.png'
import './index.less'
// console.log(banner)

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='app-container today-page'>
        <View className="today-header">
          <Text className='mini-text'>3月3日 星期四</Text>
          <View className='lg-text'>Today</View>
        </View>
        <PageCard name='single-app' />
        <PageCard name='app-list'>
          <View className="card-banner">
            <View className="card-banner-header">
              <Text className="mini-text ">高手绝招</Text>
              <View className="lg-text">来一次图片与文字的绝妙</View>
              <View className="lg-text">搭配</View>
            </View>
            <Image src={banner} mode='widthFix' className="card-banner-bg"></Image>
          </View>
        </PageCard>
      </View>
    )
  }
}
