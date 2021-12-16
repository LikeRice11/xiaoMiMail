// 这是注册页的js文件
class Register{

      constructor(){
        //  获取手机号 密码 确认密码 邮箱
         this.phoneNumber=this.$e('.mi-form .input-phone')
         this.password=this.$e('.mi-form .input-psd')
         this.passwordAgain = this.$e('.mi-form .input-cpsd')
         this.email = this.$e('.mi-form .eml')
         
         this.Allkeyup()
         this.BlurAndCancel()
         this.$e('.mi-form .input-sub').addEventListener('click',this.reg.bind(this))


      }
      //  按下回车时的方法
      Allkeyup(){
        this.phoneNumber.addEventListener('keyup',this.phoneNumberOnkey.bind(this))
        this.password.addEventListener('keyup',this.passwordOnkey.bind(this))
        this.passwordAgain.addEventListener('keyup',this.surepas.bind(this))
        this.email.addEventListener('keyup',this.emailOnkey.bind(this))
      }

    // 手机号按下回车时的方法
      phoneNumberOnkey(e){
            
        if(e.keyCode == 13)  this.phoneWay()

      }


      // 密码按下回车时方法
      passwordOnkey(e){

        if(e.keyCode == 13)   this.passwordWay()
      }
  

      // 再次确认密码按下回车时
      surepas(e){
        if(e.keyCode == 13)  this.surepasWay()
      }



      // 验证邮箱的方法
      emailOnkey(e){
        if(e.keyCode == 13)    this.emailWay()
      }




      // 如果正确时创建旁边绿色的span
   trueWay(num){
    // 先判断旁边是否有绿色圆点  如果有则停止再新建span
    let span = this.$e(`.mi-form p:nth-child(${num}) span`)
    if(span) return

    let real = this.createEle('span')
    real.innerHTML = '●'
    real.className = 'sure'
    this.$e(`.mi-form p:nth-child(${num})`).appendChild(real)
    
  }
   
  // 失去焦点时取消旁边小按钮
    BlurAndCancel(){
      this.phoneNumber.addEventListener('blur',this.phoneNumbeBlur.bind(this))
      this.password.addEventListener('blur',this.passworBlur.bind(this))
      this.passwordAgain.addEventListener('blur',this.surepaBlur.bind(this))
      this.email.addEventListener('blur',this.emaiBlur.bind(this))

    }
    // 失去焦点时 删除旁边的span
    phoneNumbeBlur(){
      if(!this.phoneNumber.value)  this.delSpan(1)
      this.phoneWay()
    }
    passworBlur(){
      if(!this.password.value)  this.delSpan(2)

      this.passwordWay()
    }
    
    surepaBlur(){
      if(!this.passwordAgain.value)  this.delSpan(3)
      this.surepasWay()
    }
    emaiBlur(){
      if(!this.email.value)  this.delSpan(4)
      this.emailWay()
    }
   


    // 删除旁边span方法
    delSpan(num){
        let span = this.$e(`.mi-form p:nth-child(${num}) span`)
        if(span) span.remove()

    }


    //   点击注册按钮时发生的事件
   reg(){
       let realPhone = this.phoneNumber.value
       let realPas = this.password.value
       let pasAgain = this.passwordAgain.value
       let realEmail = this.email.value
           //如果四个输入框都通过验证则执行  如果没有则提示
        if(realPhone&&realPas&&pasAgain&&realEmail){
           
         
        }else{
          layer.open({
            title:'错误信息'
        ,content:'请填写注册信息！',
        anim:5,
        resize:false,
        btn: ['确定']
 
          })
        }

   }


      // 手机号方法
      phoneWay(){
        //  如果为空则不执行且删除span
        if(!this.phoneNumber.value){
         return 
       }
                  //手机号正则
       let telReg = /^1[3-9]\d{9}$/
        if(telReg.test(this.phoneNumber.value)){
          this.trueWay(1)
        }else{
          this.phoneNumber.value = ''
         this.delSpan(1)
         layer.open({

           title:'手机号'
           ,content:'请输入正确的11位手机号！',
           anim:6,
           resize:false,
           btn: ['确定']
   
       })
         
        }
}


      // 密码的方法
      passwordWay(){
        //  如果为空则不执行且删除span
        if(!this.password.value){
         return 
       }
       //手机号正则 6-20个字母、数字、下划线的密码
      let pas=/^(\w){6,20}$/
      if(pas.test(this.password.value)){
       this.trueWay(2)
     
      }else{
        this.password.value = ''
       this.delSpan(2)
       layer.open({
         title:'密码'
     ,content:'请输入6-20个字母、数字、下划线的密码',
     anim:6,
     resize:false,
     btn: ['确定']
     
})

}
     }

      // 再次确认密码的方法
      surepasWay(){
        //  如果为空则不执行且删除span
        if(!this.passwordAgain.value){
         return 
       }
       if(this.passwordAgain.value===this.password.value){
       this.trueWay(3)
         
       }else{
        this.passwordAgain.value = ''
           // 如果错误时，旁边输入框还有正确表示则删除span并弹出模态框
           this.delSpan(3)

         layer.open({
           title:'密码'
       ,content:'密码不正确！',
       anim:6,
       resize:false,
       btn: ['确定']

         })
       }
     }

     // 验证邮箱的方法
           emailWay(){
            // 正则/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/
            let reg =  /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/
            //  如果为空则不执行
            if(!this.email.value){
              return 
            }  
       
           if(reg.test(this.email.value)){
            this.trueWay(4)
          
           }else{
            this.email.value = ''
            // 如果错误时，旁边输入框还有正确表示则删除span并弹出模态框
            this.delSpan(4)
            layer.open({
              title:'邮箱'
          ,content:'请输入正确的电子邮箱！',
          anim:6,
          resize:false,
          btn: ['确定']
              
       })
       
       }
       
             }

      


               
//    获取单个元素节点的方法
   $e(ele){
      return document.querySelector(ele)
   }

   // 获取多个元素节点的方法
   $$(ele){
    return document.querySelectorAll(ele)
}

  //  创建元素的方法
  createEle(ele){
    return document.createElement(ele)
  }

}


new Register