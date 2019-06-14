import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [
      {
        name: "Toyota White Super",
        cost: 345,
        description: "Good car",
        src: "https://toyota-st.com/storage/lines/thumb_/thumb_29.jpg"
      },
      {
        name: "Audi Gray Super",
        cost: 1000,
        description: "The best choice for their price",
        src:
          "https://www.audi.ua/media/Theme_Menu_Model_Dropdown_Item_Image_Component/root-ua-master-model-modelMenu-editableItems-19294-dropdown-245633-image/dh-500-a0e9a6/0cd7d541/1526202402/audi-a7-menu.jpg"
      },
      {
        name: "Hammer",
        cost: 1455,
        description: "Its hammer. If you like it",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/2007_Hummer_H3_--_NHTSA.jpg"
      },
      {
        name: "Skoda Octavia",
        cost: 9999,
        description: "Skoda Octavia",
        src:
          "https://skodak2ngtools.blob.core.windows.net/images/Models/2018/130674608/Front.png"
      },
      {
        name: "VAZ-2103",
        cost: 3235,
        description: "Monster car!!",
        src: "https://www.kolesa.ru/uploads/2017/10/12-4-935x600.jpg"
      },
      {
        name: "Bugatti Vivo",
        cost: 10000,
        description: "Bugatti is very interesting",
        src:
          "https://img.drive.ru/i/0/5b838a33ec05c4f328000011.jpg"
      },
      {
        name: "Chevrolete Auto",
        cost: 1455,
        description: "Its chevrolete. If you like it",
        src:
          "http://www.autograd.odessa.ua/wp-content/uploads/2016/10/12CHAE10000N_LHD-344x200.png"
      },
    ],
    users: [
      { login: "u", password: "1", money: 10000 },
      { login: "user2", password: "123456", money: 52352 },
      { login: "user3", password: "123456", money: 4527 },
      { login: "user4", password: "123456", money: 12345 }
    ],
    user: {
      login: null,
      password: null,
      money: 0
    }
  },
  mutations: {
    noMoney(state,data) {
      alert(`${data.money} is not enough`);
    },
    addMoney(state, money){
      state.user.money += money;
    },
    changeMoney(state, money) {
      state.user.money = money;
    },
    successRent(state) {
      alert("Success rent car");
    },
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user.login = null;
      state.user.password = null
    },
    loginFailed(state, user) {
      alert(
        "User with this login and password doesnt exist. Enter correct credentials"
      );
    },
    addUser(state, user) {
      state.users.push(user);
    },
    userExist(state, user) {
      alert(`User with login ${user.login} already exists`);
    }
  },
  actions: {
    buyCar({ commit, rootGetters }, {car, period}) {
      return new Promise(resolve => {
        setTimeout(() => {
          let periodCost = period > 14 ? 0.5 * period : period;
          let money = rootGetters.getMoney
          console.log("My money", money, "Car cost: ", car.cost, periodCost);
          const restMoney = money - car.cost * periodCost;
          console.log("Rest", restMoney);
          if (restMoney >= 0) {
            commit("changeMoney", restMoney);
            commit("successRent", car);
            resolve("done");
          } else {
            commit("noMoney", { money });
            resolve("failed");
          }
        }, 500);
      });
    },
    logout({ commit, rootState }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("logout");
          resolve("done");
        }, 500);
      });
    },
    login({ commit, rootState }, { login, password }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const foundUser = rootState.users.find(
            u => u.login == login && u.password == password
          );
          if (foundUser) {
            commit("setUser", { login, password, money: foundUser.money });
            resolve("done");
          } else {
            commit("loginFailed", { login, password });
            resolve("failed");
          }
        }, 500);
      });
    },
    register({ commit, rootState }, { login, password }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const foundUser = rootState.users.find(
            u => u.login == login && u.password == password
          );
          if (!foundUser) {
            commit("addUser", { login, password, money: 1000 });
            resolve("done");
          } else {
            commit("userExist", { login, password });
            resolve("failed");
          }
        }, 500);
      });
    }
  },
  getters: {
    loggedInUser(state) {
      return state.user;
    },
    isAuthorized(state) {
      return !!state.user.login;
    },
    getMoney(state) {
      return state.user.money;
    },
    getCars(state) {
      return state.cars;
    }
  }
});
