/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-03-03 15:07:36
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-03-14 23:50:09
 */
import { Component } from 'react'
import { View } from '@tarojs/components'
import { GameSwiper } from '../../components/GameSwiper'

export default class Game extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='game'>
        <View className="app-container game-header">
          <View className='lg-text'>Today</View>
        </View>
        <GameSwiper />
      </View>
    )
  }
}
