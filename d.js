var g = new Vue ({
    el: '#game',
    data:{
        HPhore:100,
        HPmonster:100
    },
    methods:{
        attack: function(n){
            if(n==1){
                this.HPhore-=this.randomAttack(1,10);
                this.HPmonster-=this.randomAttack(1,15);
            }
            if(n==2){
                this.HPhore-=this.randomAttack(5,15);
                this.HPmonster-=this.randomAttack(10,20);
            }
            if(n==3){
                this.HPhore=100;
                this.HPmonster=100;
            }
        },
        randomAttack: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
    },

})