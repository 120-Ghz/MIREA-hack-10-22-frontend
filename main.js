
const date= Vue.createApp({
    data(){
      return{
        month: new Date().getMonth(),    
        year: new Date().getFullYear(), 
        dFirstMonth: '1',
        day:["Mn", "Tu","We","Th","Fr","Sa", "Su"],
        monthes:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        date: new Date(),
        aaa:"sadas"
      }
    },
    computed: {
        dayChange(){
            if(this.dFirstMonth == 0){
                this.day = ["Su", "Mn", "Tu","We","Th","Fr","Sa"]
            } else {
                this.day = ["Mn", "Tu","We","Th","Fr","Sa", "Su"]
            }
        },
    },
    methods:{
        calendar(){
            var days = [];
            var week = 0;
            days[week] = [];
            var dlast = new Date(this.year, this.month + 1, 0).getDate();
            for (let i = 1; i <= dlast; i++) {
                if (new Date(this.year, this.month, i).getDay() != this.dFirstMonth) {
                    a = {
                        index:i,
                    };
                    days[week].push(a);
                } else {
                    week++;
                    days[week] = [];
                    a = {index:i};
                    days[week].push(a);
                }
            }
            if (days[0].length > 0) {
                for (let i = days[0].length; i < 7; i++) {
                    days[0].unshift('');
                }
            }
            this.dayChange;
            console.log(days)
            return days;
        },
        decrease(){
            this.month--;
            if (this.month < 0) {
                this.month = 12;
                this.month--;
                this.year--;
            }
        },
        increase(){
            this.month++;
            if (this.month > 11) {
                this.month = -1;
                this.month++;
                this.year++;
            }
        },
    }
  });
  
  date.mount("#calendar");