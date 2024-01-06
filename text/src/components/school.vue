<template>
    <div class="demo">
        <h2>学校的名称：{{schoolName| mySlice}}</h2>
        <h2>学校的地址：{{address}}</h2>
        <h2>学校的年龄：{{schoolage}}</h2>
        <button @click="showName">显示学校名称</button>
        <button @click="updateage">修改年龄</button>
    </div>
</template>
<script>
export default {
    name:'schoolComponent',
    data(){
        return {
            schoolName:"小学",
            schoolage:this.age,
        }
    },
/*     props:['address','age'],//简单接收 */
  /*   props:{
        address:String,
        age:Number,
    },//处理接收 */
    props:{
          address:{
            type:String,
            required:true,
          },
          age:{
            type:Number,
            default:99,
          }
    },//完全限制数据
    methods: {
        showName(){
            this.hello();
        },
        updateage() {
            this.schoolage++;
        },
    },

}//scoped 局部的样式限定
</script>
<style scoped>
   .demo{
     background-color:aqua;
   }
</style>

