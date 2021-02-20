// baseSize 要跟换算的基数一样
let baseSize = 50

function setFontSize() {
  // 页面宽度相对于 1920 缩放
  let scale = (document.documentElement.clientWidth <= 1080 ? 1080 : document.documentElement.clientWidth) / 1920
  // 设置页面根节点字体大小，最高放大比例为2）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setFontSize()

// 监听窗口变化
window.onresize = function () {
  setFontSize()
}