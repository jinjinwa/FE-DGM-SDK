/*
 * @Author: superman 
 * @Date: 2018-12-03 19:41:13 
 * @Last Modified by: superman
 * @Last Modified time: 2018-12-04 19:03:17
 * 
 * 统计资源性能，js，css，img
 */

 export default () => {
    if (!window.performance || !window.performance.getEntries) {
        // 当前浏览器不支持
        console.log('你的浏览器不支持 performance.getEntries 接口')
        return
    }
    let resource = performance.getEntriesByType('resource')

    // 忽略ajax请求和fetch
    resource.map(item => {
        
    })
    

 }