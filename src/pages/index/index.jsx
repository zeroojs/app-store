/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-03-03 15:07:36
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-03-11 00:32:01
 */
import { Component } from 'react'
import { View, Text, Image, Button } from '@tarojs/components'
import PageCard from './components/PageCard'
import banner from '../../assets/banner_card.png'
import { AppList } from '../../components/AppList'
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
        <PageCard name='app-list' mode='free'>
          <>
            <View className="card-banner">
              <View className="card-banner-header">
                <Text className="mini-text ">专题</Text>
                <View className="lg-text">时下畅销游戏</View>
              </View>
              {/* <Image src={banner} mode='widthFix' className="card-banner-bg"></Image> */}
            </View>
            <View className="card-content app-container">
              <AppList />
            </View>
            <View className="card-download">
              <View className="app-avatar"></View>
              <View className="app-name lg-text">黄油相机 - Plog记录日常</View>
              <View className="app-descripttion mini-text">超人气Plog创作工具</View>
              <Button className="app-download-btn">获取</Button>
              <View className="app-download-tips mini-text">App内购买</View>
            </View>
            <View className="card-share">
              <Button className="card-share-btn">分享</Button>
            </View>
          </>
        </PageCard>
      </View>
    )
  }
}
