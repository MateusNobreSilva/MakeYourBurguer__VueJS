//const { default: Vue } = require("vue")

const MyNameApp = {
    data() {
        return {
            name: "Mateus",
            age: 23
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");