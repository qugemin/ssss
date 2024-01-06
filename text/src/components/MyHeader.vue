<template>
  <div>
    <input ty="text" @keyup.enter="add"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
   name:"MyHeader",
   props:['receive'],
   methods:{
      add(e){
         const todoobj={id:nanoid(),title:e.target.value,status:false}
         console.log(todoobj)
         this.receive(todoobj)
      }
   },

   
}
</script>

<style>

</style>