Vue.component("note",{
    props: ["not"],
    template: `<div class="main clearfix">
                    <div class="left fl">
                        <p>{{getTime}}</p>
                    </div>
                    <div class="right fl">
                        <h4>{{not.title}}</h4>
                        <textarea class="article" v-model="not.txt" @keyup="modify()"></textarea>
                        <div class="article-bottom clearfix">
                            <p class="number fl">{{not.txt.length}}字</p>
                            <div class="del fr" @click="del()">删</div>
                        </div>
                    </div>
                </div>`,
    methods: {
        del: function(){
            node.set.splice(this._uid-1,1);
            console.log(this);
            localStorage.setItem("all",JSON.stringify(node.set));
        },
        modify: function(){
            this.not.t = Date.parse(new Date());
            //var newi = node.set[this._uid-1];
            //node.set.splice(this._uid-1,1);
            //node.set.unshift(newi);
            localStorage.setItem("all",JSON.stringify(node.set));
        }
    },
    computed: {
        getTime: function(){
            return moment(this.not.t).fromNow();
        }
    }
})

var node = new Vue({
    el: "#app",
    data: {
        message: "",
        title: "新建笔记",
        number: "0",
        set: [
            {txt:"花有重开日，人无再少年",title:"慎",t: 1537787100000},
        ],
        newset: "",
    },
    mounted: function(){
//        console.log(localStorage.getItem("all"));
//        this.set.push(localStorage.getItem("all"));
//        localStorage.removeItem("all");
            this.set = JSON.parse(localStorage.getItem("all"));
    },
    methods: {
        add: function(event){
            var time = Date.parse(new Date());
            if(this.message && this.title){
                this.newset = {txt:this.message,title:this.title,n:this.number,t:time};
                this.set.unshift(this.newset);
            };
//            localStorage.setItem("all",this.set);
            console.log(this.set);
            localStorage.setItem("all",JSON.stringify(this.set));
        },
        remove: function(){
            localStorage.setItem("all",JSON.stringify([
                {txt:"花有重开日，人无再少年",title:"慎",n:"11",t: 1537787100000},
            ]));
        }
    }
})
autosize(document.querySelectorAll('textarea'));