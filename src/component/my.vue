<template>
	<div class="mybox">
		<div class="myhead">
			<span class="iconfont icon-left goback" @click="goback()"></span>
			<p class="mytitle">个人中心</p>
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
		<div class="mybody">
			<div class="mybodyhead">
				<router-link to="logon">
					登录&nbsp;/&nbsp;注册
				</router-link>
			</div>
			<div class="lists">
				<div class="listsitem">
					<div class="listsbody">
						<div class="listsvalue">默认购物频道</div>
						<router-link to="boys">
							<div class="listsman">男士MEN</div>
						</router-link>
						<div class="iconfont icon-right listsicon"></div>
					</div>
				</div>
			</div>
			<div class="lists">
				<div class="listsitem">
					<div class="listsbody">
						<div class="listsvalue">我的订单</div>
						<router-link to="boys">
							<div class="listsman">全部订单</div>
						</router-link>
						<div class="iconfont icon-right listsicon"></div>
					</div>
				</div>
			</div>
			<div class="service">
				<a href="#" class="servicelist">
					<div class="servicelistbox">
						<div class="servicelisticon iconfont icon-fukuanfangshi"></div>
						<p class="servicelisttext">代付款</p>
					</div>
				</a>
				<a href="#" class="servicelist">
					<div class="servicelistbox">
						<div class="servicelisticon iconfont icon-daifahuo"></div>
						<p class="servicelisttext">代发货</p>
					</div>
				</a>
				<a href="#" class="servicelist">
					<div class="servicelistbox">
						<div class="servicelisticon iconfont icon-daishouhuo"></div>
						<p class="servicelisttext">待收货</p>
					</div>
				</a>
				<div class="service-item">
					<a href="#">
						<p class="service-num">0</p>
						<p class="service-name">商品收藏</p>
					</a>
				</div>
				<div class="service-item">
					<a href="#">
						<p class="service-num">0</p>
						<p class="service-name">品牌收藏</p>
					</a>
				</div>
				<div class="service-item">
					<a href="#">
						<p class="service-num">0</p>
						<p class="service-name">浏览记录</p>
					</a>
				</div>
			</div>
			<div class="list">
				<a href="#" class="listsitem">
					<div class="listlefticon iconfont icon-icon_youhuijuan"></div>
					<div class="listbody">
						<div class="listmain">优惠卷</div>
						<div class="listvalue"></div>
						<div class="listsicon iconfont icon-right"></div>
					</div>
				</a>
				<a href="#" class="listsitem">
					<div class="listlefticon iconfont icon-taojinbi"></div>
					<div class="listbody">
						<div class="listmain">有货币</div>
						<div class="listvalue"></div>
						<div class="listsicon iconfont icon-right"></div>
					</div>
				</a>
			</div>
			<div class="list">
				<a href="#" class="listsitem">
					<div class="listlefticon iconfont icon-icon_youhuijuan"></div>
					<div class="listbody">
						<div class="listmain">优惠卷</div>
						<div class="listvalue"></div>
						<div class="listsicon iconfont icon-right"></div>
					</div>
				</a>
				<a href="#" class="listsitem">
					<div class="listlefticon iconfont icon-taojinbi"></div>
					<div class="listbody">
						<div class="listmain">有货币</div>
						<div class="listvalue"></div>
						<div class="listsicon iconfont icon-right"></div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				hid:false
			}
		},
		methods: {
			change() {
				this.hid=!this.hid
			},
			goback() {
				this.$router.go(-1)
			}
		},
	}
</script>

<style>
	.myhead{
		position: relative;
		z-index: 20;
		width: 100%;
		height: 2.25rem;
		background-image: linear-gradient(#323232,#414141);
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
	.mytitle{
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
	.mybody{
		background-color: #f0f0f0;
	}
	.mybodyhead{
		width: 14.5rem;
		height: 2.1rem;
		background-image: url('../assets/images/header-bg.b98d69725a.jpg');
		background-size: cover;
		padding: 1.15rem .75rem 1.45rem;
		position: relative;
	}
	.mybodyhead>a{
		display: block;
		width: 5.5rem;
		height: 1.45rem;
		line-height: 1.45rem;
		text-align: center;
		border: .075rem solid #fff;
		color: #fff;
		font-size: .5rem;
		margin: .275rem auto;
	}
	.lists{
		width: 100%;
		background-color: #fff;
		margin: 0;
		margin-bottom: .5rem;
		clear: both;
	}
	.listsitem{
		height: 2rem;
		line-height: 2rem;
		display: block;
		padding: 0 0 0 .55rem;
	}
	.listsvalue{
		width: 5rem;
		font-size: .6rem;
		float: left;
		height: 2rem;
	}
	.listsman{
		float:left;
		font-size: .5rem;
		color: #444;
		width: 9rem;
		text-align: right;
	}
	.listsicon{
		float: left;
		color: #e0e0e0;
		font-size: .6rem;
		width: .75rem;
		text-align: right;
		margin-right: .55rem;
	}
	.service{
		float: left;
		background-color: #fff;
		margin-bottom: .5rem;
		margin-top: -.5rem;
		width: 100%;
	}
	.servicelistbox,.service-item{
		float: left;
		padding: .3rem 1.4rem;
		width: 2.5rem;
		text-align: center;
		color: #444;
		height: 3rem;
		border-top: 1px solid #e0e0e0;
		position: relative;
	}
	.servicelisticon,.service-num{
		font-size: 1rem;
		line-height: 1rem;
		height: 1.375rem;
		padding-top: .25rem;
	}
	.servicelisttext,.service-name{
		font-size: .6rem;
		line-height: 1rem;
		height: 1rem;
		color: #444;
	}
	.list{
		width: 100%;
		background-color: #fff;
		margin-bottom: .5rem;
		clear: both;
	}
	.listlefticon{
		float: left;
		font-size: 1rem;
		color: #444;
		height: 2rem;
		width: 1.2rem;
	}
	.listbody{
		width: 14.2rem;
		border-bottom: 1px solid #e0e0e0;
		float: left;
		font-size: .7rem;
		color: #444;
		height: 2rem;
	}
	.listmain{
		float: left;
		font-size: .6rem;
		color: #444;
		height: 2rem;
		width: 10rem;
	}
	.listvalue{
		float: left;
		width: 2.8rem;
		height: 2rem;
	}
</style>
