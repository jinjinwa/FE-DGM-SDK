/*
 * @Author: superman
 * @Date: 2018-11-29 18:53:27
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-29 23:18:37
 *
 * 页面性能，performance
 *
 */
export default () => {
  if (!window.performance) {
    // 当前浏览器不支持
    console.log('你的浏览器不支持 performance 接口')
    return
}
  let timing = performance.timing
  return {
    // DNS解析时间
    dnst: timing.domainLookupEnd - timing.domainLookupStart || 0,
    //TCP建立时间
    tcpt: timing.connectEnd - timing.connectStart || 0,
    // 白屏时间
    wit: timing.responseStart - timing.navigationStart || 0,
    //dom渲染完成时间
    domt: timing.domContentLoadedEventEnd - timing.navigationStart || 0,
    //页面onload时间
    lodt: timing.loadEventEnd - timing.navigationStart || 0,
    // 页面准备时间
    radt: timing.fetchStart - timing.navigationStart || 0,
    // 页面重定向时间
    rdit: timing.redirectEnd - timing.redirectStart || 0,
    // unload时间
    uodt: timing.unloadEventEnd - timing.unloadEventStart || 0, 
    //request请求耗时
    reqt: timing.responseEnd - timing.requestStart || 0,
    //页面解析dom耗时
    andt: timing.domComplete - timing.domInteractive || 0
  }
}
