/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-03-03 15:44:08
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-03-04 00:55:51
 */
import { View, Text, Image, CoverView, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Component } from "react";
import banner from '../../../../assets/banner_card.png'
import './index.less';

export default class PageCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpand: false,
      style: '',
      lastStyle: '',
      isTap: false
    }
  }

  handleCardClick = (e) => {
    console.log(this)
    Taro.createSelectorQuery()
      // .in(PageCard)
      .select('#card')
      .boundingClientRect()
      .exec(([{ top, left }]) => {
        let style = `
          position: absolute;
          top:${top}px;
          left:${left}px;
          max-width: calc(100% - ${left * 2}px);
          `
        this.setState({ style })
        if (!this.state.isExpand) {
          this.setState({ lastStyle: style })
          let timer = setTimeout(() => {
            this.setState(state => {
              const isExpand = !state.isExpand
              return {
                isExpand,
                style: ''
              }
            })
            clearTimeout(timer)
          }, 50)
        } else {
          this.setState({ style: this.state.lastStyle })
          let timer = setTimeout(() => {
            this.setState(state => {
              const isExpand = !state.isExpand
              return {
                isExpand,
                style: ''
              }
            })
            clearTimeout(timer)
          }, 300)
        }
      })
  }

  handleCardTapStart = () => {
    this.setState({ isTap: true })
    this.handleCardClick()
  }
  handleCardTapEnd = () => {
    this.setState({ isTap: false })
  }
  render() {
    return (
      <CoverView
        id="card"
        style={this.state.style}
        className={[
          'page-card',
          this.state.isExpand ? ' is-expand' : '',
          this.state.isTap ? ' is-tap' : '',
        ]}
        // onClick={this.handleCardClick}
        onTouchStart={this.handleCardTapStart}
        onTouchEnd={this.handleCardTapEnd}
      >
        <View className="card-banner">
          <View className="card-banner-header">
            <Text className="mini-text ">高手绝招</Text>
            <View className="lg-text">来一次图片与文字的绝妙</View>
            <View className="lg-text">搭配</View>
          </View>
          <Image src={banner} mode='widthFix' className="card-banner-bg"></Image>
        </View>
        <View className="card-content app-container">
          <View className="card-content-item">
            You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
          </View>
          <View className="card-content-item">
            You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
          </View>
          <View className="card-content-item">
            You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
          </View>
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
      </CoverView>
    )
  }
}