Vue.createApp({
    data:function(){ 
        return{
            resultNum: 0,
            num: '',
            notes:[],
            numtemp1:0,
            numtemp2:0,
            tempResult:0,
            operator:'+',
        };
    },
    methods:{
        Reset(){
            this.num = '';
            this.resultNum = 0;
            this.numtemp1 = 0;
            this.numtemp2 = 0;
            this.tempResult = 0;
            this.operator = '+';
        },
        number(event){
            if(this.operator === '='){
                this.resultNum = 0;
                this.tempResult = 0;
                this.numtemp1 = 0;
                this.numtemp2 = 0;
            }else;
            this.numtemp2 = this.numtemp2*10 + parseInt(event.target.value,10); // 每觸發一次增加位數
            // console.log(this.numtemp2);
            switch(this.operator){
                case '+':
                    this.tempResult = this.numtemp1 + this.numtemp2;
                    break;
                case '-':
                    this.tempResult = this.numtemp1 - this.numtemp2;
                    break;
                case '*':
                    this.tempResult = this.numtemp1 * this.numtemp2;
                    break;
                case '/':
                    this.tempResult = this.numtemp1 / this.numtemp2;
                    break;
                default:
                    break;
            };
            this.num+=`${event.target.value}`
        },
        PressOperator(event){
            if(this.operator === '='){
                this.numtemp2 = this.resultNum;
                this.num = `${this.resultNum}`
            }else{
                this.numtemp1 = this.tempResult; 
            };
            switch(event.target.value){
                case '+':
                    this.operator ='+';
                    this.num+='+';
                    break;
                case '-':
                    this.operator ='-';
                    this.num+='－';
                    break;
                case '*':
                    this.operator ='*';
                    this.num+='×';
                    break;
                case '/':
                    this.operator ='/';
                    this.num+='÷';
                    break;
            };
            this.numtemp2 = 0;
        },
        Equal(){
            this.num+='=';
            this.resultNum = this.tempResult;
            this.notes.push(`${this.num} ${this.resultNum}`); // array
            this.num = '';
            this.numtemp1 = 0;
            this.numtemp2 = 0;
            this.tempResult = 0;
            this.operator = '+';
        },
        Clear(){
            this.notes=[];
        },
    },
    mounted:function(){
    },
}).mount('#app');