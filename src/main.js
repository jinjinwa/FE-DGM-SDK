import perforPage from "./modules/page"
import resource from './modules/resource'

class monitoring {
  constructor(customOps) {
    // 初始化参数
    let defaultOps = {
      appId:'', // 应用id
      apiUrl: '', // 上报服务器地址
      delayTime: 300, // 延迟上报时间
      isSpa: true, // 是否是apa应用
      isReportPage: true // 是否上报页面性能数据
    }
    this.ops = Object.assign(defaultOps, customOps)

    // 上报参数
    this.exportParams = {
      
      performance:{}
    }

    // 页面onload事件
    addEventListener(
      "load",
      () => {
        setTimeout(() => {
          this._report()
        }, this.ops.delayTime)
      },
      false
    )

    // hash路由切换
    addEventListener('hashchange',() =>{
      // pv+1,曝光上报
      console.log('路由切换')
  },false)
  
  }

  _report(data){
    // 暂时只打印出来
      console.log(data)
  }

}

export default monitoring
