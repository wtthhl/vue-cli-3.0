var app = require('../components/app.js')
var router = function() {
	var hash = location.hash;
	hash = hash.replace(/^#\/?/,'')
	hash = hash.split('/')
	//定义一个可以切换组件的映射规则
	var map = {
		list:true,
		home:true,
		detail:true,
		login:true,
		dingdan:true,
		guide:true
	}
	//渲染组件，就是切换app.view属性
	if(map[hash[0]]) {
		app.view = hash[0]
	} else {
		app.view = 'home'
	}
	app.route = hash.slice(1)
}


//当hash发生改变，监听事件
window.addEventListener('hashchange', router)
// window.addEventListener('load',router)
router();