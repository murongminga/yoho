import VueRouter from 'vue-router'
import index from '../../component/index.vue'
import boys from '../../component/boys.vue'
import cate from '../../component/cate.vue'
import product from '../../component/product.vue'
import sign from '../../component/sign.vue'
import logon from '../../component/logon.vue'
import my from '../../component/my.vue'
import buycar from '../../component/buycar.vue'
export default new VueRouter({
	routes:[
		{
			path:'/',component:index
		},
		{
			path:'/boys',component:boys
		},
		{
			path:'/cate',component:cate
		},
		{
			path:'/product/:m/:n',component:product
		},
		{
			path:'/sign',component:sign
		},
		{
			path:'/logon',component:logon
		},
		{
			path:'/my',component:my
		},
		{
			path:'/buycar',component:buycar
		}
	],
	scrollBehavior (to,from,savedPosition){
		return {x:0,y:0}
	}
})