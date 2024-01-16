<template>
   <ul>
  <MyItem v-for="tooobj in todo" :key="tooobj.id" :todo="tooobj">
  </MyItem>
   </ul>
  
</template>

<script>
import MyItem from './MyItem.vue';
export default {
   name:"MyList",
   data(){
      return{
         ss:"",
         dd:"",
         ddd:"",
      }
   },
   components:{MyItem},
     props:['todo'],
   }
</script>

