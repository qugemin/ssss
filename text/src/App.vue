<template>
  <div>
    <h1 v-text="messgag" ref="title" ></h1>
    <button ref="btn" @click="ShowDoM">点击</button>
    <school address="上海" :age="20+99"/>
    <school address="北京" :age="20+99"/>
    <school address="厦门" :age="19+2" />
    <MyHeader :receive="receive"/>
    <MyList :todo="todo"/>
    <MyFooter/>
    
  </div>
</template>

<script>
    import student from './components/lian/student.vue'
    import school from './components/lian/shcool.vue'
  import MyHeader from './components/MyHeader.vue'
  import MyList from './components/MyList.vue'
  import MyFooter from './components/MyFooter.vue'
  export default {
   name:"App",
   components:{
      school,
      MyHeader,
      MyList,
      MyFooter,
      student,
         },
   data(){
    return {
      msg:"你好",
      messgag:"aa",
      todo:[
           {id:'1',title:"干饭",status:false},
           {id:'2',title:"游戏",status:true},
           {id:'3',title:"游泳",status:false},
         ],
         
      }
    },
   methods:{
    ShowDoM(){
       console.log(this.$refs)
    },
    receive(todoobj){
      this.todo.push(todoobj);
    }
   }
  }//refs收集元素
</script>