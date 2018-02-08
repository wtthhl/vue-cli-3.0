var Util = require('../../utils/utils.js')
var List = Vue.extend({
	props:['route','searchQuery'],
	template:'#tpl_list',
	data: function(){
		return{
			orders:[
				{ id: 'price', text: '价格排序',},
				{ id: 'sales', text: '销量排序',},
				{ id: 'evaluate', text: '好评排序',},
				{ id: 'discount', text: '优惠排序',}
			],
			list:[],
			others:[],
			isshow:'price'
		}
	},
	mounted:function(){
		var me = this;
		Util.ajax("data/list.json?id="+ this.$parent.route[1],function(res){
			if(res && res.errno === 0){
				me.list = res.data.slice(0,3);
				me.others = res.data.slice(3);
			}
		})
	},
	computed:{
		listFilterResult: function() {
			// 在list中寻找，成员的title包含searchQuery数据的
			var result = [];
			var query11 = this.searchQuery;
			// 遍历list
			this.list.forEach(function(item, index) {
				// item代表每一个成员对象，判断其title属性
				if (item.title.indexOf(query11) >= 0) {
					// 存储成员
					result.push(item)
				}
			})
			// 最终将结果返回
			return result;
		}
	},
	methods:{
			showOthers: function() {
			this.list = this.list.concat(this.others);
			this.others = [];
		},
			listOrder: function(id) {
			// console.log(id)
			// 数组排序用sort方法
			this.isshow = id ;
			this.list.sort(function(a, b) {
				// 优惠特殊处理，优惠：原价减去现价
				if (id === 'discount') {
					
					return (b.originPrice - b.price) - (a.originPrice - a.price)
				}
				return b[id] - a[id]	
			})
		}
		// isshowClass:function(id){
		// 	console.log(id)
		// 	this.isshow = id ;
		// 	// index = isshow;
		// 	// console.log(isshow)
		// }
	}

})
module.exports = List