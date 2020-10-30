<template>
  <div id="app">
<!--    <div class="triangle"></div>-->
<!--    <div class="shan"></div>-->
<!--    <div class="diamond"></div>-->
    <hello-world v-for="item in items" :name="item.Name" :address="item.Address" :birth="item.Birth" :num="item.Number" @refresh="initialize"></hello-world>
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
      let start = 54
      for(let i = 0; i < 4; i ++) { // 可自定义生成的个数
        let template = {
          'Name': Random.name(), // 生成姓名
          'Address': Random.province(), // 生成地址
          'Birth': Random.date(),
          'Number': 1
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

.triangle {
  width: 0px;
  height: 0px;
  border-top: transparent solid 100px;
  border-right: transparent solid 100px;
  border-left: red solid 100px;
  border-bottom: transparent solid 100px;


}

.shan {
  width: 0px;
  height: 0px;
  border-top: transparent solid 100px;
  border-right: transparent solid 100px;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left: red solid 100px;
  border-bottom: red solid 100px;
  transform: rotate(-45deg);

}

.diamond {
  width: 100px;
  height: 100px;
  background-color: red;
  /*transform: skew(45deg, -45deg);*/
  /*transform: translate(300px, 300px);*/
}
</style>
