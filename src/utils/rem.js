// 基准大小
const baseSize = 37.5
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 375
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'


}

function getBrowserInterfaceSize() {
  var pageWidth = window.innerWidth;
  var pageHeight = window.innerHeight;
  if (typeof pageWidth != "number") { //在标准模式下面
  if (document.compatMode == "CSS1Compat" ) {
  pageWidth = document.documentElement.clientWidth;
  pageHeight = document.documentElement.clientHeight;
  } else {
  pageWidth = document.body.clientWidth;
  pageHeight = window.body.clientHeight;
  }
  }
  document.getElementById('app').style.height=pageHeight+'px'
  /* return {
    windowWidth: pageWidth,
    windowHeight: pageHeight
  } */
}

// 初始化
setRem()
// getBrowserInterfaceSize()
// setBodyHeight()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
  getBrowserInterfaceSize()
}