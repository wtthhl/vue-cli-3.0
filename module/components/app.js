var Home = require('./home/home.js')
var List = require('./list/list.js')
var Detail = require('./detail/detail.js')
var Login = require('./login/login.js')
var Dingdan = require('./dingdan/dingdan.js')
var Guide = require('./guide/guide.js')
// 注册组件
Vue.component('home',Home)
Vue.component('list',List)
Vue.component('detail',Detail)
Vue.component('login',Login)
Vue.component('dingdan',Dingdan)
Vue.component('guide',Guide)
// 创建vue实例化对象
var app = new Vue({
	el:"#ickt",
	data: {
		view:'home',
		//路由的参数数据
		route:[],
		query:'',
		searchValue:'',
		slideList: [
        {
            "clickUrl": "#",
            "desc": "nhwc",
            "image": "08.jpg"
        },
        {
            "clickUrl": "#",
            "desc": "hxrj",
            "image": "02.jpg"
        },
        {
            "clickUrl": "#",
            "desc": "rsdh",
            "image": "06.jpg"
        }
    ],
    currentIndex: 0,
    timer: ''
	},
	methods:{
		showSearchResult: function() {
		this.query = this.searchValue;
		this.searchValue = '',
		this.view = "list"
		},
		goback: function() {
			history.go(-1)
		} ,
		go: function() {
			this.timer = setInterval(this.autoPlay, 4000)
		},
		stop: function() {
			clearInterval(this.timer)
		},
		change: function(index) {
			this.currentIndex = index
		},
		autoPlay: function() {
			this.currentIndex++;
			if(this.currentIndex > this.slideList.length - 1){
				this.currentIndex = 0
				}
			}
		},
		mounted: function() {
			this.timer = setInterval(this.autoPlay, 4000)
		}     	
})
module.exports = app