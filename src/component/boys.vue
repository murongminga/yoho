<template>
	<div class="boysdiv">
		<div :class="{boysbody:true,hide:hid}">
			<div class="boxccc" v-show="hid" @click="change2()"></div>
			<div class="head">
				<span class="headbut iconfont icon-more-line" @click="change()"></span>
				<span class="headlogo"></span>
				<span class="headsreach iconfont icon-search">
					<router-link to='/sreach'></router-link>
				</span>
			</div>
			<mt-swipe :auto="4000" class="hdbr">
			  <mt-swipe-item v-for="(v,i) in bannerlist"><img :src="v.brimg" alt="" class="hdbrimg"></mt-swipe-item>
			</mt-swipe>
			<div class="icon-list">
				<ul class="icon-list-ul clearfix">
					<li class="icon-list-li">
						<router-link to='/boys-new' class="iconlistimg"><img src="../assets/images/iconlist1.png" alt=""></router-link>
						<router-link to='/boys-new' class="iconlisttxt">新品到着</router-link>
					</li>
					<li class="icon-list-li">
						<router-link to='/guang' class="iconlistimg"><img src="../assets/images/iconlist2.png" alt=""></router-link>
						<router-link to='/guang' class="iconlisttxt">人气搭配</router-link>
					</li>
					<li class="icon-list-li">
						<router-link to='/boys-sale' class="iconlistimg"><img src="../assets/images/iconlist3.png" alt=""></router-link>
						<router-link to='/boys-sale' class="iconlisttxt">折扣专区</router-link>
					</li>
					<li class="icon-list-li">
						<router-link to='/cate' class="iconlistimg"><img src="../assets/images/iconlist4.png" alt=""></router-link>
						<router-link to='/cate' class="iconlisttxt">全部分类</router-link>
					</li>
				</ul>
			</div>
			<div class="blank"></div>
			<div class="actimg">
				<img src="../assets/images/boysaddimg.jpg" alt="">
			</div>
			<div class="boyshotlist">
				<h2 class="boyshotlist-tit">热门品类</h2>
			</div>
			<div class="boyshotlistbody">
				<ul class="clearfix">
					<li v-for="(v,i) in hotlist" class="boyshotlistimg "><router-link to="list"><img :src="v.hotlistimg" alt=""></router-link></li>
				</ul>
			</div>
			<div class="blank"></div>
			<mt-swipe :auto="4000" class="sbr">
			  <mt-swipe-item v-for="(v,i) in sbannerlist"><img :src="v.sbrimg" alt="" class="hdbrimg"></mt-swipe-item>
			</mt-swipe>
			<div class="boyshotlist">
				<h2 class="boyshotlist-tit">热门品牌</h2>
			</div>
			<div class="boyshotbrandbody">
				<ul class="clearfix">
					<li v-for="(v,i) in brandlist" class="boyshotbrandimg "><router-link to="/list"><img :src="v.brandimg" alt=""></router-link></li>
					<li class="boyshotbrandmore"><router-link to="/list"><img src="../assets/images/brandmore.png"alt=""></router-link></li>
				</ul>
			</div>
			<div class="blank"></div>
			<div class="newsprise">
				<img src="../assets/images/newsprise.jpg" alt="">
			</div>
			<div class="boyshotlist">
				<h2 class="boyshotlist-tit boytuijian">人气推荐<router-link to="/more"><span class="iconfont icon-more moreicon"></span></router-link></h2>
			</div>
			<div class="topimg">
				<img src="../assets/images/topimg.jpg" alt="">
			</div>
			<div class="proswiper">
				<swiper :options="swiperOption" class="prolist">
					<swiper-slide v-for="(v,i) in prolist" class="prolistli"><router-link to="/product">
						<img :src="v.proimg" alt="" class="proimg">
						<div class="probox">
							<h3 class="proprice">{{v.proprice}}</h3>
							<p class="propeople">{{v.prnum}}</p>
							<p class="proview">{{v.view}}</p>
						</div>			
					</router-link></swiper-slide>
				</swiper>
			</div>
			<div class="productlist">
				<p class="youlike"><span class="iconfont icon-icon-- youlikeicon"></span>你可能喜欢</p>
				<div class="productlistbox clearfix">
					<div class="product" v-for="(v,i) in product">
						<div class="produtblank"></div>
						<div class="productimg">
							<router-link :to="'/product/'+v.productid+'/'+v.producttitle"><img :src="v.productimg" alt=""></router-link>
							<p class="productno" v-if="v.productno">{{v.productno}}</p>
						</div>
						<div class="producttext">
							<div class="productname">
								<router-link :to="'/product/'+v.productid+'/'+v.producttitle">{{v.producttitle}}</router-link>
							</div>
							<div class="productprice">
								<span class="productreadprice">{{v.productprice}}</span>
								<span class="productnewprice">{{v.newprice}}</span>
								<span class="productmarkprice">{{v.markprice}}</span>
							</div>
							<router-link to="/more" class="productmore"><span class="iconfont icon-more"></span></router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="foottab">
				<router-link to="/boys">
					<p class="iconfont icon-home foottabicon"></p>
					<p class="foottabname">首页</p></router-link>
				<router-link to="/cate">
					<p class="iconfont icon-tab_classification foottabicon"></p>
					<p class="foottabname">分类</p></router-link>
				<router-link to="/guang">
					<p class="iconfont icon-changyongtubiao-mianxing- foottabicon"></p>
					<p class="foottabname">逛</p></router-link>
				<router-link to="/buycar">
					<p class="iconfont icon-gouwuche foottabicon"></p>
					<p class="foottabname">购物车</p></router-link>
				<router-link to="/my">
					<p class="iconfont icon-ren foottabicon"></p>
					<p class="foottabname">我的</p>
				</router-link>
			</div>
		</div>
		<div class="mune" v-if="hid">
			<ul class="mune1">
				<li @click="change2()">
					<router-link to="/boys" class="mune-boys" >
						<span class="muneicon muneicon1"></span>
						<em class="munetit">男生</em>
						<span class="muneeng">BOYS</span>
					</router-link>
				</li>
				<li>
					<router-link to="/girls" class="mune-girls">
						<span class="muneicon muneicon2"></span>
						<em class="munetit">女生</em>
						<span class="muneeng"> GIRLS</span>
					</router-link>
				</li>
				<li>
					<router-link to="/kids" class="mune-kids">
						<span class="muneicon muneicon3"></span>
						<em class="munetit">潮童</em>
						<span class="muneeng">KIDS</span>
					</router-link>
				</li>
				<li>
					<router-link to="/lifestyle" class="mune-lifestyle">
						<span class="muneicon muneicon4"></span>
						<em class="munetit">创意生活</em>
						<span class="muneeng">LIFTSTYLE</span>
					</router-link>
				</li>
			</ul>
			<ul class="mune1 mune2">
				<li>
					<router-link to="/guang" class="mune-guang">
						<span class="muneicon muneicon5"></span>
						<em class="munetit munetit2">逛</em>
						<span class="muneeng">TRENDFINDER</span>
						<span class="munegoicon iconfont icon-right"></span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
			bannerlist:[],
			hotlist:[],
			sbannerlist:[],
			brandlist:[],
			prolist:[],
			product:[],
			hid:false,
			swiperOption: {
			  slidesPerView: 3,
			  spaceBetween: -50,
			  freeMode: true,
			  pagination: {
				el: '.swiper-pagination',
				clickable: true
			  }
			}
	      }
	    },
		mounted(){
			var _this=this
			this.$http.get('./data/boys.json')
			.then((response)=>{
				console.log(response)
				this.bannerlist=response.data.hdbanner
				this.hotlist=response.data.hotlist
				this.sbannerlist=response.data.sbanner
				this.brandlist=response.data.brand
				this.prolist=response.data.pro
				this.product=response.data.product
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			// always executed
			}); 

		},
		methods: {
			change() {
				this.hid=true
			},
			change2() {
				this.hid=false
				console.log("这是"+this.hid)
			}			
		},
	  }
</script>
<style>
	.foottab{
		position: fixed;
		left: 50%;
		bottom: 0;
		margin-left: -8rem;
		width: 100%;
		height: 2.5rem;
		max-width: 16rem;
		padding-top: .5rem;
		box-sizing: border-box;
		background: #fff;
		border-top: 1px solid #b0b0b0;
		z-index: 3;
	}
	.foottab a{
		float: left;
		width: 20%;
		text-align: center;
		color: #b0b0b0;
	}
	.foottab .router-link-active{
		color: #414141;
	}
	.foottabicon{
		font-size: 1rem;
		line-height: 1rem;
	}
	.foottabname{
		margin-top: .25rem;
		font-size: 12PX;
		line-height: 1;
	}
</style>
<style>
	.boysdiv{
		background:#f0f0f0 ;
		overflow: hidden;
	}
	.boysbody{
		transition: 0.3s;
	}
	.head{
		width: 100%;
		background-image: linear-gradient(#323232,#414141);
		color: #fff;
		position: relative;
		height: 2.25rem;
		line-height: 2.25rem;
	}
	.headbut{
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		z-index: 2;
		width: 1rem;
		margin: 0 .75rem;
		text-align: center;
		font-size: .9rem;
	}
	.headlogo{
		display: block;
		width: 5.2rem;
		height: 2.175rem;
		background-image: url('../assets/images/boyslogo.png') ;
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: 100%;
		margin: 0 auto;
	}
	.headsreach{
		position: absolute;
		right: 0;
		top: 0;
		width: 2.25rem;
		height: 2.25rem;
		text-align: center;
		font-size: .9rem;
	}
	.hdbrimg{
		width: 100%;
	}
	.hdbr .mint-swipe-items-wrap{
		height: 0%;
		padding-bottom: 48.48%;
	}
	.is-active{
		background-color: #ccc;
		opacity: 1;
	}
	.mint-swipe-indicators{
		background: rgba(0,0,0,.2);
		height: .6rem;
		border-radius: 1.25rem;
	}
	.mint-swipe-indicator{
		margin: 0 .225rem;
		transform: translateY(-170%);
	}
	.icon-list{
		padding-top: 15px;;
		padding-bottom: 2px;
		background: #fff;
	}
	.icon-list-ul{
		width: 100%;
	}
	.icon-list-li{
		float: left;
		width: 25%;
		text-align: center;
		margin-bottom: .25rem;
		height: 70px;
	}
	.iconlistimg{
		display: block;
		width: 40px;
		height: 40px;;
		margin: 0 auto;
	}
	.iconlistimg img{
		height: 100%;
		width: 100%;
	}
	.iconlisttxt{
		display: block;
		font-size: 12px;
		line-height: 22px;
		transform: scale(.9);
	}
	.blank{
		background-image: url('../assets/images/blankimg.jpg');
		height: 14PX;
		width: 100%;
		background-size: 100% 100%;
	}
	.actimg img{
		width: 100%;
		display: block;
	}
	.boyshotlist{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		background: #f0f0f0;
		text-align: center;
		font-size: .8rem;
		color: #444;
	}
	.boyshotlist-tit{
		font-size: 15px;
		color: #000;
	}
	.boyshotlistbody{
		border-bottom: 1px solid #e0e0e0;
	}
	.boyshotlistbody ul{
		box-sizing: border-box;
	}
	.boyshotlistimg{
		float: left;
		width: 4rem;
		height: 4.35rem;
		border-top: 1px solid #e0e0e0;
		border-left: 1px solid #e0e0e0;
		overflow: hidden;
		box-sizing: border-box;
	}
	.boyshotlistimg a img{
		width: 100%;
		height: 100%;
	}
	.sbr{
		height: 5rem;
	}
	.boyshotbrandimg{
		float: left;
		background-color: #e0e0e0;
		width: 4rem;
		height: 4rem;
		overflow: hidden;
		padding: 1PX 1PX 0 0;
		box-sizing: border-box;
	}
	.boyshotbrandimg a img{
		width: 100%;
		height: 100%;
	}
	.boyshotbrandmore{
		float: left;
		width: 8rem;
		height: 4rem;
		overflow: hidden;
	}
	.boyshotbrandmore a img{
		width: 100%;
	}
	.newsprise{
		width: 100%;
	}
	.newsprise img{
		width: 100%;
		display: block;
	}
	.topimg img{
		width: 100%;
		display: block;
	}
	.boytuijian{
		position: relative;
	}
	.moreicon{
		position: absolute;
		right: .75rem;
		font-size: 1.25rem;
		color: #b0b0b0;
	}
	.proswiper{
		width: 100%;
		overflow-x: scroll;
	}
	.prolist{
		height: 8.25rem;
		padding: .625rem 0 .425rem .65rem;
		background: #fff;
	}
	.prolistli{
		height: 7.25rem !important;
		width: 3.825rem !important;
		margin-right: .65rem !important;
		background: #fff;
		border-radius: .125rem;
	}
	.proimg{
		height: 5.15rem;
		width: 100%;
	}
	.probox{
		position: relative;
		height: 2.1rem;
		width: 200%;
		background: #fff;
		text-align: center;
		padding: .6rem 0 .5rem;
		transform: scale(.5);
		transform-origin: 0 0 0;
	}
	.proprice{
		color: #444;
		font-size: 1rem;
		line-height: 1;
	}
	.propeople{
		color: #b0b0b0;
		font-size: .75rem;
		margin-top: .5rem;
		line-height: 1;
	}
	.proview{
		color: #b0b0b0;
		font-size: .75rem;
		margin-top: .35rem;
		line-height: 1;
	}
	.youlike{
		height: 2.6rem;
		font-size: .95rem;
		line-height: 2.6rem;
		text-align: center;
		color: #dadada;
	}
	.youlikeicon{
		font-size: 1rem;
		margin-right: .2rem;
	}
	.productlist{
		position: relative;
		background: #fff;
		border-top: 1px solid #ccc;
		margin-top: .75rem;
		box-sizing: border-box;
		padding-left: .375rem;
	}
	.product{
		float: left;
		margin: .25rem .375rem 1rem;
		width: 6.9rem;
		height: 12.65rem;
	}
	.produtblank{
		overflow: hidden;
		width: 100%;
		height: .7rem;
	}
	.productimg{
		position: relative;
		height: 9.2rem;
	}
	.productno{
		position: absolute;
		bottom: 0;
		width: 100%;
		color: #fff;
		text-align: center;
		height: .7rem;
		background: #ffac5b;
		font-size: 12PX;
		line-height: .7rem;
	}
	.productimg a img{
		display: block;
		width: 100%;
		height: 9.2rem;
	}
	.producttext{
		position: relative;
	}
	.productname a{
		margin: .375rem 0 .25rem;
		color: #444;
		line-height: .75rem;
		padding: .125rem 0;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		height: 1.4rem;
		transform: scale(.9);
		font-size: 12PX;
	}
	.productprice{
		line-height: .55rem;
		white-space: nowrap;
		transform: scale(.9);
		font-size: 12PX;
	}
	.productnewprice{
		color: #d62927
	}
	.productmarkprice{
		margin-left: .125rem;
		color: #b0b0b0;
		text-decoration: line-through;
	}
	.productmore{
		color: #b0b0b0;
		width: 1.25rem;
		height: 2rem;
		line-height: 2.5rem;
		text-align: center;
		position: absolute;
		bottom: -.5rem;
		right: 0;
		font-weight: 700;
	}
	.mune{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 2.5rem;
		width: 13.5rem;
		background: #f0f0f0;
		z-index: 4;
	}
	.mune1{
		margin-bottom: .5rem;
		background: #fff;
		border-top: 1px solid #e0e0e0;
		border-bottom: 1px solid #e0e0e0;
	}
	.mune1 li{
		position: relative;
		background: #fff;
		height: 2.2rem;
		line-height: 2.2rem;
		border-bottom: 1px solid #e0e0e0;
	}
	.mune1 li a{
		display: block;
		height: 100%;
		padding-left: 2.75rem;
		color: #444;
	}
	.munetit{
		font-size: .9rem;
		font-weight: 700;
	}
	.muneeng{
		display: inline-block;
		font-size: .9rem;
		padding-left: .5rem;
		transform: scale(.5) translateY(.3rem);
		transform-origin: 0 50% 0;
	}
	.muneicon{
		position: absolute;
		width: 1.2rem;
		height: 1.2rem;
		margin-top: -.6rem;
		left: .75rem;
		top: 50%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.muneicon1{
		background-image: url('../assets/images/muneicon1.png');
	}
	.muneicon2{
		background-image: url('../assets/images/muneicon2.png');
	}
	.muneicon3{
		background-image: url('../assets/images/muneicon3.png');
	}
	.muneicon4{
		background-image: url('../assets/images/muneicon4.png');
	}
	.muneicon5{
		background-image: url('../assets/images/muneicon5.png');
		width: .95rem;
		height: .95rem;
		margin-top: -.475rem;
	}
	.mune2 li{
		height: 1.9rem;
		line-height: 1.9rem;
	}
	.mune2 li a{
		
	}
	.munetit2{
		font-size: .65rem;
	}
	.hide{
		transform: translateX(13.5rem)
	}
	.boxccc{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #000;
		z-index: 4;
		-webkit-transition: opacity 1s;
		transition: opacity 1s;
		opacity: 0.3;
	}
</style>
