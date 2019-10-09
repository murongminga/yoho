<template>
	<div class="catebox">
		<div class="search">
			<router-link to="search">
				<span class="iconfont icon-search searchicon"></span>
				<p class="searchpleasehold">搜索商品</p>
			</router-link>
		</div>
		<div class="nav">
			<ul class="navtop clearfix">
				<li @click="change(1)" :class="{black:a==1}"><span>Boys</span></li>
				<li @click="change(2)" :class="{black:a==2}"><span>Girls</span></li>
				<li @click="change(3)" :class="{black:a==3}"><span>Kids</span></li>
				<li @click="change(4)" :class="{black:a==4}"><span>Lifestyle</span></li>
			</ul>
		</div>
		<div class="hidechildnav">
			<div class="childnav" v-show="a==1">
				<ul>
					<li v-for="(v,i) in nav" @click="change2(i)" :class="{withe:i==c}">{{v.nav}}</li>
				</ul>
				<div v-for="(v,i) in nav" v-show="i==c" class="childnavlist">
					<ul>
						<li v-for="(v,i) in v.list">{{v.cate}}</li>
					</ul>
				</div>
			</div>
			<div class="childnav" v-show="a==2">
				<ul>
					<li v-for="(v,i) in nav1" @click="change2(i)" :class="{withe:i==c}">{{v.nav}}</li>
				</ul>
				<div v-for="(v,i) in nav1" v-show="i==c" class="childnavlist">
					<ul>
						<li v-for="(v,i) in v.list">{{v.cate}}</li>
					</ul>
				</div>
			</div>
			<div class="childnav" v-show="a==3">
				<ul>
					<li v-for="(v,i) in nav2" @click="change2(i)" :class="{withe:i==c}">{{v.nav}}</li>
				</ul>
				<div v-for="(v,i) in nav2" v-show="i==c" class="childnavlist">
					<ul>
						<li v-for="(v,i) in v.list">{{v.cate}}</li>
					</ul>
				</div>
			</div>
			<div class="childnav" v-show="a==4">
				<ul>
					<li v-for="(v,i) in nav3" @click="change2(i)" :class="{withe:i==c}">{{v.nav}}</li>
				</ul>
				<div v-for="(v,i) in nav3" v-show="i==c" class="childnavlist">
					<ul>
						<li v-for="(v,i) in v.list">{{v.cate}}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="foottab">
			<router-link to="boys">
				<p class="iconfont icon-home foottabicon"></p>
				<p class="foottabname">首页</p></router-link>
			<router-link to="cate">
				<p class="iconfont icon-tab_classification foottabicon"></p>
				<p class="foottabname">分类</p></router-link>
			<router-link to="guang">
				<p class="iconfont icon-changyongtubiao-mianxing- foottabicon"></p>
				<p class="foottabname">逛</p></router-link>
			<router-link to="buycar">
				<p class="iconfont icon-gouwuche foottabicon"></p>
				<p class="foottabname">购物车</p></router-link>
			<router-link to="my">
				<p class="iconfont icon-ren foottabicon"></p>
				<p class="foottabname">我的</p>
			</router-link>
		</div>
	</div>
</template>
	
<script>
	export default{
		data(){
			return{
				nav:[],
				nav1:[],
				nav2:[],
				nav3:[],
				a:1,
				c:0
			}
		},
		mounted(){
			var _this=this
			this.$http.get('./data/cate.json')
			.then((response)=>{
				this.nav=response.data.boys
				this.nav1=response.data.girls
				this.nav2=response.data.kids
				this.nav3=response.data.lifestyle
				console.log('这是数据')
				console.log(response)
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			// always executed
			}); 
		},
		methods: {
			change(b) {
				this.a=b
			},
			change2(b){
				this.c=b
			}
		},
	}
</script>

<style>
	.search{
		padding: .325rem .5rem;
		background-color:#f8f8f8 ;
		position: relative;
	}
	.searchicon{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 1.075rem;
		line-height: 2.15rem;
		color: #999;
	}
	.searchpleasehold{
		box-sizing: border-box;
		width: 100%;
		height: 1.5rem;
		line-height: 1.5rem;
		border: none;
		padding-left: 1.65rem;
		border-radius: 1.5rem;
		font-size: 13PX;
		background: #fff;
		color: #999;
	}
	.navtop{
		height: 1.75rem;
		border-bottom: 1px solid #e6e6e6;
	}
	.navtop li{
		float: left;
		display: block;
		box-sizing: border-box;
		float: left;
		height: 100%;
		padding: .5rem 0;
		width: 25%;
		text-align: center;
		color: #999;
	}
	.navtop li span{
		display: block;
		width: 100%;
		height: .75rem;
		line-height: .75rem;
		font-size: 15PX;
		border-right: 1px solid #e6e6e6;
	}
	.hidechildnav{
		
	}
	.childnav{
		height: 1070px;
		background: #f8f8f8;
		overflow: hidden;
		position: relative;
	}
	.childnav ul{
		float: left;
		box-sizing: border-box;
		width: 45%;
	}
	.childnav ul li{
		height: 2.225rem;
		line-height: 2.225rem;
		padding: 0 .8rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 15px;
	}
	.black{
		color:#000 !important;
	}
	.childnavlist{
		float: left;
		overflow-x: auto;
		box-sizing: border-box;
		background: #fff;
		width: 55%;
		height: 100%;
	}
	.childnavlist ul{
		width: 100%;
	}
	.childnavlist ul li{
		box-sizing: border-box;
		height: 2.225rem;
		line-height: 2.225rem;
		border-bottom: 1px solid #e6e6e6;
		padding-left: .5rem;
	}
	.withe{
		background-color: #fff;
	}
</style>
