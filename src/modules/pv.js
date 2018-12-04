/*
 * @Author: superman 
 * @Date: 2018-11-30 00:42:37 
 * @Last Modified by:   mikey.zhaopeng 
 * @Last Modified time: 2018-11-30 00:42:37 
 */


//  页面load, 如果页面的document.visibilityState属性为可见，则统计一次PV
// 如果document.visibilityState状态为不可见，则不统计PV，直到状态切换为可见
// 如果可见属性从隐藏转向可见，且距离上一次可见已经间隔足够长的时间，则统计PV
// 对于SPA通过侦听hash或者URL改变上报PV
// 下拉刷新、滚屏加载等，需要在程序中手动打点上报