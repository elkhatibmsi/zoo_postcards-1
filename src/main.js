import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            bgImage: "default"
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

createApp(App).mount('#app')
const app = createApp('#app')
app.use(store)

store.commit('increment')
console.log(store.state.count)
