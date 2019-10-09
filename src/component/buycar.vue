<template>
	<div class="buycarbox">
		<div class="producthead">
			<span class="iconfont icon-left goback" @click="goback()"></span>
			<p class="producttitle">购物车</p>
			<span class="navbut bianji">编辑</span>
		</div>
		<div class="buycarbody">
			<div class="cart-box">
				<div class="cart-nav">
					<div class="nav-item">
						<span>普通商品(3)</span>
					</div>
				</div>
				<div class="cart-content">
					<router-link to="/boys" class="tips">
						<div>购物满￥299.00免运费</div>
						<span class="tipstext">去凑单</span>
						<span class="iconfont icon-right tipsicon"></span>
					</router-link>
					<div class="normal-box">
						<div class="cart-brand">
							<div class="good-list">
								<div v-for="(v,i) in prolist" class="good-item">
									<div class="opt">
										<span class="iconfont icon-quanxuan1 quanxuan" @click="dj(v,i)" v-show="q[i].show==false"></span>
										<span class="iconfont icon-quanxuan quanxuan"  @click="dj2(v,i)" v-show="q[i].show==true"></span>
									</div>
									<div class="good-new-info">
										<router-link to="/product/1" class="img-a">
											<div class="buycarimg" v-for="(v,i) in v.pro">
												<img :src="v.proimg" alt="">
											</div>
										</router-link>
										<div class="buycarinfo">
											<div class="fixed-height">
												<div class="intro intro-name">
													<div class="name-row">
														<div class="name" v-for="(v,i) in v.pro">
															<router-link :to="/product/+i">{{v.producttitle}}</router-link>
														</div>
													</div>
													<p class="color-size-row" v-for="(v,i) in v.pro">
														<span>颜色:{{v.color}}</span>
														<span>尺码:{{v.size}}</span>
													</p>
												</div>
												<div v-for="(v,i) in v.pro" class="count">x{{v.num}}</div>
											</div>
											<div class="bbottom">
												<div class="buycarprice"v-for="(v,i) in v.pro" >
													<span>￥{{v.price}}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="cart-footer">
						<div class="check-all">
							<span class="iconfont icon-quanxuan1" v-show="qx==false" @click="qqx()"></span>
							<span class="iconfont icon-quanxuan" v-show="qx==true" @click="noqx()"></span>
							<p>全选</p>
						</div>
						<div></div>
						<div class="opts">
							<div class="total">
								<p class="price">总计：{{allprice}}.00</p>
								<p class="intro">不含运费</p>
							</div>
							<button class="btn-balance">结算</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				prolist:"",
				price:"",
				num:"",
				q:[
					{
						show:false
					},
					{
						show:false
					}
				],
				qx:false,
				zj:["",""],
				allprice:"0"
			}
		},
		mounted(){
			var _this=this
			this.$http.get('./data/buycar.json')
			.then((response)=>{
				console.log(response)
				this.prolist=response.data.buycar
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			// always executed
			}); 
		
		},
		methods: {
			goback() {
				this.$router.go(-1)
			},
			dj(v,i){
				this.q[i].show=true
				if(this.q[0].show==true&&this.q[1].show==true){
					this.qx=true
				}
				v.pro.forEach((v)=>{
					console.log()
					this.zj[v.index]=v.price*v.num
					this.allprice=this.zj[0]+this.zj[1]
				})
			},
			dj2(v,i){

				this.q[i].show=false
		
				if(this.q[0].show==false||this.q[1].show==false){
					this.qx=false
				}
				v.pro.forEach((v)=>{
					console.log()
					this.zj[v.index]=0
					this.allprice=this.zj[0]+this.zj[1]
				})
			},
			qqx(){
				this.q[0].show=true
				this.q[1].show=true
				this.qx=true
				this.allprice=6994
				
			},
			noqx(){
				this.q[0].show=false
				this.q[1].show=false
				this.qx=false
				this.allprice=0
			}
		},
	}
</script>

<style>
	.buycarbox{
		position: relative;
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
	.bianji{
		font-size: .8rem;
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
	.navbut{
		right: 0px;
		font-size: 12px;
		font-weight: bolder;
	}
	.cart-nav{
		display: flex;
		position: relative;
		color: #c6c6c6;
		border-bottom: 1px solid #e0e0e0;
		background: #fff;
	}
	.nav-item{
		color: #000000;
		padding: .8rem 0;
		height: .8rem;
		box-sizing: content-box;
		flex: 1;
		position: relative;
	}
	.nav-item>span{
		display: block;
		box-sizing: border-box;
		width: 100%;
		height: .7rem;
		line-height: .7rem;
		font-size: .7em;
		text-align: center;
	}
	.cart-content{
		display: block;
		margin-top: .5rem;
	}
	.tips{
		margin-top: -.5rem;
		min-height: .95rem;
		line-height: 1rem;
		font-size: .625rem;
		background: #ff7f81;
		color: #fff;
		padding: .3rem .55rem;
		display: block;
	}
	.tips>div{
		width: 11.25rem;
		float: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.tipstext{
		font-size: .625rem;
		width: 2.5rem;
		float: left;
		text-align: right;
		color: #fff;
	}
	.tipsicon{
		width: 1rem;
	}
	.cart-brand{
		margin-top: 0;
		background-color: #fff;
	}
	.good-item{
		display: flex;
		width: 100%;
		min-height: 6.15rem;
	}
	.opt{
		width: 2.5rem;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		justify-content: center;
	}	
	.quanxuan{
		font-size: .8rem;
	}
	.good-new-info{
		display: flex;
		width: 100%;
		padding: .5rem .75rem;
		-webkit-box-flex: 1;
		flex: 1;
		border-bottom: 1px solid #f0f0f0;
		padding-left: 0;
	}
	.buycarimg>img{
		width: 3.8rem;
		min-height: 5.1rem;
	}
	.buycarinfo{
		-webkit-box-flex: 1;
		flex: 1;
		margin-left: .8rem;
		padding-top: .5rem;
		position: relative;
	}
	.fixed-height{
		width: 100%;
		min-height: 2.5rem;
		display: flex;
	}
	.intro{
		width: 100%;
		-webkit-box-flex: 1;
		flex: 1;
	}
	.name{
		line-height: .5rem;
	}
	.name>a{
		font-size: .5rem;
	}
	.color-size-row{
		color: #b6b6b6;
		font-size: .5rem;
		margin-top: .5rem;
	}
	.buycarprice{
		font-size: .5rem;
		color: #d0253b;
		margin-top: .5rem;
	}
	.count{
		width: 1rem;
		text-align: right;
		color: #999;
		font-size: .5rem;
	}
	.cart-footer{
		z-index: 1;
		background-color: #fff;
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		height: 2.8rem;
		display: flex;
	}
	.check-all{
		width: 2rem;
		text-align: center;
		padding-top: .3rem;
	}
	.check-all>p{
		font-size: .65rem;
		color: #666;
	}
	.opts{
		    padding: .45rem;
			display: flex;
			justify-content: flex-end;
			flex: 1;
			text-align: right;
	}
	.total{
		padding-top: .275rem;
		flex: 1;
	}
	.price{
		color: #d0253b;
		font-size: .6rem;
	}
	.intro{
		color: #b6b6b6;
		font-size: .475rem
	}
	.btn-balance{
		background-color: #d1021c;
		display: block;
		width: 4rem;
		height: 2rem;
		border-radius: .125rem;
		color: #fff;
		margin-left: .35rem;
		margin-right: .35rem;
		border: none;
		outline: none;
	}
</style>
