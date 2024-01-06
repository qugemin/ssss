<template>
  <li>
   <input type="checkbox" :checked="todo.status"/>
   <span>{{todo.title}}</span>
   <button>删除</button>
  </li>
</template>

<script>
export default {
   name:"MyItem",
   props:['todo'],

}
</script>
