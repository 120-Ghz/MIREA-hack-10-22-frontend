const date = Vue.createApp({
  data() {
    return {
      data: {},
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      today: new Date().getDate(),
      dFirstMonth: "1",
      day: ["Mn", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      monthes: [
        "Январь",
        "Февраль",
        "Март",
        "АПрель",
        "Май",
        "Июнь",
        "Июлб",
        "Август",
        "Сенятбрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      date: new Date(),
      username: "Daddy",
    };
  },
  computed: {
    lectures() {
      return this.data["lectures"];
    },
    courses() {
      return this.data["courses"];
    },
  },
  methods: {
    calendar() {
      var days = [];
      var week = 0;
      days[week] = [];
      var dlast = new Date(this.year, this.month + 1, 0).getDate();
      for (let i = 1; i <= dlast; i++) {
        if (new Date(this.year, this.month, i).getDay() != this.dFirstMonth) {
          a = {
            index: i,
            today: this.checkToday(i),
            haslectures: this.checkLectures(i),
          };
          days[week].push(a);
        } else {
          week++;
          days[week] = [];
          a = {
            index: i,
            today: this.checkToday(i),
            haslectures: this.checkLectures(i),
          };
          days[week].push(a);
        }
      }
      if (days[0].length > 0) {
        for (let i = days[0].length; i < 7; i++) {
          days[0].unshift("");
        }
      }
      //this.dayChange;
      //console.log(days)
      return days;
    },
    decrease() {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
    },
    increase() {
      this.month++;
      if (this.month > 11) {
        this.month = 0;
        this.year++;
      }
    },
    dayChange() {
      if (this.dFirstMonth == 0) {
        this.day = ["Su", "Mn", "Tu", "We", "Th", "Fr", "Sa"];
      } else {
        this.day = ["Mn", "Tu", "We", "Th", "Fr", "Sa", "Su"];
      }
    },
    checkToday(i) {
      let monthes = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return (
        i == this.date.getDate() &&
        monthes[this.month] == monthes[this.date.getMonth()] &&
        this.year == this.date.getFullYear()
      );
    },
    checkLectures(i) {
      let monthes = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let datecheck = `${this.year} ${monthes[this.month]} ${i}`;
      let flag = false;
      for (let lecture of this.lectures) {
        if (lecture["date"] == datecheck) {
          flag = true;
          break;
        }
      }
      console.log(flag);
      return flag;
    },
  },
  async created() {
    //const response = await fetch("https://api.npms.io/v2/search?q=vue");
    //const data = await response.json();
    let response =
      '{"lectures": [{"date": "2022 Nov 1","id": "String","name": "String","description": "String","courseId": "String"},{"date": "2022 Nov 11","id": "String","name": "String","description": "String","courseId": "String"},{"date": "2022 Nov 2","id": "String","name": "String","description": "String","courseId": "String"},{"date": "2022 Nov 3","id": "String","name": "String","description": "String","courseId": "String"}],"courses": [{"courseId": "String","coursename": "String","coursedescription": "String"},{"courseId": "String","coursename": "String","coursedescription": "String"},{"courseId": "String","coursename": "String","coursedescription": "String"}]}';
    this.data = JSON.parse(response);
  },
});

date.mount("#dashboard");
