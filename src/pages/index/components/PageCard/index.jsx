/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-03-03 15:44:08
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-03-10 23:52:05
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
      isTap: false,
      addCloseExpand: false, // 是否增加 is-close-expand 类名
      containerStyle: '' // 外层 style
    }
  }

  handleCardClick = () => {
    Taro.createSelectorQuery()
      .select(`#card-${this.props.name}`)
      .boundingClientRect()
      .exec((res) => {
        const [{ top, left, height }] = res
        // position: absolute;
        let style = `
          position: fixed;
          top:${top}px;
          left:${left}px;
          max-width: calc(100% - ${left * 2}px);
          `
        // this.setState({ style })
        if (!this.state.isExpand) {
          this.setState({ lastStyle: style, style })
          let timer = setTimeout(() => {
            this.setState(state => {
              const isExpand = !state.isExpand
              return {
                isExpand,
                style: '',
                addCloseExpand: false,
                containerStyle: `height:${height}px`
              }
            })
            clearTimeout(timer)
          }, 50)
        } else {
          this.setState({ style: this.state.lastStyle, containerStyle: '', addCloseExpand: true })
          let timer = setTimeout(() => {
            this.setState(state => {
              const isExpand = !state.isExpand
              return {
                isExpand
              }
            })
            clearTimeout(timer)
          }, 300)
          const timer2 = setTimeout(() => {
            this.setState({ style: '' })
            clearTimeout(timer2)
          }, 1000)
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
      <View
        className={`page-card-continer${this.props.mode === 'free' ? ' is-free' : ''}`}
        style={this.state.containerStyle}
      >
        <CoverView
          id={`card-${this.props.name}`}
          style={this.state.style}
          className={[
            'page-card',
            this.state.isExpand ? ' is-expand' : '',
            this.state.isTap ? ' is-tap' : '',
            this.state.addCloseExpand ? 'is-close-expand' : ''
          ]}
          onTouchStart={this.handleCardTapStart}
          onTouchEnd={this.handleCardTapEnd}
        >
          {
            !this.props.children ?
            <>
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
            </>
            :
            this.props.children
          }
        </CoverView>
      </View>
    )
  }
}