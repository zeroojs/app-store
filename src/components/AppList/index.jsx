/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-03-10 23:57:13
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-03-11 00:32:57
 */
import { ScrollView, View, Text, Button } from '@tarojs/components'
import './index.less'


export const AppListItem = () => {
  return (
    <View className='app-list-item'>
      <View className='app-list-item__header'></View>
      <View className='app-list-item__main'>
        <View className='app-list-item__body'>
          <Text className='app-list-item__title'>QQ</Text>
          <Text className='app-list-item__desc mini-text'>社交</Text>
        </View>
        <View className='app-list-item__footer'>
          <Button>获取</Button>
        </View>
      </View>
    </View>
  )
}

export const AppList = () => {
  return (
    <ScrollView>
      <AppListItem />
      <AppListItem />
      <AppListItem />
      <AppListItem />
      <AppListItem />
    </ScrollView>
  )
}