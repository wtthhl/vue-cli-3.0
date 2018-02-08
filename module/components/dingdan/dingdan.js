var Dingdan = Vue.extend({
	template:"#dingdan_tpl",
	methods:{
		goback: function(){
			history.go(-1)
		}
	}
})
module.exports = Dingdan