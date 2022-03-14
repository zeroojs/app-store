/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-03-03 15:07:36
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-03-14 23:35:36
 */
export default defineAppConfig({
  pages: [
    'pages/game/index',
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    // custom: true, 
    color: "#7A7E83",
    selectedColor: "#288DFA",
    borderStyle: "black",
    backgroundColor: "#F5F6F8",
    list: [
      {
        pagePath: "pages/index/index",
        // iconPath: "assets/image/index-unselect.png",
        // selectedIconPath: "assets/image/index-selected.png",
        text: "Today",
      },
      {
        pagePath: "pages/game/index",
        // iconPath: "assets/image/my-unselect.png",
        // selectedIconPath: "assets/image/my-selected.png",
        text: "游戏",
      },
    ],
  }
})
