<template>
  <div id="app">
	  <div class="topadd" v-show="show">
		  <span class="topaddclose" @click="close()"></span>
		  <span class="topaddlogo"></span>
		  <span class="topaddtext">Yoho!Buy有货 潮流购物逛不停</span>
		  <p class="topaddtit">新人领499元礼包</p>
		  <span class="topadddownload">下载领取</span>
	  </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show:true
    }
  },
  methods: {
  	close() {
  		this.show=false
  	}
  },
}
 
</script>

<style>
  a{
    text-decoration: none;
    color:#000;
  }
  .clearfix:after{
    content: '';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
  }
  .topadd{
	  height:2.39rem ;
	  background: hsla(0,0%,100%,.9);
	  width: 100%;
	  padding: .35rem 0;
	  position: relative;
  }
  .topaddclose{
	  display: block;
	  width: .8rem;
	  height: .8rem;
	  background-image: url('assets/images/closeicon.png');
	  background-size:contain;
	  background-repeat: no-repeat;
	  margin-left: .665rem;
	  position: absolute;
	  top: 50%;
	  transform: translateY(-50%);
  }
  .topaddlogo{
	  display: block;
	  width: 2.28rem;
	  height: 2.28rem;
	  background-image: url('assets/images/yohologo.png');
	  background-size:contain;
	  background-repeat: no-repeat;
	  position: absolute;
	  left: 1.93rem;
  }
  .topaddtext{
	  position: absolute;
	  top: 50%;
	  transform: translateY(10%);
	  color: #555;
	  left: 4.65rem;
	  font-size: .512rem
  }
  .topaddtit{
	      position: absolute;
	      top: 50%;
	      transform: translateY(-100%);
	      color: #000;
	      font-weight: 700;
		  left: 4.65rem;
		  font-size: .6rem;
  }
  .topadddownload{
	  background-color: #d0021b;
	    position: absolute;
	    top: 50%;
	    transform: translateY(-50%);
	    font-size: .512rem;
	    padding: 0 .21rem;
	    line-height: 1.24rem;
	    border-radius: .125rem;
	    color: #fff;
		right: .34rem;
		padding: 0 .32rem;
		transform-origin: center;
		animation: down 1s infinite linear;
  }
@keyframes down{
	0% {
		transform:translateY(-50%) rotate(5deg);
	}
	20% {
		transform:translateY(-50%) rotate(-5deg);
	}
	30% {
		transform:translateY(-50%) rotate(0deg);
	}
	100% {
		transform:translateY(-50%) rotate(0deg);
	}
}
</style>
