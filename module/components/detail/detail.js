var Util = require('../../utils/utils.js')
var Detail = Vue.extend({
	template:'#tpl_detail',
	data: function() {
		return {
			data: []
		}
	},

	//当组件创建完成请求数据
	mounted: function() {
		var me = this;
		var a = this.$parent.route[0];
		Util.ajax("data/product.json?id=" + a, function(res){
			// console.log(res.data.id)
			if(res && res.errno === 0){
				me.data = res.data[a-1]
				// console.log(me.data)
			}
		})
	}
})
module.exports = Detail