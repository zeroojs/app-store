/*
 * @Descripttion: 轮播组件
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-03-14 23:38:48
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-03-14 23:55:51
 */
import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components'
import './index.less'

export function GameSwiper() {
  return (
    <Swiper
      className='game-swiper'
      indicatorColor='#999'
      indicatorActiveColor='#333'
      autoplay
    >
      <SwiperItem>
        <View className='game-swiper-item'>
          <View className='game-swiper-item__header'>
            <View><Text>重磅更新</Text></View>
            <View><Text>一念逍遥</Text></View>
            <View><Text>花朝春节活动“花月永恒”开启</Text></View>
          </View>
          <View className='game-swiper-item__body'>
            {/* <Image src={banner} /> */}
          </View>
        </View>
      </SwiperItem>
      <SwiperItem>
        2
      </SwiperItem>
    </Swiper>
  )
}