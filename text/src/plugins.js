export default{
    install(Vue){
        Vue.filter('mySlice',function(value){
            return value.slice(0,1)
        })
        Vue.prototype.hello=()=>{alert("确定")}
    }
  
}//插件