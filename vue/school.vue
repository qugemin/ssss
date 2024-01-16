<template>
    <div class="demo">
        <h2>学校的名称：{{schoolName}}</h2>
        <h2>学校的名称：{{address}}</h2>
        <button @click="showName">显示学校名称</button>
    </div>
</template>
<script>
export default {
    name:'school',
    data(){
        return {
            schoolName:"小学",
            address:"北京首都",
        }
    },
    methods: {
        showName(){
            alert("显示")
        }
    },

}
</script>
<style >
   .demo{
     background-color:aqua;
   }
</style>

