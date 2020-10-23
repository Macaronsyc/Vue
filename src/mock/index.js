import Mock from 'mockjs' // 引入mockjs
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

let data = [] // 用于接受生成数据的数组
let size = [
  '300x250', '250x250', '240x400', '336x280',
  '180x150', '720x300', '468x60', '234x60',
  '88x31', '120x90', '120x60', '120x240',
  '125x125', '728x90', '160x600', '120x600',
  '300x600'
] // 定义随机值
for(let i = 0; i < 10; i ++) { // 可自定义生成的个数
  let template = {

    'Name': Random.name(), // 生成姓名
    'Address': Random.province() // 生成地址
  }
  data.push(template)
}

Mock.mock('/data/index', 'get', data) // 根据数据模板生成模拟数据
Mock.mock('/data/index2', 'post', data)
