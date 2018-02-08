var Login = Vue.extend({
	template:"#login_tpl",
	data: function() {
		return {
			ischoose1:true,
			ischoose2:false,
			num:30,
			timer:null
		}
	},
	
	methods:{
		goback:function(){
			history.go(-1)
		},
		showClass1:function(){
			if(this.ischoose1){
				this.ischoose1=this.ischoose1
			}else{
				this.ischoose1=!this.ischoose1
				this.ischoose2=!this.ischoose2
			}
		
			console.log(this.ischoose1)
		},
		showClass2: function() {
			if(this.ischoose2){
				this.ischoose2=this.ischoose2
			}else{
				this.ischoose2=!this.ischoose2
				this.ischoose1=!this.ischoose1
			}			
		},
		jiaoyan: function(){
			var me = this;
			me.num = 30
			timer = setInterval(function() {
				me.num--
				if(me.num < 0){
					me.num = 0
					clearInterval(timer)
				}
			}, 1000)
		}
	}
})
module.exports = Login