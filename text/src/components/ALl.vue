<template>
  
</template>

<script>
export default {
    methods:{
        cunru(){
            sessionStorage.setItem('LoginUser',JSON.stringify(this.postlistuser));
            localStorage.setItem('LoginUser',JSON.stringify(this.postlistuser));//两种存入浏览器的方法
           const reslut=localStorage.getItem("LoginUser");//读取数据
            JSON.parse(reslut)//读服务器上的数据
        }
    }
}
</script>

<style>

</style>