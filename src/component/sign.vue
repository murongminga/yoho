<template>
	<div class="signbox">
		<div class="signbanner">
			<img src="../assets/images/signbg.jpg" alt="">
			<div class="signtextbox">
				<div class="signtextboxicon">
					<span class="signgoback iconfont icon-iconclick" @click="goback()"></span>
					<router-link to="/logon" class="signtologon">注册</router-link>
				</div>
				<div class="signtextboxtext">
					Yoho!Family账号可登录Yoho!Buy有货 
					<i class="iconfont icon-wenhao"></i>
				</div>
			</div>
		</div>
		<form action="" class="signform">
			<div class="form-group mobile">
				<label for="mobile" class="iconfont icon-phone formphone"></label>
				<select name="" id="country" class="countrybut">
					<option value="1" selected="selected">中国</option>
					<option value="1">澳大利亚</option>
					<option value="1">韩国</option>
					<option value="1">加拿大</option>
					<option value="1">日本</option>
					<option value="1">美国</option>
					<option value="1">英国</option>
				</select>
				<i class="formline">|</i>
				<input type="text" placeholder="请输入手机号" class="forminputphone">
			</div>
			<div class="form-group verify">
				<label for="verify" class="iconfont icon-yanzheng fromverify"></label>
				<input type="text" class="forminputverify" placeholder="请输入验证码">
				<button class="getverify">获取验证码</button>
			</div>
			<div class="imgcheckbox">
				<div class="imgcheck">
					<div class="imgcheckhead">
						<span class="imgchecktit">请将下列图片点击翻转至正向朝上</span>
						<span class="imgcheckchange">换一批</span>
					</div>
					<div class="imgcheckimg">
						<ul class="imgcheckimgul">
							<li class="imgcheckimgli"></li>
							<li class="imgcheckimgli"></li>
							<li class="imgcheckimgli"></li>
							<li class="imgcheckimgli"></li>
						</ul>
					</div>
				</div>
			</div>
			<button class="signbut">登录</button>
			<div class="other-info">
				<a href="#" class="numsign">账号密码登录</a>
				<a href="#" class="forget">忘记密码？</a>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		methods: {
			goback() {
				this.$router.go(-1)
			}
		},
	}
</script>

<style>
	.signbox{
		position: relative;
		margin-right: auto;
		margin-left: auto;
		max-width: 16rem;
		width: 100%;	
		max-width: 18.75rem;
		
	}
	.signbanner{
		height: 6.35rem;
		overflow: hidden;
		position: relative;
	}
	.signbanner>img{
		position: absolute;
		top: 0;
		left: 0;
		width: 18.75rem;
		z-index: 1;
		display: block;
		margin: 0 auto;
		max-width: 100%;
		border: 0;
	}
	.signtextbox{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding-left: 1.875rem;
		padding-right: 1.875rem;
		z-index: 2;
		height: 100%;
		box-sizing: border-box;
	}
	.signtextboxicon{
		height: 1rem;
		margin-top: 1rem;
	}
	.signgoback{
		width: 1.25rem;
		float: left;
		background-color: transparent;
		color: #fff;
		font-size: 1.1rem;
		padding: 0;
		transform: rotateY(-180deg);
	}
	.signtologon{
		width: 2rem;
		height: 1rem;
		line-height: 1rem;
		border-radius: .625rem;
		background-color: transparent;
		color: #fff;
		border: 1px solid #fff;
		float: right;
		text-align: center;
		font-size: 12px;
	}
	.signtextboxtext{
		width: 100%;
		margin-top: 3.8rem;
		font-size: .55rem;
		color: #fffefe;
		position: absolute;
		bottom: .35rem;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		text-align: center;
	}
	.signform{
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		margin-top: 1.2rem;
	}
	.form-group{
		border-bottom: 1px solid #e0e0e0;
		height: 1.5rem;
	}
	.form-group:nth-child(1){
		margin-bottom: 1rem;
	}
	.formline{
		float: none;
		margin-right: .5rem;
		font-style: normal;
	}
	.formphone{
		margin-right: .75rem;
		font-size: .6rem;
		color: #444;
	}
	.forminputphone,.forminputverify{
		border: none;
		font-size: .7rem;
		outline: none;
	}
	.countrybut{
		width: 3rem;
		border: none;
		font-size: 14px;
	}
	.forminputphone{
		width: 6.5rem;
	}
	.getverify{
		padding: 0 .4rem;
		height: 1rem;
		line-height: 1rem;
		border-radius: .625rem;
		background-color: #b0b0b0;
		color: #fff;
		font-size: .55rem;
		float: right;
		margin-top: .4rem;
		border: none;
	}
	.imgcheckbox{
		margin-top: .9rem;
	}
	.imgcheck{
		background-color: #fff;
		margin-top: 0;
		margin-bottom: 0;
	}
	.imgcheckhead{
		font-size: .5rem;
		line-height: .875rem;
		text-align: left;
		margin-bottom: .75rem;
		color: #444;
	}
	.imgcheckchange{
		color: #d0021b;
		float: right;
	}
	.imgcheckimgul{
		display: flex;
		justify-content: space-between;
	}
	.imgcheckimgli{
		background-image: url('../assets/images/img-check.jpg');
		background-position: 0px 0px;
		background-color: #fff;
		border: 1px solid #e0e0e0;
		transform: scale(.91);
		background-size: 12rem 12rem;
		background-repeat: no-repeat;
		width: 3rem;
		height: 3rem;
	}
	.signbut{
		width: 100%;
		height: 1.75rem;
		border-radius: .1rem;
		background-color: #b0b0b0;
		margin-top: 1rem;
		font-size: .7rem;
		color: #fff;
		border: none;
		outline: none;
	}
	.other-info{
		width: 13rem;
		font-size: .6rem;
		line-height: 1.33;
		color: #444;
		margin-top: .75rem;
	}
	.numsign{
		float: left;
		width: 4rem;
	}
	.forget{
		float: right;
		width: 4rem;
		text-align: right;
	}
</style>
