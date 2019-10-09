<template>
	<div class="productbox">
		<div class="producthead">
			<span class="iconfont icon-left goback" @click="goback()"></span>
			<p class="producttitle">商品详情</p>
			<span class="iconfont icon-icon-test navbut" @click="change()"></span>
			<div class="hidnav" v-show="hid">
				<div class="fang"></div>
				<ul class="hidnavul">
					<li class="hidnavli">
						<router-link to="boys">
							<span class="hidicon iconfont icon-home"></span>
							<span class="hidtit">首页</span>
						</router-link>
					</li>
					<li class="hidnavli">
						<router-link to="cate">
							<span class="hidicon iconfont icon-tab_classification"></span>
							<span class="hidtit">分类</span>
						</router-link>
					</li>
					<li class="hidnavli">
						<router-link to="buycar">
							<span class="hidicon iconfont icon-gouwuche"></span>
							<span class="hidtit">购物车</span>
						</router-link>
					</li>
					<li class="hidnavli">
						<router-link to="my">
							<span class="hidicon iconfont icon-ren"></span>
							<span class="hidtit">我的</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="probanner">
			<mt-swipe :auto="4000" v-for="(v,i) in productlist" class="probannerswipe">
			  <mt-swipe-item v-for="(v,i) in v.banner" class="probannerswipeitem"><img :src="v.bannerimg" alt="" class="probannerimg"></mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="protit">
			<h1>{{tit}}</h1>
		</div>
		<div class="propricedata">
			<div class="proprice">
				<h2 v-for="(v,i) in productlist" v-if="v.price" class="price">{{v.price}}</h2>
				<h2 v-for="(v,i) in productlist" v-if="v.newprice" class="newprice">{{v.newprice}}</h2>
				<h2 v-for="(v,i) in productlist" v-if="v.markprice" class="markprice">{{v.markprice}}</h2>
			</div>		
		</div>
		<div class="discount">
			<h2 class="discounth2"><span class="discountspan">促</span>全场￥99加价购</h2>
		</div>
		<div class="feedback-list">
			<ul class="feedbackul">
				<li class="feedbackli">商品评价({{msg}})</li>
				<li class="feedbackli">常见问题</li>
			</ul>
			<div class="feedback-content">
				<div class="comment clearfix">
					<span class="comment-user">AZZ</span>
					<span class="comment-buy">购买了<b>原色牙</b></span>
					<span class="comment-f">/F</span>
				</div>
				<p class="comment-p">终于等到你，大爱</p>
				<span class="comment-time">2019-08-10 05：39：43</span>
			</div>
			<span class="comment-more">查看更多<i class="iconfont icon-right"></i></span>
		</div>
		<div class="store">
			<span class="store-logo" v-for="(v,i) in productlist">
				<img :src="v.logo" alt="">
			</span>
			<span class="store-name" v-for="(v,i) in productlist">{{v.store}}</span>
			<span class="store-link">进入店铺<i class="iconfont icon-right"></i></span>
		</div>
		<div class="productdesc">
			<div class="productinfo">
				<h2 class="productinfo-h2">商品信息&nbsp;<span class="productinfo-h2spans">PRODUCT INFO</span></h2>
				<div class="productinfo-table">
					<div class="productinfo-number">编号：51767056</div>
					<div class="productinfo-color">颜色：原色牙</div>
					<div class="productinfo-sex">性别：通用</div>
				</div>
				<div class="productinfo-msg">
					艺术大师RON ENGLISH联同亚洲著名艺术平台APPORTFO-LIO以及MADE BY MONSTERS，推出全新的立体人偶作品「玫瑰金POLICEGRIN」。通过邪恶的面貌，绘画出骷髅面孔的白兵画作，以玫瑰金肥胖的体型结构，呈现出一份奇特的邪恶趣味。
				</div>
			</div>
			<div class="productinfo-img">
				<h2 class="productinfo-h2">商品详情&nbsp;<span class="productinfo-h2spans">DETAILS</span></h2>
				<div class="productinfo-imgbox" v-for="(v,i) in productlist">
					<p v-for="(v,i) in v.productimg" class="imgp">
						<img :src="v.img" alt="">
					</p>
				</div>
			</div>
		</div>
		<div class="buycar-bar">
			<router-link to="/buycar">
				<div class="iconfont icon-gouwuche buyicon">
					<span class="buycarnum">3</span>
				</div>
				<div class="buycartit">购物车</div>
			</router-link>
			<a href="#">
				<div class="iconfont icon-shangdian buyicon"></div>
				<div class="buycartit">品牌店铺</div>
			</a>
			<a href="#">
				<div class="iconfont icon-aixin buyicon buyicon3"></div>
				<div class="buycartit buycartit3">收藏</div>
			</a>
			<span class="buycarbutbox">
				<a href="#" class="buycarbut" @click.prevent="yc=true">
					加入购物车
				</a>					
			</span>
		</div>
		<div class="chosebox" v-show="yc==true">
			<div class="chosemain">
				<div class="iconfont icon-close_icon chose-close-btn" @click="yc=false"></div>
				<div class="choseinofs">
					<div class="basic-info">
						<div class="thumb-img" v-for="(v,i) in productlist">
							<img :src="v.choseimg" alt="">
						</div>
						<div class="text-info">
							<p class="text-infoprice">
								<span class="sale-price" v-for="(v,i) in productlist">{{v.price}}</span>
							</p>
							<p class="not-choose" v-show="yeschose==true">请选择颜色,尺码</p>
							<p class="choose" v-show="yeschose==false">已选择{{color}},{{size}}</p>
						</div>
					</div>
					<div class="chose-items">
						<div class="block-list">
							<span class="block-name">颜色</span>
							<ul class="size-row" v-for="(v,i) in productlist">
								<li :class="{sizerowli:true,chooseing:cc==i}" v-for="(v,i) in v.color" @click="choosecolor(v,i)">
									{{v.colorchose}}
								</li>
							</ul>
						</div>
						<div class="block-list">
							<span class="block-name">尺码</span>
							<ul class="size-row" v-for="(v,i) in productlist">
								<li :class="{sizerowli:true,chooseing:sc==i}" v-for="(v,i) in v.size" @click="choosesize(v,i)">
									{{v.sizechose}}
								</li>
							</ul>
						</div>
						<div class="chosenum">
							<span class="block-name">数量</span>
							<div class="clearfix">
								<a href="#" class="chosebtn" @click.prevent="jian()">
									<span class="iconfont icon-jian"></span>
								</a>
								<input type="text" class="good-num" id="good-num" disabled="true" :value="val">
								<a href="#" class="chosebtn"  @click.prevent="jia()">
									<span class="iconfont icon-jia1"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="btn-warp">
					<button class="chose-btn-buynow">立即购买</button>
					<button class="chose-btn-sure" @click="change2()">加入购物车</button>
				</div>
			</div>
		</div>
		<div class="getbuycar" v-show="get">
			加入成功
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'',
				productlist:'',
				tit:'',
				yc:'false',
				val:'1',
				hid:false,
				get:false,
				notget:"",
				color:"",
				size:'',
				cc:'false',
				sc:'false',
				yeschose:true
			}			
		},
		methods:{
			jia(){
				this.val++;
			},
			jian(){
				this.val--
				if(this.val<1){
					this.val=1
				}
			},
			goback(){
				this.$router.go(-1)
			},
			change() {
				this.hid=!this.hid
			},
			change2(){
				this.yc=false;
				this.get=true
				setTimeout(()=>{
					this.get=false
				},2000)
			},
			choosecolor(v,i){			
				this.cc=i
				this.yeschose=false
				this.color=v.colorchose
			},
			choosesize(v,i){
				this.sc=i
				this.yeschose=false
				this.size=v.sizechose
			}
		},
		mounted(){			
			if(this.$route.params.m==this.$route.params.m){
				this.msg=this.$route.params.m
				this.tit=this.$route.params.n
			}
			if(this.$route.params.m==1){
				this.$http.get('./data/product.json')
				.then((response)=>{
					this.productlist=response.data.pro1
					console.log(this.productlist)
				})
				.catch(function (error) {
				console.log(error);
				})
				.then(function () {
				// always executed
				}); 
			}
			if(this.$route.params.m==2){
				this.$http.get('./data/product.json')
				.then((response)=>{
					this.productlist=response.data.pro2
					console.log(this.productlist)
				})
				.catch(function (error) {
				console.log(error);
				})
				.then(function () {
				// always executed
				}); 
			}
		}
	}
</script>

<style>
	.productbox{
		width: 100%;
		background: #f0f0f0;;
	}
	.producthead{
		position: relative;
		z-index: 20;
		width: 100%;
		height: 2.25rem;
		background-color: #000;
		color: #fff;
		line-height: 2.25rem;
	}
	.goback,.navbut{
		position: absolute;
		top: 0;
		display: block;
		width: 2.25rem;
		height: 2.25rem;
		outline: none;
		color: #fff;
		text-align: center;
		font-size: 20PX;
		line-height: 2.25rem;
	}
	.navbut{
		right: 0px;
		font-size: 25px;
		font-weight: bolder;
	}
	.hidnav{
		height: 7.875rem;
		width: 6rem;
		position: absolute;
		top: 2rem;
		right: .3rem;
		z-index: 2;
		overflow: hidden;
		color: #fff;
		background-size: 100% 100%;
		padding-top: .425rem;
	}
	.fang{
		width: .6rem;
		height: .6rem;
		position: absolute;
		top: .1rem;
		right: .5rem;
		transform: rotate(45deg);
		background-color: #434343;
	}
	.hidnavul{
		background-image: linear-gradient(#434343,#171717);
		overflow: hidden;
		width: 100%;
		height: 7.45rem;
		padding: 1px 0;
		border-radius: .25rem;
	}
	.hidnavli{
		float: left;
		overflow: hidden;
		width: 100%;
		height: 1.8rem;
		line-height: 1.8rem;
		padding-left: 1rem;
	}
	.hidicon{
		display: block;
		float: left;
		font-size: .65rem;
		color: #fff;
		width: 1.65rem;		
	}
	.hidtit{
		border-bottom: 1px solid #444;
		display: block;
		float: left;
		font-size: .6rem;
		color: #fff;
		width: 3.25rem;
		height: 1.6rem;
		padding-left: .3rem;
	}
	.producttitle{
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		overflow: hidden;
		margin-right: 2.5rem;
		margin-left: 2.5rem;
		height: 100%;
		color: #fff;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 700;
		font-size: .9rem;
	}
	.probanner{
		position: relative;
		background-color: #fff;
		min-height: 16.5rem;
		padding-top: .75rem;
	}
	.probannerswipe{
		overflow: hidden;
		margin:0 2.4rem .75rem;
		width: 11.2rem;
		min-height: 15rem;
	}
	.probannerswipe>.mint-swipe-items-wrap{
		height: 15rem;
	}
	.probannerswipeitem{
		height: 100%;
	}
	.probannerimg{
		width: 100%;
		height: 100%;
	}
	.protit{
		box-sizing: border-box;
		padding: .5rem .7rem;
		width: 100%;
		background-color: #515150;
		color: #fff;
	}
	.protit>h1{
		font-size: .7rem;
		line-height: 1.2rem;
	}
	.propricedata{
		position: relative;
		padding-right: .75rem;
		padding-left: .75rem;
		height: 2.2rem;
		border-bottom: 1px solid #e0e0e0;
		background-color: #fff;
		color: #b0b0b0;
	}
	.proprice{
		float: left;
		font-size: .86475rem;
	}
	.price,.newprice{
		margin-right: .25rem;
		color: #d0021b;
		display: inline-block;
		line-height: 2.2rem;
	}
	.markprice{
		text-decoration: line-through;
		display: inline-block;
		line-height: 2.2rem;
		color: #b0b0b0;
	}
	.discount{
		padding-top: 0;
		display: block;
		width: 100%;
		height: auto;
		border-bottom: 1px solid #e0e0e0;
		background-color: #fff;
		color: #444;
		font-size: .7rem;
	}
	.discounth2{
		position: relative;
		padding: .75rem 1.5rem .75rem .75rem;
		line-height: .9rem;
	}
	.discountspan{
		background-color: #d0021b;
		color: #fff;
		padding: 0 .1rem;
		border-radius: .1rem;
		margin-right: .25rem;
		font-size: .55rem;
		float: left;
	}
	.feedback-list{
		margin-top: .5rem;
		margin-bottom: .5rem;
		background-color: #f0f0f0;
		overflow: hidden;
	}
	.feedbackul{
		width: 100%;
		padding: .25rem 0;
		background-color: #fff;
		border-top: 1px solid #e0e0e0;
		border-bottom: 1px solid #e0e0e0;
		overflow: hidden;
	}
	.feedbackli{
		box-sizing: border-box;
		float: left;
		width: 50%;
		height: 1.5rem;
		line-height: 1.5rem;
		font-size: .7rem;
		text-align: center;
	}
	.feedbackli:nth-child(1){
		color: #000;
		border-right: 1px solid #ccc;
	}
	.feedback-content{
		background-color: #fff;
		border-bottom: 1px solid #e0e0e0;
	}
	.comment-user{
		font-size: .6rem;
		line-height: 1.55rem;
		height: 1.55rem;
		color: #444;
		padding-left: .7rem;
		float: left;
		padding-right: .45rem;
	}
	.comment-buy{
		font-size: .6rem;
		line-height: 1.55rem;
		max-width: 45%;
		display: inline-block;
		overflow: hidden;
		height: 1.55rem;
		float: left;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.comment-f{
		float: left;
		font-size: .6rem;
		line-height: 1.55rem;
	}
	.comment-p{
		font-size: .7rem;
		line-height: .9rem;
		padding-left: .7rem;
		padding-right: .7rem;
	}
	.comment-time{
		font-size: .6rem;
		line-height: 1.55rem;
		padding-left: .7rem;			
		color: #c1c1c1;
	}
	.comment-more{
		display: block;
		min-height: 2.2rem;
		text-align: center;
		background-color: #fff;
		border-bottom: 1px solid #e0e0e0;
		line-height: 2.2rem;
		font-size: .7rem;
		color: #b0b0b0;
	}
	.store{
		position: relative;
		overflow: hidden;
		padding: 0 4.5rem 0 2.85rem;
		background-color: #fff;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 2.1rem;
	}
	.store-logo{
		position: absolute;
		top: 1px;
		left: 0;
		margin-left: .75rem;
		width: 1.7rem;
		height: 2.1rem;
		text-align: center;
		font-size: 0;
	}
	.store-logo>img{
		display: inline-block;
		width: auto;
		height: 1.7rem;
		vertical-align: middle;
	}
	.store-name{
		color: #444;
		font-size: .85rem;
	}
	.store-link{
		position: absolute;
		top: 1px;
		right: 0;
		padding-right: .75rem;
		color: #b0b0b0;
		text-align: right;
		font-size: .7rem;
	}
	.productinfo{
		box-sizing: border-box;
		margin-bottom: .5rem;
		padding: 0 .7rem;
		width: 100%;
		border-top: 1px solid #e0e0e0;
		border-bottom: 1px solid #e0e0e0;
		background-color: #fff;
		padding-top: .5rem;
		padding-bottom: .5rem;
	}
	.productinfo-h2{
		border-bottom: 1px solid #e0e0e0;
		color: #444;
		font-size: .7rem;
		line-height: 2.2rem;
	}
	.productinfo-h2spans{
		color: #a0a0a0;
		font-size: .45rem;
	}
	.productinfo-table{
		width: 100%;
		overflow: hidden;
		margin-bottom: 1px;
		margin-top: .5rem;
		font-size: .6rem;
		line-height: .9rem;
	}
	.productinfo-table>div{
		box-sizing: border-box;
		padding: .15rem 3%;
		width: 50%;
		border: 1px solid #fff;
		background-color: #eee;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: .6rem;
		float: left;
	}
	.productinfo-msg{
		padding: .4rem .3rem;
		background-color: #eee;
		color: #444;
		font-size: .6rem;
		word-break: break-all;
	}
	.productinfo-img{
		box-sizing: border-box;
		margin-bottom: .5rem;
		padding: 0 .7rem;
		width: 100%;
		border-top: 1px solid #e0e0e0;
		border-bottom: 1px solid #e0e0e0;
		background-color: #fff;
	}
	.productinfo-imgbox{
		margin-top: .5rem;
		margin-bottom: .5rem;
	}
	.imgp{
		font-size: .7rem!important;
		color: #444;
		line-height: 1rem!important;
		margin-bottom: 1rem;
		letter-spacing: 1px;
		word-break: break-all;
	}
	.imgp>img{
		display: block;
		margin: 0 auto;
		max-width: 100%;
		border: 0;
	}
	.buycar-bar{
		position: fixed;
		bottom: 0;
		left: 50%;
		margin-left: -8rem;
		z-index: 2;
		box-sizing: border-box;
		padding: .5rem .7rem;
		width: 16rem;
		height: 3rem;
		border-top: 1px solid #e0e0e0;
		background-color: #fff;
	}
	.buycar-bar>a{
		width: 2.5rem;
		text-align: center;
		vertical-align: middle;
		display: inline-block;
	}
	.buyicon{
		color: #444;
		font-size: 1rem;
		line-height: 1rem;
		position: relative;
	}
	.buyicon3{
		color: #ccc;
	}
	.buycartit{
		color: #444;
		font-size: .375rem;
	}
	.buycartit3{
		color: #ccc;
	}
	.buycarbut{
		width: 6.2rem;
		height: 2rem;
		background-color: #eb0313;
		color: #fff;
		text-align: center;
		font-size: .8rem;
		line-height: 2rem;
		display: inline-block;
	}
	.buycarnum{
		position: absolute;
		top: -.25rem;
		right: .125rem;
		display: block;
		width: .75rem;
		height: .75rem;
		border-radius: 50%;
		background: #eb0313;
		color: #fff;
		text-align: center;
		font-size: .5rem;
		line-height: .75rem;
	}
	.chosebox{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 5;
		height: 100%;
		background: rgba(0,0,0,.3);
	}
	.chosemain{
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 70%;
		background: #fff;
		padding-bottom: 2.5rem;
	}
	.chose-close-btn{
		float: right;
		width: 1.5rem;
		height: 1.5rem;
		text-align: center;
		line-height: 1.5rem;
		color: #b1b1b1;
		position: relative;
		z-index: 2;
	}
	.choseinofs{
		padding: 0 .75rem;
		height: 100%;
	}
	.basic-info{
		position: relative;
		padding-bottom: .75rem;
		min-height: 4.75rem;
		border-bottom: 1px solid #e6e6e6;
	}
	.thumb-img{
		width: 4.1rem;
		min-height: 5rem;
		position: absolute;
		top: -1.5rem;
		border: 1px solid #e6e6e6;
		border-radius: 5PX;
	}
	.thumb-img>img{
		display: block;
		margin: 0 auto;
		max-width: 100%;
		border: 0;
	}
	.text-info{
		margin-left: 4.875rem;
		height: auto;
		margin-top: .75rem;
	}
	.text-infoprice{
		display: inline;
		font-size: .6rem;
	}
	.not-choose,.choose{
		font-size: .6rem;
	}
	.chose-items{
		overflow: auto;
		height: 60%;
	}
	.block-list{
		border-bottom: 1px solid #e6e6e6;
		margin: .75rem 0;
		position: relative;
		padding-left: 2rem;
		font-size: .7rem;
		overflow: hidden;
	}
	.block-name{
		position: absolute;
		top: .25rem;
		left: 0;
	}
	.sizerowli{
		display: block;
		float: left;
		box-sizing: border-box;
		margin-right: .75rem;
		margin-bottom: .75rem;
		padding: 0 .5rem;
		min-width: 2rem;
		max-width: 12rem;
		height: 1.5rem;
		border: 1px solid #000;
		text-align: center;
		line-height: 1.5rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		border-radius: 6PX;
		background: #fff;
		color: #000;
	}
	.chosenum{
		margin-bottom: .5rem;
		position: relative;
		padding-left: 2rem;
		font-size: .7rem;
		overflow: hidden;
	}
	.chosebtn{
		display: block;
		float: left;
		width: 2rem;
		height: 2rem;
		border: 1px solid #e6e6e6;
		text-align: center;
		line-height: 2rem;
	}
	.good-num{
		float: left;
		margin-left: -1px;
		padding: 0;
		width: 2.65rem;
		height: 2rem;
		border: 1px solid #e6e6e6;
		text-align: center;
		line-height: 2rem;
		border-radius: 0;
		background-color: #fff;
		color: #000;
		opacity: 1;
	}
	.btn-warp{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.chose-btn-buynow{
		width: 50%;
		height: 2rem;
		border: none;
		background: #444;
		color: #fff;
		font-size: .8rem;
		float: left;
	}
	.chose-btn-sure{
		width: 50%;
		height: 2rem;
		border: none;
		background: #d0021b;
		color: #fff;
		font-size: .8rem;
		float: left;
	}
	.getbuycar{
		position: fixed;
		text-align: center;
		width: 50%;
		padding: 15PX;
		top: 50%;
		left: 50%;
		margin-left: -25%;
		margin-top: -45PX;
		background-color: rgba(0,0,0,.7);
		color: #fff;
		font-size: .6rem;
		border: none;
		z-index: 1000;
		box-sizing: border-box;
		border-radius: 10PX;
	}
	.chooseing{
		border-color: #e10;
		background: #d0021b;
		color: #fff;
	}
</style>
