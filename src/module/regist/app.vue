<template>
<div class="ub bc-bg" style="font-size:18px;" id="app">
<div class="ub-f1 "></div>
            <div class="" style="width:18em;" tabindex="0" data-control="PAGE" id="Page">

                <div class="ub ub-ver ub-ac ub-con bc-bg" data-control="FLEXBOXVER" id="ContentFlexVer">
                    <div class="ub ub-ver  ub-fh uinn-4a">
                        <div class="uinn-a1">
                            <div class="uba b-gra3 uc-a1 c-wh ub uinn-a7 ub-ac">
                                <div class="ulev-app1 umw4">
                                    邮箱
                                </div>
                                <div class="ub ub-ac umh5 ub-f1">
                                    <div class="uinput ub ub-f1">
                                        <input placeholder="example@qq.com"  v-model='email' type="text" class="ub-f1">
                                    </div>
                                </div>
                            </div>
                            <div class="uba b-gra3 uc-a1 c-wh ub uinn-a7 ub-ac umar-at1">
                                <div class="ulev-app1 umw4">
                                    用户名
                                </div>
                                <div class="ub ub-ac umh5 ub-f1">
                                    <div class="uinput ub ub-f1">
                                        <input placeholder="Jack" type="text" v-model='loginname' class="ub-f1">
                                    </div>
                                </div>
                            </div>
                            <div class="uba b-gra3 uc-a1 c-wh ub uinn-a7 ub-ac umar-at1">
                                <div class="ulev-app1 umw4">
                                    密码
                                </div>
                                <div class="ub ub-ac umh5 ub-f1">
                                    <div class="uinput ub ub-f1">
                                        <input placeholder="请输入密码"  v-model='pass' type="password" class="ub-f1">
                                    </div>
                                </div>
                            </div>
                            <div class="uba b-gra3 uc-a1 c-wh ub uinn-a7 ub-ac umar-at1">
                                <div class="ulev-app1 umw4">
                                    确认密码
                                </div>
                                <div class="ub ub-ac umh5 ub-f1">
                                    <div class="uinput ub ub-f1">
                                        <input placeholder="请重复输入密码"  v-model='re_pass' type="password" class="ub-f1">
                                    </div>
                                </div>
                            </div>
                            <div class="ub ub-ver">
                                <div class="ub ub-pe uinn-a6 ulev-4">
                                    <div class="sc-text">
                                        我同意
                                    </div>
                                    <div class="sc-text-active">
                                        用户服务协议
                                    </div>
                                </div>
                                <div class="uinn-at1">
                                    <div class="button ub ub-ac bc-text-head ub-pc bc-btn"   @click="submit" >
                                        注册
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uinn-4b"></div>
                </div>
            </div>
            <div class="ub-f1 "></div>

</div>           
</template>

<script type="text/javascript">
import merchantService from '../../services/service'

export default {
   data() {
       return {
        loginname: '',
        email:'',
        pass: '',
        re_pass:'',
        clear: false,
        isSure: false,
        headerTitle: '',
        logoSrc: ''
       }
    },
    methods: {
        onEnter: function () {
            this.submit()
        }, 
        submit: function () {
            console.log('regist start submit')
           // if (!this.isSure) return false;
            //登录
            var registData={loginname:this.loginname,email:this.email, pass:this.pass,re_pass:this.re_pass};
                console.log(registData)
            merchantService.regist(registData, this.$parent)
                .then((data) => {
                    console.log(data)
                     
                })
                console.log('regist end submit')
        } 
    }
}

</script>


 <style type="text/css" scoped src="./regist.css"></style>