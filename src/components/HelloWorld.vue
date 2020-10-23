<template>
  <div class="hello" @click="$emit('refresh')">
    <div class="box">
<!--      <h3>Name: {{name}}</h3>-->
<!--      <h4>Citizen: {{address}}</h4>-->
<!--      <h5>Birth: {{birth}}</h5>-->
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'

    }
  },
  props: {
    name: "",
    address: "",
    birth: ""

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 166px;
  height: 166px;
  background-color: lightseagreen;
  margin: 8px;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  transition: all 0.1s;
  font-family: Helvetica;
  box-shadow: 5px 5px 2px #888888;
}

.hello:hover{
  background-color: lightpink;
  cursor: pointer;
  transform: translate(0,-8px);
  box-shadow: 10px 10px 2px #888888;
}

* {
  margin: 0;
  padding: 0;
}

.box {
  /*margin: 0 auto;*/
}
</style>
