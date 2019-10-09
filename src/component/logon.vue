<template>
	<div class="logonbox">
		<div class="logonbody">
			<div class="logon">
				<div class="logontop">
					<span class="iconfont icon-iconclick logongoback" @click="goback()"></span>
					<span class="logontit">注册</span>
				</div>
				<form action="#" class="logon-form">
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
						<input type="text" placeholder="请输入手机号" class="forminputphone" v-model="phone">
					</div>
					<div class="form-group verify">
						<label for="verify" class="iconfont icon-yanzheng fromverify"></label>
						<input type="text" class="forminputverify" placeholder="请输入验证码">
						<button :class="{getverify:true,gotverify:hei}" @click="getver()">{{verify}}&nbsp;{{time}}</button>
					</div>
					<div class="form-group possword">
						<label for="verify" class="iconfont icon-suo frompassword"></label>
						<input type="password" class="forminputpassword" placeholder="请输入密码" id="password">
						<span class="passwordicon" @click="changes()">
							<span class="iconfont icon-bukejian" v-show="true==show"></span>
							<span class="iconfont icon-kejian" v-show="false==show"></span>
						</span>
					</div>
					<div class="form-group invite">
						<label for="verify" class="iconfont icon-mn_tianjiahaoyou_fill frompassword"></label>
						<input type="text" class="forminputpassword" placeholder="好友潮口令(非必填)">
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
					<button class="logonbut">注册</button>
					<div class="protol">
						注册即表示您已阅读并同意
						<br>
						<a href="#">有货用户服务协议</a>
						<a href="#">有货隐私条款</a>
					</div>
					<div class="badphone" v-show="badphone">手机号输入有误</div>
					{{fn}}
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				show:true,
				phone:"",
				badphone:false,
				hei:false,
				verify:"获取验证码",
				time:""
			}
		},
		methods: {
			changes() {
				this.show=!this.show		
				let password = document.getElementById("password")
				if(password.type === "password"){
					password.type = "text"
				}else{
					password.type = "password"
				}
			},
			goback() {
				this.$router.go(-1)
			},
			getver(){
				var numz=/^1[35789]\d{9}$/; 
				if(numz.test(this.phone)==false){
					this.badphone=true
					setTimeout(()=>{
						this.badphone=false
					},1000)
				}else{
					this.verify="重新获取"
					clearInterval(sss)
				var n=60
				this.time=n
				var sss=setInterval(()=>{
					if(n>0){
						n--;
						this.time=n
					}else{
						this.time=''
						clearInterval(sss)
						this.verify="点击获取验证码"
					}
				},1000)
				}
			}
		},
		computed:{
			fn(){
				if(this.phone==""){
					this.hei=false
				}else{
					this.hei=true
				}
			}
		}
	}
</script>

<style>
	.logonbody{
		position: relative;
		width: 100%;
		font-size: 20px;
	}
	.logon{
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	}
	.logontop{
		width: 13rem;
		height: 1rem;
		margin-top: 1rem;
		color: #444;
	}
	.logongoback{
		width: 1.25rem;
		background-color: transparent;
		font-size: 1rem;
		overflow: hidden;
		padding: 0;
		text-align: center;
		transform: rotate(-180deg);
		float: left;
	}
	.logontit{
		width: 10rem;
		font-size: .75rem;
		text-align: center;
		display: inline-block;
	}
	.logon-form{
		margin-top: 2.25rem;
	}
	.form-group{
		border-bottom: 1px solid #e0e0e0;
		height: 1.5rem;
		margin-bottom: 1rem;
	}
	.formline{
		float: none;
		margin-right: .5rem;
		font-style: normal;
	}
	.formphone{
		margin-right: .75rem;
		font-size: .4rem;
		color: #444;
	}
	.fromverify,.frompassword{
		margin-right: .75rem;
		font-size:12px;
		color: #444;
	}
	.forminputphone,.forminputverify,.forminputpassword{
		border: none;
		font-size: .6rem;
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
		outline: none;
	}
	.gotverify{
		background-color: #444;
	}
	.passwordicon{
		width: .75rem;
		text-align: center;
		float: right;
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
	.logonbut{
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
	.protol{
		width: 100%;
		text-align: left;
		margin-top: .5rem;
		font-size: .4rem;
		color: #444;
	}
	.protol>a{
		font-size: .4rem;
		color: #c00;
		text-decoration: underline;
		margin: .25rem .25rem 0 0;
		display: inline-block;
	}
	.badphone{
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
</style>
