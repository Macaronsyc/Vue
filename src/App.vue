<template>
  <div id="app">
    <hello-world v-for="item in items" :name="item.Name" :address="item.Address" :birth="item.Birth" @refresh="initialize"></hello-world>
  </div>

</template>


<script>
import Store from './store'
import axios from 'axios'
import HelloWorld from "./components/HelloWorld";
import Mock from 'mockjs' // 引入mockjs

export default {
  components: {
    HelloWorld
  },
  data:function(){
    return {
      title:"This is a Todolist",
      items:[],
      newItem:""
    }
  },
  watch:{
    items:{
      handler:function(items){
        Store.save(items)
      },
      deep:true
    }
  },
  methods:{
    toggleFinish:function(item){
      item.isFinished = !item.isFinished
    },
    addNew:function(){
      this.items.push({
        label:this.newItem,
        "isFinished":false
      })
      this.newItem=""
    },
    temp:function(){
      axios.get('/data/index').then( res => {
        this.items = res.data.concat(this.items)
      })
    },
    initialize:function(){
      const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

      let data = [] // 用于接受生成数据的数组
       // 定义随机值
      for(let i = 0; i < 4; i ++) { // 可自定义生成的个数
        let template = {
          'Name': Random.name(), // 生成姓名
          'Address': Random.province(), // 生成地址
          'Birth': Random.date()
        }
        data.push(template)
      }
      this.items = this.items.concat(data)
      console.log("Initialized")
    }
  },
  mounted(){
    this.initialize()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 800px;
  margin: 0 auto;
}
</style>
