// 这是商品列表实现的js

class Goods{

    constructor(){
        //获取节点

        this.getGoods()

        this.content = document.querySelector('.c-item #myGoods')
        // console.log(this.content);
    }

//    先将商品添加到页面
  async getGoods(){
      let data = await ajax.get({
          url:'./js/goods.json'

      })
      let allGoods = ''
    //   遍历商品列表并追加到页面
      data.forEach(goods=>{
          allGoods+=`
          <a href="./goods-details.html?pid=${goods.id}">
          <li class="item">
          <img src="${goods.src}" class="pic" alt="">
          <h3 class="item-name">${goods.name}</h3>
          <p class="item-info">${goods.goodsTrait}</p>
          <p class="item-price">
              <span class="present-price">${goods.price}元起</span>
              <span class="primary-price">${goods.primaryPrice}</span>
          </p>
      </li>
      </a>
      `
      })
      this.content.innerHTML = allGoods
      
      
   }

}



new Goods