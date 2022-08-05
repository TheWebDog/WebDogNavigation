// window.onload和DOMContentLoaded的区别
// 1、当 onload 事件触发时，页面上所有的DOM，样式表，脚本，图片，flash都已经加载完成了。
// 2、当 DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash。

document.addEventListener('DOMContentLoaded', function () { // dom加载完成
  
  var modeSwitch = document.querySelector('.mode-switch') //获取第一个mode-switch元素

  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark') // 返回html dom中的root根节点 即<html>
    modeSwitch.classList.toggle('active')
    // //添加类：select
    // test.classList.add("select")

    // //删除类：select
    // test.classList.remove("select")

    // //确定是否包含给定的类：select
    // test.classList.contains("select");

    // //切换类：select，存在删除，不存在，就添加;
    // test.classList.toggle("select")

    // //替换类：新类newSelect替换老类select
    // div.classList.replace("select","newSelect")
  })










//   var listView = document.querySelector('.list-view')
//   var gridView = document.querySelector('.grid-view')
//   var projectsList = document.querySelector('.project-boxes')

//   listView.addEventListener('click', function () {
//     gridView.classList.remove('active')
//     listView.classList.add('active')
//     projectsList.classList.remove('jsGridView')
//     projectsList.classList.add('jsListView')
//   })

//   gridView.addEventListener('click', function () {
//     gridView.classList.add('active')
//     listView.classList.remove('active')
//     projectsList.classList.remove('jsListView')
//     projectsList.classList.add('jsGridView')
//   })

//   document
//     .querySelector('.messages-btn')
//     .addEventListener('click', function () {
//       document.querySelector('.messages-section').classList.add('show')
//     })

//   document
//     .querySelector('.messages-close')
//     .addEventListener('click', function () {
//       document.querySelector('.messages-section').classList.remove('show')
//     })
})
