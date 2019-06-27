<template>
<div class="ub bc-bg" style="font-size:18px;" >
<div class="ub-f1 "></div>
            <div class="" style="width:18em;" tabindex="0" data-control="PAGE" id="Page">
             
            <div class="bc-bg ub ub-ver ub-ac ub-con" data-control="FLEXBOXVER" id="ContentFlexVer">
                <div class="uinn ub ub-ac ub-pc">
                    <div class="logo ub-img umhw1"></div>
                </div>
                <div class="uinn ub ub-ac ub-pc ub-ver">
                    <div class="ulev0 t-blu addfont umar-t">
                        阿斯頓實打實撒
                    </div>
                     
                </div>
                <div class="ub ub-ver ub-f1 ub-fh">
                    <form method="get" >
                        <div class="uba b-gra umar-a uc-a1 c-wh">
                            <div class="ub ub-ac">
                                <div class="umhw resuser ub-img umar-l"></div>
                                <div class="ub-f1 uinput uinn">
                                    <input placeholder="手机/邮箱/用户名"   v-model="name" value="" type="text" class="uc-a1">
                                </div>
                            </div>
                        </div>
                        <div class="uba b-gra umar-a uc-a1 c-wh">
                            <div class="ub ub-ac">
                                <div class="umhw respwd ub-img umar-l"></div>
                                <div class="ub-f1 uinput uinn">
                                    <input placeholder="密码"   v-model="pass" value="" type="password" class="uc-a1">
                                </div>
                            </div>
                        </div>
                        <div class="ub umar-a ub-ac">
                            <div class="checkbox umar-r">
                                <input type="checkbox" class="uabs ub-con">
                            </div>
                            <div class="lv_title ub-f1 marg-l ub ub-ver ut-m line1">
                                记住用户名
                            </div>
                            <div class="ub t-blu umar-r ulev-1">
                                忘记密码
                            </div>
                        </div>
                        <div class="uin uinn">
                            <div class="button ub ub-ac bc-text-head ub-pc bc-btn uc-a1"   :class="{'submit-sure':isSure}" @click="submit">
                                登　录
                            </div>
                        </div>
                        <div class="umar-a ub t-blu">
                            <div class="ub-f1 ulev-1 uinn3">
                                立即注册
                            </div>
                            <div class="ulev-1 uinn3">
                                无账号快捷登录
                            </div>
                        </div>
                        <button type="submit"class="uinvisible"></button>
                    </form>
                </div>
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
        
        name: '',
        pass: '',
        clear: false,
        isSure: false,
        headerTitle:'',
        logoSrc:''
      }
    },
    created:function(){
      
    },
    methods: {
      onEnter: function() {
        this.submit()
      },
      del: function() {
        this.name = null
      },
      submit: function() {
        if (!this.isSure) return false
        //登录
        merchantService
        .login({name:this.name,pass:this.pass},this.$parent)
        .then((data) => {
            console.log(data)
          //window.location.href = '/index.html'
        })
      },
      //获取焦点，如果有值，则按钮变色
      focus(){
        if(this.name){
          this.isSure = true
        }
      }
    },
    watch: {
        //监听输入框的值变化
        'name': {
            handler: function(val, oldVal) {
                if (val) {
                    this.$data.clear = true
                    if (this.$data.pass) {
                        this.$data.isSure = true
                    } else {
                        this.$data.isSure = false
                    }
                } else {
                    this.$data.clear = false
                    this.$data.isSure = false
                }
            },
            deep: true
        },
        'pass': {
            handler: function(val, oldVal) {
                if (val) {
                    if (this.$data.name) {
                        this.$data.isSure = true
                    } else {
                        this.$data.isSure = false
                    }
                } else {
                    this.$data.isSure = false
                }
            }
        }
    }
}

</script>
 
 <style type="text/css" scoped src="./login.css"></style>
