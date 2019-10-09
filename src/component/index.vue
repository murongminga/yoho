<template>
	<div class="indexdiv">
		<div class="searchbox clearfix">
			<div class="searchbox-img" v-show="show==1">
			</div>
			<div class="searchbox-header clearfix">
				<div class="searchbox-no" v-show="show==2"  @click="nfoc($event)">取消</div>
				<div :class="{searchboxsreach:true,searchboxsearch2:wd}">
					<input type="text" placeholder="搜索" @focus="foc($event)" v-model="inp">
					<span class="iconfont icon-no" v-show="show==2" @click="ninp()"></span>
					<span class="iconfont icon-search"></span>
				</div>				
			</div>
		</div>
		<div class="listbox">
			<img src="../assets/images/bgimg.jpg" alt="">
			<div class="index-list">
				<router-link to="boys" class="index-boys">男生 BOYS</router-link>
				<router-link to="girls" class="index-girls">女生 GIRLS</router-link>
				<router-link to="kids" class="index-kids">潮童 KIDS</router-link>
				<router-link to="lifestyle" class="index-lifestyle">创意生活LIFTSTYLE</router-link>
			</div>			
		</div>
		<div class="index-footer">
			<p class="footertext">
				<router-link to="sign" class="index-sign">登录</router-link>
				<span class="index-line">|</span>
				<router-link to="logon" class="index-logon">注册</router-link>
				<span class="gobacktop" id="gotop">回到顶部&nbsp;<i class="iconfont icon-up"></i></span>
			</p>
						
			<div class="copymsg">CopyRight&copy;2007-2019 南京新与力文化传播有限公司</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				show:1,
				wd:false,
				inp:'',
			}
		},
		methods: {
			foc(a) {
				this.show=2;
				this.wd=true;
			},
			nfoc(a) {
				this.show=1;
				this.wd=false;
			},
			ninp(){
				this.inp=''
			}
		},
	}
	
</script>

<style scoped>
	.indexdiv{
		width: 100%;
	}
	.searchbox{
		box-sizing: border-box;
		padding: 0 .5rem;
		width: 100%;
		height: 2.4rem;
		line-height: 2.4rem;
	}
	.searchbox-img{
		float: left;
		width: 7.2rem;
		height: 2.4rem;
		background-image: url('../assets/images/sreachlogo.png');
		background-size:7rem 1.5rem ;
		background-repeat: no-repeat;
		background-position: 0 10px;
	}
	.searchbox-header{
		width: 100%;
		position: relative;
	}
	.searchbox-no{
		float: left;
		margin-right: .25rem;
		color: #999;
		font-size: .7rem;
	}
	.searchboxsreach{
		float: right;
		width: 38%;
		border: 1px solid #ccc;
		padding-right: 2rem;
		position: absolute;
		right: 0;
		top: .5rem;
		transition: width 0.4s;
	}
	.searchboxsearch2{
		width: 75%;
	}
	input[type='text']{
		outline: none;
		border: none;
		padding: .25rem;
		color: #999;
		font-size: .7rem;
		float: left;
		width: 96%;
	}
	.icon-no{
		display: block;
		position: absolute;
		top: .2rem;
		z-index: 1;
		width: 1rem;
		font-size: .1rem;
		line-height: 1rem;
		right: 1.5rem;
		color: #ccc;
	}
	.icon-search{
		display: block;
		position: absolute;
		top: .2rem;
		z-index: 1;
		width: 1rem;
		font-size: .7rem;
		line-height: 1rem;
		right: .5rem;
		color: #e6e6e6;
	}
	.listbox{
		width: 100%;
		position: relative;
		text-align: center;
	}
	.listbox img{
		width: 100%;
	}
	.index-list{
		position: absolute;
		top: 50%;
		width: 100%;
		margin-top: -7.5rem;
	}
	.index-list a{
		position: relative;
		display: block;
		margin: 0 auto 1rem;
		width: 10.8rem;
		border: .2rem solid #fff;
		background-color: #000;
		color: #fff;
		text-align: center;
		font-weight: 700;
		font-size: .8rem;
		line-height: 2.05rem;
	}
	.index-footer{
		font-size: .6rem;
		width: 100%;
	}
	.footertext{
		padding: 0 .6rem;
		height: 3rem;
		line-height: 3rem;
		position: relative;
	}
	.index-line{
		display: inline-block;
		margin:0 .75rem;
		color: #e0e0e0;
	}
	.index-logon,.index-sign{
		display: inline-block;
	}
	.gobacktop{
		display: inline-block;
		position: absolute;
		right: 1rem;
	}
	.icon-up{
		font-size: .3rem;
	}
	.copymsg{
		height:60px;;
		background-color: #eee;
		color: #666;
		text-align: center;
		line-height: 60px;
		font-size: .6rem;
	}
</style>
