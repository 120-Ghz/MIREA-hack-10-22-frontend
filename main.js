function interpreter(lan) {
  const rusmonthes = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июлб",
    "Август",
    "Сенятбрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const engmonthes = [
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
  if (lan == "RUS") {
    return rusmonthes;
  } else if (lan == "ENG") {
    return engmonthes;
  }
}
const date = Vue.createApp({
  data() {
    return {
      data: {},
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      today: new Date().getDate(),
      dFirstMonth: "1",
      monthes: [],
      rusmonth: interpreter("RUS"),
      engmonth: interpreter("ENG"),
      day: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      date: new Date(),
      activeday: [
        new Date().getDate(),
        new Date().getMonth() + 1,
        new Date().getFullYear(),
      ],
      username: "Daddy",
    };
  },
  computed: {
    lectures() {
      return this.data["lectures"];
    },
    todaylectures() {
      const todaylectures = [];

      for (let lecture of this.lectures) {
        if (lecture["date"] == this.activeday.join(".")) {
          todaylectures.push(lecture);
        }
      }
      return todaylectures;
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
    checkToday(i) {
      return (
        i == this.date.getDate() &&
        this.engmonth[this.month] == this.engmonth[this.date.getMonth()] &&
        this.year == this.date.getFullYear()
      );
    },
    checkLectures(i) {
      let datecheck = `${i}.${this.month + 1}.${this.year}`;
      let flag = false;
      for (let lecture of this.lectures) {
        if (lecture["date"] == datecheck) {
          flag = true;
          break;
        }
      }
      return flag;
    },
    getLectures(day, month, year) {
      let datecheck = ``;
      for (let lecture of this.lectures) {
      }
    },
    refreshlectures(day, month, year) {
      console.log(this.activeday.join("."));
      this.activeday = [day, month, year];
    },
  },
  async created() {
    //const response = await fetch("https://api.npms.io/v2/search?q=vue");
    //const data = await response.json();
    let response =
      '{"lectures": [{"id": "52f4a23b-c2ed-46be-ac36-2298c2c83b56", "title": "Пределы", "description": ".", "courseId": "18bdcb99-6067-4162-b749-015fba841b2b", "date": "25.10.2022", "start": "17:36", "end": "22:48"},{"id": "52f4a23b-c2ed-46be-ac36-2298c2c83b56", "title": "Пределы", "description": ".", "courseId": "18bdcb99-6067-4162-b749-015fba841b2b", "date": "3.11.2022", "start": "17:36", "end": "22:48"},{"id": "52f4a23b-c2ed-46be-ac36-2298c2c83b56", "title": "Пределы", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "courseId": "18bdcb99-6067-4162-b749-015fba841b2b", "date": "29.10.2022", "start": "17:36", "end": "22:48"},{"id": "52f4a23b-c2ed-46be-ac36-2298c2c83b56", "title": "Катя sadddd ddddddd ddd dddd dddddddddddd", "description": "пиздецssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", "courseId": "18bdcb99-6067-4162-b749-015fba841b2b", "date": "23.10.2022", "start": "17:36", "end": "22:48"},{"id": "52f4a23b-c2ed-46be-ac36-2298c2c83b56", "title": "KATE", "description": "pizdez", "courseId": "18bdcb99-6067-4162-b749-015fba841b2b", "date": "23.10.2022", "start": "18:36", "end": "22:40"},{"id": "52f4a23b-c2ed-46be-ac36-2298c2c83b56", "title": "Пределы", "description": ".", "courseId": "18bdcb99-6067-4162-b749-015fba841b2b", "date": "25.1.2027", "start": "17:36", "end": "22:48"}], "courses": [{"courseId": "18bdcb99-6067-4162-b749-015fba841b2b", "coursename": "Линейная алгебра", "coursedescription": "Музыка"}]}';
    this.data = JSON.parse(response);
  },
});

date.mount("#dashboard");
