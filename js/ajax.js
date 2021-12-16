 /* @param 
      url   请求地址
      data   参数  {name:'zs',age:18}
      dataType  返回结果是否以json解析 
      
*/

class ajax {
    static get(params = {}) {
        return ajax.http('get', params)
    }

    static post(params = {}) {
       return ajax.http('post', params)
    }

    static http(method, params) {
        let {url,data,dataType = 'json'} = params
      
        //    判断url是否为空
        if (!url) {
            throw new Error('url不能为空')
        }
        let param = null
      //   处理data
        if (data) {
            param = []
            for(let key in data){
              param.push(`${key}=${data[key]}`)  
            }
            // 以&符号分割为字符串
            param = param.join('&')

            if(method=='get'){
                url+=`?${param}`
                param = null
            }
        }
         return  new Promise((resolve,reject)=>{

         let xhr = new XMLHttpRequest()
         xhr.open(method,url)
         xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
         xhr.send(param)
         xhr.onreadystatechange = function(){
             if(xhr.readyState == 4){
                 if(xhr.status == 200){
                     let res = xhr.response
                     
                     if(dataType == 'json'){
                         res =  JSON.parse(res)
                     }
                     resolve(res)
                 }else{
                     reject(xhr.status)
                 }
             }
         }
        })

    }

}