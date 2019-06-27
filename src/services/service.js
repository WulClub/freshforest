import xhr from './xhr/'
/**
 * 对应后端的 /api/* 所有 API
 */
 class Service{
     //登录
   login(params,_this){
    //  this.isLoading()
     return xhr(params,'post','/api/v1/signin')
   }
   
   regist(params,_this){
    //  this.isLoading()
    console.log("aaaaaa")
     return xhr(params,'post','/api/v1/signup')
   }
 }

 export default new Service()
