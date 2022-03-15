import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
          bgImage: 'image'

      }
    },
    mutations: {
 
    }
  })

createApp(App).mount('#app')
const app = createApp('#app')
app.use(store)

