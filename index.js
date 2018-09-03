// 初始化实例
var app = new Vue({
    el:'#app',
    data:{
        list:[
            {
                id:1,
                name:'iphone 7',
                price:6188,
                count:1
            },
            {
                id:2,
                name:'ipad Pro',
                price:5188,
                count:1
            },
            {
                id:3,
                name:'MacBook Pro',
                price:21488,
                count:1
            }
        ]
    },
    computed:{
        totalPrice: function(){
            var total = 0;
            for(var i = 0; i< this.list.length; i++){
                var item = this.list[i];
                total += item.price * item.count;
            }
            return total
        }
    },
    methods:{
        // 减
        _handleReduce:function(index){
            // console.log('jian')
            if(this.list[index].count === 1) return;
            this.list[index].count --;
        },
        // 加
        _handleAdd:function(index){
            // console.log('jia')
            this.list[index].count ++;
        },
        // 移除
        _handleRemove:function(index){
            
            // console.log(index)
            this.list.splice(index,1)
        }

    }
})